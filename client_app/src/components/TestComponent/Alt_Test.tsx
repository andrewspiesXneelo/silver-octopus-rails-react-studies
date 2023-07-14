import { useEffect } from "react";

interface AltTestProps {
  testData: string;
}

const AltTest = (props: AltTestProps) => {
  useEffect(() => {
    // throw new Error("Error in Alternative Test Component");
  }, []);

  return (
    <div>
      <div>Alternative Test Component</div>
      {props && <div>{props.testData}</div>}
    </div>
  );
};

export default AltTest;
