import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen py-24 flex items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
          404 - Blog Post Not Found
        </h2>
        <p className="text-lg text-yellow-100 mb-8">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <Link 
          href="/blog"
          className="inline-flex items-center text-yellow-300 hover:text-yellow-200"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
      </div>
    </div>
  );
} 