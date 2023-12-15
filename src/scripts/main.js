import { handleSubMenu, handleMenu, handleContent } from "./menus.js";
import { solveLinearSystem } from "./solveLinearSystem.js"

const state = {
  page: "secondDegreeEquation",
  subMenu: [{name: "grau 2", key: "secondDegreeEquation"}],
  menuItems: [
    {item: "Equações", subItems: [{name: "grau 2", key: "secondDegreeEquation"}]},
    {item: "Sistemas", subItems: [{name: "2x2", key: "twoPerTwo"}, {name: "3x3", key: "threePerThree"}]}
  ],
}

function init () {
  handleMenu(state.menuItems);
  handleContent(state.page);
  handleSubMenu(state.subMenu);
};

init()