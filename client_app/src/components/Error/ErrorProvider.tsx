import { Component } from "react";
import Error from "./Error";
import {
  ErrorProps,
  ErrorState,
  ErrorListener,
  CustomErrorEvent,
} from "./ErrorTypes";

enum ErrorUserMessages {
  ERROR = "Seems to be an issue, please try again later. If the issue persists, please contact support.",
  UNHANDLED_REJECTION_ERROR = "Error with request, please try again later. If the issue persists, please contact support.",
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
    const listeners: ErrorListener[] = [
      {
        name: "Error",
        type: "error",
      },
      {
        name: "Unhandled Rejection Error",
        type: "unhandledrejection",
      },
    ];
    this.setErrorEventListeners(listeners);
  }

  setErrorEventListeners(listeners: ErrorListener[]) {
    for (const listener of listeners) {
      // Callback function is coerced to type of EventListener because of "typescript" reasons...
      window.addEventListener(listener.type, ((event: CustomErrorEvent) => {
        let message = "";
        let stack = "";

        if (!event.detail) {
          message = event.error.message;
          stack = event.error.stack
            ? event.error.stack
            : "No stack trace available";
        } else {
          message = event.detail.message;
          stack = event.detail.stack
            ? event.detail.stack
            : "No stack trace available";
        }

        const name = event.type.toUpperCase();
        const user_message = this.setErrorMessage(event.type);

        this.setState({
          hasError: true,
          error: {
            message,
            name,
            stack,
            user_message,
          },
        });
      }) as EventListener);
    }
  }

  setErrorMessage(type: string) {
    switch (type) {
      case "unhandledrejection":
        return ErrorUserMessages.UNHANDLED_REJECTION_ERROR;
      case "error":
        return ErrorUserMessages.ERROR;
      default:
        return ErrorUserMessages.ERROR;
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Error
          message={this.state.error?.message}
          name={this.state.error?.name}
          stack={this.state.error?.stack}
          user_message={this.state.error?.user_message}
        />
      );
    } else {
      return this.props.children;
    }
  }
}
