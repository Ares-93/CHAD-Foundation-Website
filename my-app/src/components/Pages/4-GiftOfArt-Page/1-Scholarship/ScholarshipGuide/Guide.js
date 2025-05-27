import React from "react";
import { useNavigate } from "react-router-dom";
import "./Guide.css";
import GiftOfArtNavigation from "../../GiftOfArtNavigation";

const Guide = () => {
  const navigate = useNavigate();

  return (
    <section className="Guide">
      <GiftOfArtNavigation currentPage="scholarship" />
      <div className="main-container">
        <div className="guide-container">
          {/* opening section */}
          <div>
            <h2 className="guide-header">The Chad Scholarship Awards – 2026</h2>
            <p className="guide-h2-header">Chad Scholarship Guidelines</p>
            <p className="guide-description">
              Chad Alan Butrum believed in nurturing a “Healthy Body, Mind, and
              Spirit.” He never drank alcohol, smoked cigarettes, or used drugs.
              He loved athletics, history, and people and cared about everyone’s
              most precious dreams—regardless of age, heritage, or orientation.
            </p>
            <p className="guide-description">
              Chad passed away at the young age of 26 from an unknown heart
              anomaly while playing football with no history of heart disease.
              The Chad Foundation for Athletes and Artists continues the legacy
              of Chad’s life—“Healthy Body, Mind, and Spirit” by advocating
              preventive heart screenings and a Heart-Healthy lifestyle in the
              “Gift of Heart,” and in “The Gift of Art” by providing a format to
              express the needs of youth’s ‘inner hearts’—through film, books,
              creative writing, and providing scholarships to help young people
              achieve their dreams.
            </p>
            <p className="guide-description">
              The Chad Scholarship Awards are Chad’s Gifts to you—“Make your
              Dreams Come True!”
            </p>
          </div>
          <div className="guide-grid">
            {/* Official rules */}
            <div className="guide-section">
              <p className="guide-h2-header">Official Rules</p>
              <p>
                <strong>Scholarship Awards:</strong> Two $500 Scholarships will
                be awarded to eligible students at your high school—one for the
                “Best Athlete/Scholar/Leader” and one for the “Best Story of the
                Heart.”
              </p>
            </div>
            {/* Entry period */}
            <div className="guide-section">
              <p className="guide-h2-header">Entry Period</p>
              <p>
                Begins:{" "}
                <strong>12:00:01 AM ET, Friday, January 16, 2026</strong>
                <br />
                Ends: <strong>11:59:59 PM ET, Monday, March 16, 2026</strong>
                <br />
                Winners announced: <strong>Thursday, April 16, 2026</strong>
                <br />
                Scholarship award checks dispersed:{" "}
                <strong>Friday, May 15, 2026</strong>
              </p>
            </div>
          </div>
          {/* Schools */}
          <div className="guide-schools-div">
            <p className="guide-schools-div-p">
              For the “Inaugural Chad Scholarship Awards (2026),” The Chad
              Foundation for Athletes and Artists has chosen three high schools
              to participate:
            </p>
            <ul>
              <li>
                North Hollywood High School in North Hollywood, California (Chad
                Butrum’s alma mater)
              </li>
              <li>Curtis High School, Staten Island, New York</li>
              <li>Holyoke High School, Holyoke, Massachusetts</li>
            </ul>
            <p className="guide-schools-div-p">
              CHAD was honored to provide preventive “Echocardiogram Screenings”
              for athletes and students in these three high schools,
              safeguarding students’ outer hearts from unknown heart anomalies.
              CHAD is now focusing on the “inner hearts” to nourish the mental
              and spiritual needs and care for the “whole heart.” Chad lived his
              twenty-six years on earth promoting a “Healthy Body, Mind, and
              Spirit.” His nonprofit charity, The Chad Foundation for Athletes
              and Artists, instills the same values he lived by.
            </p>
          </div>
          {/* Eligibility */}
          <div className="guide-section">
            <p className="guide-h2-header">ELIGIBILITY</p>
            <p>
              The eligibility requirements for students of these three high
              schools wishing to apply are:
            </p>
            <ul>
              <li>
                The student is a legal United States citizen at the time of
                their application.
              </li>
              <li>
                The applicant is enrolled full-time in their senior year at one
                of the three pre-chosen high schools.
              </li>
              <li>
                The high school senior intends to enroll in an accredited
                college, university, trade, technical, or vocational training
                school in the United States within six months of graduating high
                school. (Documented enrollment and acceptance required before
                disbursement of award funds.)
              </li>
              <li>
                The applicant’s parent or legal guardian is a US citizen and
                agrees to monitor the student’s disbursement award to their
                child’s school of choice.
              </li>
            </ul>
          </div>
          {/* Materials */}
          <div>
            <p className="guide-h2-header">Application Materials</p>
            <p>
              <strong>Essay:</strong> The primary factor in determining the Chad
              Scholarship Awardees will be the Student’s Application Essay,
              which can range from 1 to 3 double-spaced pages. Chad truly wanted
              everyone to reach their fullest potential and make their dreams a
              reality. He listened to and encouraged everyone he met. In your
              essay, be genuine and tell us what your dreams are, what you hope
              to accomplish so you can leave your own special mark, and how
              Chad’s Scholarship Award will help make that possible. Tell CHAD
              who you are, what your interests are, your hobbies, your passions,
              your extracurricular activities, what you’ve done, and what you
              plan to do to make the world a better place.
            </p>
            <p>
              <strong>Transcript:</strong> These awards are not based solely on
              high academic merit but also on the applicant’s potential,
              progress, and need. The Scholarship Committee will require an
              official transcript of classes and grades of the entrant. CHAD
              encourages those seeking careers in the trades, and technical and
              vocational training schools to apply. The world needs talents of
              all kinds, whether you aspire to be a doctor, a teacher, an IT
              tech, a hairdresser, or a mechanic, to name a few.
            </p>
            <p>
              <strong>Letters of Recommendation:</strong> The Chad Scholarship
              Award requires two letters of recommendation, which can be from a
              teacher, coach, mentor, employer, volunteer organization, or
              community project you have worked on.
            </p>
          </div>
          {/* Other text */}
          <div className="guide-section">
            <p>
              Winner notification and disbursement of Scholarship Award The
              Award Winner will be required to submit proof of their current
              enrollment in an accredited college or university, trade or
              vocational school located within the United States before the
              prize is awarded. Noncompliance will result in disqualification,
              and an alternate winner may be selected. The prize will be awarded
              within approximately 45 days after the winner is verified.
              Disbursement of Scholarship Award The winner of the Chad
              Scholarship Award will have the full amount of their scholarship
              award placed in their personal account designated by the
              administrator of scholarships at the accredited college,
              university, vocational, or technical school the awardee is
              enrolled in, whom The Chad Foundation will contact and verify. If
              the winner hasn't enrolled in a school, CHAD will hold the funds
              until their enrollment has been confirmed and then send the funds
              directly to the school to be placed in the student’s account.
            </p>
          </div>
          {/* Closing word */}
          <div>
            <p>
              Winners' names and photos will appear on The Chad Foundation for
              Athletes and Artists’ website,{" "}
              <a href="http://www.chad-foundation.org" className="guide-link">
                www.chad-foundation.org
              </a>
              .
            </p>
            <p>
              The applicant, with their signature, agrees to email or snail mail
              a follow-up letter to The Chad Foundation for Athletes and Artists
              one year after their scholarship award—by{" "}
              <strong>May 15, 2027</strong> —stating how their Scholarship Award
              was used and what it meant to the continuance of their educational
              and career goals. The follow-up letter should be one page in
              length, double-spaced, and sent to The Chad Foundation email or
              address below. (Awardees or their parents agree to notify The Chad
              Foundation if a Change of Address occurs.)
            </p>
            <p className="guide-closing">
              <br />
              Arista Butrum, Founder
              <br />
              The Chad Foundation for Athletes and Artists
              <br />
              PO Box 145, New York, NY 10101
              <br />
              or{" "}
              <a href="mailto:Arista@Chad-Foundation.org">
                Arista@Chad-Foundation.org
              </a>
            </p>
          </div>
          {/* Download */}
          <div className="guide-download-div">
            <p className="guide-download-p">Download the application form</p>
            <div className="download-buttons">
              <a
                href="/CHAD SCHOLARSHIP APPLICATION FORM.docx"
                download
                className="download-button"
              >
                DOWNLOAD DOCX
              </a>
              <a
                href="/CHAD SCHOLARSHIP APPLICATION FORM.pdf"
                download
                className="download-button"
              >
                DOWNLOAD PDF
              </a>
            </div>
          </div>

          {/* Guidelines 1 */}
          <div className="guide-section">
            <p className="guide-h2-header">
              Guidelines for the “Best Athlete/Scholar/Leader” — Chad $500
              Scholarship Award
            </p>
            <p>
              Chad loved to play sports. His favorite sports were football,
              baseball, and volleyball. Chad was the master of getting you off
              the couch and out to play a game. And “the game” was no joke; you
              played by the rules, and you played it seriously. You played your
              best, and you never gave up. Sports was a forever bond with Chad
              and his friends. <br />
              <br />
              In your Application Essay, tell us what sports and being an
              athlete mean to you and your life: team spirit, striving for your
              individual best, what lessons you’ve learned from sports, and how
              you plan to apply them to your future. Tell us how you integrate
              being a good scholar and leader with athletics. Are they all
              important? Why is this Scholarship Award important to you?” For
              this award, “Best Athlete/Scholar/Leader,” your Application Essay,
              2 double-spaced pages are requested. <br />
              <br />
              This award will be judged on: the Application Essay, Scholarship
              merit, activities engaged in that show your Leadership qualities
              for your peers and/or the community, and 2 letters of
              recommendation.
            </p>
          </div>
          {/* Guidelines 2 */}
          <div className="guide-section">
            <p className="guide-h2-header">
              Guidelines for the “Best Story of the” Heart” — Chad $500
              Scholarship Award
            </p>
            <p>
              Besides athletics, Chad had a love and appreciation for the arts:
              good film, historical books, music, and dance; he was also a very
              good creative writer. Chad loved to hear “your story”—he really
              listened to what you had to say, what was important to you, where
              you were having a tough time, and was always encouraging and
              supportive highlighting your potential and building your
              confidence. <br />
              <br />
              In writing your “Story of the Heart,” make it truly yours. The
              topic should be about anything transformative in your life: an
              incident or an encounter with a friend, family member, or stranger
              that made an impact on you—something you will remember for the
              rest of your life. It might focus on something that you did to
              improve/change a situation for the better, for yourself or others.
              Anything that shows your personal views on life and how to make
              the world a better place. Also, how did you implement that change?
              Do your very best, check your spelling and grammar, and most
              importantly, write genuinely “from the heart.” The guidelines for
              this year’s Story of the Heart” are: It should be non-fiction,
              that is, a true story—for example, one passed down from generation
              to generation through your family that has deeply inspired your
              life or a small or major event that was traumatic or challenging
              and how you transformed/are transforming the circumstances. It
              should be written in a short story format, 10 to 20 pages in
              length, and double-spaced. <br />
              <br />
              For this Gift of Art award, the applicant will be judged on the
              genuineness of the story content, how well and how creatively it
              is written, and how it impacts the reader, as well as your
              Application Essay (1-2 pages), and two letters of recommendation.
              <br />
              <br />
              Note: The “Story from the Heart” is the required entry for this
              “Chad Gift of Art Award.” It is not the same as your Application
              Essay which can range from 1 to 2 pages, double-spaced, and which
              focuses on your education, financial needs, and your career goals
              in life.
            </p>
          </div>
          {/* Final remarks */}
          <div className="guide-final-remarks">
            <p>
              Invalid outside the U.S. and its territories. Participation
              subject to applicable laws.
            </p>
            <p>
              <strong>
                Thank you for participating. CHAD wishes you the very best of
                success!
              </strong>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/gift-of-art/scholarship")}
        className="exit-guide-button"
      >
        Exit
      </button>
    </section>
  );
};

export default Guide;
