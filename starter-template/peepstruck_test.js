import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // Warm up
    { duration: '1m', target: 100 },  // Heavy load
    { duration: '30s', target: 250 }, // Breaking point
  ],
};

export default function () {
  // Homepage hit
  let res = http.get('https://peepstruck.com/');
  check(res, { 'status is 200': (r) => r.status === 200 });

  sleep(1);

  // Search hit (Database stress)
  let searchVal = Math.random().toString(36).substring(7);
  http.get('https://peepstruck.com/?s=' + searchVal);
  
  sleep(1);
}
