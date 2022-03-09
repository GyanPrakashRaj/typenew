import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';
import { useViews } from 'lib/useViews';

const editUrl = (slug: string) =>
  `https://github.com/GyanPrakashRaj${slug}.mdx`;

const discussUrl = (slug: string) =>
  `https://twitter.com/Kali_root_zBUGS${encodeURIComponent(
    `${slug}`
  )}`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  const { views } = useViews(`/blog/${post.slug}`);

  return (
    <Container
      title={`${post.title} – Gyan Prakash Raj`}
      description={post.summary}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16 break-words">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Gyan Prakash Raj"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Gyan Prakash Raj / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {post.readingTime.text}
            {` • `}
            <span>{`${views > 0 ? views.toLocaleString() : '012'} views`}</span>
          </p>
        </div>
        <section className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </section>
      </article>
    </Container>
  );
}
