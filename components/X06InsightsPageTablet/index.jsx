import React from "react";
import Frame144 from "../Frame144";
import InsightsCard from "../InsightsCard";
import InsightsCard2 from "../InsightsCard2";
import InsightsCard3 from "../InsightsCard3";
import InsightsCard4 from "../InsightsCard4";
import InsightsCard5 from "../InsightsCard5";
import InsightsCard6 from "../InsightsCard6";
import InsightsCard7 from "../InsightsCard7";
import Footer5 from "../Footer5";
import "./X06InsightsPageTablet.css";

function X06InsightsPageTablet(props) {
  const {
    insights,
    rectangle76,
    text149,
    frame144Props,
    insightsCardProps,
    insightsCard2Props,
    insightsCardProps2,
    insightsCard2Props2,
    insightsCardProps3,
    insightsCard2Props3,
    insightsCard7Props,
    footer5Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x06-insights-page-tablet screen">
        <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
        <div className="insights valign-text-middle typographyheadlineh4-extrabold-24">{insights}</div>
        <img className="rectangle-76" src={rectangle76} />
        <p className="text-1 typography-body-smalltext-14-regular">{text149}</p>
        <div className="frame-1635">
          <div className="frame-1632">
            <InsightsCard
              x1600I27322861202={insightsCardProps.x1600I27322861202}
              text2={insightsCardProps.text2}
              button8Props={insightsCardProps.button8Props}
            />
            <InsightsCard2
              x1600I27322862202={insightsCard2Props.x1600I27322862202}
              propertyTaxI27322={insightsCard2Props.propertyTaxI27322}
              button8Props={insightsCard2Props.button8Props}
            />
          </div>
          <div className="frame-163">
            <InsightsCard3
              x1600I27322864202={insightsCardProps2.x1600I27322864202}
              propertyTaxI27322={insightsCardProps2.propertyTaxI27322}
              button8Props={insightsCardProps2.button8Props}
            />
            <InsightsCard4
              x1600I27322865202={insightsCard2Props2.x1600I27322865202}
              propertyTaxI27322={insightsCard2Props2.propertyTaxI27322}
              button8Props={insightsCard2Props2.button8Props}
            />
          </div>
          <div className="frame-163">
            <InsightsCard5
              x1600I27322867202={insightsCardProps3.x1600I27322867202}
              propertyTaxI27322={insightsCardProps3.propertyTaxI27322}
              button8Props={insightsCardProps3.button8Props}
            />
            <InsightsCard6
              x1600I27322868202={insightsCard2Props3.x1600I27322868202}
              propertyTaxI27322={insightsCard2Props3.propertyTaxI27322}
              button8Props={insightsCard2Props3.button8Props}
            />
          </div>
          <InsightsCard7
            x1600I27322869202={insightsCard7Props.x1600I27322869202}
            propertyTaxI27322={insightsCard7Props.propertyTaxI27322}
            button8Props={insightsCard7Props.button8Props}
          />
        </div>
        <Footer5 {...footer5Props} />
      </div>
    </div>
  );
}

export default X06InsightsPageTablet;
