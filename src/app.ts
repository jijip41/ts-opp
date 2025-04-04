import { ButtonEvent } from "./buttonEvent.js";

class App extends ButtonEvent {
  constructor(appRoot: HTMLElement) {
    super();
    const rectButton = document.querySelector(".button__rectangle");
    rectButton?.addEventListener("click", () => {
      this.add(appRoot, "rectangle");
    });

    const triangleButton = document.querySelector(".button__triangle");
    triangleButton?.addEventListener("click", () => {
      this.add(appRoot, "triangle");
    });

    const circleButton = document.querySelector(".button__circle");
    circleButton?.addEventListener("click", () => {
      this.add(appRoot, "circle");
    });

    const undoButton = document.querySelector(".button__undo");
    undoButton?.addEventListener("click", () => {
      this.undo(appRoot);
    });
  }
}
new App(document.querySelector(".document")! as HTMLElement);
