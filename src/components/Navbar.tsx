const categories = ["সব পণ্য", "চাল", "ডাল", "তেল", "সবজি", "মাছ", "মাংস"];

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--green)] text-xl">
            🛒
          </span>
          <span>
            <span className="block font-bold">বাজার দর</span>
            <span className="block text-xs text-[var(--muted)]">
              প্রয়োজনীয় পণ্যের দাম এক নজরে
            </span>
          </span>
        </a>

        <div className="flex shrink-0 gap-2 text-sm">
          <a href="/signin" className="rounded-lg px-3 py-2 hover:bg-gray-50">
            সাইন ইন
          </a>
          <a
            href="/signup"
            className="rounded-lg bg-[var(--green)] px-3 py-2 text-white"
          >
            সাইন আপ
          </a>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-3">
        {categories.map((category, index) => (
          <a
            key={category}
            href="#সব-পণ্য"
            className={`shrink-0 rounded-full px-3 py-1.5 text-sm ${
              index === 0
                ? "bg-green-50 font-semibold text-[var(--green)]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {category}
          </a>
        ))}
      </nav>
    </header>
  );
}
