import React from "react";
import "./WishlistTwo.css";
import WishListPhoto from "../../../../images/GiftOfArt-Images/wish-list-two.png";

const WishListTwo = () => {
  return (
    <section className="WishListTwo">
      <div className="main-container">
        <div className="WishListTwo-container">
          <p className="WishListTwo-p">
            This is <strong>“CHAD’S WISH LIST”</strong> – Now it’s time to make
            your own!
          </p>
          <div className="WishListTwo-row-photo-text">
            <div className="WishListTwo-photo">
              <img src={WishListPhoto} alt="Wish List" />
            </div>
            <p className="WishListTwo-text">
              I hope I live an emotional and physically satisfying life! <br />I
              hope I'm healthy till the end. I hope I'm Lucid in mind and soul
              that I reach all my untapped potentials. <br /> I hope that I
              bring happiness to others. <br />I hope I leave a mark on this
              mark and will be remembered as a solid contributing citizen with
              honor and loving dignity. <br /> I hope I leave a rich Legacy to
              my family. <br />
              <br />
              <span className="WishListTwo-signature">- Chad Alan Burtrum</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishListTwo;
