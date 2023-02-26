module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlissOS Blog',
  tagline: 'Blissify your PC/Laptops',
  url: 'https://blog.blissos.org',
  baseUrl: '/',
  organizationName: 'BlissRoms-x86',
  projectName: 'blog',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: '7639560510014441',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-google-adsense'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAdsense: {
        dataAdClient: 'ca-pub-7639560510014441',
      },
      navbar: {
        title: 'BlissOS Blog',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Websites',
            items: [
              {
                label: 'BlissOS Website',
                href: 'https://blissos.org/',
              },
              {
                label: 'BlissRoms Website',
                href: 'https://blissroms.org/',
              },
              {
                label: 'BlissLabs Website',
                href: 'https://blisslabs.org/',
              },
            ],
          },
          {
            title: 'BlissLabs Socials',
            items: [
              {
                label: 'BlissLabs Discord',
                href: 'https://discord.com/invite/F9n5gbdNy2',
              },
              {
                label: 'BlissLabs Facebook',
                href: 'https://www.facebook.com/BlissFamilyOfROMs/',
              },
              {
                label: 'BlissLabs LinkedIn',
                href: 'https://www.linkedin.com/company/stayblissful',
              },
            ],
          },
          {
            title: 'BlissOS Social',
            items: [
              {
                label: 'BlissOS Instagram',
                href: 'https://instagram.com/blissos_org',
              },
              {
                label: 'BlissOS Reddit',
                href: 'https://www.reddit.com/r/BlissOS',
              },
              {
                label: 'BlissOS Twitter',
                href: 'https://twitter.com/blissos_org',
              },
              {
                label: 'BlissOS Telegram',
                href: 'https://t.me/blissx86',
              },           
            ],
          },
          {
            title: 'BlissRoms Social',
            items: [
              {
                label: 'BlissRoms Facebook',
                href: 'https://www.facebook.com/BlissROMs/',
              },
              {
                label: 'BlissRoms Instagram',
                href: 'https://instagram.com/blissroms',
              },
              {
                label: 'BlissRoms Reddit',
                href: 'https://www.reddit.com/r/BlissRoms',
              },
              {
                label: 'BlissRoms Twitter',
                href: 'https://twitter.com/bliss_roms',
              },
              {
                label: 'BlissRoms Telegram',
                href: 'https://t.me/Team_Bliss_Community',
              },   
            ],
          },
          {
            title: 'Sources',
            items: [
              {
                label: 'Android-Generic Gitlab',
                to: 'https://github.com/android-generic/vendor_ag',
              },
              {
                label: 'BlissRoms Gerrit Review',
                to: 'https://review.blissos.com',
              },
              {
                label: 'BlissRoms Github',
                to: 'https://github.com/BlissRoms',
              },
              {
                label: 'BlissRoms-Devices Github',
                to: 'https://github.com/BlissRoms-Devices',
              },
              {
                label: 'BlissRoms-PINE64 Github',
                to: 'https://github.com/BlissRoms-pine64',
              },
              {
                label: 'BlissOS Github',
                to: 'https://github.com/BlissRoms-x86',
              },              
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'BlissOS Docs',
                to: 'https://docs.blissos.org/',
              },
              {
                label: 'BlissRoms Docs',
                href: 'https://docs.blissroms.org/',
              },
              {
                label: 'Android-Generic Docs',
                href: 'https://android-generic-project.gitbook.io/documentation/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://blisslabs.org/">BlissLabs</a>, All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
