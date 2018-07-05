import * as React from "react";
import { Indicator } from "./indicator";
import { ErrorView } from "./error";

export const ApplicationState = {
  INIT: 0,
  LOADING: 1,
  READY: 2,
  ERROR: 3
}

/*
 * Wrapper container for the
 * app context. Governs the
 * view rendering process
 */
export const Container = ({
  state,
  children
}) => (
    <div className="loader-container">
      {
        (() => {
          switch (true) {
            case state === ApplicationState.INIT:
            case state === ApplicationState.LOADING:
              return <Indicator />;
            case state === ApplicationState.ERROR:
              return <ErrorView />;
            default:
              return children;
          }
        })()
      }
    </div>
  );