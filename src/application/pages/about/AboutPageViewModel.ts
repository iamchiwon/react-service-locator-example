import { makeAutoObservable } from "mobx";
import { ServiceLocator } from "../../../domain/di/ServiceLocator";
import { GlobalService } from "../../../domain/service/GlobalService";

export class AboutPageViewModel {
  service: GlobalService;

  count: number;

  constructor() {
    this.service = ServiceLocator.resolve(GlobalService.name);
    this.count = this.service.state;
    makeAutoObservable(this);
  }

  add() {
    this.service.add();
    this.count = this.service.state;
  }

  sub() {
    this.service.sub();
    this.count = this.service.state;
  }
}
