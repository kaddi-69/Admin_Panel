import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function PageNotFound() {
  return (
    <div>
      <div id="ssssssssssssssssss">
        <main className="animate__animated animate__bounce animate__repeat-1">
          <h2 style={{ marginTop: "20px" }} id="rrrrrrr">
            Sorry, page not found!
          </h2>
        </main>

        <p style={{ marginTop: "20px" }} id="ggggg">
          Sorry, we couldn’t find the page you’re looking for. Perhaps <br />
          you’ve mistyped the URL? Be sure to check your spelling.
        </p>
        <main className="animate__animated animate__bounce animate__repeat-1">
          <img
            src="https://minimal-kit-react.vercel.app/static/illustrations/illustration_404.svg"
            id="imggg"
            style={{ marginTop: "40px", height: "300px" }}
          />
        </main>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
        <button id="yyuuu" style={{ marginTop: "70px" }}>
          Go To Home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
