//订阅配置文件
import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://github.com/EugenioCode`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: '星が隠れ',
    description: '前端技术分享博客',
    id: baseUrl,
    link: baseUrl,
    language: 'zh',
    image: `${baseUrl}/logo.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright:
      'Copyright © 2023-'+ new Date().getFullYear() + ' 星が隠れ'
  })

  const posts = await createContentLoader('posts/*/*/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: ``,
      image: frontmatter.cover,
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
