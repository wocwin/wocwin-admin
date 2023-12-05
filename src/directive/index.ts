import { App, Directive } from "vue";
import hasPermi from "./modules/hasPermi";
import copy from "./modules/copy";
import debounce from "./modules/debounce";
const directivesList: { [key: string]: Directive } = {
  hasPermi,
  copy,
  debounce
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key]);
    });
  }
};

export default directives;
