interface ButtonEventInterface {
  add(appRoot: HTMLElement, classname: string): void;
  undo(appRoot: HTMLElement): void;
}

type Event = {
  id: string;
  shape: "rectangle" | "triangle" | "circle";
  color?: string;
};
export class ButtonEvent implements ButtonEventInterface {
  private eventLists: Event[] = [];
  constructor() {}
  add = (appRoot: HTMLElement, shape: Event["shape"]) => {
    const id = `shape-${this.eventLists.length + 1}`;
    this.eventLists.push({ id, shape });
    this.eventLists.forEach((li) => {
      const element = document.createElement("div");
      element.setAttribute("class", li.shape);
      appRoot.insertAdjacentElement("afterbegin", element);
    });
  };
  undo = (appRoot: HTMLElement) => {
    this.eventLists.pop();
    const rectangle = document.querySelectorAll(".rectangle");
    const triangle = document.querySelectorAll(".triangle");
    const circles = document.querySelectorAll(".circle");

    [...rectangle, ...triangle, ...circles].forEach((c) => c.remove());

    this.eventLists.forEach((li) => {
      const element = document.createElement("div");
      element.setAttribute("class", li.shape);
      appRoot.insertAdjacentElement("afterbegin", element);
    });
  };
}
