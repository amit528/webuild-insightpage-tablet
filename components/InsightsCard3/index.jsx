import React from "react";
import Button8 from "../Button8";
import "./InsightsCard3.css";

function InsightsCard3(props) {
  const { x1600I27322864202, propertyTaxI27322, button8Props } = props;

  return (
    <div className="insights-card-2">
      <div className="group-69-2">
        <div className="x1600-i27322864202 valign-text-middle typographyheadlineh3-extrabold-30">
          {x1600I27322864202}
        </div>
        <div className="property-tax-i27322-1 valign-text-middle typography-body-smalltext-14-regular">
          {propertyTaxI27322}
        </div>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard3;
