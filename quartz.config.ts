import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧠 EEG Processing Methods",
    pageTitleSuffix: " · Knowledge Vault",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "eeg-processing-methods",
    ignorePatterns: [
      "private",
      ".obsidian",
      "TEMPLATE.md",
      "CONTRIBUTING.md",
      "QUARTZ_SETUP.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#e8e6f0",
          gray: "#9490b5",
          darkgray: "#3d3952",
          dark: "#1e1b36",
          secondary: "#534AB7",   // Obsidian purple
          tertiary: "#1D9E75",    // Quartz green
          highlight: "rgba(83, 74, 183, 0.10)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#13111e",
          lightgray: "#1e1b36",
          gray: "#6b6799",
          darkgray: "#c2bfda",
          dark: "#eeedfe",
          secondary: "#9b94f0",
          tertiary: "#2dd4a0",
          highlight: "rgba(155, 148, 240, 0.12)",
          textHighlight: "#b3aa0088",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
