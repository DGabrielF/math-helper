import { handleSubMenu, handleMenu, handleContent } from "./menus.js";

const state = {
  page: "secondDegreeEquation",
  subMenu: [{name: "grau 2", key: "secondDegreeEquation"}],
  menuItems: [
    {item: "Equações", subItems: [{name: "grau 2", key: "secondDegreeEquation"}]},
  ],
}



function init () {
  handleMenu(state.menuItems);
  handleContent(state.page);
  handleSubMenu(state.subMenu);
};

init()