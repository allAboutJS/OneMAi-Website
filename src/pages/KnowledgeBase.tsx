import React, { useEffect, useMemo, useRef, useState } from "react";

/* --------------------------------- Types --------------------------------- */
type TabKey = "users" | "partners";

type QA = {
    id: string; // unique per page (e.g., "user-1")
    question: string;
    answer: string | React.ReactNode;
};

/* ------------------------------- Page Setup ------------------------------- */
export default function KnowledgeBasePage() {
    const [tab, setTab] = useState<TabKey>("users");
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const topRef = useRef<HTMLDivElement>(null);

    // Data State
    const [faqItems, setFaqItems] = useState<QA[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch Data
    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await fetch('https://api.joinonemai.com/api/app/fetch-knowledge-base');
                if (!response.ok) {
                    throw new Error('Failed to fetch Knowledge Base items');
                }
                const data = await response.json();
                // Map API response to QA type if needed, assuming data.knowledgeBaseItems is the array
                const mappedItems = (data.knowledgeBaseItems || []).map((item: any) => ({
                    id: item._id,
                    question: item.question,
                    answer: item.answer,
                }));
                setFaqItems(mappedItems);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchFaqs();
    }, []);

    // Filtering
    // Since we don't have categories from API yet, we'll show all items for now
    // or we could just ignore the tabs. Let's show all items in "users" tab for now.
    const activeList = faqItems;

    const filteredList = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return activeList;
        return activeList.filter(
            (item) =>
                item.question.toLowerCase().includes(q) ||
                (typeof item.answer === "string"
                    ? item.answer.toLowerCase().includes(q)
                    : false)
        );
    }, [activeList, query]);

    // Open by hash on load or when hash changes
    useEffect(() => {
        const applyHash = () => {
            const h = window.location.hash.replace("#", "");
            if (!h) return;
            // const isUser = h.startsWith("user-");
            // const isPartner = h.startsWith("partner-");
            // if (isUser) setTab("users");
            // if (isPartner) setTab("partners");
            setOpenItem(h);
            // Slight delay to ensure content is rendered before scrolling
            requestAnimationFrame(() => {
                const el = document.getElementById(h);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        };
        if (!loading) {
            applyHash();
        }
        window.addEventListener("hashchange", applyHash);
        return () => window.removeEventListener("hashchange", applyHash);
    }, [loading]);

    // Back to top visibility
    const [showTop, setShowTop] = useState(false);
    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 300);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Build FAQ Schema for visible list (SEO)
    const jsonLd = useMemo(() => {
        const qaForSchema = filteredList.slice(0, 15); // cap for size
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: qaForSchema.map((qa) => ({
                "@type": "Question",
                name: qa.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        typeof qa.answer === "string"
                            ? qa.answer
                            : // If answer is JSX, strip tags naive:
                            (React.isValidElement(qa.answer) ? renderNodeText(qa.answer) : ""),
                },
            })),
        };
    }, [filteredList]);

    if (loading) {
        return (
            <div className="min-h-screen py-20 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3390D5]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen py-20 flex justify-center items-center text-red-500">
                Error: {error}
            </div>
        );
    }

    return (
        <main className="bg-white">
            {/* Back to Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className={[
                    "fixed bottom-6 right-6 bg-[#3390D5] text-white p-3 rounded-full shadow-lg hover:bg-brand-700 focus:outline-none z-50 transition",
                    showTop ? "opacity-100" : "opacity-0 pointer-events-none",
                ].join(" ")}
            >
                <ArrowUpIcon className="h-6 w-6" />
            </button>

            {/* Hero (compact) */}
            <section className="bg-gray-50 border-b">
                <div ref={topRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Knowledge Base</h1>
                    <p className="mt-3 text-gray-600 text-lg">
                        Search our knowledge base for answers.
                    </p>
                </div>
            </section>

            {/* Controls */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        {/* Tabs removed for now as API doesn't distinguish */}
                        {/* <div className="flex justify-center gap-3">
              <TabButton
                active={tab === "users"}
                onClick={() => {
                  setTab("users");
                  setOpenItem(null);
                  setQuery("");
                }}
              >
                For Users
              </TabButton>
              <TabButton
                active={tab === "partners"}
                onClick={() => {
                  setTab("partners");
                  setOpenItem(null);
                  setQuery("");
                }}
              >
                For Partners
              </TabButton>
            </div> */}
                        <div className="flex-1"></div>

                        <SearchInput value={query} onChange={setQuery} placeholder="Search Knowledge Base..." />
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto space-y-4">
                    {filteredList.length === 0 ? (
                        <EmptyState />
                    ) : (
                        filteredList.map((qa) => (
                            <FaqItem
                                key={qa.id}
                                id={qa.id}
                                question={qa.question}
                                open={openItem === qa.id}
                                onToggle={() => {
                                    const next = openItem === qa.id ? null : qa.id;
                                    setOpenItem(next);
                                    // update hash for deep-linking
                                    if (next) {
                                        history.replaceState(null, "", `#${qa.id}`);
                                    } else {
                                        history.replaceState(null, "", " ");
                                    }
                                }}
                            >
                                {qa.answer}
                            </FaqItem>
                        ))
                    )}
                </div>
            </section>

            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </main>
    );
}

/* ------------------------------ UI Building ------------------------------- */

function TabButton({
    active,
    onClick,
    children,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            onClick={onClick}
            className={[
                "px-5 py-2 rounded-lg font-semibold transition",
                active ? "bg-[#3390D5] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            ].join(" ")}
        >
            {children}
        </button>
    );
}

function SearchInput({
    value,
    onChange,
    placeholder,
}: {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    return (
        <label className="relative block w-full md:w-80">
            <span className="sr-only">Search</span>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-gray-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <SearchIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400 pointer-events-none" />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                >
                    ×
                </button>
            )}
        </label>
    );
}

function FaqItem({
    id,
    question,
    open,
    onToggle,
    children,
}: {
    id: string;
    question: string;
    open: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        if (open) {
            el.style.maxHeight = el.scrollHeight + "px";
        } else {
            el.style.maxHeight = "0px";
        }
    }, [open]);

    // Keyboard accessibility (Enter/Space)
    const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
        }
    };

    return (
        <article id={id} className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <button
                onClick={onToggle}
                onKeyDown={onKeyDown}
                aria-expanded={open}
                aria-controls={`${id}-content`}
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none"
            >
                <span className="font-semibold text-gray-900">{question}</span>
                <ChevronIcon className={`h-6 w-6 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            <div
                id={`${id}-content`}
                ref={contentRef}
                className="px-5 overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: 0 }}
            >
                <div className="py-3 text-gray-700">{children}</div>
            </div>
        </article>
    );
}

function EmptyState() {
    return (
        <div className="text-center border rounded-xl p-10 bg-gray-50">
            <p className="text-gray-600">No results. Try a different search.</p>
        </div>
    );
}

/* --------------------------------- Icons --------------------------------- */
function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
        </svg>
    );
}
function ChevronIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}
function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7 7 7M12 3v18" />
        </svg>
    );
}

/* ------------------------------ Helper Utils ----------------------------- */
// Naive renderer to extract text from a ReactNode for schema
function renderNodeText(node: React.ReactNode): string {
    if (node == null || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(renderNodeText).join(" ");
    if (React.isValidElement(node)) return renderNodeText(node.props.children);
    return "";
}
