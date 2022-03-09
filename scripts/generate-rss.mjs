import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Gyan Prakash raj',
    site_url: '',
    feed_url: ''
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://koenvangilst.nl/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
