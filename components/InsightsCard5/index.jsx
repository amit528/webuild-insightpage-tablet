import React from "react";
import Button8 from "../Button8";
import "./InsightsCard5.css";

function InsightsCard5(props) {
  const { x1600I27322867202, propertyTaxI27322, button8Props } = props;

  return (
    <div className="insights-card-4">
      <div className="group-69-4">
        <div className="x1600-i27322867202 valign-text-middle typographyheadlineh3-extrabold-30">
          {x1600I27322867202}
        </div>
        <p className="property-tax-i27322-3 valign-text-middle typography-body-smalltext-14-regular">
          {propertyTaxI27322}
        </p>
      </div>
      <Button8>{button8Props.children}</Button8>
    </div>
  );
}

export default InsightsCard5;
