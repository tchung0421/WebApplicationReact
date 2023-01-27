import { useState } from "react";

export const NavBar = (props) => {
  const [items, setItems] = useState(props.items);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            Frontend Bootcamp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              {items.map((item, index) => {
                return (
                  <li className="nav-item">
                    <a href={item.href} className="nav-link">
                      {item.text}
                    </a>
                  </li>
                );
              })}
              ;
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
