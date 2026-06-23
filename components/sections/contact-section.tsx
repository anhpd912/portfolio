import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/projects";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="lazy-section flex flex-col px-4 py-10 sm:px-8 sm:py-12">
      <div className="border-2 border-current bg-accent-green p-6 shadow-hard sm:p-10">
        <h2
          id="contact-heading"
          className="font-display text-4xl font-bold text-text-on-raised sm:text-5xl"
        >
          Let&apos;s build something <span className="text-text-secondary">loud</span> together.
        </h2>
        <p className="mt-4 max-w-md text-text-on-raised">
          Open to backend and platform engineering roles — remote or hybrid.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex min-h-11 w-fit items-center border-2 border-current bg-surface-base px-5 py-3 font-display font-bold text-text-on-base hover:underline active:translate-y-0.5"
          >
            Email me @ {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="inline-flex min-h-11 w-fit items-center border-2 border-current bg-surface-raised px-5 py-3 font-display font-bold text-text-on-raised hover:underline active:translate-y-0.5"
          >
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
