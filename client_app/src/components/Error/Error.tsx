/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface ErrorProps {
  name: any;
  message: any;
  stack?: any;
  user_message?: any;
}

const Error = ({ name, message, stack, user_message }: ErrorProps) => {
  return (
    <div className="error-container">
      <h2>Oops! Well this is embarrassing...</h2>
      <p>{name ? name : "Error"}</p>
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

export default Error;
