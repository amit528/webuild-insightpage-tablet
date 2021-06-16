import React from "react";
import Button8 from "../Button8";
import "./InsightsCard.css";

function InsightsCard(props) {
  const { x1600I27322861202, text2, button8Props } = props;

  return (
    <div className="insights-card">
      <div className="group-69">
        <h1 className="x1600-i27322861202 valign-text-middle typographyheadlineh3-extrabold-30">{x1600I27322861202}</h1>
        <div className="text-2 valign-text-middle typography-body-smalltext-14-regular">{text2}</div>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard;
