import * as React from "react";
import "./heroSectionComponent.css";

export interface IAppProps {}

export default function HeroSectionComponent(props: IAppProps) {
  return (
    <>
      <div className="hero-section">
        <h1>Hero Section</h1>
      </div>
    </>
  );
}
