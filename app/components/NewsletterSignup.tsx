import React from 'react';

export default function NewsletterSignup() {
  return (
    <div className="bg-white/10 dark:bg-gray-800/10 rounded-2xl p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Stay Updated with TeaMo Tech
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Subscribe to our newsletter for the latest tech insights and tips.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="rounded-full bg-yellow-600 px-5 py-2 text-base font-semibold text-white shadow-lg hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
} 