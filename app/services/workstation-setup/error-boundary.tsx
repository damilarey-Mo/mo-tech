'use client';

import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Workstation Setup Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-black/50 p-8 rounded-lg border border-yellow-400/20 text-center">
            <FaExclamationTriangle className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-yellow-400 mb-4">Something went wrong</h1>
            <p className="text-yellow-100 mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact our support team if the problem persists.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors duration-200"
              >
                Refresh Page
              </button>
              <a
                href="/contact"
                className="block w-full px-6 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400/10 transition-colors duration-200"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 