import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This website is created by Diana Militaru and is{" "}
          <a
            href="https://github.com/dianettee/weather-application-in-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source
          </a>
        </footer>
      </div>
    </div>
  );
}
