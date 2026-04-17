export interface LocationData {
    slug: string;
    name: string;
    region: string;
    h1Prefix: string;
    h1Highlight: string;
    h1Suffix: string;
    subtitle: string;
}



// Generate 50 top localities across Delhi NCR for Hyper-Local SEO
export const locations: LocationData[] = [
    // Gurgaon Hubs
    { name: "DLF Cybercity", region: "Gurgaon" },
    { name: "Golf Course Road", region: "Gurgaon" },
    { name: "DLF Phase 1", region: "Gurgaon" },
    { name: "DLF Phase 2", region: "Gurgaon" },
    { name: "DLF Phase 3", region: "Gurgaon" },
    { name: "DLF Phase 4", region: "Gurgaon" },
    { name: "DLF Phase 5", region: "Gurgaon" },
    { name: "Sushant Lok", region: "Gurgaon" },
    { name: "Sohna Road", region: "Gurgaon" },
    { name: "MG Road", region: "Gurgaon" },
    { name: "Sector 29", region: "Gurgaon" },
    { name: "Udyog Vihar", region: "Gurgaon" },
    { name: "South City 1", region: "Gurgaon" },
    { name: "South City 2", region: "Gurgaon" },
    { name: "Nirvana Country", region: "Gurgaon" },
    { name: "Palam Vihar", region: "Gurgaon" },
    { name: "Golf Course Extension", region: "Gurgaon" },

    // South Delhi Premium
    { name: "South Delhi", region: "Delhi" },
    { name: "Greater Kailash", region: "Delhi" },
    { name: "South Extension", region: "Delhi" },
    { name: "Hauz Khas", region: "Delhi" },
    { name: "Vasant Vihar", region: "Delhi" },
    { name: "Defence Colony", region: "Delhi" },
    { name: "Green Park", region: "Delhi" },
    { name: "Saket", region: "Delhi" },
    { name: "Vasant Kunj", region: "Delhi" },
    { name: "Chanakyapuri", region: "Delhi" },
    { name: "Lajpat Nagar", region: "Delhi" },
    { name: "Malviya Nagar", region: "Delhi" },
    { name: "Safdarjung", region: "Delhi" },
    { name: "Panchsheel Park", region: "Delhi" },
    { name: "New Friends Colony", region: "Delhi" },
    { name: "Kalkaji", region: "Delhi" },

    // Core / North / West Delhi
    { name: "Connaught Place", region: "Delhi" },
    { name: "Dwarka", region: "Delhi" },
    { name: "Rohini", region: "Delhi" },
    { name: "Janakpuri", region: "Delhi" },
    { name: "Pitampura", region: "Delhi" },
    { name: "Rajouri Garden", region: "Delhi" },
    { name: "Punjabi Bagh", region: "Delhi" },

    // Noida & Ghaziabad
    { name: "Noida Sector 15", region: "Noida" },
    { name: "Noida Sector 18", region: "Noida" },
    { name: "Noida Sector 62", region: "Noida" },
    { name: "Noida Sector 137", region: "Noida" },
    { name: "Indirapuram", region: "Ghaziabad" },
    { name: "Vaishali", region: "Ghaziabad" },
    { name: "Vasundhara", region: "Ghaziabad" },
    
    // Faridabad
    { name: "Faridabad Sector 15", region: "Faridabad" },
    { name: "Surajkund", region: "Faridabad" },
    { name: "Green Field Colony", region: "Faridabad" }
].map(loc => {
    // Automatically construct slugs and SEO data for each
    const slug = loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return {
        slug,
        name: loc.name,
        region: loc.region,
        h1Prefix: "ONE Hand Labs:",
        h1Highlight: "Medical Marketing &",
        h1Suffix: `Software Agency in ${loc.name}`,
        subtitle: `High-Performance Software Development & Medical Marketing in ${loc.name}. We engineer healthcare market dominance through precise code and data-driven growth.`
    };
});
