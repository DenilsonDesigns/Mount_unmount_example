import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BottomComponent: React.FC = (): JSX.Element => {
  useEffect(() => {
    console.log("BottomComponent Mounted");
    return () => {
      console.log("BottomComponent UnMounted");
    };
  }, []);

  return (
    <div>
      <p>
        BottomComponent{" "}
        <button>
          <Link to="/top-component">UnMount</Link>
        </button>
      </p>
    </div>
  );
};

export default BottomComponent;
