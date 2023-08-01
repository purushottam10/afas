import React from "react";
const FrameComponent1 = () => {
  const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});
  return (
  
  
  
  
  <section id="services">
    <div class="section-header">
          <h3>Our Services</h3>
          
        </div>
    <div className="servicerisk">
        
    <div className="risk-and-complaince-services-parent">
      <div className="risk-and-complaince">Risk And Complaince Services</div>
      <div className="frame-child" />
      <div className="frame-item" />
      <div className="frame-inner" />
      <div className="rectangle-div" />
      <div className="frame-child1" />
      <div className="frame-child2" />
      <div className="hppa-service">Hppa Service</div>
      <div className="hppa-service1">Hppa Service</div>
      <div className="hppa-service2">Hppa Service</div>
      <div className="services-by-industry">Services By Industry</div>
      <div className="frame-child3" />
      <img className="rectangle-icon" alt="" src="/rectangle-8.svg" />
      <div className="frame-child4" />
      <img className="frame-child5" alt="" src="/rectangle-8.svg" />
      <img className="ellipse-icon" alt="" src="/ellipse-1.svg" />
      <img className="frame-child6" alt="" src="/ellipse-1.svg" />
      <img className="frame-child7" alt="" src="/ellipse-1.svg" />
      <img className="frame-child8" alt="" src="/ellipse-1.svg" />
      <div className="banking">Banking</div>
      <div className="banking1">Banking</div>
      <div className="banking2">Banking</div>
      <div className="banking3">Banking</div>
      <div className="lorem-ipsum-is">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="lorem-ipsum-is1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="lorem-ipsum-is2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="lorem-ipsum-is3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="lorem-ipsum-is4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="lorem-ipsum-is5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
      <div className="lorem-ipsum-is6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </div>
    </div>
    
    </div>
    <nav class="navbar">
      <i class="fa-solid fa-bars" id="sidebar-close"></i>
    </nav>
    </section>
  );
};

export default FrameComponent1;
