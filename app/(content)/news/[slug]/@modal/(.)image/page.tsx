"use client";
import { DUMMY_NEWS } from "@/dummyNews";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

export default function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const newsId = params.slug;
  const router = useRouter();
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog className="modal" open>
        <div className="fullscreen-image   ">
          <Image
            src={`/images/news/${newsItem?.image}`}
            alt={newsItem?.title}
            width={1000}
            height={1000}
            // fill
          />
        </div>
      </dialog>
    </>
  );
}
