import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button8.css";

function Button8(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i273228612022185TimelineData);
  }, []);

  return (
    <div className="i27322861-2022185 component component-wrapper not-ready">
      <div className="master-button-tQxyfh">
        <div className="button-i2732286120-pAPHLp valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i273228612022185TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i27322861-2022185",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button8;
