import { GlobalService } from "./GlobalService";

export class PageService {
  state: number = 0;

  service: GlobalService;

  constructor(service: GlobalService) {
    this.service = service;
  }

  add() {
    this.state += 1;
  }

  sub() {
    this.state -= 1;
  }
}
