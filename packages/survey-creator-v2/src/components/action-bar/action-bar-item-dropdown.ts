import * as ko from "knockout";

import "./action-bar-item-dropdown.scss";
const template = require("./action-bar-item-dropdown.html");
// import template from "./action-bar-item-dropdown.html";

export var ActionBarItemDropdownViewModel: any;

ko.components.register("svc-action-bar-item-dropdown", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      var isVisible = ko.observable(false);
      return {
        id: params.item.id,
        title: params.item.title,
        icon: params.item.icon,
        action: () => {
          isVisible(!isVisible());
        },
        model: {
          onItemSelect: (item) => {
            params.item.action(item);
          },
          items: params.item.items,
        },
        isVisible: isVisible,
        name: "svc-list",
        verticalPosition: "middle",
        horizontalPosition: "right",
        showPointer: true
      };
    },
  },
  template: template,
});
