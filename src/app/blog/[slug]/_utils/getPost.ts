import fm from "gray-matter";
import snarkdown from "snarkdown";

export default async function getPost(file: string) {
  const fs = require("fs");
  const path = require("path");

  const directoryPath = path.join(process.cwd(), "content", "blog");
  const filePath = path.join(directoryPath, file + ".md");
  const fileContent: string = fs.readFileSync(filePath, "utf8");

  const { data, content } = fm(fileContent);
  return { data, content: snarkdown(content) };
}
