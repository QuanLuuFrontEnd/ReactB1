import React, { Component } from "react";

class Header extends Component {
  render() {
    return (      
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-lg-5">
            <a class="navbar-brand" href="#!">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Header;

// const obj = {
//   type: "div",
//   className: "header",
//   chidlren: [
//     {
//       type: "h2",
//     },
//     {
//       type: "p",
//     },
//   ],
// };

// JSX (Javascript XML)
// div , h2, p => React element (object)
// phân biệt React Element, React Component , Component Instance
