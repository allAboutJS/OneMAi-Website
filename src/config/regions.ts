export type Region = 'EU' | 'NG' | 'GLOBAL';

export interface Testimonial {
    img: string;
    title: string;
    role: string;
    quote: string;
    detail: string;
}

export interface RegionData {
    region: Region;
    domain: string;
    name: string;
    contactEmail: string;
    whatsappNumber: string;
    whatsappLink: string;
    socialLinks: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        twitter?: string;
        telegram?: string;
    };
    heroTitle: string;
    heroSubtitle: string;
    testimonials: Testimonial[];
}

import indian3Img from "../assets/images/indian-3.jpg";
import sarah from "../assets/images/sarah.jpg";
import santosImg from "../assets/images/santos.jpg";

export const REGIONS: Record<Region, RegionData> = {
    EU: {
        region: 'EU',
        domain: '.eu',
        name: 'Europe',
        contactEmail: 'hello@joinonemai.com',
        whatsappNumber: '+351 910 548 549',
        whatsappLink: 'https://wa.me/351910548549',
        socialLinks: {
            facebook: 'https://web.facebook.com/joinonemai',
            instagram: 'https://www.instagram.com/joinonemai',
            linkedin: 'https://www.linkedin.com/company/joinonemai/',
            telegram: 'https://t.me/joinonemai',
        },
        heroTitle: 'Community Financing for a Better Future',
        heroSubtitle: 'Build Wealth with your community',
        testimonials: [
            {
                img: indian3Img,
                title: "Arjun's Story",
                role: "Small Business Owner",
                quote: `"OneMAI helped me secure interest-free financing for my small business at Martim Moniz. The community support grew, and the transparent system gave me peace of mind."`,
                detail: "",
            },
            {
                img: sarah,
                title: "Sarah's Journey",
                role: "Community Leader",
                quote: `" Traditional savings groups had always been challenging to manage. With OneMAI, everything became automated and secure. Our community grew stronger."`,
                detail: "",
            },
            {
                img: santosImg,
                title: "Santos's Success",
                role: "Student",
                quote: `"Before OneMAI, I struggled with traditional rotating savings groups. Now, I can easily track contributions and access funds when needed."`,
                detail: "Funded education through community support",
            },
        ],
    },
    NG: {
        region: 'NG',
        domain: '.ng',
        name: 'Nigeria',
        contactEmail: 'ng@joinonemai.com',
        whatsappNumber: '+234 123 456 7890',
        whatsappLink: 'https://wa.me/2341234567890',
        socialLinks: {
            facebook: 'https://web.facebook.com/joinonemai',
            instagram: 'https://www.instagram.com/joinonemai',
            linkedin: 'https://www.linkedin.com/company/joinonemai/',
            telegram: 'https://t.me/joinonemai',
        },
        heroTitle: "Community Financing for Nigeria's Future",
        heroSubtitle: 'Build Wealth with your community in Nigeria',
        testimonials: [
            {
                img: indian3Img,
                title: "Chidi's Story",
                role: "Trader in Lagos",
                quote: `"OneMAI has transformed how we do Ajo in our market. It's secure, transparent, and we don't have to worry about anyone running away with our money."`,
                detail: "",
            },
            {
                img: sarah,
                title: "Amaka's Journey",
                role: "Micro-entrepreneur",
                quote: `"Raising capital for my business in Abuja used to be impossible. Through my OneMAI circle, I got the funds I needed without interest."`,
                detail: "",
            },
            {
                img: santosImg,
                title: "Tunde's Success",
                role: "Tech Professional",
                quote: `"I used OneMAI to save with my friends for a professional certification. The platform made it so easy to manage our contributions."`,
                detail: "Achieved career goals through group saving",
            },
        ],
    },
    GLOBAL: {
        region: 'GLOBAL',
        domain: '.com',
        name: 'Global',
        contactEmail: 'hello@joinonemai.com',
        whatsappNumber: '+351 910 548 549',
        whatsappLink: 'https://wa.me/351910548549',
        socialLinks: {
            facebook: 'https://web.facebook.com/joinonemai',
            instagram: 'https://www.instagram.com/joinonemai',
            linkedin: 'https://www.linkedin.com/company/joinonemai/',
            telegram: 'https://t.me/joinonemai',
        },
        heroTitle: 'Community Financing for a Better Future',
        heroSubtitle: 'Build Wealth with your community',
        testimonials: [
            {
                img: indian3Img,
                title: "Arjun's Story",
                role: "Small Business Owner",
                quote: `"OneMAI helped me secure interest-free financing for my small business. The community support grew, and the transparent system gave me peace of mind."`,
                detail: "",
            },
            {
                img: sarah,
                title: "Sarah's Journey",
                role: "Community Leader",
                quote: `" Traditional savings groups had always been challenging to manage. With OneMAI, everything became automated and secure. Our community grew stronger."`,
                detail: "",
            },
            {
                img: santosImg,
                title: "Santos's Success",
                role: "Student",
                quote: `"Before OneMAI, I struggled with traditional rotating savings groups. Now, I can easily track contributions and access funds when needed."`,
                detail: "Funded education through community support",
            },
        ],
    },
};
