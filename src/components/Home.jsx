import React from "react";
import backgroundImage from "../images/pxfuel.jpg"; // Adjust the path as needed
import { Link } from 'react-router-dom';
import Card from "./Card";

function Home() {
    const homeStyle = {
        position: 'relative',
        height: '100vh',
        overflow: 'hidden', // Ensure the content doesn't overflow
    };

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure the background is behind the content
    };

    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black tint with 50% opacity
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Ensure the overlay is above the background
    };

    const contentStyle = {
        position: 'relative',
        color: 'white', // Set the text color to make it readable
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        zIndex: 1, // Ensure the content is above the overlay
    };

    return (
        <div style={homeStyle}>
            <div style={backgroundStyle}></div>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                <h1>Hello</h1>
                <Link to="/main"><p>Main</p></Link>
                
            </div>
        </div>
    );
}

export default Home;
