import Image from "next/image";
import Link from "next/link";

export function Carousel() {
  const stack = [
    "docker",
    "gatsby",
    "github",
    "graphql",
    "javascript",
    "jquery",
    "nextjs",
    "rails",
    "reactjs",
    "redux",
    "redwoodjs",
    "rollupjs",
    "sass",
    "svelte",
    "tailwind",
    "typescript",
    "vue",
  ];

  const carousel = [...stack, ...stack, ...stack];

  return (
    <div className="w-full overflow-x-hidden pb-6 pt-20 dark:invert">
      <ul className="flex animate-carousel gap-4 sm:gap-12">
        {carousel.map((tech, i) => (
          <li
            key={i}
            title={tech}
            className="relative aspect-square w-2/3 max-w-[100px] p-4 flex-none md:w-1/3"
          >
            <Image
              className="object-contain"
              src={`/logos/${tech}.png`}
              alt={tech}
              fill
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
