import React from "react";
import { motion } from "framer-motion";

const NumberWriter = (props) => {
  const width = props.element;
  return (
    <div className="column" key={props.element} style={{ width: width * 100 }}>
      <h2>{props.element}</h2>
    </div>
  );
};

export default NumberWriter;
