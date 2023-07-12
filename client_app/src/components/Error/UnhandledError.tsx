interface ErrorProps {
  name: string;
  message: string;
  stack?: string;
  user_message?: string;
}

const UnhandledError = ({ name, message, stack, user_message }: ErrorProps) => {
  return (
    <div className="error-container">
      <h2>Ouch that hurt! Unhandled Rejection Error</h2>
      <p>{name ? name : "Unhandled Error"}</p>
      <p>{message ? message : "no message"}</p>
      <p>
        {user_message
          ? user_message
          : "Error has occured please contact support"}
      </p>
      <p>{stack ? stack : ""}</p>
    </div>
  );
};

export default UnhandledError;
