import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/2banner.jpg";
import '../styles/HomeStyles.css'

function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Özəl təkliflər</h1>
          <p>MADO RESTORANLARI</p>
          <Link to="./menu">
            <button>İndi sifariş et</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
