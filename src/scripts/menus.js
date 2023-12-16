import { firstDegreeStart } from "./firstDegree.js"
import { secondDegreeStart } from "./secondDegree.js";
import { linearEquationSystemStart } from "./linearSystem.js";

const state = {
  values: {
    isMenuOpen: false,
  },
  views: {
    menu: document.querySelector(".menu"),
    content: document.querySelector(".content"),
    options: document.querySelector(".options"),
    handleMenuButton: document.querySelector(".handle-menu"),
  },
  images: {
    caretLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path></svg>',
    caretRight: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>'
  }
}

export function handleSubMenu(subItems) {
  state.views.options.innerHTML = "";
  
  subItems.map((subItem) => {
    const subButton = document.createElement("button");
    subButton.classList.add("sub-menu-item");
    subButton.textContent = subItem.name;
    subButton.addEventListener("click", () => {
      handleContent(subItem.key);
    });
    state.views.options.appendChild(subButton);
  });
};

export function handleMenu(menuItems) {
  state.views.menu.classList.add("hidden")
  
  state.views.handleMenuButton.innerHTML = state.images.caretRight;
  state.views.handleMenuButton.addEventListener("click", () => {
    if (state.values.isMenuOpen) {
      state.views.menu.classList.add("hidden");
      state.views.content.classList.remove("hidden");
      state.views.handleMenuButton.innerHTML = state.images.caretRight;
    } else {
      state.views.menu.classList.remove("hidden");
      state.views.content.classList.add("hidden");
      state.views.handleMenuButton.innerHTML = state.images.caretLeft;
    };
    state.values.isMenuOpen = !state.values.isMenuOpen;
  });

  const menuContent = document.createElement("div");
  menuContent.classList.add("menu-content");

  const header =document.createElement("h3");
  header.textContent = "MENU";
  menuContent.appendChild(header);
  
  menuItems.map((menuItem) => {
    const button = document.createElement("button");
    button.classList.add("menu-item");
    button.textContent = menuItem.item;
    
    button.addEventListener("click", () => {
      handleContent(menuItem.subItems[0].key);
      handleSubMenu(menuItem.subItems);
    });
    menuContent.appendChild(button);
  });
  state.views.menu.appendChild(menuContent);
};
export function handleContent(page) {
  if (page === "firstDegreeEquation") {
    firstDegreeStart();
  } else if (page === "secondDegreeEquation") {
    secondDegreeStart();
  } else if (page === "twoPerTwo") {
    linearEquationSystemStart(2);
  } else if (page === "threePerThree") {
    linearEquationSystemStart(3);
  } else if (page === "fourPerFour") {
    linearEquationSystemStart(4);
  }
};