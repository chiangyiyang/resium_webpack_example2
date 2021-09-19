import React from "react";
import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";
import Tools from "./tools";
import Map from "./map";

export default function App() {
  let viewer;

  return (
    <div>
      <Map setViewer={(v) => viewer = v} />
      <Tools getViewer={() => viewer} />
    </div>
  );
}
