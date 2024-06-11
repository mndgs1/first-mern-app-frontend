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

interface ServicesSection {
    title: string;
    subtitle: string;
    servicesItems: ServiceItem[];
}

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
    services: ServicesSection;
    aboutUs: AboutUsSection;
}

interface TeamMember {
    name: string;
    role: string;
    description: string;
    avatar: string;
}

interface TeamSection {
    title: string;
    description: string[];
    team: TeamMember[];
}

interface AboutUsSection {
    title: string;
    description: string[];
    teamSection: TeamSection;
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

interface SectionProps {
    id: string;
}

interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    roles: string[];
    active: boolean;
    _id: string;
}
interface Note {
    id: string;
    user: string;
    title: string;
    text: string;
    client: string;
    completed: boolean;
    createdAt: string;
    updatedAt: string;
    ticket: string;
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
    ServicesSection,
    TeamMember,
    AboutUsSection,
    TeamSection,
    SectionProps,
    User,
    Note,
};
