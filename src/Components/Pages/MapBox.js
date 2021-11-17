import React from 'react';
import ReactMapGL from 'react-map-gl';

function MapBox(props) {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken='pk.eyJ1IjoiZXdpbGx5IiwiYSI6ImNrdzM2cGxueTFweXMyeG5vZHV5bmtwZ24ifQ.LvuWwIx_0WzqZDa4-BGYXw'
      width='100%'
      height='100%'
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
}

export default MapBox;
