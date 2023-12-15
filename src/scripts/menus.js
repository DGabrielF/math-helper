import { secondDegreeStart } from "./secondDegree.js";

export function handleSubMenu(subItems) {
  const options = document.querySelector(".options");
  subItems.map((subItem) => {
    const subButton = document.createElement("button");
    subButton.classList.add("sub-menu-item");
    subButton.textContent = subItem.name;
    subButton.addEventListener("click", () => {
      state.page = subItem.key;
      handleContent();
    });
    options.appendChild(subButton);
  });
};

export function handleMenu(menuItems) {
  const menu = document.querySelector(".menu");
  
  menuItems.map((menuItem) => {
    const button = document.createElement("button");
    button.classList.add("menu-item");
    button.textContent = menuItem.item;
    
    button.addEventListener("click", () => {
      handleSubMenu(menuItem.subItems)});
    menu.appendChild(button);
  });
};

export function handleContent(page) {
  if (page === "secondDegreeEquation") {
    secondDegreeStart();
  };
};