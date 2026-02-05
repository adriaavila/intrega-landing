"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPost } from "../../../lib/data";

export default function BlogPostClient({ post }: { post: BlogPost }) {
    return (
        <main className="relative bg-[#0a0a0a] min-h-screen pt-24">
            {/* Article Header */}
            <section className="relative py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-[#C8C6D7] hover:text-white mb-12 transition-colors"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Volver al Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 text-xs font-mono text-[#C8C6D7] mb-6">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime} read</span>
                            <span>•</span>
                            <span className="text-[#a49bbd] uppercase">{post.category}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                            {post.title}
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="relative pb-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-invert prose-lg max-w-none text-white/80"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </section>
        </main>
    );
}
