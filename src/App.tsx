import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import TopComponent from "./Components/TopComponent/TopComponent";
import BottomComponent from "./Components/BottomComponent/BottomComponent";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/top-component" component={TopComponent} />
        <Route exact path="/bottom-component" component={BottomComponent} />
        <Route path="/" component={() => <TopComponent />} />
      </Switch>
    </div>
  );
};

export default App;
