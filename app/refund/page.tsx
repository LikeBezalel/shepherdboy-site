// app/refund-policy/page.tsx

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold">Refund & Cancellation Policy</h1>
      <p className="mb-6">Effective Date: August 25, 2025</p>

      <p className="mb-6">
        At Shepherd Boy Marketing, we value our clients and strive to provide
        high-quality marketing services. This Refund & Cancellation Policy
        explains how payments, refunds, and cancellations are handled for our
        services.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">1. Billing & Payments</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          All payments are due at the time of purchase or on the scheduled
          billing date for subscription services.
        </li>
        <li>
          Payments are processed securely using trusted third-party payment
          providers.
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">2. Refunds</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>Non-Refundable Services:</strong> Marketing services,
          subscriptions, and campaign fees are generally non-refundable once
          work has begun.
        </li>
        <li>
          <strong>Refund Exceptions:</strong> Refunds may be considered if:
          <ul className="list-disc space-y-2 pl-6">
            <li>A duplicate payment was made in error.</li>
            <li>A service was not delivered as described.</li>
            <li>A technical error occurred on our end.</li>
          </ul>
        </li>
        <li>
          All approved refunds will be issued to the original payment method
          within <strong>7–10 business days</strong>.
        </li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">3. Cancellations</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          You may cancel subscription-based services at any time by contacting
          us at <a href="mailto:hello@shepherdboymarketing.com"
          className="text-blue-600 dark:text-blue-400 underline">hello@shepherdboymarketing.com</a> or
          calling <strong>945-222-5549</strong>.
        </li>
        <li>Cancellations will take effect at the end of the current billing cycle.</li>
        <li>No partial refunds are provided for unused portions of a subscription period.</li>
      </ul>

      <h2 className="mb-4 text-2xl font-semibold">4. Disputed Charges</h2>
      <p className="mb-6">
        If you believe you were billed incorrectly, please contact us within{" "}
        <strong>10 business days</strong> of the billing date. We will review and
        resolve disputes in good faith.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">5. Changes to This Policy</h2>
      <p className="mb-6">
        We reserve the right to update this Refund & Cancellation Policy at any
        time. Updates will be posted on this page with a revised effective date.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">6. Contact Information</h2>
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
