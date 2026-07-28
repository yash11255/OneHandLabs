type ArticleSchemaProps = {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    breadcrumbLabel: string;
};

export default function ArticleSchema({
    headline,
    description,
    url,
    datePublished,
    breadcrumbLabel,
}: ArticleSchemaProps) {
    const isoDate = new Date(datePublished).toISOString();

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        url,
        datePublished: isoDate,
        dateModified: isoDate,
        author: {
            "@type": "Organization",
            name: "ONE Hand Labs",
            url: "https://onehandlabs.in",
        },
        publisher: {
            "@type": "Organization",
            name: "ONE Hand Labs",
            logo: {
                "@type": "ImageObject",
                url: "https://onehandlabs.in/android-chrome-512x512.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://onehandlabs.in",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://onehandlabs.in/blog",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: breadcrumbLabel,
                item: url,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
