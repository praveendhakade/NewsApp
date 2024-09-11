import { INews } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const NewsList = ({ news }: { news: INews[] }) => {
  return (
    <ul className="news-list">
      {news.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            <Image
              src={`/images/news/${news.image}`}
              alt={news.title}
              width={200}
              height={200}
            />
            {news.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
