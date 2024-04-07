import React from "react";
import "./Wishlist.css";
import WishListPhoto from "../../../../../images/AboutUs-Images/wish-list.png";

const WishList = () => {
  return (
    <section className="WishList">
      <div className="main-container">
        <h2 className="WishList-header">Chad's "Wish List", 1991</h2>
        <div className="WishList-container">
          <div className="WishList-rows">
            <p className="WishList-p">
              In 1991 Chad gave his “wish list” to his girlfriend’s mother who
              was planning a trip to Yugoslavia – legend had it, if you left
              your “wish list” at the statue of the Blessed Mary there, all your
              wishes would come true.
            </p>
            <p className="WishList-p">
              Marissa’s mom never made it to Yugoslavia due to civil war but she
              recently found and mailed Chad’s unopened “wish list,” to me.
              After reading it, it became apparent, Chad didn’t need the statue
              after all... all his wishes had come true...
            </p>
          </div>
          <p className="WishList-signature">- Arista, Chad’s Mom</p>
          <div className="WishList-row-photo-text">
            <div className="WishList-photo">
              <img src={WishListPhoto} alt="Wish List" />
            </div>
            <p className="WishList-text">
              I hope I live an emotional and physically satisfying life! <br />I
              hope I'm healthy till the end. I hope I'm Lucid in mind and soul
              that I reach all my untapped potentials. <br /> I hope that I
              bring happiness to others. <br />I hope I leave a mark on this
              mark and will be remembered as a solid contributing citizen with
              honor and loving dignity. <br /> I hope I leave a rich Legacy to
              my family. <br /><br />
              <span className="WishList-signature">- Chad Alan Butrum</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishList;
