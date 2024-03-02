import { Text } from "@/components/ui/text";
import fm from "gray-matter";
import snarkdown from "snarkdown";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <main className="flex flex-col min-h-screen">
      <div className="max-w-3xl flex flex-col gap-8 mt-8 mx-auto px-2">
        <Text as="h1" size={6} className="font-bold">
          {post.data.title}
        </Text>
        <div
          className="prose md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}

async function getPost(file: string) {
  const fs = require("fs");
  const path = require("path");

  const directoryPath = path.join(process.cwd(), "content", "blog");
  const filePath = path.join(directoryPath, file + ".md");
  const fileContent: string = fs.readFileSync(filePath, "utf8");

  const { data, content } = fm(fileContent);
  return { data, content: snarkdown(content) };
}
