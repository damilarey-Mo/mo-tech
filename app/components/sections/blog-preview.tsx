"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/app/data/blogPosts';

export default function BlogPreviewSection() {
  // Get the latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Latest Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stay updated with our latest tech insights and industry best practices
          </p>
        </div>

        <div className="relative w-full h-64">
          <Image
            className="rounded-2xl object-cover"
            src="/path/to/blog/image.jpg"
            alt="Blog preview"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
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

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
} 