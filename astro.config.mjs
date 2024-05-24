import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Road to resume",
      social: {
        github: "https://github.com/road-to-resume",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "스터디 운영 방식", link: "/guides/example/" },
          ],
        },
        {
          label: "Summary",
          items: [{ label: "모든 내용 요약본", link: "/summary/example/" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Week 1",
          autogenerate: { directory: "week-1" },
        },
        {
          label: "Week 2",
          autogenerate: { directory: "week-2" },
        },
        {
          label: "Week 3",
          autogenerate: { directory: "week-3" },
        },
        {
          label: "Week 4",
          autogenerate: { directory: "week-4" },
        },
      ],
    }),
  ],
});
