export const CharacterCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 shadow-lg p-4">
      <div className="w-32 h-8 bg-gray-400" />
      <div className="flex flex-col gap-2">
        <div className="w-24 h-6 bg-gray-300" />
        <div className="w-24 h-6 bg-gray-300" />
        <div className="w-24 h-6 bg-gray-300" />
        <div className="w-24 h-6 bg-gray-300" />
      </div>
    </div>
  );
};
