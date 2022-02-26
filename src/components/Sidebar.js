import React, { useState } from "react";
import "./Sidebar.css";
import { FaRegHeart } from "react-icons/fa";
import { GoTriangleRight, GoThumbsup, GoHome } from "react-icons/go";
import { RiNotification3Line } from "react-icons/ri";
import { useHistory } from "react-router-dom";
function TodoHead() {
  const [mode, setMode] = useState();
  const history = useHistory();

  // const body = document.querySelector("body"),
  //   sidebar = body.querySelector("nav"),
  //   toggle = body.querySelector(".toggle"),
  //   searchBtn = body.querySelector(".search-box"),
  //   modeSwitch = body.querySelector(".toggle-switch"),
  //   modeText = body.querySelector(".mode-text");

  // toggle.addEventListener("click", () => {
  //   sidebar.classList.toggle("close");
  // });

  // searchBtn.addEventListener("click", () => {
  //   sidebar.classList.remove("close");
  // });

  // const onclick = () => {
  //   body.classList.toggle("dark");

  //   if (body.classList.contains("dark")) {
  //     modeText.innerText = "Light mode";
  //   } else {
  //     modeText.innerText = "Dark mode";
  //   }
  // };

  return (
    <>
      <di>
        <nav className="sidebar close">
          <header>
            <div className="image-text">
              <div className="text logo-text">
                <span className="name">Test</span>
                <span className="profession">React Project</span>
              </div>
            </div>
            <i className="bx bx-chevron-right toggle">
              <GoTriangleRight />
            </i>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <i
                      className="bx bx-home-alt icon"
                      onClick={() => {
                        history.push("/");
                      }}
                    >
                      <GoHome />
                    </i>
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i
                      className="bx bx-bar-chart-alt-2 icon"
                      onClick={() => {
                        history.push("/users");
                      }}
                    >
                      <FaRegHeart />
                    </i>
                    <span className="text nav-text">Revenue</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i
                      className="bx bx-bell icon"
                      onClick={() => {
                        history.push("/profiles");
                      }}
                    >
                      <RiNotification3Line />
                    </i>
                    <span className="text nav-text">Notifications</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i
                      className="bx bx-heart icon"
                      onClick={() => {
                        history.push("/containerbox");
                      }}
                    >
                      <GoThumbsup />
                    </i>
                    <span className="text nav-text">Likes</span>
                  </a>
                </li>
              </ul>
            </div>
            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch" onClick={onclick}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </nav>
      </di>
    </>
  );
}

export default TodoHead;
