import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white"}}>
      <h1 style={{ fontSize: "48px", marginBottom:"20px" }}>HomePage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link href="/abico" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Abico
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
