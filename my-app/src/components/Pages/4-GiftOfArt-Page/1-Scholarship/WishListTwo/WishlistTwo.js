import React from "react";
import "./WishlistTwo.css";
import WishListPhotoTwo from "../../../../../images/GiftOfArt-Images/wish-list-two.png";

const WishListTwo = () => {
  return (
    <section className="WishListTwo">
      <div className="main-container">
        <p className="WishListTwo-intro">
          This is <strong>“CHAD’S WISH LIST”</strong> – Now it’s time to make
          your own!
        </p>
        <div className="WishListTwo-container">
          <div className="WishListTwo-rows">
            <p className="WishListTwo-p">
              In 1991 Chad gave his “wish list” to his girlfriend’s mother who
              was planning a trip to Yugoslavia – legend had it, if you left
              your “wish list” at the statue of the Blessed Mary there, all your
              wishes would come true.
            </p>
            <p className="WishListTwo-p">
              Maria’s mom never made it to Yugoslavia due to a civil war but she
              recently found and mailed Chad’s unopened “wish list,” to me.
              After reading it, it became apparent, Chad didn’t need the statue
              after all... all his wishes had come true...
            </p>
          </div>
          <p className="WishListTwo-signature">- Arista, Chad’s Mom</p>
          <div className="WishListTwo-row-photo-text">
            <div className="WishListTwo-photo">
              <img src={WishListPhotoTwo} alt="Wish List" />
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
