const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://bdd-workshop.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://static1.smartbear.co/cucumber/media/images/logos/icons/cucumber-open-icon.svg',
    logoLink: 'https://bdd-workshop.com',
    title:
      "BDD Workshop",
    githubUrl: 'https://github.com/itmayziii/bdd-workshop/tree/gh-pages',
    helpUrl: '',
    tweetText: '',
    social: `
      <li>
		    <a href="https://twitter.com/iTMayzIII" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
		`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above,
      '/bdd',
      '/user-stories',
      '/acceptance-criteria',
    ],
    collapsedNav: [
    ],
    links: [
      { text: 'BDD Overview', link: 'https://cucumber.io/docs/bdd/' },
      { text: 'Cucumber Overview', link: 'https://cucumber.io/docs/guides/overview/' }
    ],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://bdd-workshop.com/'>BDD </a><div class='greenCircle'></div><a href='https://bdd-workshop.com/'>Workshop</a>",
  },
  siteMetadata: {
    title: 'BDD Workshop | Tommy May III',
    description: 'BDD workshop focused around Cucumber',
    ogImage: null,
    docsLocation: '',
    favicon: 'https://cucumber.io/img/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
