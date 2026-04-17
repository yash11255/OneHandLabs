import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onehandlabs.in';

    // Core Pages
    const corePages = [
        '',
        '/services',
        '/work',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Location Pages (50+)
    const locationPages = locations.map((loc) => ({
        url: `${baseUrl}/locations/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...corePages, ...locationPages];
}
