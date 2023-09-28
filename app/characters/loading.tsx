import { Spinner } from "@/shared";
import React from "react";

function LoadingCharacters() {
  return (
    <div className="grid place-items-center">
      <Spinner />
    </div>
  );
}

export default LoadingCharacters;
