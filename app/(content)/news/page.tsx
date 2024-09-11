import { NewsList } from "@/components/news/news-list";
import { DUMMY_NEWS } from "@/dummyNews";

const NewsPage = () => {
  return (
    <main className="relative">
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </main>
  );
};

export default NewsPage;
