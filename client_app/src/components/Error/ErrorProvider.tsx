/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from "react";
import Error from "./Error";

interface ErrorState {
  hasError: boolean;
  error: Error | undefined;
}

interface ErrorProps {
  children: React.ReactNode;
}

export default class ErrorProvider extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);

    this.state = {
      hasError: false,
      error: undefined,
    };
    this.init();
  }

  init() {
    window.addEventListener(
      "error",
      (event: any) => {
        this.setState({
          hasError: true,
          error: event.detail,
        });
      },
      true
    );
    window.addEventListener("unhandledrejection", (event: any) => {
      console.log("Unhandled Rejection", event.detail);
      event.detail.name = "Unhandled Rejection";

      this.setState({
        hasError: true,
        error: event.detail,
      });
    });
  }

  render() {
    console.log("Error Provider State", this.state);
    if (this.state.hasError) {
      return (
        <Error
          message={this.state.error!.message}
          name={this.state.error!.name}
          stack={this.state.error!.stack}
        />
      );
    } else {
      return this.props.children;
    }
  }
}
