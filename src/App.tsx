import { FormEvent, ReactNode, useState } from "react";

const phone = "33939120";
const whatsapp = "97430138639";

const customerImages = {
  furniture: "/images/customer/c086e285-760c-479e-86a8-e02bac46441b.png",
  loadedTruck: "/images/customer/38320499-a53d-4ac0-a626-fb1dd13064c0.png",
  movers: "/images/customer/0f05607f-924e-44dc-9996-50cf7404dbf8.png",
  boxesTruck: "/images/customer/385fafdc-16c0-4751-b99a-8a323982ca2b.png",
};

function Icon({
  children,
  size = 22,
  className = "",
}: {
  children: ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

const icons = {
  arrow: (
    <Icon size={18}>
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </Icon>
  ),
  box: (
    <Icon size={28}>
      <path d="m4 7.5 8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M4 7.5v9l8 4 8-4v-9M12 11.5v9" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  ),
  building: (
    <Icon size={28}>
      <path d="M4 21h16M6 21V5h9v16M15 10h3v11M9 8h3M9 12h3M9 16h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  ),
  truck: (
    <Icon size={28}>
      <path d="M3 6h11v11H3V6ZM14 10h4l3 3v4h-7v-7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="#fff" stroke="currentColor" strokeWidth="1.8" />
    </Icon>
  ),
  tool: (
    <Icon size={28}>
      <path d="m14.5 6.5 3-3a4 4 0 0 1-5 5L5 16l3 3 7.5-7.5a4 4 0 0 1 5-5l-3 3-3-3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  ),
  wrap: (
    <Icon size={28}>
      <path d="M5 6h14v14H5V6ZM8 3h8v3H8V3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="m7 10 10 6M7 15l8 5M12 6l5 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </Icon>
  ),
  pin: (
    <Icon size={20}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </Icon>
  ),
  phone: (
    <Icon size={20}>
      <path d="M8.3 3H5.4C4.6 3 4 3.7 4.1 4.5c.7 8 7.1 14.4 15.1 15.1.8.1 1.5-.6 1.5-1.4v-2.9l-4.2-1-1.2 2c-3.2-1.4-5.8-4-7.2-7.2l2-1.2-1-4.2A1 1 0 0 0 8.3 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  ),
  mail: (
    <Icon size={20}>
      <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.8" width="18" x="3" y="5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </Icon>
  ),
  menu: (
    <Icon size={25}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </Icon>
  ),
  close: (
    <Icon size={25}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </Icon>
  ),
  check: (
    <Icon size={16}>
      <path d="m4 8 3 3 6-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </Icon>
  ),
};

const services = [
  {
    icon: icons.box,
    title: "House & Villa Moving",
    text: "Careful end-to-end moving for apartments, homes, and villas anywhere in Qatar.",
  },
  {
    icon: icons.building,
    title: "Office Relocation",
    text: "Organized commercial moves designed to keep your business running smoothly.",
  },
  {
    icon: icons.wrap,
    title: "Packing & Unpacking",
    text: "Protective wrapping and secure packing for furniture, appliances, and fragile items.",
  },
  {
    icon: icons.truck,
    title: "Transport & Pickup",
    text: "Reliable truck and pickup transport for single items or complete relocations.",
  },
  {
    icon: icons.tool,
    title: "Carpentry Services",
    text: "Professional dismantling, assembly, fitting, and furniture repair by skilled hands.",
  },
  {
    icon: icons.box,
    title: "Loading & Unloading",
    text: "Efficient, careful handling by an experienced moving team from door to door.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function sendQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello Amran Movers, I would like a free moving quote.",
      `Name: ${form.get("name")}`,
      `Phone: ${form.get("phone")}`,
      `Service: ${form.get("service")}`,
      `Move details: ${form.get("details") || "Not provided"}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#12233d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1d35]/95 text-white backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a className="flex items-center gap-3" href="#home" aria-label="Amran Movers home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4a624] text-[#0b1d35]">{icons.truck}</span>
            <span>
              <strong className="block text-[17px] leading-5 tracking-tight">AMRAN MOVERS</strong>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-white/55">& PACKERS</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex" aria-label="Main navigation">
            {["Home", "Services", "About", "Our Work", "Contact"].map((item) => (
              <a className="transition hover:text-[#f4a624]" href={`#${item.toLowerCase().replace(" ", "-")}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a className="hidden items-center gap-2 rounded-lg bg-[#f4a624] px-5 py-3 text-sm font-extrabold text-[#0b1d35] transition hover:bg-[#ffbd4d] lg:flex" href={`tel:${phone}`}>
            {icons.phone} {phone}
          </a>
          <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? icons.close : icons.menu}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0b1d35] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            {["Home", "Services", "About", "Our Work", "Contact"].map((item) => (
              <a className="block border-b border-white/10 py-3 text-sm font-semibold" href={`#${item.toLowerCase().replace(" ", "-")}`} key={item} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section className="hero-grid relative overflow-hidden bg-[#0b1d35] pb-20 pt-32 text-white lg:pb-28 lg:pt-44" id="home">
          <div className="absolute inset-0 opacity-[0.055]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f8c363]">
                <span className="h-2 w-2 rounded-full bg-[#f4a624]" />
                Reliable movers across Qatar
              </div>
              <h1 className="max-w-2xl font-display text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[76px]">
                Your move, made <span className="text-[#f4a624]">simple.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Professional moving, packing, transport, and carpentry services for homes, villas, and offices throughout Qatar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#f4a624] px-6 py-4 text-sm font-extrabold text-[#0b1d35] transition hover:-translate-y-0.5 hover:bg-[#ffbd4d]" href="#quote">
                  Get a free quote {icons.arrow}
                </a>
                <a className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/[0.06] px-6 py-4 text-sm font-bold transition hover:bg-white/10" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/65">
                {["Careful handling", "Fair pricing", "Available daily"].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#f4a624] text-[#0b1d35]">{icons.check}</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px]">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-3xl border border-[#f4a624]/35" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-2 shadow-2xl shadow-black/30">
                <img
                  alt="Packed boxes ready for a professional move"
                  className="h-[420px] w-full rounded-[22px] object-cover sm:h-[520px]"
                  src="/images/hero-moving-boxes.jpg"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-[#0b1d35]/90 p-4 backdrop-blur sm:inset-x-auto sm:left-6 sm:flex sm:items-center sm:gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f4a624] text-[#0b1d35]">{icons.pin}</span>
                  <div className="mt-3 sm:mt-0">
                    <span className="block text-xs text-white/55">Based in</span>
                    <strong className="text-sm">Najma, Souq Haraj</strong>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-white px-5 py-4 text-[#0b1d35] shadow-xl sm:right-[-24px]">
                <strong className="block text-2xl font-extrabold">All Qatar</strong>
                <span className="text-xs font-semibold text-[#677386]">Door-to-door service</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d9d7d0] bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[#e5e2dc] px-5 py-7 md:grid-cols-4 lg:px-8">
            {[
              ["Daily", "Availability"],
              ["100%", "Careful handling"],
              ["Across", "All Qatar"],
              ["Direct", "WhatsApp support"],
            ].map(([value, label]) => (
              <div className="px-3 text-center md:px-6" key={label}>
                <strong className="block text-xl font-extrabold text-[#12233d] sm:text-2xl">{value}</strong>
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7b8491]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad" id="services">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="eyebrow">What we do</span>
                <h2 className="section-title mt-4">Moving services, done right.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-[#667085]">
                From the first box to the final placement, our team handles every stage with care and efficiency.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <article className="service-card group" key={service.title}>
                  <span className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-[#fff3d9] text-[#d58300] transition group-hover:bg-[#f4a624] group-hover:text-[#0b1d35]">
                    {service.icon}
                  </span>
                  <span className="absolute right-6 top-6 text-xs font-extrabold tracking-[0.12em] text-[#c3c5c9]">0{index + 1}</span>
                  <h3 className="text-xl font-extrabold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#697383]">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white section-pad" id="about">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
            <div className="relative min-h-[520px]">
              <img alt="Furniture carefully wrapped before moving" className="absolute left-0 top-0 h-[82%] w-[78%] rounded-[24px] object-cover shadow-xl" src={customerImages.furniture} />
              <img alt="Amran Movers truck loaded for transport" className="absolute bottom-0 right-0 h-[48%] w-[52%] rounded-[20px] border-8 border-white object-cover shadow-xl" src={customerImages.loadedTruck} />
              <div className="absolute bottom-7 left-4 rounded-2xl bg-[#f4a624] px-5 py-4 text-[#0b1d35] shadow-lg">
                <strong className="block text-xl font-extrabold">Real care.</strong>
                <span className="text-xs font-bold">Real moving experience.</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">Why choose Amran</span>
              <h2 className="section-title mt-4">We move your belongings like they’re our own.</h2>
              <p className="mt-6 text-base leading-7 text-[#667085]">
                Moving does not have to be stressful. Our experienced team plans, packs, carries, and transports your belongings with the attention they deserve.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  ["Professional packing", "Furniture and delicate items are wrapped and secured before transport."],
                  ["Skilled moving team", "Careful hands for dismantling, carrying, loading, and reassembly."],
                  ["Clear communication", "Direct contact and practical updates from booking to delivery."],
                ].map(([title, text]) => (
                  <div className="flex gap-4" key={title}>
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#fff1cf] text-[#c87800]">{icons.check}</span>
                    <div>
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#6b7483]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="mt-9 inline-flex items-center gap-2 text-sm font-extrabold text-[#b46d00] transition hover:gap-3" href={`tel:${phone}`}>
                Talk to our team {icons.arrow}
              </a>
            </div>
          </div>
        </section>

        <section className="section-pad" id="our-work">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center">
              <span className="eyebrow">Recent work</span>
              <h2 className="section-title mx-auto mt-4 max-w-2xl">Handled with care, from door to door.</h2>
            </div>
            <div className="mt-12 grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-4">
              <figure className="work-card lg:col-span-2 lg:row-span-2">
                <img alt="Wrapped furniture ready for safe transport" src={customerImages.furniture} />
                <figcaption>Furniture packing</figcaption>
              </figure>
              <figure className="work-card lg:col-span-2">
                <img alt="Movers wrapping and preparing furniture" src={customerImages.movers} />
                <figcaption>Careful handling</figcaption>
              </figure>
              <figure className="work-card">
                <img alt="Loaded moving truck in Qatar" src={customerImages.loadedTruck} />
                <figcaption>Home relocation</figcaption>
              </figure>
              <figure className="work-card">
                <img alt="Boxes and furniture loaded for moving" src={customerImages.boxesTruck} />
                <figcaption>Safe transport</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-[#0b1d35] py-16 text-white lg:py-20" id="quote">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
            <div>
              <span className="eyebrow !text-[#f4a624]">Free estimate</span>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Tell us about your move.</h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
                Share a few details and we’ll open WhatsApp with your request ready to send.
              </p>
              <div className="mt-8 space-y-4 text-sm">
                <a className="flex items-center gap-3 font-bold transition hover:text-[#f4a624]" href={`tel:${phone}`}>{icons.phone} {phone}</a>
                <a className="flex items-center gap-3 font-bold transition hover:text-[#f4a624]" href="mailto:mdamran2900500@gmail.com">{icons.mail} mdamran2900500@gmail.com</a>
                <span className="flex items-center gap-3 font-bold">{icons.pin} Najma, Souq Haraj, Qatar</span>
              </div>
            </div>
            <form className="grid gap-4 rounded-[24px] bg-white p-6 text-[#12233d] shadow-2xl sm:grid-cols-2 sm:p-8" onSubmit={sendQuote}>
              <label className="form-label">
                Your name
                <input name="name" placeholder="Enter your name" required />
              </label>
              <label className="form-label">
                Phone number
                <input name="phone" placeholder="+974" required type="tel" />
              </label>
              <label className="form-label sm:col-span-2">
                Service needed
                <select defaultValue="" name="service" required>
                  <option disabled value="">Select a service</option>
                  <option>House or villa moving</option>
                  <option>Office relocation</option>
                  <option>Packing and unpacking</option>
                  <option>Transport or pickup</option>
                  <option>Carpentry service</option>
                  <option>Loading and unloading</option>
                </select>
              </label>
              <label className="form-label sm:col-span-2">
                Move details
                <textarea name="details" placeholder="From where, to where, and preferred date" rows={3} />
              </label>
              <button className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#f4a624] px-6 py-4 text-sm font-extrabold transition hover:bg-[#ffbd4d] sm:col-span-2" type="submit">
                Request quote on WhatsApp {icons.arrow}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#071426] text-white" id="contact">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
          <div>
            <a className="flex items-center gap-3" href="#home">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4a624] text-[#0b1d35]">{icons.truck}</span>
              <span className="font-extrabold">AMRAN MOVERS<br /><small className="tracking-[0.18em] text-white/50">& PACKERS</small></span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">Simple, careful, and reliable moving services across Qatar.</p>
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4a624]">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <a className="block hover:text-white" href={`tel:${phone}`}>Mobile: {phone}</a>
              <a className="block hover:text-white" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: 30138639</a>
              <a className="block break-all hover:text-white" href="mailto:mdamran2900500@gmail.com">mdamran2900500@gmail.com</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f4a624]">Service area</h3>
            <p className="mt-5 text-sm leading-6 text-white/70">Based in Najma, Souq Haraj<br />Serving homes and businesses across Qatar</p>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#f4a624]" href="https://maps.google.com/?q=Najma+Souq+Haraj+Qatar" target="_blank" rel="noreferrer">View on map {icons.arrow}</a>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Amran Movers and Packers. All rights reserved.
        </div>
      </footer>

      <a className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-extrabold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat with Amran Movers on WhatsApp">
        <span className="relative h-2.5 w-2.5 rounded-full bg-white before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-white" />
        WhatsApp
      </a>
    </div>
  );
}

export default App;
