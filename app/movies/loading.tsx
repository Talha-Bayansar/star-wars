import React from "react";

function LoadingCharacters() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </main>
  );
}

const Skeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-32 h-8 bg-gray-400" />
      <div className="w-full h-40 bg-gray-300" />
    </div>
  );
};

export default LoadingCharacters;
