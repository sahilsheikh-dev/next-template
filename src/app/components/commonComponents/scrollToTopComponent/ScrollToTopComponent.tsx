"use client";

import { Button } from "@nextui-org/react";
import * as React from "react";
import { useEffect, useState } from "react";

export interface IAppProps {}

export default function ScrollToTop(props: IAppProps) {
  const [scrollCheck, setScrollCheck] = useState(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollCheck(true);
    } else {
      setScrollCheck(false);
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <>
      <div>
        {scrollCheck ? (
          <div
            style={{
              overflow: "hidden",
              backgroundColor: "#333",
              position: "fixed",
              width: "95%",
              fontFamily: "Montserrat",
            }}
          >
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              style={{
                position: "fixed",
                bottom: "20px",
                right: "15px",
                zIndex: "99",
                border: "none",
                outline: "none",
                cursor: "pointer",
                borderRadius: "4px",
                background: "none",
                padding: 0,
              }}
            >
              To Top Logo
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
