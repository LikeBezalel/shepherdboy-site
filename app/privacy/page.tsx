// app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <p className="mb-6">Effective Date: August 25, 2025</p>

      <p className="mb-6">
        Shepherd Boy Marketing (“Company,” “we,” “our,” or “us”) is committed to
        protecting your privacy. This Privacy Policy explains how we collect,
        use, and safeguard your information when you use our website and
        services.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">1. Information We Collect</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Personal Information:</strong> Name, email, phone number,
          billing address, payment details, and account credentials you provide
          when using our services.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> Browser type, device info,
          usage data, IP address, and other analytics data collected through
          cookies or similar technologies.
        </li>
        <li>
          <strong>Children’s Privacy:</strong> We do not knowingly collect
          personal information from children under 13. If we learn we have, we
          will promptly delete it.
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>Provide, maintain, and improve our services.</li>
        <li>Process transactions and billing.</li>
        <li>Respond to customer support requests.</li>
        <li>Send important service and promotional communications.</li>
        <li>Comply with legal requirements and prevent fraudulent activity.</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">3. Opt-In & Opt-Out</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          By submitting your phone number or email, you consent to receive
          messages from us related to services, promotions, and updates.
        </li>
        <li>
          You may opt out at any time by replying “STOP” to text messages or by
          clicking the “unsubscribe” link in our emails.
        </li>
        <li>
          Standard message and data rates may apply depending on your carrier.
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">4. Sharing of Information</h2>
      <p className="mb-6">
        We do not sell or rent your personal information. We may share your
        information only with:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>Trusted service providers who help us deliver our services.</li>
        <li>
          Legal authorities if required by law, subpoena, or to protect our
          rights.
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">5. Cookies & Tracking</h2>
      <p className="mb-6">
        We use cookies, pixels, and analytics tools (such as Google Analytics)
        to improve user experience and track website performance. You may
        disable cookies in your browser, but some features of our website may
        not function properly.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">6. Your Rights</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>Access, update, or request deletion of your personal data.</li>
        <li>
          Opt out of promotional communications by following the unsubscribe
          instructions.
        </li>
        <li>
          If you are in the EU, you have GDPR rights including data portability
          and objection to processing.
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">7. Data Security</h2>
      <p className="mb-6">
        We implement reasonable technical and organizational safeguards to
        protect your information. However, no system is completely secure, and
        we cannot guarantee absolute protection.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">8. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Any significant
        changes will be communicated through our website or by direct
        notification.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
      <p>
        <strong>Shepherd Boy Marketing</strong>
        <br />
        1609 Abrams Rd, Dallas, TX 75214
        <br />
        📞 945-222-5549
        <br />
        📧{" "}
        <a
          href="mailto:hello@shepherdboymarketing.com"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          hello@shepherdboymarketing.com
        </a>
      </p>
    </div>
  );
}
