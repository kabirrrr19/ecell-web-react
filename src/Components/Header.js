import React from 'react';
import "./css/Header.css";
import $ from "jquery";

export default function Header() {
    
  // Mobile navigation togglebar jquery code 
    const navDropdown = function () {
        if ($(".nav-menu").length) {
          var $mobile_nav = $(".nav-menu").clone().prop({
            className: "mobile-nav d-lg-none",
          });
          $("body").append($mobile_nav);
          $("body").prepend(
            '<button type="button" className="mobile-nav-toggle d-lg-none"><i className="icofont-navigation-menu"></i></button>'
          );
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
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            <a href="index.html">ECELL VCET</a>
          </h1>
          {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->*/}
          <button type="button" onClick={navDropdown} className="mobile-nav-toggle d-lg-none">
            <i className="icofont-navigation-menu"></i>
          </button>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li id="firstele" className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#dropdown">Drop Down</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}
