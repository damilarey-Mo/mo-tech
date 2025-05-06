"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  imageSrc: string;
  slug: string;
}

export default function BlogPage() {
  return (
    <div className="bg-gradient-to-b from-amber-900/90 to-yellow-900/80 dark:from-amber-900/90 dark:to-yellow-900/80 min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Link 
            href="/"
            className="inline-flex items-center text-yellow-300 hover:text-yellow-200 mb-8"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            TeaMo Tech Blog
          </h1>
          <p className="mt-4 text-lg text-yellow-100">
            Insights, tips, and guides from our tech experts to help your business thrive in the digital age.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/20 px-2 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 ring-1 ring-inset ring-primary-700/10 dark:ring-primary-400/20">
                    {post.category}
                  </span>
                  <time className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <span className="text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 dark:hover:text-yellow-400">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center gap-x-4">
                    <div className="text-sm">
                      <p className="font-medium text-gray-900 dark:text-white">{post.author}</p>
                      <p className="text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 