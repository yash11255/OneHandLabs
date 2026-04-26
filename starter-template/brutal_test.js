import http from 'k6/http';
import { check } from 'k6';

export const options = {
  scenarios: {
    brute_force: {
      executor: 'constant-arrival-rate',
      rate: 1000, // 1000 requests per second
      timeUnit: '1s',
      duration: '2m',
      preAllocatedVUs: 100,
      maxVUs: 1000,
    },
  },
  thresholds: {
    http_req_failed: ['rate>0.1'], // We expect it to fail
  },
};

export default function () {
  // Use a random string to bypass any server-side caching
  const randomBypass = Math.random().toString(36).substring(7);
  
  const responses = http.batch([
    ['GET', `https://peepstruck.com/?cache_bust=${randomBypass}`],
    ['GET', `https://peepstruck.com/?s=${randomBypass}`], // Heavy DB query
    ['POST', `https://peepstruck.com/wp-admin/admin-ajax.php`, { action: 'non_existent' }] // Hits PHP directly
  ]);

  check(responses[0], { 'is status 200': (r) => r.status === 200 });
}
