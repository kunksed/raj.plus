const config = {
  siteTitle: 'Raj Kunkolienkar',
  siteTitleShort: 'Raj Kunkolienkar',
  siteTitleAlt: 'Raj Kunkolienkar',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://www.raj.plus',
  repo: 'https://github.com/kunksed/raj.plus',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Raj Kunkolienkar is an entrepreneur who works in the domain of education and productivity. Being a generalist, his interests span markerplaces, physics and technology.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  disqusShortname: 'taniarascia',
  postDefaultCategoryID: 'Tech',
  userName: 'Raj',
  userEmail: 'hi@raj.plus',
  userTwitter: 'kunksed',
  userLocation: 'Goa, India',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I learn while helping people learn.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name : 'Learn',
      link : '/learn/',
    },
    {
      name: 'Essays',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
