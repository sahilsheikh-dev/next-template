"use client";

import * as React from "react";
import "./scrollIndicatorComponent.css";
import { useState } from "react";

export interface IAppProps {}

export default function ScrollIndicator(props: IAppProps) {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  return (
    <>
      <React.Fragment>
        <div className="container">
          <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
        </div>
      </React.Fragment>
    </>
  );
}
