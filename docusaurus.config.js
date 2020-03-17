module.exports = {
  title: 'Introduccion a la Economia',
  tagline: 'Prof: María Pía Santibáñez',
  url: 'https://sjvasconcello.github.io',
  baseUrl: '/ICS733_documentation/',
  favicon: 'img/favicon.ico',
  organizationName: 'sjvasconcello', // Usually your GitHub org/user name.
  projectName: 'ICS733_documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Economía IA',
      logo: {
        alt: 'ICS733',
        src: '',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Clases',
              to: 'docs/doc1',
            },
            {
              label: 'Recursos',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
          
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, @sjvasconcello`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
