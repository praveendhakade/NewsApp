import { NewsList } from "@/components/news/news-list";
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/utils";

import { getAvailableNewsYears } from "@/lib/utils";
import Link from "next/link";

export default function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] };
}) {
  const filter = params.filter;

  const selectedYear = parseInt(filter?.[0]);
  const selectedMonth = parseInt(filter?.[1]);
  let news;
  let newsContent = (
    <p className=" font-bold text-lg">No news found for the selected period.</p>
  );
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid Filter.");
  }

  return (
    <div>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </div>
  );
}
