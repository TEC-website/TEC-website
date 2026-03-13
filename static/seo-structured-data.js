function appendStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "This Excellent Church",
        "url": "https://thisexcellentchurch.org",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "21c Otunba Toyin Abass Avenue, Off Prince Adesoji Ajose Street, New Road, Ogudu GRA 2",
            "addressLocality": "Ogudu GRA 2",
            "addressRegion": "Lagos",
            "postalCode": "100242",
            "addressCountry": "NG"
        },
        "areaServed": {
            "@type": "Place",
            "address": "Lagos, Nigeria"
        },
        "foundingDate": "2022",
        "foundingLocation": {
            "@type": "Place",
            "address": "Lagos, Nigeria"
        },
        "keywords": "Evangelical, Christian, Charismatic, Reformed, Church, Lagos, Nigeria",
        "knowsAbout": "Reformation, Charismatic, Evangelical, Christian, Church, Lagos, Nigeria",
        "legalName": "Phos Anthropos",
        "slogan": "TEC",
        "description": "Our excellence is of God, not ourselves. We affirm the Apostolic doctrines of the Protestant Reformation.",
        "email": "support@thisexcellentchurch.org",
        "logo": "https://thisexcellentchurch.org/static/assets/logo.png",
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

appendStructuredData();