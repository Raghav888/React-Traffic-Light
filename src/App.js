import { useEffect, useState } from "react";
import "./styles.css";
const direction = ["north", "west", "south", "east"];
export default function App() {
  const [colorstate, setcolor] = useState(direction[0]);
  const [index, setindex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setcolor(direction[index]);
      setindex((index) => (index + 1) % direction.length);
    }, 2000);
  }, [index]);

  return (
    <div className="App">
      <div className="main-box">
        <div className="box">
          <span>North</span>
          <div
            className="north-red"
            style={{
              backgroundColor: colorstate === "north" ? "#B71C1C" : "#F44336"
            }}
          ></div>
          <div
            className="north-green"
            style={{
              backgroundColor: colorstate === "north" ? "#00E676" : "#1B5E20"
            }}
          ></div>
        </div>
        <div className="box">
          <span>West</span>
          <div
            className="west-red"
            style={{
              backgroundColor: colorstate === "west" ? "#B71C1C" : "#F44336"
            }}
          ></div>
          <div
            className="west-green"
            style={{
              backgroundColor: colorstate === "west" ? "#00E676" : "#1B5E20"
            }}
          ></div>
        </div>
        <div className="box">
          <span>South</span>
          <div
            className="south-red"
            style={{
              backgroundColor: colorstate === "south" ? "#B71C1C" : "#F44336"
            }}
          ></div>
          <div
            className="south-green"
            style={{
              backgroundColor: colorstate === "south" ? "#00E676" : "#1B5E20"
            }}
          ></div>
        </div>
        <div className="box">
          <span>East</span>
          <div
            className="east-red"
            style={{
              backgroundColor: colorstate === "east" ? "#B71C1C" : "#F44336"
            }}
          ></div>
          <div
            className="east-green"
            style={{
              backgroundColor: colorstate === "east" ? "#00E676" : "#1B5E20"
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// index = [0,1,2,3]
// direction = index[0];
/* for (int i=0; ; i++) {
direction = index[i%index.length];
}*/
