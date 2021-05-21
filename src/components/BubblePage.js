import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // when component mounts, make axios call, retrieve color data, push to state.
  useEffect(() => {
    const getColors = () => {
      axiosWithAuth()
        .get("/colors")
        .then((res) => {
          setColorList(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getColors();
  }, []);

  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
