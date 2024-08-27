import React from "react";
import "./FriendsLetters.css";
import LettersImage from "../../../../../images/GiftOfArt-Images/letter-image.png";

const FriendsLetters = () => {
  return (
    <section className="FriendsLetters">
      <div className="main-container">
        <div className="friends-letter">
          <p className="friends-letter-text">
            “Dear Chad,
            <br />
            I just want you to know that you’ve been
            <br />
            my hero for the past three years. I can’t under-
            <br />
            stand why you even talked to me, I was a freak.
            <br />
            You helped me get self-confidence and overcome
            <br />
            my super shyness… And thank you for your rag-
            <br />
            ing powers.- I never knew how to handle myself
            <br />
            when it comes to a fight with words, now I can
            <br />
            hang with the best of them.”
            <br />
            <br />- Mister D.
          </p>
          <img src={LettersImage} alt="Letter" className="letter-image" />
        </div>
        <div className="friends-letter">
          <p className="friends-letter-text">
            “Dearest Chad,
            <br />
            You’re definitely one of a kind and your
            <br />
            definitely not like the other guys in our society.
            <br />
            I think people don’t know the meaning of friends
            <br />
            until they have you.”
            <br />
            <br />- Miss S.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FriendsLetters;
