import * as React from "react";
import { render } from "react-dom";
import { l } from "../../lib/l";

import ClassComponent, { FunctionalComponent } from './components/ExampleCustomComponent'

l("using L function")

render(
  <React.StrictMode>
    <ClassComponent />
    <FunctionalComponent name="NAME"/>
  </React.StrictMode>,
  document.getElementById("root")
);
