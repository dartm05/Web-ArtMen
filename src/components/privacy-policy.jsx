export const PrivacyPolicy = ({ contactInfo }) => {
  const email = contactInfo?.email || "drluisarteagavilla@gmail.com";
  const phone = contactInfo?.phone || "+57 317 227 2287";
  const address =
    contactInfo?.address ||
    "Centro de Negocios Vélez, Bocagrande Cra. 3 # 6 - 120, local 208, Cartagena, Colombia";

  return (
    <section className="privacy-policy" style={{ paddingTop: "140px" }}>
      <div className="container">
        <h1>Privacy Policy &amp; Data Deletion</h1>
        <p>
          <strong>Last updated:</strong> May 2024
        </p>

        <p>
          Dr. Luis Arteaga Villa (&quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;) operates this website, Meta-integrated experiences,
          and related contact channels. This policy describes the personal data
          we collect, how it is used, the choices available to you, and how to
          request data deletion in compliance with Meta platform requirements
          and applicable privacy laws.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Contact details:</strong> name, email, phone, and message
            content submitted through our forms, Meta lead ads, email, or
            WhatsApp chats.
          </li>
          <li>
            <strong>Usage data:</strong> website analytics, device information,
            and online identifiers gathered through cookies, Facebook Pixel, and
            similar tools to measure campaign performance.
          </li>
          <li>
            <strong>Clinical intake details:</strong> optional information you
            choose to share about health goals or medical history when you
            communicate with us.
          </li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>Responding to inquiries and providing medical tourism services.</li>
          <li>Scheduling consultations, follow-ups, and post-operative care.</li>
          <li>
            Sending service updates, educational content, and marketing
            communications (you may opt out at any time).
          </li>
          <li>
            Improving our website performance, advertising effectiveness, and
            patient experience while preventing fraud or abuse.
          </li>
        </ul>

        <h2>Legal Bases</h2>
        <p>
          We process personal data based on your consent, to fulfill a contract
          or pre-contractual request, to comply with legal obligations, and for
          our legitimate interests in operating and safeguarding the practice.
        </p>

        <h2>Sharing and Processors</h2>
        <p>
          We do not sell personal information. We may share it with:
        </p>
        <ul>
          <li>
            Medical and concierge partners who help us deliver the services you
            request.
          </li>
          <li>
            Technology providers such as Meta, EmailJS, analytics platforms, and
            secure hosting services that act as data processors under
            contractual safeguards.
          </li>
          <li>
            Public authorities if required to comply with law, court orders, or
            to protect someone’s vital interests.
          </li>
        </ul>

        <h2>International Transfers</h2>
        <p>
          Data may be stored in Colombia, the United States, or other
          jurisdictions where our partners operate. We use contractual measures
          and industry-standard encryption to help protect data during transfer.
        </p>

        <h2>Retention</h2>
        <p>
          Contact inquiries are retained only as long as necessary to deliver
          the requested service and meet legal or medical record obligations. We
          periodically review and securely delete data that is no longer needed.
        </p>

        <h2>Your Rights and Choices</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, restrict, or object to our use of your data, and to withdraw
          consent. You can also opt out of marketing messages by using the link
          provided in our communications or by contacting us directly.
        </p>

        <h2>Data Deletion Instructions</h2>
        <p>
          You may request deletion of the personal data collected through this
          site, WhatsApp, or any Meta experience we manage by following either
          option below:
        </p>
        <ol>
          <li>
            Email us at <a href={`mailto:${email}`}>{email}</a> with the subject
            line &quot;Data Deletion Request&quot;. Include your full name, the
            phone number or email used with our services, and a description of
            the interaction so we can identify your records.
          </li>
          <li>
            Submit the contact form on this website or message us via WhatsApp
            stating that you are requesting data deletion. Provide the same
            identifying details listed above.
          </li>
        </ol>
        <p>
          We will verify your identity, confirm receipt within 5 business days,
          and delete or anonymize the data within 30 days unless retention is
          legally required. We will also notify third-party processors to remove
          copies when feasible.
        </p>

        <h2>Security</h2>
        <p>
          We use access controls, encryption, authenticated email services, and
          secure data centers to protect personal information. While no system
          is perfectly secure, we continuously monitor for vulnerabilities and
          limit access to personnel with a legitimate need.
        </p>

        <h2>Children</h2>
        <p>
          Our services are intended for adults. We do not knowingly collect data
          from children under the age of 16. If you believe a child has provided
          us information, please contact us so we can delete it.
        </p>

        <h2>Contact Us</h2>
        <p>
          {address}
          <br />
          Phone: {phone}
          <br />
          Email: <a href={`mailto:${email}`}>{email}</a>
        </p>

        <h2>Updates</h2>
        <p>
          We may update this Privacy Policy to reflect changes in practices or
          legal requirements. Significant updates will be posted here with a new
          &quot;Last updated&quot; date.
        </p>
      </div>
    </section>
  );
};
