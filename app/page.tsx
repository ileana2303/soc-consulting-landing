import { ArrowDown, ArrowUpRight, Check } from "@/components/Icons";
import { Logo } from "@/components/Logo";

const advisoryAreas = [
  {
    title: "Επιχειρηματικές & διοικητικές συμβουλές",
    text: "Συμβουλευτική υποστήριξη για επιχειρηματικά και διοικητικά ζητήματα.",
    style: "service-primary"
  },
  {
    title: "Στρατηγική διαχείριση",
    text: "Υπηρεσίες συμβούλων σε θέματα στρατηγικής διαχείρισης.",
    style: "service-coral"
  },
  {
    title: "Συστήματα & λογισμικό",
    text: "Συμβουλές για θέματα συστημάτων, λογισμικού και τεχνολογικής κατεύθυνσης.",
    style: "service-lilac"
  },
  {
    title: "Χρηματοοικονομικές συμβουλές",
    text: "Υπηρεσίες χρηματοοικονομικής συμβουλευτικής για επιχειρήσεις.",
    style: "service-sage"
  },
  {
    title: "Επιχειρηματική διαχείριση",
    text: "Υποστήριξη σε θέματα οργάνωσης και επιχειρηματικής διαχείρισης.",
    style: "service-paper"
  },
  {
    title: "Marketing & προώθηση πωλήσεων",
    text: "Συμβουλές marketing και υπηρεσίες συμβούλου για την προώθηση πωλήσεων.",
    style: "service-outline"
  }
];

const focusPoints = [
  ["01", "Στρατηγική", "Κατεύθυνση και προτεραιότητες για τη διοίκηση."],
  ["02", "Οργάνωση", "Επιχειρηματική διαχείριση με καθαρό πλαίσιο."],
  ["03", "Τεχνολογία", "Συστήματα και λογισμικό ως εργαλεία λειτουργίας."],
  ["04", "Ανάπτυξη", "Οικονομική, εμπορική και marketing οπτική."]
];

const companyDetails = [
  ["Επωνυμία", "SOC CONSULTING ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε."],
  ["Διακριτικός τίτλος", "SOC CONSULTING"],
  ["Α.Φ.Μ.", "802934710"],
  ["Αρμόδια υπηρεσία", "ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ"],
  ["Έδρα", "Παλαιό Φάληρο, Αττική"],
  ["Διεύθυνση", "Νηρέως 24, Τ.Κ. 17561, Παλαιό Φάληρο"],
  ["Αρ. Γ.Ε.ΜΗ.", "185671501000"],
  ["Εταιρικό κεφάλαιο", "100,00 €"],
  ["Εγγυητικές εισφορές", "Δεν έχει δηλωθεί"]
];

function DetailList({ items }: { items: string[][] }) {
  return (
    <dl className="divide-y divide-white/10">
      {items.map(([label, value]) => (
        <div key={label} className="grid gap-2 py-4 sm:grid-cols-[0.78fr_1.22fr] sm:gap-8">
          <dt className="text-sm text-white/48">{label}</dt>
          <dd className="text-sm font-medium leading-6 text-white sm:text-right">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" aria-label="SOC Consulting — Αρχική">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Κύρια πλοήγηση">
            <a className="nav-link" href="#services">Υπηρεσίες</a>
            <a className="nav-link" href="#focus">Κατεύθυνση</a>
            <a className="nav-link" href="#company">Εταιρεία</a>
          </nav>

          <a href="#company" className="header-cta">
            Contact us!
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate border-b border-ink/10">
        <div className="hero-grid absolute inset-0 -z-10 opacity-70" />
        <div className="absolute -right-36 top-10 -z-10 h-96 w-96 rounded-full bg-lilac/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-coral/15 blur-3xl" />

        <div className="mx-auto grid min-h-[710px] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
          <div className="reveal">
            <p className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-coral" />
              Business · Strategy · Technology
            </p>

            <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.35rem]">
              Η πολυπλοκότητα γίνεται{" "}
              <span className="relative inline-block text-coral">
                καθαρή κατεύθυνση.
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 410 13" fill="none" aria-hidden="true">
                  <path d="M2 9.5C92 1.5 290 1 408 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-lg leading-8 text-ink/65 sm:text-xl">
              Η SOC Consulting δραστηριοποιείται στην επιχειρηματική και στρατηγική
              συμβουλευτική, συνδέοντας διοίκηση, χρηματοοικονομική οπτική,
              τεχνολογία, marketing και πωλήσεις.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#services" className="button-primary">
                Τομείς συμβουλευτικής
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href="#company" className="button-secondary">Γνωρίστε την εταιρεία</a>
            </div>
          </div>

          <div className="reveal reveal-delay relative mx-auto w-full max-w-[520px] lg:ml-auto">
            <div className="strategy-card">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">Advisory map</span>
                <span className="rounded-full bg-sage px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink">Active</span>
              </div>

              <div className="relative mx-auto my-10 aspect-square max-w-[320px]">
                <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
                <div className="absolute inset-[16%] rounded-full border border-white/15 bg-white/[0.04]" />
                <div className="absolute inset-[32%] flex items-center justify-center rounded-full bg-coral text-center shadow-[0_20px_55px_-18px_rgba(235,104,79,0.8)]">
                  <span className="font-serif text-5xl tracking-[-0.08em] text-white">SOC</span>
                </div>
                <span className="orbit-label left-0 top-[23%]">Strategy</span>
                <span className="orbit-label right-[-2%] top-[31%] bg-lilac text-ink">Systems</span>
                <span className="orbit-label bottom-[16%] left-[4%] bg-sage text-ink">Finance</span>
                <span className="orbit-label bottom-[7%] right-[4%] bg-paper text-ink">Growth</span>
              </div>

              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
                <div className="bg-white/[0.055] p-4">
                  <p className="text-xs text-white/40">SOC Consulting</p>
                  <p className="mt-1 font-semibold text-white">SOC CONSULTING ΜΟΝΟΠΡΟΣΩΠΗ Ι Κ Ε</p>
                </div>
                <div className="bg-white/[0.055] p-4">
                  <p className="text-xs text-white/40">Έδρα</p>
                  <p className="mt-1 font-semibold text-white">ΝΗΡΕΩΣ 24, ΠΑΛΑΙΟ ΦΑΛΗΡΟ</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-label">Τομείς συμβουλευτικής</p>
              <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-[-0.035em] sm:text-6xl">
                Μία οπτική,<br />πολλαπλές διαστάσεις.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/60 lg:ml-auto">
              Το αντικείμενο της εταιρείας καλύπτει κρίσιμα πεδία της σύγχρονης
              επιχειρηματικής λειτουργίας, από τη στρατηγική έως τα συστήματα και
              την εμπορική ανάπτυξη.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advisoryAreas.map((service) => (
              <article
                key={service.title}
                className={["service-card", service.style].join(" ")}
              >
                <div className="mt-auto pt-16">
                  <h3 className="max-w-xl font-serif text-3xl leading-tight tracking-[-0.025em]">{service.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 opacity-65">{service.text}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section id="focus" className="relative overflow-hidden bg-coral py-24 text-ink sm:py-32">
        <span className="pointer-events-none absolute -right-10 -top-24 select-none font-serif text-[18rem] leading-none text-white/10 sm:text-[28rem]">S</span>
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-ink/60">Πεδία εστίασης</p>
              <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                Η επιχείρηση ως ενιαίο σύστημα.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-ink/70">
                Διοίκηση, τεχνολογία και εμπορική λειτουργία εξετάζονται ως
                αλληλένδετα μέρη της ίδιας επιχειρηματικής εικόνας.
              </p>
            </div>

            <div className="border-t border-ink/25">
              {focusPoints.map(([number, title, body]) => (
                <div key={number} className="grid gap-4 border-b border-ink/25 py-6 sm:grid-cols-[56px_0.7fr_1.3fr] sm:items-center">
                  <span className="font-mono text-xs font-bold text-ink/45">{number}</span>
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="text-sm leading-6 text-ink/65">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="bg-ink py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-coral">Εταιρικά στοιχεία</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
                Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-white/55">
                Τα βασικά στοιχεία μητρώου, διοίκησης και εταιρικής συμμετοχής της SOC Consulting.
              </p>
              <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/10 px-4 py-2 text-sm font-semibold text-sage">
                <Check className="h-4 w-4" /> Ενεργή επιχείρηση
              </div>
            </div>

            <div className="space-y-5">
              <article className="detail-card">
                <p className="detail-heading">Εταιρικά στοιχεία</p>
                <DetailList items={companyDetails} />

                <div className="mt-5 grid gap-5 border-t border-white/10 pt-5">
                  <div className="rounded-2xl bg-white/[0.04] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Διαχειριστής</p>
                    <p className="mt-3 font-semibold">Πλούσας Σωκράτης</p>
                    <div className="mt-4 border-t border-white/10 pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Email</p>
                      <a
                        href="mailto:sploussa@gmail.com"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-coral transition hover:text-white"
                        aria-label="Αποστολή email στο sploussa@gmail.com"
                      >
                        sploussa@gmail.com
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Εταιρική ιστοσελίδα</p>
                  <p className="mt-3 text-sm font-medium text-white/70">
                    <a
                      href="https://www.soc-consulting.gr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-coral transition hover:text-white"
                      aria-label="Επίσκεψη της ιστοσελίδας της SOC Consulting"
                    >
                      https://www.soc-consulting.gr/
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-6 text-ink/55">
              Επιχειρηματικές, στρατηγικές, χρηματοοικονομικές και τεχνολογικές συμβουλευτικές υπηρεσίες.
            </p>
          </div>
          <div className="text-sm text-ink/50 md:text-right">
            <p>All rights reserved</p>
            <p className="mt-2">© {new Date().getFullYear()} SOC CONSULTING</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
