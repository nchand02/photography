import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 */
class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-dark-900">
            <div className="text-center text-white p-8 max-w-md">
              <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We apologize for the inconvenience. Please try reloading the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary-500 text-dark-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Reload Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
