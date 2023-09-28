import { Spinner } from "@/shared";
import React from "react";

function LoadingCharacterDetails() {
  return (
    <div className="grid place-items-center">
      <Spinner />
    </div>
  );
}

export default LoadingCharacterDetails;
