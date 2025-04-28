const RPM_URL = "http://localhost:3001"

module.exports = {
  async rewrites() {
    return [
      {
        source: "/rpm",
        destination: `${RPM_URL}/`,
      },
    ];
  },
};