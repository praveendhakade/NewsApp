import { DUMMY_NEWS } from "@/dummyNews";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <Image
            width={200}
            height={200}
            src={`/images/news/${newsItem?.image || ""}`}
            alt={newsItem?.title}
          />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}
