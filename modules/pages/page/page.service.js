const Page = require("./page.model");

const generatePageSlug = async (slugName) => {
  const slug = slugName.replaceAll(" ", "-").toLowerCase();
  const result = await Page.findOne().sort({ _id: -1 }).select("slug name");
  let id = 0;
  if (result) {
    const splits = await result?.slug.split("-");
    const numbers = await splits.pop();
    id = parseInt(numbers);
  }
  return `${slug}-${id + 1}`;
};

module.exports = {
  generatePageSlug,
};
