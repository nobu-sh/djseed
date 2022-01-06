// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DJSeed',
  tagline: 'Discord.js but easier for you :)',
  url: 'https://nobu-sh.github.io',
  baseUrl: '/djseed/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'nobu-sh',
  projectName: 'DJSeed',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      navbar: {
        title: 'DJSeed',
        logo: {
          alt: 'DJSeed',
          // src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'starting',
            position: 'left',
            label: 'Guide'
          },
          {
            href: '',
            label: 'GitHub',
            position: 'right',
          }
        ]
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/starting',
              },
              // {
              //   label: 'Installation',
              //   to: '/docs/intro',
              // },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: '',
              },
              {
                label: 'GitHub',
                href: '',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Repo',
                href: '',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nobu`
      },
      prism: {
        theme: darkCodeTheme,
      },
    }),
};

module.exports = config;
