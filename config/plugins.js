module.exports = ({ env }) => ({
  "import-export-entries": {
    enabled: true,
    resolve: "./src/plugins/import-export-entries",
    config: {
      serverPublicHostname: "http://localhost:8000",
    },
  },
  seo: {
    enabled: true,
  },
});
