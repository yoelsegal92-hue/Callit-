"use client";

const cards = [
  { name: "Maya", to: "Sarah", reveals: "Jan 14, 2027", text: "I'm not saying it to your face because I know you're not ready to hear it. But I'm saying it here, sealed, with a date on it. Because that's what best friends are for. You're going to hate me for this and then love me for it. He's not it. You deserve someone who makes you feel chosen every single day — not someone you have to convince yourself about." },
  { name: "Daniel", to: "2 contacts", reveals: "Mar 3, 2027", text: "Everyone in that room thought I was being dramatic. I wasn't. That company is done. Marking the date." },
  { name: "Sophia", to: "6 contacts", reveals: "Dec 31, 2026", text: "My sister thinks I'm jealous. I'm not. I just know her better than she knows herself. She'll be back home within the year." },
];

export default function Page() {
  return (
    <main className="bg-[#0e0e0e] text-[#f0ece4] min-h-screen">

      <nav className="flex justify-between items-center px-16 py-8 border-b border-white/10">
        <span className="font-serif text-2xl font-black">Call<span className="text-[#c8441a]">it</span></span>
        <button className="font-mono text-xs uppercase tracking-widest bg-[#c8441a] text-white px-5 py-2">Get started</button>
      </nav>

      <section className="min-h-[90vh] flex flex-col justify-center px-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[#c8441a] mb-6">— The prediction vault</p>
        <h1 className="font-serif text-[clamp(3.5rem,8vw,8rem)] font-black leading-none max-w-4xl">
          You called it.<br /><em className="text-[#c8441a]">Prove it.</em>
        </h1>
        <p className="text-lg text-[#7a7570] max-w-md leading-relaxed mt-8">Lock in your predictions before they happen. Send timestamped proof to your contacts.</p>
        <div className="flex gap-5 mt-12 items-center">
          <button className="font-mono text-xs uppercase tracking-widest bg-[#c8441a] text-white px-10 py-4">Make your prediction →</button>
          <button className="font-mono text-xs uppercase tracking-widest text-[#7a7570] border-b border-[#7a7570]">See how it works</button>
        </div>
      </section>

      <section className="bg-[#161616] border-t border-white/10 px-16 py-24 grid grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.name} className="bg-[#1e1e1e] border border-white/10 p-8 flex flex-col">
            <div className="flex justify-between mb-5">
              <span className="text-sm font-medium">{c.name}</span>
              <span className="font-mono text-xs text-[#7a7570]">🔒 Sealed</span>
            </div>
            <p className="font-serif italic leading-relaxed flex-1 mb-6">"{c.text}"</p>
            <div className="flex justify-between border-t border-white/10 pt-4 font-mono text-[0.6rem]">
              <span className="text-[#7a7570]">sent to {c.to}</span>
              <span className="text-[#c8441a]">Reveals {c.reveals}</span>
            </div>
          </div>
        ))}
      </section>

      <footer className="px-16 py-8 border-t border-white/10 flex justify-between font-mono text-xs text-[#7a7570]">
        <span className="font-serif text-xl font-black text-[#f0ece4]">Call<span className="text-[#c8441a]">it</span></span>
        <span>© 2026 Callit. All predictions reserved.</span>
        <span>You knew first.</span>
      </footer>

    </main>
  );
}
