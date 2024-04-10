import React, { useState, useEffect } from "react";
import styles from "./landingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const onCLickHandle = () => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className={styles["landing-page"]}>
      <header className={styles["header"]}>
        <h1 className={styles["logo"]}>Your E-commerce Store</h1>
      </header>

      <section className={styles["hero"]}>
        <h1 className={styles["hero-title"]}>Shop with Elegance</h1>
        <p className={["hero-tile-1"]}>
          Fetching details for a smooth experience. Please wait a moment.
        </p>
        <p className={styles["hero-subtitle"]}>
          Discover a curated selection of products, delivered with ease.
        </p>
        <button onClick={onCLickHandle} className={styles["shop-now-button"]}>
          Shop Now
        </button>
      </section>

      {/* Uncomment these sections to add them back with styling */}
      <section className={styles["benefits"]}>
        <h2>Why Choose Us?</h2>
        <ul className={styles["benefits-list"]}>
          <li>
            <span className={styles["benefit-icon"]}>&#128187;</span>
            Seamless Login &amp; Account Management
          </li>
          <li>
            <span className={styles["benefit-icon"]}>&#128100;</span>
            Expertly Curated Collections
          </li>
          <li>
            <span className={styles["benefit-icon"]}>&#128205;</span>
            Secure Transactions &amp; Fast Delivery
          </li>
          <li>
            <span className={styles["benefit-icon"]}>&#128101;</span>
            Dedicated Customer Support
          </li>
        </ul>
      </section>

      <section className={styles["products"]}>
        <h2>Featured Products</h2>
        <div className={styles["product-grid"]}>
          {/* Add multiple product cards with image, name, price, hover effect */}
        </div>
      </section>

      <section className={styles["cta"]}>
        <h2>Ready to Explore?</h2>
        <a href="#" className={styles["explore-products-button"]}>
          Explore Products
        </a>
      </section>

      <footer className={styles["footer"]}>
        <p>Copyright &copy; {new Date().getFullYear()} Your E-commerce Store</p>
        <ul className={styles["social-media"]}>
          <li>
            <a href="#">
              <i className={styles["fa fa-facebook-square"]}></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={styles["fa fa-instagram"]}></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className={styles["fa fa-twitter"]}></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default LandingPage;
