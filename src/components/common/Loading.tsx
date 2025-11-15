/**
 * Loading Indicator Component
 */
export function LoadingIndicator({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
      <div
        className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
        style={{ animationDelay: '0.2s' }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
        style={{ animationDelay: '0.4s' }}
      ></div>
    </div>
  );
}

/**
 * Skeleton Loader Component
 */
export function SkeletonLoader({ className = '' }: { className?: string }) {
  return <div className={`bg-gray-700 animate-pulse ${className}`}></div>;
}
