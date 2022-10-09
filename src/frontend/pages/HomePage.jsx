import React from "react";
import hcbgImage from "./bg.image.jpeg";

function Home() {
  return (
    <div
      class="bg_image"
      style={{
        backgroundImage: "url(" + hcbgImage + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <h1>This is Text on top</h1>
    </div>
  );
}

export default Home;
