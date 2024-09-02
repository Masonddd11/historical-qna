export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full">
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: `${progress}%` }}
            className="h-2 rounded-full bg-indigo-600"
          />
        </div>
      </div>
    </div>
  );
}
