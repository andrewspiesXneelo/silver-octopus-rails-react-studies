/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
interface ErrorProps {
  name: any;
  message: any;
  stack?: any;
}

const Error = ({ name, message, stack }: ErrorProps) => {
  return (
    <div className="error-container">
      <h3>Oops we have encounterd an error...</h3>
      <p>{name}</p>
      <p>{message}</p>
      <p>{stack}</p>
    </div>
  );
};

export default Error;
