export default function GDPR() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Data Protection Rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Data Processing</h2>
            <p>We process personal data only when we have a legal basis to do so, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Consent from the data subject</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. International Transfers</h2>
            <p>When we transfer data outside the EEA, we ensure appropriate safeguards are in place through:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Standard contractual clauses</li>
              <li>Adequacy decisions</li>
              <li>Binding corporate rules</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}