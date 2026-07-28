import { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://onehandlabs.in';

    // Core Pages
    const corePages = [
        '',
        '/about',
        '/services',
        '/services/hospital-seo-gurgaon',
        '/services/hospital-seo-delhi',
        '/products',
        '/work',
        '/blog',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // CRM / HRMS / Payroll product articles — linked from the blog index
    const productBlogPages = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    // Client case studies — real portfolio work, linked from /work
    const caseStudyPages = [
        '/blog/imedi-digital-health-ecosystem',
        '/blog/abcd-health-obesity-management',
        '/blog/dr-ashish-kalla-regenerative-medicine',
        '/blog/medikold-pharma-platform',
        '/blog/cure-stone-urology-gurgaon',
        '/blog/dr-deepanshu-gupta-urologist-gurgaon',
        '/blog/dr-anshul-goel-orthopedic-spine-surgeon',
        '/blog/healthcare-seo-india',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    // Dynamic Location Pages (50+)
    const locationPages = locations.map((loc) => ({
        url: `${baseUrl}/locations/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...corePages, ...productBlogPages, ...caseStudyPages, ...locationPages];
}
