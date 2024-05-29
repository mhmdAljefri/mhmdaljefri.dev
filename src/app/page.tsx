import { Text } from "@/components/ui/text";
import HeroSection from "./hero-section";
import { cn } from "@/lib/utils";
import Image from "next/image";
import fm from "gray-matter";
import Link from "next/link";
import { Section } from "@/components/section";
import { list } from "@/data/projects.json";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      <Section wrapperClassName="bg-slate-100 rounded-t-[8vw] pb-[14vw] dark:bg-slate-200/5">
        <Text as="h2" size={6} className="font-black">
          Featured Projects
        </Text>
        <div className="grid grid-cols-12 mt-8 md:gap-8 md:grid-rows-2">
          {list.map(({ image, link, tags }, idx) => (
            <div
              className={cn(
                "col-span-6 px-2 my-2 md:my-0 relative md:col-span-3",
                {
                  "col-span-12 md:col-span-6 md:row-span-2": idx === 0,
                }
              )}
              key={idx}
            >
              <a
                href={link}
                target="_blank"
                className="aspect-video block overflow-hidden h-full relative w-auto bg-background text-foreground rounded"
              >
                <Image alt={link} src={image} fill />
                <div className="absolute bottom-2 start-2 flex gap-2">
                  {tags.map((tag) => (
                    <Text
                      size="-2"
                      key={tag}
                      className="p-1 px-1.5 rounded bg-background"
                    >
                      {tag}
                    </Text>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="container"
        wrapperClassName="rounded-t-[8vw] relative -top-[8vw]"
      >
        <Text as="h2" size={6} className="font-black">
          My thoughts and posts
        </Text>

        <div className="flex flex-col gap-4 mt-8">
          {posts.map(({ data, filePath, readingTime }, idx) => (
            <div
              className="flex flex-row gap-4 rounded-xl hover:bg-foreground/5 hover:backdrop-blur-lg p-4"
              key={idx}
            >
              <Link
                href={`/blog/${filePath}`}
                className="aspect-video w-20 relative shadow-sm overflow-hidden rounded-xl"
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </Link>

              <div>
                <Link href={`/blog/${filePath}`}>
                  <Text as="h3" size={2} bold>
                    {data.title}
                  </Text>
                </Link>
                <Text size={0}>{readingTime.text}</Text>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}

async function getPosts() {
  const fs = require("fs");
  const path = require("path");
  const readingTime = require("reading-time");

  const directoryPath = path.join(process.cwd(), "content", "blog");
  const files = fs.readdirSync(directoryPath);

  const posts = [];

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = fm(fileContent);

    if (!data.date) {
      throw new Error(`${data.title} should have date`);
    }

    posts.push({
      data,
      filePath: file.replace(".md", ""),
      readingTime: readingTime(content),
    });
  }

  // Sort posts by creation date in descending order
  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return posts;
}
