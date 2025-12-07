import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/* --------------------------------- Types --------------------------------- */
type QA = {
  id: string;
  question: string;
  answer: string | React.ReactNode;
};

/* ------------------------------- Page Setup ------------------------------- */
export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  // Static Data
  const faqItems: QA[] = [
    {
      id: "general-1",
      question: "What is OneMAI?",
      answer: "OneMAI is a comprehensive platform designed to streamline your workflow and enhance productivity with AI-driven tools.",
    },
    {
      id: "general-2",
      question: "How do I get started?",
      answer: "Simply sign up for an account, and you can immediately start exploring our features. We offer a guided tour to help you get acquainted.",
    },
    {
      id: "general-3",
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all new users so you can experience the full power of OneMAI before committing.",
    },
    {
      id: "general-4",
      question: "How can I contact support?",
      answer: "You can reach our support team via the contact page or by emailing support@joinOneMAI.com.",
    },
  ];

  const filteredList = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqItems;
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        (typeof item.answer === "string"
          ? item.answer.toLowerCase().includes(q)
          : false)
    );
  }, [faqItems, query]);

  // Back to top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-3 text-gray-600 text-lg">
            Common questions about OneMAI.
          </p>
          <div className="mt-6">
            <Link
              to="/knowledge-base"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#3390D5] hover:bg-blue-700"
            >
              Visit Knowledge Base
            </Link>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex-1"></div>
            <SearchInput value={query} onChange={setQuery} placeholder="Search FAQs..." />
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
                }}
              >
                {qa.answer}
              </FaqItem>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

/* ------------------------------ UI Building ------------------------------- */

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
