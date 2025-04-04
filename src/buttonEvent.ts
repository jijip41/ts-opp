interface ButtonEventInterface {
  add(appRoot: HTMLElement, classname: string): void;
}

export class ButtonEvent implements ButtonEventInterface {
  constructor() {}
  add = (appRoot: HTMLElement, classname: string) => {
    const element = document.createElement("div");
    element.setAttribute("class", classname);
    appRoot.insertAdjacentElement("afterbegin", element);
  };
}
