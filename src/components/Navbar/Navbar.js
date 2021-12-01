import React, { useEffect, useState } from "react";
import "../Home/FirstSection.css";
import { Link, useLocation } from "react-router-dom";
import image from "./atti-back1.png";
import $ from "jquery";

const Navbar = (props) => {
  const [pos, setPos] = useState("top");
  const [back, setBack] = useState("top");
  const [active, setActive] = useState("");

  // const locate = () => {
  //   const location = useLocation();
  //   console.log(location.pathname);
  // };
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setPos("moved");
      } else {
        setPos("top");
      }
      if (scrolled >= 100) {
        setBack("moved");
      } else {
        setBack("top");
      }
    });
    $(function () {
      setActive(window.location.pathname);
    });
  }, [active]);

  var toggleMenu = () => {
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  // box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);
  // -webkit-box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);
  // -moz-box-shadow: 1px 10px 58px -13px rgba(0, 0, 0, 0.75);

  return (
    <div id="header-top">
      <header
        style={{
          boxShadow:
            pos === "top" ? "none" : " 1px 10px 58px -13px rgba(0, 0, 0, 0.75)",
          backgroundImage:
            back === "top" &&
            window.location.pathname === "/" &&
            window.innerWidth > 1014
              ? "none"
              : `url("https://drive.google.com/uc?export=view&id=1QPWb8-gikuyL2XDwvZSphpOjQGfpIu0n")`,
        }}
      >
        <Link to="/">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="33.000000pt"
            height="35.000000pt"
            viewBox="0 0 296.000000 249.000000"
            preserveAspectRatio="xMidYMid meet"
            className="a1"
          >
            <g
              transform="translate(0.000000,249.000000) scale(0.100000,-0.100000)"
              fill={
                pos === "top" &&
                window.location.pathname === "/" &&
                window.innerWidth > 1014
                  ? "#f0bc1d"
                  : "black"
              }
              stroke="none"
            >
              <path
                d="M997 2436 c-15 -7 -35 -22 -43 -35 l-16 -23 -19 31 c-35 57 -103 32
-143 -54 l-27 -55 -94 0 -95 0 0 60 0 60 -79 0 c-135 0 -121 134 -121 -1151
l0 -1099 1090 0 1090 0 0 200 0 200 -40 0 -40 0 0 95 0 95 65 0 c55 0 65 3 65
18 0 9 18 238 40 507 22 270 40 491 40 493 0 1 -47 2 -105 2 l-105 0 0 70 c0
40 -4 70 -10 70 -6 0 -10 -30 -10 -70 l0 -70 -105 0 c-105 0 -105 0 -105 -25
0 -34 69 -901 76 -952 l5 -43 65 0 64 0 0 -95 0 -95 -50 0 -50 0 0 -100 0
-100 -890 0 -890 0 0 951 c0 863 1 951 16 945 9 -3 54 -6 100 -6 69 0 84 -3
84 -15 0 -30 31 -75 55 -81 16 -4 35 0 52 11 23 16 29 16 52 3 65 -38 115 -29
133 23 15 44 52 40 77 -10 11 -21 17 -42 13 -46 -4 -4 4 -5 17 -3 22 3 45 35
69 98 7 18 8 6 4 -44 -5 -67 -5 -68 18 -61 33 11 93 13 111 4 23 -11 59 12 81
51 16 30 23 35 56 35 35 0 38 -3 52 -43 15 -43 17 -44 65 -47 74 -6 110 10
145 60 17 24 30 48 30 53 0 18 30 22 168 24 120 1 128 2 67 8 -38 4 -109 8
-157 9 l-88 1 0 60 c0 71 -6 75 -83 66 -44 -6 -55 -11 -69 -37 -17 -29 -18
-29 -43 -13 -14 9 -43 16 -65 16 -28 -1 -40 3 -40 14 0 22 -34 17 -59 -10
l-22 -24 -26 24 c-39 36 -55 30 -87 -31 -16 -30 -32 -55 -37 -55 -5 0 -9 18
-9 39 0 30 -6 44 -22 55 -21 15 -24 14 -53 -12 -24 -22 -38 -27 -68 -24 -36 3
-38 5 -33 28 7 28 -9 64 -27 63 -7 0 -24 -6 -40 -13z"
              />
              <path
                d="M2326 2434 c-3 -8 -6 -43 -6 -75 l0 -60 43 3 c42 3 42 3 45 46 l3 42
55 0 54 0 0 -46 c0 -43 -7 -57 -105 -190 -58 -79 -105 -153 -105 -164 0 -19 6
-20 150 -20 l150 0 0 30 0 30 -90 0 c-49 0 -90 3 -90 6 0 3 35 54 78 113 104
140 103 139 100 224 l-3 72 -136 3 c-118 2 -137 0 -143 -14z"
              />
              <path
                d="M1010 2010 c-72 -9 -133 -41 -159 -83 -19 -31 -21 -49 -21 -191 l0
-156 210 0 210 0 0 100 0 100 225 0 225 0 0 -159 0 -159 -367 -5 c-380 -5
-417 -9 -467 -48 -60 -47 -61 -56 -61 -386 0 -343 -2 -333 86 -383 65 -37 208
-38 521 -6 305 32 288 32 288 1 l0 -25 220 0 220 0 0 644 0 643 -23 34 c-29
43 -84 69 -167 80 -78 10 -862 9 -940 -1z m690 -960 l0 -190 -133 0 c-74 0
-175 -3 -225 -6 l-92 -7 0 197 0 196 225 0 225 0 0 -190z"
              />
            </g>
          </svg>

          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="113.000000pt"
            height="27.000000pt"
            viewBox="0 0 1133.000000 274.000000"
            preserveAspectRatio="xMidYMid meet"
            className="a2"
          >
            <g
              transform="translate(0.000000,274.000000) scale(0.100000,-0.100000)"
              fill={
                pos === "top" &&
                window.location.pathname === "/" &&
                window.innerWidth > 1014
                  ? "#f0bc1d"
                  : "black"
              }
              stroke="none"
            >
              <path d="M3240 2535 l0 -155 150 0 150 0 0 155 0 155 -150 0 -150 0 0 -155z" />
              <path
                d="M1790 2365 l0 -185 -70 0 -70 0 0 -130 0 -130 70 0 69 0 3 -498 c3
-553 0 -529 71 -572 29 -18 51 -20 235 -20 l202 0 0 130 0 130 -100 0 -100 0
0 415 0 415 95 0 95 0 0 130 0 130 -95 0 -95 0 0 185 0 185 -155 0 -155 0 0
-185z"
              />
              <path
                d="M2548 2368 l-3 -183 -72 -3 -73 -3 0 -129 0 -130 75 0 75 0 0 -493
c0 -458 1 -495 18 -526 35 -65 61 -71 289 -71 l203 0 0 130 0 130 -105 0 -105
0 0 415 0 415 100 0 100 0 0 130 0 130 -100 0 -100 0 0 185 0 185 -150 0 -150
0 -2 -182z"
              />
              <path
                d="M5568 2176 c-63 -17 -111 -56 -139 -113 l-24 -48 0 -500 0 -500 24
-48 c13 -26 40 -61 59 -77 63 -52 105 -60 319 -60 l193 0 0 -250 0 -250 150 0
150 0 0 925 0 925 -150 0 c-143 0 -150 -1 -150 -20 0 -26 -4 -25 -184 5 -166
28 -182 29 -248 11z m365 -253 l67 -6 0 -418 0 -419 -110 0 c-115 0 -161 12
-174 45 -3 9 -6 185 -6 390 l0 374 26 20 c29 23 74 26 197 14z"
              />
              <path
                d="M9320 2179 c-36 -5 -109 -17 -162 -27 l-98 -19 0 24 0 23 -155 0
-155 0 0 -675 0 -675 155 0 155 0 0 545 0 545 43 0 c24 0 78 3 120 6 l77 7 0
-157 0 -156 150 0 151 0 -3 244 -3 245 -29 30 c-48 50 -104 59 -246 40z"
              />
              <path
                d="M710 2162 c-63 -32 -75 -66 -78 -244 l-4 -158 141 0 141 0 0 100 0
100 145 0 145 0 0 -160 0 -160 -235 0 c-365 0 -347 23 -343 -424 l3 -315 30
-31 c55 -57 126 -61 397 -19 155 23 148 23 148 -1 0 -19 7 -20 145 -20 l145 0
0 623 c0 695 2 671 -70 709 -32 16 -64 18 -355 18 -285 0 -324 -2 -355 -18z
m490 -905 l0 -184 -97 -6 c-54 -4 -119 -7 -145 -7 l-48 0 0 190 0 190 145 0
145 0 0 -183z"
              />
              <path d="M3240 1505 l0 -675 150 0 150 0 0 675 0 675 -150 0 -150 0 0 -675z" />
              <path
                d="M4411 2162 c-72 -36 -76 -50 -79 -275 -4 -221 2 -258 45 -299 16 -15
138 -92 273 -171 l245 -144 3 -107 3 -106 -141 0 -140 0 0 110 0 110 -146 0
-146 0 4 -178 c3 -197 8 -214 71 -252 30 -19 52 -20 357 -20 450 0 425 -19
425 326 l0 232 -30 37 c-21 26 -107 82 -280 184 l-250 146 -3 98 -3 97 141 0
140 0 0 -105 0 -106 143 3 142 3 0 165 c0 148 -2 169 -20 200 -40 68 -52 70
-405 70 -280 0 -319 -2 -349 -18z"
              />
              <path
                d="M6530 1558 c0 -688 -2 -665 63 -712 25 -19 42 -21 145 -20 69 1 167
10 238 23 148 26 144 26 144 1 0 -19 7 -20 155 -20 l155 0 0 675 0 675 -155 0
-155 0 0 -544 0 -543 -77 -7 c-42 -3 -107 -6 -145 -6 l-68 0 0 550 0 550 -150
0 -150 0 0 -622z"
              />
              <path
                d="M7740 2162 c-61 -32 -70 -65 -70 -244 l0 -158 135 0 134 0 3 98 3 97
145 0 145 0 3 -157 3 -157 -250 -3 c-360 -4 -341 18 -341 -408 0 -325 3 -340
63 -384 25 -18 42 -21 130 -20 56 1 161 11 234 23 162 26 163 26 163 1 0 -19
7 -20 145 -20 l146 0 -3 623 c-3 605 -4 623 -23 657 -40 68 -52 70 -410 70
-291 0 -323 -2 -355 -18z m498 -908 l2 -181 -97 -6 c-54 -4 -122 -7 -150 -7
l-53 0 0 183 c0 101 3 187 7 191 4 3 70 5 147 4 l141 -3 3 -181z"
              />
              <path
                d="M9861 2162 c-19 -9 -44 -30 -55 -45 -21 -28 -21 -40 -24 -600 -2
-530 -1 -575 15 -606 10 -19 31 -44 46 -55 27 -20 43 -21 365 -24 378 -3 386
-1 427 68 18 31 20 52 20 205 l0 170 -145 0 -145 0 -3 -112 -3 -113 -144 0
-145 0 0 190 0 190 248 0 248 0 48 49 48 48 -4 274 c-5 404 24 379 -438 379
-290 0 -329 -2 -359 -18z m499 -367 l0 -165 -145 0 -145 0 0 165 0 165 145 0
145 0 0 -165z"
              />
            </g>
          </svg>
        </Link>
        <div className="toggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/"
              onClick={() => {
                toggleMenu();
                setActive("/");
              }}
              className={`${active === "/" ? "nav-active" : ""} navs-link`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/about"
              onClick={() => {
                toggleMenu();
                setActive("/about");
              }}
              className={`${
                active === "/about" ? "nav-active" : " "
              } navs-link`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/franchise"
              onClick={() => {
                toggleMenu();
                setActive("/franchise");
              }}
              className={`${
                active === "/franchise" ? "nav-active" : " "
              } navs-link`}
            >
              Franchise
            </Link>
          </li>
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/franchise-enquiry"
              onClick={() => {
                toggleMenu();
                setActive("/franchise-enquiry");
              }}
              className={`${
                active === "/franchise-enquiry" ? "nav-active" : " "
              } navs-link`}
            >
              Franchise Enquiry
            </Link>
          </li>
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/gallery"
              onClick={() => {
                toggleMenu();
                setActive("/gallery");
              }}
              className={`${
                active === "/gallery" ? "nav-active" : " "
              } navs-link`}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/workwithus"
              onClick={() => {
                toggleMenu();
                setActive("/workwithus");
              }}
              className={`${
                active === "/workwithus" ? "nav-active" : " "
              } navs-link`}
            >
              Work With Us
            </Link>
          </li>
          <li>
            <Link
              style={{
                color:
                  pos === "top" &&
                  window.location.pathname === "/" &&
                  window.innerWidth > 1014
                    ? "#f0bc1d"
                    : "black",
              }}
              to="/contact"
              onClick={() => {
                toggleMenu();
                setActive("/contact");
              }}
              className={`${
                active === "/contact" ? "nav-active" : " "
              } navs-link`}
            >
              Contact{" "}
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
