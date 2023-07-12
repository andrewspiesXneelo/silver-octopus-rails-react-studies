import { Component } from "react";
import {
  ErrorProps,
  ErrorState,
  ErrorListener,
  CustomErrorEvent,
} from "./ErrorTypes";
import Error from "./Error";
import UnhandledError from "./UnhandledError";

// we can define error messages in some form if you don't want to load different components
enum ErrorUserMessages {
  ERROR = "Seems to be an issue, please try again later. If the issue persists, please contact support.",
  UNHANDLED_REJECTION_ERROR = "Error with request, please try again later. If the issue persists, please contact support.",
}

export default class ErrorProvider extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);

    this.state = {
      hasError: false,
      error: {
        message: "",
        name: "",
        stack: "",
        user_message: "",
        error_component: <Error name={""} message={""} />,
      },
    };
    this.init();
  }

  /**
   * init()
   *
   * Define errors listeners and runs function to set them on the window object
   *
   * @returns void
   */

  init() {
    const listeners: ErrorListener[] = [
      {
        name: "Error",
        type: "error",
        component: (
          <Error name={""} message={""} stack={""} user_message={""} />
        ),
      },
      {
        name: "Unhandled Rejection Error",
        type: "unhandledrejection",
        component: (
          <UnhandledError name={""} message={""} stack={""} user_message={""} />
        ),
      },
    ];
    this.setErrorEventListeners(listeners);
  }

  /**
   * setErrorEventListeners()
   *
   * Sets error event listeners on the window object
   *
   * @param listeners ErrorListener[] - Array of ErrorListener objects
   * @returns void
   */

  setErrorEventListeners(listeners: ErrorListener[]) {
    for (const listener of listeners) {
      window.addEventListener(listener.type, ((event: CustomErrorEvent) => {
        let message = "";
        let stack = "";

        // Need to check if it's a custom error event or custom error with a response - can improve this
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
            error_component: listener.component,
          },
        });
      }) as EventListener); // Callback function is coerced to type of EventListener because of "typescript" reasons. :facepalm:
    }
  }

  /**
   * setErrorMessage()
   *
   * Sets the user message based on the error type
   *
   * @param type string - Error type
   * @returns string - User message
   */
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

  /**
   * render()
   *
   * Renders the error component if there is an error
   *
   * @returns JSX.Element - Error component or children components
   */
  render() {
    if (this.state.hasError) {
      return this.state.error.error_component;
    } else {
      return this.props.children;
    }
  }
}
