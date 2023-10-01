export const MovieCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 shadow-lg p-4">
      <div className="w-32 h-8 bg-gray-400" />
      <div className="w-full min-h-[10rem] h-full bg-gray-300" />
    </div>
  );
};
