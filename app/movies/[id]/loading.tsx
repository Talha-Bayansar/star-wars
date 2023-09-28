import { Spinner } from "@/shared";
import React from "react";

function LoadingMovieDetails() {
  return (
    <div className="grid place-items-center">
      <Spinner />
    </div>
  );
}

export default LoadingMovieDetails;
