import React from "react";
import './PrivacyPolicy.css'
import privacyPolicyHero from "../../../../assets/images/privacyPolicyHero.jpg";
import Hero from "../../../../Hero";

const PrivacyPolicy = () => {
  return (
    <>
      <Hero img={privacyPolicyHero} />
      <body>
        <main>
          <div className="PrivacyPolicy">
            <div className="columns">
              <p className>
                Protecting your private information is our priority. This
                Statement of Privacy applies to
                https://recipes-by-ingredients.herokuapp.com/ and jennieCreation
                and governs data collection and usage.
              </p>
              <p>
                {" "}
                For the purposes of this Privacy Policy, unless otherwise noted,
                all references to jennieCreation include
                https://recipes-by-ingredients.herokuapp.com/.{" "}
              </p>
              <p>
                This website allows users to get recipes based off of
                ingredients. Users also have the option of creating a favorites
                list.
              </p>
              <p>
                {" "}
                By using this jennieCreation website, you consent to the data
                practices described in this statement.{" "}
              </p>
              <p>
                Sharing Information with Third Parties: jennieCreation does not
                sell, rent or lease its users lists to third parties.
              </p>
              <p>
                jennieCreation may disclose your personal information, without
                notice, if required to do so by law or in the good faith belief
                that such action is necessary to: (a) conform to the edicts of
                the law or comply with legal process served on jennieCreation or
                the site; (b) protect and defend the rights or property of
                jennieCreation; and/or (c) act under exigent circumstances to
                protect the personal safety of users of jennieCreation, or the
                public. Automatically Collected Information Information about
                your computer hardware and software may be automatically
                collected by jennieCreation. This information can include: your
                IP address, browser type, domain names, access times and
                referring website addresses. This information is used for the
                operation of the service, to maintain quality of the service,
                and to provide general statistics regarding use of the
                jennieCreation website.
              </p>
              <p>
                Right to Deletion Subject to certain exceptions set out below,
                on receipt of a verifiable request from you, we will:
              </p>
              <p> • Delete your personal information from our records; and</p>
              <p>
                {" "}
                • Direct any service providers to delete your personal
                information from their records. Please note that we may not be
                able to comply with requests to delete your personal information
                if it is necessary to:
              </p>
              <p>
                {" "}
                • Detect security incidents, protect against malicious,
                deceptive, fraudulent, or illegal activity; or prosecute those
                responsible for that activity; • Debug to identify and repair
                errors that impair existing intended functionality;
              </p>
              <p>
                {" "}
                • Exercise free speech, ensure the right of another user to
                exercise his or her right of free speech, or exercise another
                right provided for by law;
              </p>
              <p>
                {" "}
                • Comply with the California Electronic Communications Privacy
                Act;
              </p>
              <p>
                {" "}
                • Engage in public or peer-reviewed scientific, historical, or
                statistical research in the public interest that adheres to all
                other applicable ethics and privacy laws, when our deletion of
                the information is likely to render impossible or seriously
                impair the achievement of such research, provided we have
                obtained your informed consent;
              </p>
              <p>
                {" "}
                • Enable solely internal uses that are reasonably aligned with
                your expectations based on your relationship with us;
              </p>
              <p> • Comply with an existing legal obligation; or </p>
              <p>
                {" "}
                • Otherwise use your personal information, internally, in a
                lawful manner that is compatible with the context in which you
                provided the information.
              </p>
              <p>
                {" "}
                Children Under Thirteen: jennieCreation does not knowingly
                collect personally identifiable information from children under
                the age of thirteen. If you are under the age of thirteen, you
                must ask your parent or guardian for permission to use this
                website.
              </p>
              <p>
                {" "}
                Changes to this Statement jennieCreation reserves the right to
                change this Privacy Policy from time to time.
              </p>
              <p>
                {" "}
                Your continued use of the Site and/or Services available through
                this Site after such modifications will constitute your:
              </p>
              <p> (a) acknowledgment of the modified Privacy Policy and </p>
              <p> (b) agreement to abide and be bound by that Policy.</p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default PrivacyPolicy
