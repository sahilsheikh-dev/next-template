import HeroSectionComponent from "@/app/components/homepageComponents/heroSectionComponent/heroSectionComponent";
import * as React from "react";

export interface IAppProps {}

export default function Homepage(props: IAppProps) {
  return (
    <>
      <HeroSectionComponent />
    </>
  );
}
