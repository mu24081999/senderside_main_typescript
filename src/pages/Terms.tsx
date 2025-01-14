export default function Terms() {
  return (
    <div className="pt-10">
      <div className="bg-gray-100 min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-6">
            <strong>Effective Date:</strong> 10-Jan-2025
          </p>
          <p className="text-gray-600 mb-4">
            Welcome to <strong>Senderside.com</strong> ("Senderside," "we,"
            "our," or "us"). By using our services, you agree to these Terms of
            Service ("Terms"). If you do not agree, do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            1. Overview of Services
          </h2>
          <p className="text-gray-600 mb-4">
            Senderside provides services including voice calling, email
            validation, virtual mobile numbers, and SMS services. These Terms
            govern your use of our services and any associated charges.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            2. Pricing and Billing
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            2.1 Voice Calling Charges
          </h3>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>
              <strong>Outbound Calls:</strong> $0.028 per minute. Calls are
              rounded up to the nearest minute.
            </li>
            <li>
              <strong>Inbound Calls:</strong> $0.017 per minute. Calls are also
              rounded up to the nearest minute.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            2.2 Email Validation
          </h3>
          <p className="text-gray-600 mb-4">$0.02 per email validation.</p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            2.3 Virtual Mobile Numbers
          </h3>
          <p className="text-gray-600 mb-4">
            $3.50 per month for each virtual mobile number.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            2.4 SMS Charges
          </h3>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>
              <strong>Inbound SMS:</strong> $0.02 per SMS.
            </li>
            <li>
              <strong>Outbound SMS:</strong> $0.03 per SMS.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            2.5 Payment Terms
          </h3>
          <p className="text-gray-600 mb-4">
            All charges are billed in U.S. dollars and are non-refundable.
            Payment is due in advance for recurring services, and usage-based
            charges will be billed monthly.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            3. Usage Rules
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            3.1 Acceptable Use
          </h3>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>Using our services for spam or unsolicited communications.</li>
            <li>Engaging in fraudulent or illegal activities.</li>
            <li>Violating the intellectual property rights of others.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-6">
            3.2 Account Responsibility
          </h3>
          <p className="text-gray-600 mb-4">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            4. Service Availability
          </h2>
          <p className="text-gray-600 mb-4">
            We strive to provide uninterrupted services but cannot guarantee
            100% uptime. Scheduled maintenance or unforeseen issues may cause
            temporary service interruptions.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            5. Termination
          </h2>
          <ul className="list-disc ml-6 text-gray-600 mb-4">
            <li>You violate these Terms.</li>
            <li>Your account is inactive or unpaid for more than 30 days.</li>
            <li>Required by law or regulatory authority.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            To the maximum extent permitted by law, Senderside shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            7. Dispute Resolution
          </h2>
          <p className="text-gray-600 mb-4">
            In the event of a dispute, you agree to first attempt resolution
            informally by contacting us at{" "}
            <a
              href="mailto:support@senderside.com"
              className="text-blue-500 underline"
            >
              support@senderside.com
            </a>
            . If unresolved, disputes will be settled through arbitration in
            accordance with USA laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            8. Changes to These Terms
          </h2>
          <p className="text-gray-600 mb-4">
            We may update these Terms from time to time. Changes will be posted
            on this page with an updated effective date. Continued use of our
            services constitutes acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms, please contact us at:
          </p>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:support@senderside.com"
              className="text-blue-500 underline"
            >
              support@senderside.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
