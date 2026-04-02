export type Region = 'EU' | 'NG' | 'GLOBAL';

export interface Testimonial {
    img: string;
    title: string;
    role: string;
    quote: string;
    detail: string;
}

export type QA = {
    id: string;
    question: string;
    answer: string;
};

export interface HowItWorksStep {
    title: string;
    text: string;
}

export interface HowItWorksContent {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitle: string;
    steps: HowItWorksStep[];
    responsibilities: {
        title: string;
        items: string[];
    };
    disputes: {
        title: string;
        items: string[];
    };
}

export interface BenefitPoint {
    title: string;
    text: string;
}

export interface BenefitCategory {
    title: string;
    items: BenefitPoint[];
}

export interface BenefitsContent {
    heroTitle: string;
    heroSubtitle: string;
    sectionTitle: string;
    userBenefits: BenefitCategory;
    orgBenefits: BenefitCategory;
    safetyPoints: string[];
}

export interface AboutContent {
    heroTitle: string;
    heroSubtitle: string;
    storyTitle: string;
    storyParagraphs: string[];
    facilitationTitle: string;
    facilitationSubtitle: string;
    facilitationItems: string[];
    missionTitle: string;
    missionText: string;
    valuesTitle: string;
    valuesList: { label: string; text: string }[];
    ctaTitle: string;
    ctaText: string;
}

export interface HomeContent {
    howItWorksSubtitle: string;
    howItWorksSteps: {
        step: string;
        title: string;
        description: string;
        points: string[];
    }[];
    financialHome: {
        title: string;
        subtitle: string;
        buttonText: string;
    };
    testimonialsText: {
        title: string;
        subtitle: string;
    };
    partnersTitle: string;
    poweredByTitle: string;
    poweredBySubtitle: string;
    trustedAnchorsCard: {
        title: string;
        readyText: string;
        buttonText: string;
    };
    newsletter: {
        title: string;
        placeholder: string;
        buttonText: string;
    };
    faq: {
        title: string;
        subtitle: string;
        buttonText: string;
    };
    authModal: {
        title: string;
        subtitle: string;
        userAccount: string;
        affiliateAccount: string;
        footer: string;
    };
    socialPopup: {
        title: string;
        closeButton: string;
    };
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
    faqHeroTitle: string;
    faqHeroSubtitle: string;
    faqs: QA[];
    howItWorks: HowItWorksContent;
    benefits: BenefitsContent;
    about: AboutContent;
    home: HomeContent;
    ctaTitle: string;
    ctaText: string;
    testimonials: Testimonial[];
    images: {
        hero: string;
        communityJoin: string;
        communityParams: string;
        communityFunds: string;
        financialHome: string;
        trustedAnchors: string;
        aboutHero: string;
        benefitsHero: string;
        benefitsIllustration: string;
        howItWorksHero: string;
    };
    footerOperatorInfo?: string;
    copyrightName?: string;
    brandName?: string;
    footerDescription?: string;
}

import indian3Img from "../assets/images/indian-3.jpg";
import sarah from "../assets/images/sarah.jpg";
import santosImg from "../assets/images/santos.jpg";
import chidi from "../assets/images/chidi.png";
import amaka from "../assets/images/amaka.png";
import tunde from "../assets/images/tunde.png";

// Default images for GLOBAL/EU
import contentImg from "@/assets/images/content.png";
import groupImg from "@/assets/images/groups.png";
import receiveFundImg from "@/assets/images/receive-fund.jpeg";
import createGroupImg from "@/assets/images/create-group.png";
import communityHandsImg from "@/assets/images/community-hands-stacked.png";
import diverseCommunityImg from "@/assets/images/diverse-community-selfie.png";
import phoneImage from "@/assets/images/phone-image.png";
import benefitsHeroImg from "@/assets/images/benefits-hero.png";
import communityIllustration from "@/assets/images/community.png";
import howItWorksHeroImg from "@/assets/images/users.avif";

// Localized images for Nigeria
import nigerianHero from "../assets/images/nigerian-festive-hero.png";
import nigerianCommunity from "../assets/images/nigerian-community.jpeg";
import nigerianHands from "../assets/images/nigerian-hands.png";
import nigerianBenefitsHero from "../assets/images/nigerian-benefits-hero.png";
import nigerianBenefitsIllustration from "../assets/images/nigerian-benefits-illustration.png";
import nigerianHowItWorksHero from "../assets/images/nigerian-howitworks-hero.png";


export const REGIONS: Record<Region, RegionData> = {
    EU: {
        region: 'EU',
        ctaTitle: 'Join Us',
        ctaText: 'You don’t have to do it alone. Coordinate money with people you trust in a clear and secure way.',
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
        heroTitle: 'Community Financing for a Better Future in Europe',
        heroSubtitle: 'Build Wealth with your community',
        faqHeroTitle: 'Frequently Asked Questions (Europe)',
        faqHeroSubtitle: 'Managing community finance securely in the European landscape.',
        faqs: [
            {
                id: 'eu-1',
                question: 'How is OneMAI helpful for expats in Europe?',
                answer: 'OneMAI provides a structured way for expats to build financial resilience through community support, mirroring trusted informal practices with modern legal and technical safeguards.'
            },
            {
                id: 'eu-2',
                question: 'Is community financing legal in Europe?',
                answer: 'Yes, OneMAI works with regulated financial partners to ensure all transactions are compliant with European financial regulations.'
            },
            {
                id: 'eu-3',
                question: 'Are there any fees for using OneMAI?',
                answer: 'OneMAI charges a small, transparent platform fee to cover security, processing, and maintenance. There are no hidden interest rates.'
            },
            {
                id: 'eu-4',
                question: 'Is my personal data protected?',
                answer: 'Absolutely. We are fully GDPR compliant. Your data is encrypted and used solely for providing our services and ensuring platform security.'
            }
        ],
        howItWorks: {
            heroTitle: 'How OneMAI Works',
            heroSubtitle: 'Step-by-step to group savings, transparent coordination, and secure payouts in Europe.',
            sectionTitle: 'A Seamless Experience — Driven by Trust',
            steps: [
                {
                    title: '1) Verify & Set Up',
                    text: 'Create an account and complete KYC. This unlocks group participation and helps prevent fraud.'
                },
                {
                    title: '2) Join or Create a Group',
                    text: 'Groups define members, fixed contribution amount, payout order, start/end dates, and default rules.'
                },
                {
                    title: '3) Automate Contributions and Payout',
                    text: 'Payments run on schedule through approved processors. Rotation payouts follow the agreed order.'
                }
            ],
            responsibilities: {
                title: 'Responsibilities',
                items: [
                    'Admins: set fair rules, monitor payments, coordinate, and mediate issues.',
                    'Members: pay on time, respect payout order, and communicate early if issues arise.'
                ]
            },
            disputes: {
                title: 'Defaults & Disputes',
                items: [
                    'Delays trigger reminders; repeated defaults can pause or reorder payouts and restrict access.',
                    'Resolve in-group first → escalate to admin → escalate to OneMAI with logs for mediation.'
                ]
            }
        },
        benefits: {
            heroTitle: 'Benefits',
            heroSubtitle: 'Unlock collective financial power and build a stronger future with OneMAI in Europe.',
            sectionTitle: 'A Trusted Tradition - Strengthened by Technology',
            userBenefits: {
                title: 'For Users',
                items: [
                    { title: 'Access to Zero-interest Financing', text: 'Eliminate traditional loan burdens with interest-free financial solutions.' },
                    { title: 'Built for Trust and Transparency', text: 'Every contribution and transfer is visible, traceable, and protected by modern security standards.' },
                    { title: 'Financial Literacy Tools', text: 'Access educational resources and tools for better financial management.' },
                    { title: 'Community Support', text: 'Join a network of like-minded individuals working towards financial goals.' }
                ]
            },
            orgBenefits: {
                title: 'For Companies & Organizations',
                items: [
                    { title: 'Employee Financial Welfare', text: 'Support your employees\' financial well-being with innovative solutions.' },
                    { title: 'Improved Retention', text: 'Enhance employee loyalty through financial support programs.' },
                    { title: 'Enhanced Productivity', text: 'Boost workplace performance by reducing financial stress.' },
                    { title: 'Analytics and Insight', text: 'Access detailed reports on financial wellness programs.' }
                ]
            },
            safetyPoints: [
                'Funds protected in licensed custodial accounts',
                'Automated contributions and scheduled payouts',
                'Insurance protection in case a member misses a payment',
                'Complete transparency for every member',
                'Simple onboarding for groups and community leaders'
            ]
        },
        about: {
            heroTitle: 'OneMAI The Story',
            heroSubtitle: 'Inspired by long-standing community finance practices, OneMAI brings structure, transparency, and security to how groups coordinate money today — without complexity and with full traceability.',
            storyTitle: 'Our Story',
            storyParagraphs: [
                'Imran is a member of Lisbon Project, and he is from Morrocco. Imran is a brilliant young man with a drive for entrepreneurship, but Imran does not have any access to alternative funds to help him drive his proposed 4,000 Euros venture. With OneMAI, Imran will achieve this overtime within his own group.',
                'Across European communities, people have long relied on informal savings groups to pool funds and support one another, especially people who have their credit history in other continents of the world.',
                'OneMAI takes this age-old practice and modernizes it for today\'s world. By combining technology and transparency, we offer a digital platform where saving together is safe, automated, and scalable.'
            ],
            facilitationTitle: 'What we facilitate —',
            facilitationSubtitle: 'Group Power, Personal Gains',
            facilitationItems: [
                'Transparent and secure system',
                'Recognized by Startup Portugal',
                'Engaged with regulators',
                'Backed by banking partners'
            ],
            missionTitle: 'Our Mission',
            missionText: 'To make financial inclusion practical through transparent, community-powered financial coordination built on trust, clarity, and access.',
            valuesTitle: 'Our Values',
            valuesList: [
                { label: 'Trust', text: 'built into every interaction' },
                { label: 'Transparency', text: 'no hidden charges, no confusion' },
                { label: 'Community', text: 'because together, we go further' },
                { label: 'Inclusion', text: 'financial access for everyone' },
                { label: 'Innovation', text: 'modern solutions for timeless practices' }
            ],
            ctaTitle: 'Join Us',
            ctaText: 'You don’t have to do it alone. Coordinate money with people you trust in a clear and secure way.'
        },
        home: {
            howItWorksSubtitle: "it's that simple",
            howItWorksSteps: [
                {
                    step: 'Step 1',
                    title: 'Create and Join a Community',
                    description: 'Start by creating your own community or joining an existing one. Connect with like-minded individuals who share your financial goals.',
                    points: ['Create a new community in minutes', 'Join existing communities']
                },
                {
                    step: 'Step 2',
                    title: 'Set Contribution and Payout Parameters',
                    description: 'Configure contribution amounts, frequency, and withdrawal rules that work for your community.',
                    points: ['Set contribution schedules', 'Define withdrawal criteria']
                },
                {
                    step: 'Step 3',
                    title: 'Contribute and Receive Payouts',
                    description: 'Begin contributing and receiving payouts in line with your community’s established rules. You can also request a position change from a member of your pod.',
                    points: ['Activate your pod when members are complete.', 'Contribute to Pod', 'Receive your payout']
                }
            ],
            financialHome: {
                title: 'A financial home shaped by people and shared purpose.',
                subtitle: 'One community at a time.',
                buttonText: 'Join the Movement'
            },
            testimonialsText: {
                title: 'Listen',
                subtitle: 'to what our customers have to say'
            },
            partnersTitle: 'Partners',
            poweredByTitle: 'Powered by communities, strengthened by trust.',
            poweredBySubtitle: 'Our circles grow through trusted anchors',
            trustedAnchorsCard: {
                title: 'Create an income stream while helping your community save.',
                readyText: 'Ready ?',
                buttonText: 'Become an Affiliate'
            },
            newsletter: {
                title: 'Stay Updated with Our Progress',
                placeholder: 'Enter your email',
                buttonText: 'Subscribe'
            },
            faq: {
                title: 'Frequently Asked Questions',
                subtitle: 'Find answers to common questions about OneMAI',
                buttonText: 'Read FAQs'
            },
            authModal: {
                title: 'Sign Up for Early Perks',
                subtitle: 'Choose your account type to get started',
                userAccount: 'User Account',
                affiliateAccount: 'Affiliate Account',
                footer: 'Not sure? Choose User Account for regular access'
            },
            socialPopup: {
                title: 'Join Us On Social Media',
                closeButton: 'Close'
            }
        },
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
        images: {
            hero: contentImg,
            communityJoin: createGroupImg,
            communityParams: groupImg,
            communityFunds: receiveFundImg,
            financialHome: diverseCommunityImg,
            trustedAnchors: communityHandsImg,
            aboutHero: phoneImage,
            benefitsHero: benefitsHeroImg,
            benefitsIllustration: communityIllustration,
            howItWorksHero: howItWorksHeroImg,
        },
        footerOperatorInfo: "Operated by Cortejo Magnata Lda\nNIF: 518842016.\nRegistered in Portugal.",
        copyrightName: "Cortejo Magnata Lda",
        brandName: "Cortejo Magnata Lda",
        footerDescription: "OneMAI is developed and operated by Cortejo Magnata Lda, a technology company based in Portugal, building financial coordination infrastructure for communities."
    },
    NG: {
        region: 'NG',
        ctaTitle: 'Start Your Circle',
        ctaText: 'Bring your Ajo group online and experience the ease of automated coordination and secure payouts.',
        domain: '.ng',
        name: 'Nigeria',
        contactEmail: 'hello@joinonemai.com',
        whatsappNumber: '+234 123 456 7890',
        whatsappLink: 'https://wa.me/2341234567890',
        socialLinks: {
            facebook: 'https://web.facebook.com/onemai.ng/',
            instagram: 'https://www.instagram.com/onemai.ng/?fbclid=IwY2xjawQBMNpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeNT2KDP7M_Byhumj349Kt_aUnnocBoj3CXBCIT0e60D8chS9mmn_moKm-2sY_aem_pntEB98VXF643-5WciffkQ',
            linkedin: 'https://www.linkedin.com/company/onemaing/',
            telegram: 'https://t.me/joinonemai',
        },
        heroTitle: "Community Financing for Your Future",
        heroSubtitle: 'Build Wealth with your community',
        faqHeroTitle: 'Frequently Asked Questions (Nigeria)',
        faqHeroSubtitle: 'Modernizing Ajo and Esusu with security and transparency.',
        faqs: [
            {
                id: "general-1",
                question: "What is OneMAI?",
                answer: "OneMAI is a digital platform that helps people organise money together in a simple and trusted way. It is built for people who save, contribute or support each other as a group, like ajo, esusu, thrift, but with better structure and visibility .",
            },
            {
                id: "general-2",
                question: "How do I get started?",
                answer: "Simply sign up on the OneMAI website, verify your details, create a group or join one with an invite, agree on how much and when to contribute, start contributing and tracking payments. We offer a guided tour to help you get acquainted.",
            },
            {
                id: "general-3",
                question: "Is there a free trial?",
                answer: "Yes, your first payout is completely free so you can experience the platform before committing.",
            },
            {
                id: "general-4",
                question: "How can I contact support?",
                answer: "You can reach our support team via the contact page or by emailing hello@joinonemai.com.",
            },
            {
                id: "ng-money-hold",
                question: "Does OneMAI hold my money?",
                answer: "Funds contributed through OneMAI are held by regulated financial partners (CBN-licensed financial institutions where applicable). OneMAI does not take deposits or custody customer funds; it simply provides the rules and workflow that trigger releases via those regulated partners, in compliance with CBN frameworks.",
            },
            {
                id: "ng-payment-fail",
                question: "What happens if a payment fails?",
                answer: "If a member misses a scheduled contribution:The system flags the default and notifies the group.Where applicable, recovery may be initiated under the GSI framework of the Central Bank of Nigeria, subject to regulatory conditions. Group-agreed penalties may apply. Continued default may result in suspension or removal. All recovery actions are handled by regulated financial partners in line with CBN regulations.",
            },
            {
                id: "ng-access",
                question: "Can I use OneMAI from anywhere in Nigeria?",
                answer: "Yes you can, as long as you have a phone and internet access.",
            },
            {
                id: "ng-password",
                question: "What if I forget my password?",
                answer: "Just tap “forgot password” on the login screen and follow the steps to reset it using your phone number or email and you’ll be back into your account in few minutes.",
            },
            {
                id: "ng-multi-group",
                question: "Can I belong to more than one Pod ?",
                answer: "Yes, you can join or create multiple Pods at the same time and track each one seperately on OneMAI.",
            },
        ],
        howItWorks: {
            heroTitle: 'How OneMAI Works',
            heroSubtitle: 'Step-by-step to group savings.',
            sectionTitle: 'A Structured Way to save — Driven by Trust',
            steps: [
                {
                    title: '1) Verify & Set Up',
                    text: 'Create an account and complete KYC. This ensures only traceable members participate in your Pod.'
                },
                {
                    title: '2) Join or Create a Pod',
                    text: 'Define members, Frequency, contribution, and circle rules clearly in the app.'
                },
                {
                    title: '3) Automate Contributions and receiving payouts',
                    text: 'Payments are collected automatically. Your payout is sent directly to your bank when it is your turn.'
                }
            ],
            responsibilities: {
                title: 'Circle Responsibilities',
                items: [
                    'Admins: create Pod.',
                    'Members: maintain community trust.'
                ]
            },
            disputes: {
                title: 'Defaults & Resolution',
                items: [
                    'Payment delays trigger reminders; repeated defaults restrict access and can pause payouts.',
                    'Resolve within your circle → escalate to admin → contact OneMAI support.'
                ]
            }
        },
        benefits: {
            heroTitle: 'Benefits of OneMAI',
            heroSubtitle: 'Harness the power of community to build wealth and financial security.',
            sectionTitle: 'A Trusted Tradition Strengthened by Technology',
            userBenefits: {
                title: 'For Individuals & Groups',
                items: [
                    { title: 'Access to Zero-interest Capital', text: 'Get access to bulk funds for business or personal needs without the burden of high interest rates.' },
                    { title: 'Eliminate "Runaway" Risks', text: 'Every contribution is tracked and payouts are automated, ensuring maximum security for your Pods.' },
                    { title: 'Build Your Credit Profile', text: 'Formalize your informal savings history to unlock better financial opportunities in the future.' },
                    { title: 'Community Financial Safety Net', text: 'A trusted environment where members support each other to reach financial milestones.' }
                ]
            },
            orgBenefits: {
                title: 'For Cooperatives & Employers',
                items: [
                    { title: 'Automated Cooperative Management', text: 'Digitalize your cooperative society or staff thrift group for better efficiency and less paperwork.' },
                    { title: 'Employee Financial Stability', text: 'Help your staff manage their finances better through structured group savings.' },
                    { title: 'Reduced Administrative Stress', text: 'Focus on growth while our platform handles collection and payout schedules.' },
                    { title: 'Transparent Record Keeping', text: 'Real-time dashboards for all contributions and payout cycles.' }
                ]
            },
            safetyPoints: [
                'Funds protected through licensed financial partners',
                'Automated bank collections and direct payouts',
                'Security frameworks to handle missed payments',
                'Full visibility into every Pod cycle progress',
                'Easy onboarding with your phone number and BVN verification'
            ]
        },
        about: {
            heroTitle: 'OneMAI The Story',
            heroSubtitle: 'Ajo. Esusu. Adashe built our communities.\nOneMAI structures and strengthens them.\n\nWe digitize traditional group savings without losing trust. We add automated contributions, transparent records, secure banking infrastructure, and integrated financial literacy tools.\n\nPooled money.\nStructured growth.\nFinancial awareness.\nCommunity elevation.',
            storyTitle: 'Our Story',
            storyParagraphs: [
                'We met Tunde.\nA trader in Ariaria Market, Aba.\nAmbitious. Ready to grow.',
                'He has relied on Ajo before, but the friction was always there.\nLate payments.\nIncomplete payouts.\nNo clear records.\nTrust existed. Structure did not.',
                'Now, Tunde is starting a new chapter with OneMAI as an affiliate partner, coordinating his market union\'s contributions with full digital transparency.\nEvery payment tracked.\nEvery member accountable.\nEvery payout structured.\nHe is just getting started. And we are building with him.',
                'Across Nigeria, millions rely on Ajo/ Esusu/ Adashe. Powerful systems built on community trust.\nOneMAI strengthens them.',
                'We provide structure, secure financial infrastructure, and integrated financial literacy tools to support Tunde and other affiliates ready to lead their communities forward.\nTradition remains.\nStructure begins.\nGrowth follows.'
            ],
            facilitationTitle: 'What we facilitate —',
            facilitationSubtitle: 'Traditional Trust, Digital Security',
            facilitationItems: [
                'Automated bank contributions',
                'Transparent payout schedules',
                'BVN-verified members',
                'Licensed custodial protection'
            ],
            missionTitle: 'Our Mission',
            missionText: 'To modernize community finance through transparent, community-powered coordination built on trust and accessibility.',
            valuesTitle: 'Our Values',
            valuesList: [
                { label: 'Integrity', text: 'honoring every contribution' },
                { label: 'Transparency', text: 'real-time visibility for every member' },
                { label: 'Community', text: 'strengthening the bonds that build wealth' },
                { label: 'Security', text: 'protecting group funds with technology' },
                { label: 'Prosperity', text: 'helping every member of a community reach their goals' }
            ],
            ctaTitle: 'Start Your Pod',
            ctaText: 'Bring your community online and experience the ease of automated coordination for contribution and secure payouts.'
        },
        home: {
            howItWorksSubtitle: "it's that simple",
            howItWorksSteps: [
                {
                    step: 'Step 1',
                    title: 'Create and Join a Pod',
                    description: 'Start by creating your own Pod or joining an existing one. Connect with like-minded individuals who share your financial goals.',
                    points: ['Create a new Pod in minutes', 'Join existing Pod']
                },
                {
                    step: 'Step 2',
                    title: 'Set Contribution and Payout Parameters',
                    description: 'Configure contribution amounts, frequency, and withdrawal rules that work for your community.',
                    points: ['Set contribution schedules', 'Define withdrawal criteria']
                },
                {
                    step: 'Step 3',
                    title: 'Contribute and Receive Payouts',
                    description: 'Begin contributing and receiving payouts in line with your community’s established rules. You can also request a position change from a member of your pod.',
                    points: ['Activate your pod when members are complete.', 'Contribute to Pod', 'Receive your payout']
                }
            ],
            financialHome: {
                title: 'A financial home shaped by people and shared purpose.',
                subtitle: 'One community at a time.',
                buttonText: 'Join the Movement'
            },
            testimonialsText: {
                title: 'Listen',
                subtitle: 'to what our customers have to say'
            },
            partnersTitle: 'Partners',
            poweredByTitle: 'Powered by communities, strengthened by trust.',
            poweredBySubtitle: 'Our circles grow through trusted anchors',
            trustedAnchorsCard: {
                title: 'Create an income stream while helping your community save.',
                readyText: 'Ready ?',
                buttonText: 'Become an Affiliate'
            },
            newsletter: {
                title: 'Stay Updated with Our Progress',
                placeholder: 'Enter your email',
                buttonText: 'Subscribe'
            },
            faq: {
                title: 'Frequently Asked Questions',
                subtitle: 'Find answers to common questions about OneMAI',
                buttonText: 'Read FAQs'
            },
            authModal: {
                title: 'Sign Up for Early Perks',
                subtitle: 'Choose your account type to get started',
                userAccount: 'User Account',
                affiliateAccount: 'Affiliate Account',
                footer: 'Not sure? Choose User Account for regular access'
            },
            socialPopup: {
                title: 'Join Us On Social Media',
                closeButton: 'Close'
            }
        },
        testimonials: [
            {
                img: chidi,
                title: "Olusegun's Story",
                role: "Trader in Lagos",
                quote: `"OneMAI has transformed how we do Ajo in our market. It's secure, transparent, and we don't have to worry about anyone running away with our money.\nuna do well"`,
                detail: "",
            },
            {
                img: amaka,
                title: "Amaka's Journey",
                role: "Micro-entrepreneur",
                quote: `"Raising capital for my business in Abuja used to be impossible. Through my OneMAI circle, I got the funds I needed without interest."`,
                detail: "",
            },
            {
                img: tunde,
                title: "Tunde's Success",
                role: "Tech Professional",
                quote: `"I used OneMAI to save with my friends for a professional certification. The platform made it so easy to manage our contributions."`,
                detail: "Achieved career goals through group saving",
            },
        ],
        images: {
            hero: nigerianHero,
            communityJoin: createGroupImg,
            communityParams: groupImg,
            communityFunds: receiveFundImg,
            financialHome: nigerianCommunity,
            trustedAnchors: nigerianHands,
            aboutHero: phoneImage,
            benefitsHero: nigerianBenefitsHero,
            benefitsIllustration: communityIllustration,
            howItWorksHero: nigerianHowItWorksHero,
        }
    },
    GLOBAL: {
        region: 'GLOBAL',
        ctaTitle: 'Join Us',
        ctaText: 'You don’t have to do it alone. Coordinate money with people you trust in a clear and secure way.',
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
        faqHeroTitle: 'Frequently Asked Questions',
        faqHeroSubtitle: 'Common questions about the OneMAI global community.',
        faqs: [
            {
                id: 'global-1',
                question: 'What is OneMAI?',
                answer: 'OneMAI is a global platform for community-powered financial coordination, making collective saving and financing safe and accessible for everyone.'
            },
            {
                id: 'global-2',
                question: 'How do I create a new circle?',
                answer: 'Once you sign up, simply click on "Start a Circle," define your payout order, contribution amounts, and invite your trusted community members.'
            },
            {
                id: 'global-3',
                question: 'Who can I invite to my circle?',
                answer: 'You can invite anyone you trust. OneMAI is built on community trust, so it works best with friends, family, or professional networks.'
            }
        ],
        howItWorks: {
            heroTitle: 'How OneMAI Works',
            heroSubtitle: 'Step-by-step to group savings, transparent coordination, and secure payouts.',
            sectionTitle: 'A Seamless Experience — Driven by Trust',
            steps: [
                {
                    title: '1) Verify & Set Up',
                    text: 'Create an account and complete KYC. This unlocks group participation and helps prevent fraud.'
                },
                {
                    title: '2) Join or Create a Group',
                    text: 'Groups define members, fixed contribution amount, payout order, start/end dates, and default rules.'
                },
                {
                    title: '3) Automate Contributions and Payout',
                    text: 'Payments run on schedule through approved processors. Rotation payouts follow the agreed order.'
                }
            ],
            responsibilities: {
                title: 'Responsibilities',
                items: [
                    'Admins: set fair rules, monitor payments, coordinate, and mediate issues.',
                    'Members: pay on time, respect payout order, and communicate early if issues arise.'
                ]
            },
            disputes: {
                title: 'Defaults & Disputes',
                items: [
                    'Delays trigger reminders; repeated defaults can pause or reorder payouts and restrict access.',
                    'Resolve in-group first → escalate to admin → escalate to OneMAI with logs for mediation.'
                ]
            }
        },
        benefits: {
            heroTitle: 'Benefits',
            heroSubtitle: 'Unlock collective financial power and build a stronger future with OneMAI.',
            sectionTitle: 'A Trusted Tradition - Strengthened by Technology',
            userBenefits: {
                title: 'For Users',
                items: [
                    { title: 'Access to Zero-interest Financing', text: 'Eliminate traditional loan burdens with interest-free financial solutions.' },
                    { title: 'Built for Trust and Transparency', text: 'Every contribution and transfer is visible, traceable, and protected by modern security standards.' },
                    { title: 'Financial Literacy Tools', text: 'Access educational resources and tools for better financial management.' },
                    { title: 'Community Support', text: 'Join a network of like-minded individuals working towards financial goals.' }
                ]
            },
            orgBenefits: {
                title: 'For Companies & Organizations',
                items: [
                    { title: 'Employee Financial Welfare', text: 'Support your employees\' financial well-being with innovative solutions.' },
                    { title: 'Improved Retention', text: 'Enhance employee loyalty through financial support programs.' },
                    { title: 'Enhanced Productivity', text: 'Boost workplace performance by reducing financial stress.' },
                    { title: 'Analytics and Insight', text: 'Access detailed reports on financial wellness programs.' }
                ]
            },
            safetyPoints: [
                'Funds protected in licensed custodial accounts',
                'Automated contributions and scheduled payouts',
                'Insurance protection in case a member misses a payment',
                'Complete transparency for every member',
                'Simple onboarding for groups and community leaders'
            ]
        },
        about: {
            heroTitle: 'OneMAI The Story',
            heroSubtitle: 'Inspired by long-standing community finance practices, OneMAI brings structure, transparency, and security to how groups coordinate money today — without complexity and with full traceability.',
            storyTitle: 'Our Story',
            storyParagraphs: [
                'Around the world, people have long relied on informal savings groups to pool funds and support one another. It is a timeless practice built on community trust and collective ambition.',
                'However, these traditional groups often lack modern structure, making them hard to manage at scale and difficult to verify for formal financial institutions.',
                'OneMAI takes this age-old practice and modernizes it for today\'s world. By combining technology and transparency, we offer a digital platform where saving together is safe, automated, and scalable for everyone, everywhere.'
            ],
            facilitationTitle: 'What we facilitate —',
            facilitationSubtitle: 'Group Power, Personal Gains',
            facilitationItems: [
                'Transparent and secure coordination',
                'Automated contribution tracking',
                'Full visibility into group health',
                'Secure payout rotations'
            ],
            missionTitle: 'Our Mission',
            missionText: 'To make financial inclusion practical through transparent, community-powered financial coordination built on trust, clarity, and access.',
            valuesTitle: 'Our Values',
            valuesList: [
                { label: 'Trust', text: 'built into every interaction' },
                { label: 'Transparency', text: 'no hidden charges, no confusion' },
                { label: 'Community', text: 'because together, we go further' },
                { label: 'Inclusion', text: 'financial access for everyone' },
                { label: 'Innovation', text: 'modern solutions for timeless practices' }
            ],
            ctaTitle: 'Join Us',
            ctaText: 'You don’t have to do it alone. Coordinate money with people you trust in a clear and secure way.'
        },
        home: {
            howItWorksSubtitle: "it's that simple",
            howItWorksSteps: [
                {
                    step: 'Step 1',
                    title: 'Create and Join a Community',
                    description: 'Start by creating your own community or joining an existing one. Connect with like-minded individuals who share your financial goals.',
                    points: ['Create a new community in minutes', 'Join existing communities']
                },
                {
                    step: 'Step 2',
                    title: 'Set Contribution and Payout Parameters',
                    description: 'Configure contribution amounts, frequency, and withdrawal rules that work for your community.',
                    points: ['Set contribution schedules', 'Define withdrawal criteria']
                },
                {
                    step: 'Step 3',
                    title: 'Contribute and Receive Payouts',
                    description: 'Begin contributing and receiving payouts in line with your community’s established rules. You can also request a position change from a member of your pod.',
                    points: ['Activate your pod when members are complete.', 'Contribute to Pod', 'Receive your payout']
                }
            ],
            financialHome: {
                title: 'A financial home shaped by people and shared purpose.',
                subtitle: 'One community at a time.',
                buttonText: 'Join the Movement'
            },
            testimonialsText: {
                title: 'Listen',
                subtitle: 'to what our customers have to say'
            },
            partnersTitle: 'Partners',
            poweredByTitle: 'Powered by communities, strengthened by trust.',
            poweredBySubtitle: 'Our circles grow through trusted anchors',
            trustedAnchorsCard: {
                title: 'Create an income stream while helping your community save.',
                readyText: 'Ready ?',
                buttonText: 'Become an Affiliate'
            },
            newsletter: {
                title: 'Stay Updated with Our Progress',
                placeholder: 'Enter your email',
                buttonText: 'Subscribe'
            },
            faq: {
                title: 'Frequently Asked Questions',
                subtitle: 'Find answers to common questions about OneMAI',
                buttonText: 'Read FAQs'
            },
            authModal: {
                title: 'Sign Up for Early Perks',
                subtitle: 'Choose your account type to get started',
                userAccount: 'User Account',
                affiliateAccount: 'Affiliate Account',
                footer: 'Not sure? Choose User Account for regular access'
            },
            socialPopup: {
                title: 'Join Us On Social Media',
                closeButton: 'Close'
            }
        },
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
        images: {
            hero: contentImg,
            communityJoin: createGroupImg,
            communityParams: groupImg,
            communityFunds: receiveFundImg,
            financialHome: diverseCommunityImg,
            trustedAnchors: communityHandsImg,
            aboutHero: phoneImage,
            benefitsHero: benefitsHeroImg,
            benefitsIllustration: communityIllustration,
            howItWorksHero: howItWorksHeroImg,
        },
        footerOperatorInfo: "Operated by Cortejo Magnata Lda\nNIF: 518842016.\nRegistered in Portugal.",
        copyrightName: "Cortejo Magnata Lda",
        brandName: "Cortejo Magnata Lda",
        footerDescription: "OneMAI is developed and operated by Cortejo Magnata Lda, a technology company based in Portugal, building financial coordination infrastructure for communities."
    },
};
