import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Centre d'aide Archispec",
  tagline: "Centre d'aide Archispec",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  themes: ["docusaurus-theme-search-typesense"],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    typesense: {
      typesenseServerConfig: {
        nodes: [
          {
            host: "typesense-railway-production-c959.up.railway.app",
            port: 443,
            protocol: "https",
          },
        ],
        apiKey: "82n8y7slc32p64tnaij71h23ao52n9mp",
      },
      typesenseCollectionName: "docusaurus-2",
    },
    // Replace with your project's social card
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: true,
      defaultMode: "light",
    },
    navbar: {
      title: "Centre d'aide",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plugins: [
      [
        "@docusaurus/plugin-sitemap",
        {
          // plugin options
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
