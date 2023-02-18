const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  // If you have other `addPlugin` calls, it’s important that UpgradeHelper is added last.
  eleventyConfig.addPlugin(UpgradeHelper);
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy
  ("./src/style.css");

  return {
    dir: {
      input: "src",
      output: "public"
    },
  };
  };