import { NewsList } from "@/components/news/news-list";
import { getLatestNews } from "@/lib/utils";

export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
}
