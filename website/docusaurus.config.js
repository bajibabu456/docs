const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Documentation',
  url: 'https://bajibabu9.github.com',
  baseUrl: '/docs/',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  //onBrokenMarkdownLinks: 'warn',
  organizationName: 'bajibabu9', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themes: ['docusaurus-theme-redoc'],
  themeConfig: {
    navbar: {
      title: ' ︱ Documentation',
      logo: {
        alt: '404',
	src: 'https://d33wubrfki0l68.cloudfront.net/c088b7acfcf11100903c44fe44f2f2d7e0f30531/47727/img/docusaurus.svg',
        href: 'https://google.com/',
        target: '_self'
      },
      items: [ 
         {
            to: '/',
            position: 'left',
            label: 'Docs',
	    className: 'nav-docs-item'
        },
        {
            to: 'api',
            position: 'left',
            label: 'API',
        },
        {
            label: 'SDK',
            to: '/docs/sdk/',
            position: 'left',
            className: 'nav-sdk-item'
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebar.js'),
          // Please change this to your repo.
        },
      },
    ],
  ],
  customFields: {
    deploymentBranch: 'master',
  }
};
