import { observer } from "mobx-react";
import * as React from "react";
import { ServiceLocator } from "../../../domain/di/ServiceLocator";
import { AboutPageViewModel } from "./AboutPageViewModel";

interface IState {
  viewModel: AboutPageViewModel;
}

@observer
export default class AboutPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    const viewModel: AboutPageViewModel = ServiceLocator.resolve(
      AboutPageViewModel.name
    );
    this.state = { viewModel };
  }
  render() {
    const viewModel = this.state.viewModel;

    return (
      <div>
        <h1>AboutPage</h1>
        <h3>{viewModel.count}</h3>
        <button onClick={() => viewModel.sub()}>-</button>
        <button onClick={() => viewModel.add()}>+</button>
      </div>
    );
  }
}
