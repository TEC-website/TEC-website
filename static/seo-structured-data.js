function appendStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "This Excellent Church",
        "url": "https://thisexcellentchurch.org",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "13 Otunba Toyin Abass Avenue, Off Prince Adesoji Ajose Street, New Road, Ogudu GRA 2",
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
        "description": "We are an evangelical, reformed and charismatic church in Lagos, Nigeria that affirms that salvation is by grace alone, through faith alone, in Christ alone, as revealed by scripture alone to the glory of God alone.",
        "email": "support@thisexcellentchurch.org",
        "logo": "https://thisexcellentchurch.org/static/assets/logo.png",
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

appendStructuredData();