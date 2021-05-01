module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog/1',
        permanent: true,
      },
    ]
  },
}
