import React from "react";
import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";
import "./tools.css";

const toggleTools = () => {
  let tools = document.getElementsByClassName("toolBtn");
  for (let i = 0; i < tools.length; i++) {
    tools[i].className = tools[i].className === "toolBtn" ? "toolBtn hide" : "toolBtn";
  }
  const e = document.getElementsByClassName("tool_toggle")[0];
  e.innerText = e.innerText === "Tools Hide" ? "Tools Show" : "Tools Hide";
}

const getCameraHeight = (viewer) => {
  let cameraPos = viewer.camera.position;
  let ellipsoid = viewer.scene.globe.ellipsoid;
  let cartographic = ellipsoid.cartesianToCartographic(cameraPos);
  return cartographic.height;
}

const ZoomIn = (viewer, magnification) => {
  let height = getCameraHeight(viewer);
  viewer.camera.zoomIn(height * magnification);
};

const ZoomOut = (viewer, magnification) => {
  let height = getCameraHeight(viewer);
  viewer.camera.zoomOut(height * magnification);
};

export default function Tools({ getViewer }) {
  return (
    <div className="tools">
      <button className="tool_toggle" onClick={() => toggleTools()}>Tools Hide</button>
      <button className="toolBtn" onClick={() => ZoomIn(getViewer(), 0.3)}>Zoom In</button>
      <button className="toolBtn" onClick={() => ZoomOut(getViewer(), 0.3)}>Zoom Out</button>
    </div>
  );
}
