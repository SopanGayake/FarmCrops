import React from "react";
import "../LandingPage.css";
import { StartShoppingButton, LoginButton } from "./ReusableComponants"; // Import both buttons

export default function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            padding: "1rem",
          }}
        >
          <div>
            <StartShoppingButton
              onClick={() => console.log("Start Shopping clicked")}
            />{" "}
            {/* Use StartShoppingButton */}
          </div>
          <div>
            <h1>Welcome to FarmCrops</h1>
            <p>
              Your one-stop solution for fresh agricultural products directly
              from the farm.
            </p>
          </div>
          {/* <div>
          <h1>Welcome to FarmCrops</h1>
          <p>Your one-stop solution for fresh agricultural products directly from the farm.</p>
        </div> */}
          <div>
            <LoginButton onClick={() => console.log("Login clicked")} />{" "}
            {/* Use LoginButton */}
          </div>
        </div>
      </header>
      <section className="features section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Product Listings:</strong> Farmers can create detailed
            listings for their products, including descriptions, prices, and
            high-quality images. This allows potential buyers to browse and
            compare different offerings.
          </li>
          <li>
            <strong>Online Ordering:</strong> A website can enable farmers to
            accept online orders, making it convenient for customers to purchase
            products directly from the farm.
          </li>
          <li>
            <strong>Payment Processing:</strong> Integrating secure payment
            gateways allows farmers to accept various payment methods, enhancing
            the purchasing experience for customers.
          </li>
          <li>
            <strong>Customer Engagement:</strong> Farmers can use their website
            to engage with customers through blogs, newsletters, and social
            media integration. This helps build a loyal customer base.
          </li>
          <li>
            <strong>Inventory Management:</strong> A website can include
            inventory management tools that help farmers track product
            availability and manage stock levels efficiently.
          </li>
          <li>
            <strong>Location and Contact Information:</strong> Providing clear
            information about the farm's location, contact details, and
            operating hours helps customers find and reach out to the farm
            easily.
          </li>
          <li>
            <strong>Mobile Responsiveness:</strong> A mobile-friendly website
            ensures that customers can access product information and place
            orders from their smartphones or tablets.
          </li>
        </ul>
      </section>
      <footer className="landing-footer">
        <p>© 2025 FarmCrops. All rights reserved.</p>
      </footer>
    </div>
  );
}
