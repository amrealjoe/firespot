import React, { useState } from "react";
import "./style.css";
import Mapir from "mapir-react-component";
import "./api-key";

const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key": Your_API_Key, //Mapir api key
        "Mapir-SDK": "reactjs",
      },
    };
  },
});

const App = () => {
  const [markerArray, setMarkerArray] = useState([]);
  const [coord, setCoord] = useState([51.42, 35.72]);
  function reverseFunction(map, e) {
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": Your_API_Key,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    const array = [];
    array.push(
      <Mapir.Marker
        coordinates={[e.lngLat.lng, e.lngLat.lat]}
        anchor="bottom"
      />
    );
    setMarkerArray(array);
  }
  return (
    <div className="App">
      <Mapir center={coord} Map={Map} onClick={reverseFunction}>
        {markerArray}
      </Mapir>
    </div>
  );
};

export default App;
