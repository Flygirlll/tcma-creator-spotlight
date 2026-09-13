import { createFileRoute } from '@tanstack/react-router';
import { PageHero } from '@/components/site/Marketing';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | TCMA' },
      { name: 'description', content: 'How The Creator Marketing Agency collects, uses, and protects information submitted through this website.' },
      { property: 'og:title', content: 'Privacy Policy | TCMA' },
      { property: 'og:description', content: 'TCMA website privacy policy.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: Page,
});

const sections: { title: string; blocks: (string | string[])[] }[] = [
  {
    title: '1. Who we are',
    blocks: [
      'The Creator Marketing Agency ("TCMA," "we," "us," "our") is the data controller responsible for the personal information collected through this website (the "Site"). If you have any questions about this policy or how we handle your information, you can reach us at hello@thecreatormarketingagency.com.',
    ],
  },
  {
    title: '2. What information we collect',
    blocks: [
      'We collect information in the following ways:',
      [
        'Contact and strategy call requests: When you book a call through our Calendly booking page, Calendly collects your name, email address, and any details you provide about your enquiry. This information is shared with us so we can prepare for and follow up on the call.',
        'Creator applications: When you apply to join our creator network via our application form, we collect the information you submit, which may include your name, email address, location, social media handles, audience size and engagement details, content categories, availability for campaigns, portfolio links, rate information, and a short introduction.',
        'Automatically collected information: Like most websites, we may collect limited technical information automatically when you visit the Site, such as your IP address, browser type, device type, and pages visited, typically through cookies or similar technologies (see Section 7).',
      ],
      'We do not knowingly collect more information than is necessary for the purposes described in this policy, and we do not collect sensitive categories of personal data (such as health, religious, or biometric data) through this Site.',
    ],
  },
  {
    title: '3. How we use your information and our legal basis',
    blocks: [
      'We use the information we collect for the following purposes:',
      [
        'Responding to strategy call bookings and enquiries — Legal basis: Legitimate interest / steps taken at your request prior to entering a contract',
        'Reviewing and following up on creator applications — Legal basis: Consent (given when you submit the application)',
        'Operating, securing, and improving the Site — Legal basis: Legitimate interest',
        'Complying with legal obligations — Legal basis: Legal obligation',
      ],
      'Where we rely on your consent (for example, creator applications), you may withdraw that consent at any time by contacting us — this will not affect the lawfulness of any processing carried out before withdrawal.',
    ],
  },
  {
    title: '4. Third-party services we use',
    blocks: [
      'To operate this Site, we rely on a small number of third-party service providers, who process personal data on our behalf or as independent controllers under their own privacy policies:',
      [
        'Calendly — for scheduling strategy calls',
        'Google Forms — for collecting creator network applications',
        'Supabase — for secure storage of certain form submissions',
        'Vercel — for website hosting',
      ],
      "We choose providers that maintain appropriate technical and organizational security measures. We recommend reviewing each provider's own privacy policy for details of how they process data.",
    ],
  },
  {
    title: '5. International data transfers',
    blocks: [
      'Because we work with global service providers and creators/brands across multiple countries, your information may be processed or stored outside your country of residence, including outside the European Economic Area (EEA) or United Kingdom. Where this occurs, we take reasonable steps to ensure an adequate level of protection is applied, such as relying on providers certified under recognized data protection frameworks or standard contractual clauses approved by the European Commission.',
    ],
  },
  {
    title: '6. Data retention',
    blocks: [
      'We retain personal information only for as long as necessary to fulfil the purposes described in this policy:',
      [
        'Contact and strategy call information is generally retained for as long as needed to manage the business relationship, and then deleted or anonymized.',
        'Creator application information is retained while your application is active or under consideration, and periodically reviewed; you may request deletion at any time (see Section 8).',
      ],
    ],
  },
  {
    title: '7. Cookies',
    blocks: [
      'The Site may use cookies or similar technologies to support basic functionality and, where enabled, to understand how visitors use the Site. You can control or disable cookies through your browser settings. Disabling cookies may affect some functionality of the Site.',
    ],
  },
  {
    title: '8. Your rights under GDPR',
    blocks: [
      'If you are located in the European Economic Area, United Kingdom, or another jurisdiction with similar data protection laws, you have the right to:',
      [
        'Access the personal information we hold about you',
        'Rectify inaccurate or incomplete information',
        'Erase your personal information ("right to be forgotten"), in certain circumstances',
        'Restrict how we process your information',
        'Object to processing based on legitimate interest',
        'Data portability — receive your data in a structured, commonly used format',
        'Withdraw consent at any time, where processing is based on consent',
      ],
      'To exercise any of these rights, contact us at hello@thecreatormarketingagency.com. We will respond within the timeframes required by applicable law.',
      'If you believe we have not handled your personal information appropriately, you also have the right to lodge a complaint with your local data protection supervisory authority.',
    ],
  },
  {
    title: '9. Data security',
    blocks: [
      'We take reasonable technical and organizational measures to protect the personal information we hold against unauthorized access, loss, misuse, or alteration. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: "10. Children's privacy",
    blocks: [
      'This Site is not directed at individuals under the age of 16, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.',
    ],
  },
  {
    title: '11. Changes to this policy',
    blocks: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Effective date" above will indicate when this policy was last updated. We encourage you to review this page periodically.',
    ],
  },
  {
    title: '12. Contact us',
    blocks: [
      'For any questions about this policy or how your personal information is handled, contact us at hello@thecreatormarketingagency.com.',
    ],
  },
];

function Page() {
  return (
    <main>
      <PageHero kicker="Legal" heading="Privacy Policy" />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">Effective date: [insert date]</p>
        <div className="mt-10 space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-3xl">{s.title}</h2>
              <div className="mt-4 space-y-5 text-base leading-8 text-muted-foreground">
                {s.blocks.map((b, i) =>
                  Array.isArray(b) ? (
                    <ul key={i} className="list-disc space-y-3 pl-6">
                      {b.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{b}</p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
