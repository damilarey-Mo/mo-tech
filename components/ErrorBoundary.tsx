'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-black/50 backdrop-blur-lg rounded-xl border border-yellow-400/20 p-6 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Oops! Something went wrong</h2>
            <p className="text-yellow-100 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact our support team if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 