import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import '../styles/HomeStyles.css'

function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Webiste</h1>
          <p>Best Food In Azerbaijan</p>
          <Link to="./menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
