import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Jose" />

        <footer>
          This project was coded by Maryam Noor Hussain and is{" "}
          <a
            href="https://github.com/Maryam-coding/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}