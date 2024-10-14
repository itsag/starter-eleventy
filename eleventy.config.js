module.exports = function (config) {
  config.addPassthroughCopy("source/assets");
  config.addPassthroughCopy("source/robots.txt");
  config.addPassthroughCopy("source/sitemap.xml");

  return {
    dir: {
      output: "dist",
      input: "source",
      includes: "includes",
      data: "data",
    },
  };
};
