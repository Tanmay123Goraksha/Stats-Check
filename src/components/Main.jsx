import React from "react";
import Card from "./Card";
import backgroundImage from "../images/pxfuel.jpg"; // Adjust the path as needed

function Main() {
  const backgroundStyle = {
    backgroundColor: "#2f4553", // Replace with your desired color
    minHeight: "100%", // Ensure the background color covers the entire height

    height:"100vh",
  };

  return (
    <div style={backgroundStyle}>
      <h1>Main</h1>
      <Card
              title="Sample Title"
              image={backgroundImage}
              description="This is a sample description for the card."
             
      
      ></Card>
            <Card
              title="Sample Title"
              image={backgroundImage}
              description="This is a sample description for the card."
             
      
      ></Card>
            <Card
              title="Sample Title"
              image={backgroundImage}
              description="This is a sample description for the card."
             
      
      ></Card>
            <Card
              title="Sample Title"
              image={backgroundImage}
              description="This is a sample description for the card."
             
      
      ></Card>
            <Card
              title="Sample Title"
              image={backgroundImage}
              description="This is a sample description for the card."
             
      
      ></Card>
    </div>
  );
}

export default Main;
