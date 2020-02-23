import React from "react";
import "./PositionLabel.css";

function PositionLabel(props) {
  const positionLabel = props.positions.find(
    position => position.id === props.positionId
  ).title;
  const className = "empty";

  return <span className={className}>{positionLabel}</span>;
}

export default PositionLabel;
