export class GlobalService {
  state: number = 0;

  add() {
    this.state += 1;
  }

  sub() {
    this.state -= 1;
  }
}
