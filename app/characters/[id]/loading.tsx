import { Spinner } from "@/shared";
import React from "react";

function LoadingMovies() {
  return (
    <div className="grid place-items-center">
      <Spinner />
    </div>
  );
}

export default LoadingMovies;
