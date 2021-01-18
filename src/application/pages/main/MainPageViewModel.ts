import { action, makeAutoObservable } from "mobx";

export class MainPageViewModel {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  add() {
    this.count += 1;
  }

  sub() {
    this.count -= 1;
  }
}
