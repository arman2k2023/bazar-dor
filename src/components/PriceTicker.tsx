const prices = [
  "🍚 মিনিকেট চাল · ৭২ টাকা ▲ ২.১%",
  "🫘 মসুর ডাল · ১৩৫ টাকা ▼ ১.৪%",
  "🫙 সয়াবিন তেল · ১৭২ টাকা — ০.০%",
  "🥔 আলু · ৩৫ টাকা ▲ ৩.২%",
];

export default function PriceTicker() {
  return (
    <div className="overflow-hidden border-y border-green-100 bg-white py-2">
      <div className="ticker-track flex w-max gap-8 whitespace-nowrap px-4 text-sm">
        {[...prices, ...prices].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
