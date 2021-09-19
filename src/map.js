import React, { useEffect, useRef } from "react";
import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";

export default function Map({ setViewer }) {

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.cesiumElement) {
      const viewer = ref.current.cesiumElement;
      viewer._cesiumWidget._creditContainer.style.display = 'none';
      setViewer(viewer);
    }
  }, []);

  return (
    <Viewer full ref={ref}
      homeButton={false}
      geocoder={false}
      sceneModePicker={false}
      navigationHelpButton={false}
      timeline={false}
      navigationInstructionsInitiallyVisible={false}
      selectionIndicator={false}
      infoBox={false}
      animation={false}
      baseLayerPicker={false}
      vrButton={true}
    >
    </Viewer>
  );
}
