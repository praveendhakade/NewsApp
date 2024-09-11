import { DUMMY_NEWS } from "@/dummyNews";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ImagePage({ params }: { params: { slug: string } }) {
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image   ">
      <Image
        src={`/images/news/${newsItem?.image}`}
        alt={newsItem?.title}
        width={500}
        height={800}
        // fill
      />
    </div>
  );
}
