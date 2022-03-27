import React from 'react'; 
import { Link } from "react-router-dom";
import "./Header.css";
import $ from "jquery";

export default function Header() {
    
  // Mobile navigation togglebar jquery code 
    const navDropdown = function () {
        if ($(".nav-menu").length) {
          var $mobile_nav = $(".nav-menu").clone().prop({
            className: "mobile-nav d-lg-none",
          });
          $("body").append($mobile_nav);
          $("body").append('<div className="mobile-nav-overly"></div>');

          $(document).on("click", ".mobile-nav-toggle", function (e) {
            $("body").toggleClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").toggle();
          });

          $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass("active");
          });

          $(document).on("click", function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (
              !container.is(e.target) &&
              container.has(e.target).length === 0
            ) {
              if ($("body").hasClass("mobile-nav-active")) {
                $("body").removeClass("mobile-nav-active");
                $(".mobile-nav-toggle i").toggleClass(
                  "icofont-navigation-menu icofont-close"
                );
                $(".mobile-nav-overly").fadeOut();
              }
            }
          });
        } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
          $(".mobile-nav, .mobile-nav-toggle").hide();
        }

    }


  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/">E-Cell VCET</Link>
          </h1>
          {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->*/}
          <button
            type="button"
            onClick={navDropdown}
            className="mobile-nav-toggle d-lg-none"
          >
            <i className="icofont-navigation-menu"></i>
          </button>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li id="firstele" className="">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
              <li>
                <Link to="/Esummit">E-Summit</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
