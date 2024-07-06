import { Text } from "@/components/ui/text";
import { Metadata } from "next";
import Image from "next/image";
import getPost from "./_utils/getPost";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="max-w-3xl flex flex-col gap-8 mt-8 mx-auto px-2">
        <Text as="h1" size={6} className="font-bold">
          {post.data.title}
        </Text>
        <div>
          <Image
            src={post.data.image}
            alt={post.data.title}
            className="rounded-lg overflow-hidden"
            width={800}
            height={400}
          />
        </div>
        <div
          className="prose md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.data.title,
    openGraph: {
      images: [post.data.image],
    },
  };
}
