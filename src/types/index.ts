interface Link {
    text: string;
    href: string;
}

interface HeroBackgroundImage {
    src: string;
    alt: string;
}

interface HeroSection {
    title: string;
    subtitle: string;
    buttons: Link[];
    backgroundImage: HeroBackgroundImage;
}

interface ServiceSection {}

interface ServiceItem {
    title: string;
    description: string;
    icon: string;
}

interface TestimonialItem {
    quote: string;
    author: string;
}

interface BlogPreviewItem {
    title: string;
    summary: string;
    link: string;
    img: {
        src: string;
        alt: string;
    };
}

interface ContactInfo {
    title: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    formLink: string;
}

interface HomepageSections {
    hero: HeroSection;
    service: ServiceItem[];
}

interface HomepageContent {
    sections: HomepageSections;
    testimonials: TestimonialItem[];
    blogPreviews: BlogPreviewItem[];
    contact: ContactInfo;
}

interface HeaderContent {
    logo: string;
    navLinks: Link[];
    additionalLinks: Link[] | [];
}

interface Content {
    header: HeaderContent;
    homepage: HomepageContent;
}

export type {
    Content,
    HeaderContent,
    HomepageContent,
    ContactInfo,
    BlogPreviewItem,
    TestimonialItem,
    ServiceItem,
    HeroSection,
};
