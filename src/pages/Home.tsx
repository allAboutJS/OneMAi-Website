// src/pages/Home.tsx

import {
	Briefcase,
	Globe,
	Handshake,
	PlayIcon,
	Settings,
	Sparkle,
} from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectCards, Pagination } from "swiper/modules";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import pageimage from "@/assets/firstimage.png";
// ---------- Image assets ----------
import contentImg from "@/assets/images/content.png";
import embedlyLogo from "@/assets/images/embedly.png";
import groupImg from "@/assets/images/groups.png";
import joinCommunityImg from "@/assets/images/join-a-community.jpeg";
import eitLogo from "@/assets/images/partners/eit.png";
import lisbonLogo from "@/assets/images/partners/lisbon.png";
import startUpLogo from "@/assets/images/partners/start-up.png";
import receiveFundImg from "@/assets/images/receive-fund.jpeg";
import { useRegion } from "../context/RegionContext";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { BarChart } from "recharts";

type TabKey = "users" | "partners";

const SCRIPT_URL =
	"https://script.google.com/macros/s/AKfycbyzjYnO2dy0slHRNpXQbj097OlsTqjhoJtVCPxEYCPcXUSHnqU85fFVC6zr_eKPfTff/exec"; // Google Apps Script endpoint

const Home: React.FC = () => {
	const { region, regionData } = useRegion();
	// Back-to-top
	const [showTop, setShowTop] = useState(false);
	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 300);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const [activeTab, setActiveTab] = useState(0);

	// Auth Modal (replaces email popup for early perks)
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [showSocialPopup, setShowSocialPopup] = useState(false);

	// Email form state (for newsletter only)
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("Portugal");
	const [countryOther, setCountryOther] = useState("");
	const [phone, setPhone] = useState("");
	const [consented, setConsented] = useState(false);
	const [submitMsg, setSubmitMsg] = useState<{
		ok: boolean;
		text: string;
	} | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Handle auth modal selection
	const handleAuthSelection = (role: "user" | "affiliate") => {
		const authTld = region === "NG" ? "ng" : region === "EU" ? "eu" : "com";
		const urls = {
			user: `https://app.joinonemai.${authTld}/signup`,
			affiliate: `https://x.joinonemai.${authTld}/affilator-create-account`,
		};

		if (role === "affiliate") {
			window.open(urls[role], "_blank");
		} else {
			window.location.href = urls[role];
		}
		setShowAuthModal(false);
	};

	// ====== Submit to Google Sheet (mirrors index.html) ======
	const handleEmailSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const selected = country;
		const finalCountry =
			selected === "__other" ? (countryOther || "").trim() : selected;

		// Basic validation - removed consent requirement
		if (!email.trim()) {
			setSubmitMsg({ ok: false, text: "Please enter a valid email." });
			return;
		}
		if (selected === "__other" && !finalCountry) {
			setSubmitMsg({ ok: false, text: "Please type your country." });
			return;
		}

		const payload: Record<string, string> = {
			name: name.trim(),
			email: email.trim(),
			country: finalCountry,
			phone: phone.trim(),
			consent_email: "yes", // Always set to "yes" now
		};

		// Build URL-encoded body to avoid CORS preflight (same as HTML)
		const body = new URLSearchParams(payload).toString();

		console.log("[early-access] POST →", SCRIPT_URL);
		console.log("[early-access] payload:", payload);

		try {
			setIsSubmitting(true);
			setSubmitMsg(null);

			const res = await fetch(SCRIPT_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				},
				body,
			});

			const raw = await res.text();
			let data: any;
			try {
				data = JSON.parse(raw);
			} catch {
				data = { success: false, raw };
			}

			console.log("[early-access] status:", res.status, res.statusText);
			console.log("[early-access] response:", data);

			if (!res.ok || data?.success === false) {
				throw new Error(data?.error || `Request failed (${res.status})`);
			}

			setSubmitMsg({
				ok: true,
				text: "You’re officially on the inside. Expect insights, updates, and a few surprises from OneMAI.",
			});
			// Reset fields to match HTML behavior
			setName("");
			setEmail("");
			setCountry("Portugal");
			setCountryOther("");
			setPhone("");
			setConsented(false);

			// Close popup slightly after success (UI parity)
			setTimeout(() => {
				setSubmitMsg(null);
			}, 4000);
		} catch (err) {
			console.error("[early-access] submit error:", err);
			setSubmitMsg({
				ok: false,
				text: "Something went wrong. Please try again.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	// FAQ tabs/accordions
	const [tab, setTab] = useState<TabKey>("users");
	const [openItem, setOpenItem] = useState<string | null>(null);
	const toggleItem = (id: string) =>
		setOpenItem((prev) => (prev === id ? null : id));
	useEffect(() => setOpenItem(null), [tab]);

	const h = regionData.home;
	const stepImages = [
		regionData.images.communityJoin,
		regionData.images.communityParams,
		regionData.images.communityFunds,
	];

	const EU_COUNTRIES = useMemo(
		() => [
			"Austria",
			"Belgium",
			"Bulgaria",
			"Croatia",
			"Cyprus",
			"Czechia (Czech Republic)",
			"Denmark",
			"Estonia",
			"Finland",
			"France",
			"Germany",
			"Greece",
			"Hungary",
			"Ireland",
			"Italy",
			"Latvia",
			"Lithuania",
			"Luxembourg",
			"Malta",
			"Netherlands",
			"Poland",
			"Portugal",
			"Romania",
			"Slovakia",
			"Slovenia",
			"Spain",
			"Sweden",
		],
		[],
	);

	return (
		<div className="">
			{/* Back to Top Button */}
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				aria-label="Back to top"
				className={[
					"fixed bottom-8 right-8 bg-[#000] text-white p-3 rounded-full shadow-lg hover:bg-[#3390D5] focus:outline-none z-50 transition",
					showTop ? "opacity-100" : "opacity-0 pointer-events-none",
				].join(" ")}
			>
				<svg
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 10l7-7m0 0l7 7m-7-7v18"
					/>
				</svg>
			</button>

			{/* Hero */}
			<section className="relative min-h-[70vh] md:h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-teal-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-md:pt-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Text */}
						<div className="flex flex-col justify-center">
							<p className="text-sm py-2 px-6 rounded-full w-fit bg-white text-blue-500 mb-6">
								Financial Infrastructure for Trusted Communities
							</p>
							<h1 className="text-4xl sm:text-5xl md:text-7xl font-normal text-white mb-6">
								{regionData.heroTitle}
							</h1>
							<p className="text-xl sm:text-2xl text-white mb-8">
								{regionData.heroSubtitle.includes("Wealth") ? (
									<>
										{regionData.heroSubtitle.split("Wealth")[0]}
										<span className="italic">Wealth</span>
										{regionData.heroSubtitle.split("Wealth")[1]}
									</>
								) : (
									regionData.heroSubtitle
								)}
							</p>
							<div className="flex gap-4">
								<button
									type="button"
									onClick={() => setShowAuthModal(true)}
									className="inline-block bg-[#3390D5] text-white px-4 py-2 rounded-lg text-lg text-center font-medium hover:bg-brand-700 transition duration-300 ease-in-out transform hover:-translate-y-1 w-50"
								>
									{regionData.ctaTitle}
								</button>
								<button
									className="flex items-center gap-2 px-4 py-2 text-lg bg-red-500 text-white rounded-lg font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 w-50"
									type="button"
								>
									See How It Works <PlayIcon size={18} />
								</button>
							</div>
						</div>

						{/* Image (optimized for mobile) */}
						<div className="flex items-center justify-center md:justify-end">
							<img
								src={regionData.images.hero}
								alt={regionData.heroTitle}
								className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl shadow-lg"
								loading="lazy"
								decoding="async"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Patners */}
			<section className="py-8 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex flex-wrap justify-center gap-12 mt-12">
						<div className="text-2xl font-bold text-gray-400">
							StartUp Portugal
						</div>
						<div className="text-2xl font-bold text-gray-400">ConnectPay</div>
						<div className="text-2xl font-bold text-gray-400">Monnify</div>
						<div className="text-2xl font-bold text-gray-400">EIT Digital</div>
					</div>
				</div>
			</section>

			{/* Why OneMAI*/}
			<section className="py-24 relative">
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-16 max-w-2xl">
						Why OneMAI Exists
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								num: "01",
								title: "Informal systems break down",
								desc: "Group savings run on trust and relationships not contracts or accountability tools.",
							},
							{
								num: "02",
								title: "Diaspora communities are fragmented",
								desc: "Millions manage shared finances across borders with WhatsApp messages and spreadsheets.",
							},
							{
								num: "03",
								title: "Banks don't serve this market",
								desc: "Traditional finance wasn't designed for community-based saving models. We were.",
							},
						].map((item, idx) => (
							<div
								key={idx}
								className="bg-white p-6 border border-zinc-300 rounded-lg"
							>
								<div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text group-hover:text-blue-600 transition mb-6">
									{item.num}
								</div>
								<h3 className="text-2xl text-gray-800 mb-4 leading-tight">
									{item.title}
								</h3>
								<p className="text-gray-400 leading-relaxed">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="how" className="py-24 bg-teal-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-2 max-w-2xl">
						From group to payout
					</h2>
					<p className="text-xl md:text-2xl mb-16 text-zinc-200">
						Fully coordinated.
					</p>

					{/* Tab Navigation */}
					<div className="flex mb-2 overflow-x-auto">
						{[
							"Create Circle",
							"Verify",
							"Contribute",
							"Receive",
							"Build History",
						].map((tab, idx) => (
							<button
								type="button"
								key={tab}
								onClick={() => setActiveTab(idx)}
								className={`px-6 py-3 text-sm font-bold whitespace-nowrap first:rounded-l-lg last:rounded-r-lg transition ${
									activeTab === idx
										? "bg-blue-600 text-white"
										: "bg-gray-900 text-gray-400 hover:text-gray-200"
								}`}
							>
								{tab}
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className="bg-white/50 rounded-2xl p-12">
						{[
							{
								title: "Create or join a circle",
								desc: "Communities, associations, employers, or friends form a trusted savings group and define the rules, contribution amount, payout order, and cycle length.",
							},
							{
								title: "Verify identity",
								desc: "Members onboard securely. KYC is handled end-to-end by our regulated banking partners.",
							},
							{
								title: "Automate contributions",
								desc: "OneMAI orchestrates scheduled contributions, sends reminders, tracks payments in real time, and maintains a transparent audit trail for every member.",
							},
							{
								title: "Receive your payout",
								desc: "When your turn comes, funds are disbursed automatically through our payment rails, no manual transfers, no chasing organisers.",
							},
							{
								title: "Build financial history",
								desc: "Every completed cycle creates a verified record of financial behaviour, the foundation for future credit access and group credibility.",
							},
						][activeTab] && (
							<div>
								<h3 className="text-4xl font-semibold text-blue-900 mb-4">
									{
										[
											"Create or join a circle",
											"Verify identity",
											"Automate contributions",
											"Receive your payout",
											"Build financial history",
										][activeTab]
									}
								</h3>
								<p className="text-xl text-black leading-relaxed">
									{
										[
											{
												desc: "Communities, associations, employers, or friends form a trusted savings group and define the rules — contribution amount, payout order, and cycle length.",
											},
											{
												desc: "Members onboard securely. KYC is handled end-to-end by our regulated banking partners.",
											},
											{
												desc: "OneMAI orchestrates scheduled contributions, sends reminders, tracks payments in real time, and maintains a transparent audit trail for every member.",
											},
											{
												desc: "When your turn comes, funds are disbursed automatically through our payment rails — no manual transfers, no chasing organisers.",
											},
											{
												desc: "Every completed cycle creates a verified record of financial behaviour — the foundation for future credit access and group credibility.",
											},
										][activeTab].desc
									}
								</p>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Technology Section */}
			<section id="tech" className="py-24 border-t border-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-2 max-w-2xl">
						Built to scale.
					</h2>
					<p className="text-xl text-gray-400 mb-16 max-w-2xl">
						Designed for compliance. OneMAI is cloud-native financial
						coordination infrastructure — not a savings app.
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-min">
						{/* Core Features */}
						<div className="space-y-4">
							{[
								{
									title: "P2P Orchestration",
									desc: "Peer-to-peer without central float",
								},
								{
									title: "Multi-Market Rails",
									desc: "ConnectPay (EU) & Monnify (Nigeria)",
								},
								{
									title: "Automated KYC",
									desc: "Regulated EMI partner verification",
								},
								{
									title: "Real-Time Tracking",
									desc: "Full audit trails for all transactions",
								},
								{ title: "Risk Engine", desc: "ML-powered default prediction" },
								{
									title: "Multi-Region",
									desc: "EU & Nigeria compliant stacks",
								},
							].map((feature, idx) => (
								<div
									key={idx}
									className="group bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-6 hover:border-blue-600/50 transition"
								>
									<h4 className="font-bold text-blue-900 mb-2 group-hover:text-blue-400 transition">
										{feature.title}
									</h4>
									<p className="text-sm text-gray-700">{feature.desc}</p>
								</div>
							))}
						</div>

						{/* Diagram Placeholder */}
						<div className="bg-zinc-100 rounded-lg hidden lg:block overflow-hidden">
							<img
								src="/images/vertical-low-angle-shot-modern-glass-business-buildings-touching-sky.jpg"
								alt=""
								className="object-cover h-full aspect-square"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Compliance */}
			<section className="py-24 bg-cyan-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl sm:text-4xl md:text-6xl font-normal mb-2 max-w-2xl">
						Regulated from day one.
					</h2>
					<p className="text-lg text-zinc-100 mb-16 max-w-3xl">
						OneMAI does not hold or pool funds. We are a financial coordination
						layer — not a bank, not a wallet. Every payment moves through
						regulated, licensed partners who handle custody, KYC, and compliance
						on our behalf.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{[
							{
								title: "ConnectPay (EU)",
								desc: "PSD2 & AML compliant IBAN issuance",
							},
							{
								title: "Monnify (Nigeria)",
								desc: "Licensed fintech with bank integrations",
							},
							{
								title: "No Central Float",
								desc: "Peer-to-peer flows, we coordinate",
							},
						].map((item, idx) => (
							<div key={idx} className="bg-white/80 rounded-lg p-8">
								<h3 className="text-xl font-black text-cyan-900 mb-3">
									{item.title}
								</h3>
								<p className="text-black">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Markets */}
			<section id="markets" className="py-24 border-t border-gray-200 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16">
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 mb-4">
							One platform.
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl">Many communities.</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: "Diaspora Communities",
								desc: "Ajo, adashi, tontine, susu — digitally",
								icon: <Globe />,
							},
							{
								title: "Cooperatives",
								desc: "Formalise group savings with audit trails",
								icon: <Handshake />,
							},
							{
								title: "Faith Communities",
								desc: "Welfare funds with transparency",
								icon: <Sparkle />,
							},
							{
								title: "Employers",
								desc: "Staff financial wellbeing benefits",
								icon: <Briefcase />,
							},
							{
								title: "Investment Clubs",
								desc: "Collective pooling & governance",
								icon: <BarChart />,
							},
							{
								title: "Fintech Partners",
								desc: "API-first coordination layer",
								icon: <Settings />,
							},
						].map((market, idx) => (
							<div
								key={idx}
								className="group bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-400 hover:from-blue-100 hover:to-cyan-100 transition duration-300 transform hover:-translate-y-1"
							>
								<div className="text-4xl mb-4">{market.icon}</div>
								<h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
									{market.title}
								</h3>
								<p className="text-gray-700 text-sm leading-relaxed">
									{market.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Now */}
			<section
				id="why"
				className="py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16">
						<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 mb-4">
							The infrastructure moment for community finance.
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl">
							Five forces are converging to make this the right moment to build
							OneMAI.
						</p>
					</div>

					<div className="space-y-4">
						{[
							{
								num: "01",
								title: "Rising cost of living — Globally",
								desc: "Communities are actively looking for structured alternatives to expensive credit. Group savings meets that need directly.",
							},
							{
								num: "02",
								title: "Migrant and diaspora financial exclusion",
								desc: "Over 280 million international migrants globally lack access to affordable financial coordination tools designed for their financial culture.",
							},
							{
								num: "03",
								title: "Embedded finance infrastructure is now mature",
								desc: "Regulated EMI partners, open banking APIs, and real-time payment rails mean we can build the coordination layer without becoming a bank.",
							},
							{
								num: "04",
								title: "Digital identity adoption is accelerating",
								desc: "KYC-as-a-service and digital ID frameworks in both the EU and Nigeria have reduced onboarding friction to the point where compliant onboarding is fast.",
							},
							{
								num: "05",
								title: "Trust-based economies are moving online",
								desc: "What was once managed by a trusted community figure with a notebook is moving to mobile — and the communities moving fastest need infrastructure, not just apps.",
							},
						].map((item, idx) => (
							<div
								key={idx}
								className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-blue-400 hover:shadow-md transition duration-300"
							>
								<div className="flex gap-6">
									{/* Number */}
									<div className="flex-shrink-0">
										<span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full">
											<span className="text-sm font-bold text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
												{item.num}
											</span>
										</span>
									</div>

									{/* Content */}
									<div className="flex-grow">
										<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
											{item.title}
										</h3>
										<p className="text-gray-700 leading-relaxed">{item.desc}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4">
							{h.testimonialsText.title}
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							{h.testimonialsText.subtitle}
						</p>
					</div>

					<div className="flex justify-center items-center w-full px-4 overflow-hidden py-8">
						<Swiper
							effect={"cards"}
							grabCursor={true}
							modules={[EffectCards, Autoplay, Pagination]}
							pagination={{ clickable: true }}
							autoplay={{
								delay: 3500,
								disableOnInteraction: false,
							}}
							className="w-full md:w-[90%] max-w-[1400px]"
						>
							{regionData.testimonials.map((story, idx) => (
								<SwiperSlide key={idx} className="rounded-2xl shadow-xl">
									<StoryCard
										img={story.img}
										title={story.title}
										role={story.role}
										quote={story.quote}
										detail={story.detail}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>

			{/* CTA + Newsletter */}
			<section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
				<div className="relative max-w-7xl mx-auto text-center">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black mb-8">
						{h.poweredByTitle}
					</h2>
					<p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
						{h.poweredBySubtitle}
					</p>

					{/* Auth Modal (User/Affiliate Selection) */}
					{showAuthModal && (
						<div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
							<div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
								{/* Close Button */}
								<button
									onClick={() => setShowAuthModal(false)}
									className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
									aria-label="Close modal"
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>

								{/* Modal Content */}
								<div className="text-center mb-6">
									<h2 className="text-2xl font-normal text-gray-800 mb-2">
										{h.authModal.title}
									</h2>
									<p className="text-gray-600">{h.authModal.subtitle}</p>
								</div>

								{/* Selection Buttons */}
								<div className="space-y-4">
									<button
										onClick={() => handleAuthSelection("user")}
										className="w-full py-4 px-6 bg-[#3390D5] text-white rounded-xl font-medium hover:bg-brand-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
									>
										<div className="flex items-center justify-center space-x-3">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
											<span className="text-lg">{h.authModal.userAccount}</span>
										</div>
									</button>

									<button
										onClick={() => handleAuthSelection("affiliate")}
										className="w-full py-4 px-6 bg-white border-2 border-[#3390D5] text-[#3390D5] rounded-xl font-medium hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
									>
										<div className="flex items-center justify-center space-x-3">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
												/>
											</svg>
											<span className="text-lg">
												{h.authModal.affiliateAccount}
											</span>
										</div>
									</button>
								</div>

								<p className="text-sm text-gray-500 text-center mt-6">
									{h.authModal.footer}
								</p>
							</div>
						</div>
					)}

					{/* Social popup */}
					{showSocialPopup && (
						<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
							<div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
								<h3 className="text-xl font-normal text-gray-900 mb-6">
									{h.socialPopup.title}
								</h3>
								<div className="flex justify-center space-x-6">
									<a
										href="https://www.linkedin.com/company/joinonemai/"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-brand-600"
										aria-label="LinkedIn"
									>
										<SvgLinkedIn className="h-8 w-8" />
									</a>
									<a
										href="https://instagram.com/mai.platform/"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-brand-600"
										aria-label="Instagram"
									>
										<SvgInstagram className="h-8 w-8" />
									</a>
									<a
										href="https://web.facebook.com/joinonemai?_rdc=1&_rdr#"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-brand-600"
										aria-label="Facebook"
									>
										<SvgFacebook className="h-8 w-8" />
									</a>
									<a
										href="https://t.me/joinonemai"
										target="_blank"
										rel="noreferrer"
										className="text-gray-600 hover:text-brand-600"
										aria-label="Telegram"
									>
										<SvgTelegram className="h-8 w-8" />
									</a>
								</div>
								<button
									onClick={() => setShowSocialPopup(false)}
									className="mt-6 bg-[#3390D5] text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-700 transition"
								>
									{h.socialPopup.closeButton}
								</button>
							</div>
						</div>
					)}

					{/* CTA cards */}
					{/* Trusted Anchors Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
						{/* Left Card - Text */}
						<div className="bg-[#1f2937] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
							{/* Decorative background shape */}
							<div className="absolute -left-10 -bottom-10 w-64 h-64 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
							<div className="absolute -right-10 -top-10 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

							<div className="relative z-10">
								<h3 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-8">
									{h.trustedAnchorsCard.title}
								</h3>
								<p className="text-lg text-gray-300 mb-8 font-light">
									{h.trustedAnchorsCard.readyText}
								</p>
								<button
									onClick={() => handleAuthSelection("affiliate")}
									className="inline-block bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-white transition transform hover:-translate-y-1 shadow-lg"
								>
									{h.trustedAnchorsCard.buttonText}
								</button>
							</div>
						</div>

						{/* Right Card - Image */}
						<div className="relative min-h-[400px]">
							<img
								src={regionData.images.trustedAnchors}
								alt="Community Hands Stacked"
								className="absolute inset-0 w-full h-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>

					{/* Newsletter (static) */}
					<div className="mt-16 max-w-xl mx-auto">
						<h3 className="text-xl font-normal text-white mb-6">
							{h.newsletter.title}
						</h3>
						<form
							className="flex flex-col sm:flex-row gap-4"
							onSubmit={handleEmailSubmit}
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={h.newsletter.placeholder}
								className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3390D5]"
								required
							/>
							<button
								type="submit"
								disabled={isSubmitting}
								className="bg-[#3390D5] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#3390D5] transition disabled:opacity-60"
							>
								{isSubmitting ? "..." : h.newsletter.buttonText}
							</button>
						</form>
						{submitMsg && (
							<p
								className={`mt-4 text-center ${submitMsg.ok ? "text-green-300" : "text-red-300"}`}
							>
								{submitMsg.text}
							</p>
						)}
					</div>
				</div>
			</section>

			{/* FAQ (trimmed to essentials for brevity) */}
			<section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4">
							{h.faq.title}
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							{h.faq.subtitle}
						</p>
					</div>
					<div className="mt-10 text-center">
						<Link
							to="/faq"
							className="inline-block px-6 py-3 bg-[#3390D5] text-white rounded-lg font-medium hover:bg-[#3390D5]"
						>
							{h.faq.buttonText}
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

// ===== UI bits =====
const Stat = ({ value, label }: { value: string; label: string }) => (
	<div className="text-center">
		<div className="text-4xl font-normal text-brand-600 mb-2">{value}</div>
		<p className="text-gray-600">{label}</p>
	</div>
);

const StoryCard = ({
	img,
	title,
	role,
	quote,
	detail,
}: {
	img: string;
	title: string;
	role: string;
	quote: string;
	detail: string;
}) => (
	<article className="bg-[#3b82f6] rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row h-full min-h-[400px]">
		{/* Left Content */}
		<div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-white relative">
			{/* Decorative shape */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb] rounded-bl-full z-0 opacity-50 transform translate-x-8 -translate-y-8"></div>

			<blockquote className="text-xl md:text-2xl italic font-light leading-relaxed mb-8 relative z-10 whitespace-pre-line">
				{quote}
			</blockquote>

			<div className="mt-auto relative z-10">
				<h3 className="text-xl md:text-2xl font-normal mb-1">{title}</h3>
				<p className="text-blue-100 uppercase tracking-wider text-sm font-medium">
					{role}
				</p>
				{detail && <p className="text-blue-200 text-sm mt-2">{detail}</p>}
			</div>
		</div>

		{/* Right Image */}
		<div className="md:w-5/12 lg:w-4/12 relative min-h-[300px] md:min-h-full">
			{/* Curve overlay for smooth transition */}
			<div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#3b82f6] to-transparent z-10"></div>

			{/* SVG Mask for the curve effect */}
			<div className="absolute top-0 bottom-0 left-[-1px] z-20 text-[#3b82f6] hidden md:block">
				<svg
					height="100%"
					width="80"
					viewBox="0 0 50 100"
					preserveAspectRatio="none"
				>
					<path
						d="M0,0 C30,20 50,50 50,100 L0,100 Z"
						fill="currentColor"
						transform="scale(-1, 1) translate(-50, 0)"
					/>
				</svg>
			</div>

			<img
				src={img}
				alt={title}
				className="absolute inset-0 w-full h-full object-cover"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</article>
);

const FaqItem: React.FC<{
	id: string;
	question: string;
	children: React.ReactNode;
	openItem: string | null;
	onToggle: (id: string) => void;
}> = ({ id, question, children, openItem, onToggle }) => {
	const open = openItem === id;
	return (
		<div className="border rounded-lg bg-white">
			<button
				className="w-full flex justify-between items-center p-4"
				onClick={() => onToggle(id)}
				aria-expanded={open}
			>
				<span className="text-left font-medium">{question}</span>
				<span className="ml-4">{open ? "−" : "+"}</span>
			</button>
			{open && <div className="p-4 pt-0 text-gray-600">{children}</div>}
		</div>
	);
};

// Simple inline SVGs to avoid external deps
const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M5 13l4 4L19 7"
		/>
	</svg>
);
const SvgUserPlus = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0M3 20a6 6 0 0112 0v1H3v-1z"
		/>
	</svg>
);
const SvgUsers = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0m6 3a2 2 0 11-4 0 2 2 0 014 0M7 10a2 2 0 11-4 0 2 2 0 014 0"
		/>
	</svg>
);
const SvgTelegram = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
	</svg>
);
const SvgLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
	</svg>
);
const SvgInstagram = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
	</svg>
);
const SvgFacebook = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
		<path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
	</svg>
);

export default Home;
