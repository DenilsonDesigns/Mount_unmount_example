import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TopComponent: React.FC = (): JSX.Element => {
  useEffect(() => {
    console.log("TopComponent Mounted");
    return () => {
      console.log("TopComponent UnMounted");
    };
  }, []);

  return (
    <div>
      <p>
        TopComponent{" "}
        <button>
          <Link to="/bottom-component">UnMount</Link>
        </button>
      </p>
    </div>
  );
};

export default TopComponent;
