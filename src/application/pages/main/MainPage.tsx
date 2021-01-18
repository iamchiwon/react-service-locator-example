import { observer } from "mobx-react";
import * as React from "react";
import { ServiceLocator } from "../../../domain/di/ServiceLocator";
import { MainPageViewModel } from "./MainPageViewModel";

interface IState {
  viewModel: MainPageViewModel;
}

@observer
export default class MainPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    const viewModel: MainPageViewModel = ServiceLocator.resolve(
      MainPageViewModel.name
    );

    this.state = { viewModel };
  }

  render() {
    const viewModel = this.state.viewModel;

    return (
      <div>
        <h1>MainPage</h1>
        <h3>{viewModel.count}</h3>
        <button onClick={() => viewModel.sub()}>-</button>
        <button onClick={() => viewModel.add()}>+</button>
      </div>
    );
  }
}
