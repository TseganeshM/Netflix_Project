import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../assets/img/logo.png";
import userProfile from "../../assets/img/user.png";
import "./Header.css";

const Header2 = () => {
  const banner = document.querySelector(".banner");

  console.log(banner);
  return (
    <>
      <header>
        {/*<Navbar expand="lg" className={`nav${isHide ? " sticky" : ""}`}>*/}
        <Navbar expand="lg" className="sticky">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="netflix logo" className="nav__logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-lg`}
              data-bs-toggle="button"
              className="btn"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              className="offcanvas__bg offcanvas-start text-center fs-3"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="nav__item">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    TvShows
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    Movies
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    Latest
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    MyList
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    Browse by Language
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="nav__item">
                    <SearchIcon className="icon" />
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    <NotificationsNoneIcon className="icon" />
                  </Nav.Link>
                  <Nav.Link href="#action2" className="nav__item">
                    <img
                      src={userProfile}
                      className="user"
                      alt="user Profile"
                    />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header2;
