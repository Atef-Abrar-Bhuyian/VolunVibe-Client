import React from "react";
import { InfinitySpin, Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-52">

      <InfinitySpin
        visible={true}
        height="280"
        width="280"
        color="purple"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loading;
