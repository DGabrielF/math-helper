import { handleSubMenu, handleMenu, handleContent } from "./menus.js";

const state = {
  page: "firstDegreeEquation",
  subMenu: [{name: "grau 2", key: "secondDegreeEquation"}],
  menuItems: [
    {
      item: "Equações", 
      subItems: [
        {name: "grau 1", key: "firstDegreeEquation"},
        {name: "grau 2", key: "secondDegreeEquation"},
      ],
    },
    {
      item: "Sistemas", 
      subItems: [
        {name: "2x2", key: "twoPerTwo"},
        {name: "3x3", key: "threePerThree"},
        {name: "4x4", key: "fourPerFour"},
      ]
    },
  ],
}

function init () {
  handleMenu(state.menuItems);
  handleContent(state.page);
  handleSubMenu(state.subMenu);
};

init()