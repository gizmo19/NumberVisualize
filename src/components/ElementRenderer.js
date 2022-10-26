import React from "react";
import "../index.css";
import ColumnSize from "./ColumnSize";

const ElementRenderer = (props) => {
  const height = props.element;
  const numbersCount = props.numbersCount;
  const numbersRange = props.numbersRange;

  let column = new ColumnSize(numbersRange, numbersCount, height);
  let size = column.size();

  return (
    <div
      className="column"
      key={props.element}
      style={{
        height: size.columnHeight,
        width: size.width,
        marginLeft: size.marginLeft,
        marginRight: size.marginRight,
        alignItems: size.alignItems,
      }}
    >
      <p style={{ fontSize: size.fontSize }} className="columnParagraphStyle">
        {props.element}
      </p>
    </div>
  );
};

export default ElementRenderer;
