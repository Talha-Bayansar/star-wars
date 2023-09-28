import { Spinner } from "@/shared";
import React from "react";

export const revalidate = 0;

function LoadingCharacterDetails() {
  return (
    <div className="grid place-items-center">
      <Spinner />
    </div>
  );
}

export default LoadingCharacterDetails;
