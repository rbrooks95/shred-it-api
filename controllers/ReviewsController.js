const { Reviews, sequelize } = require("./models");
const { Op } = require("sequelize");

function stringify(data) {
  console.log(JSON.stringify(data, null, 2));
}
const findAllReviews = async () => {
  let reviews = await Reviews.findAll();
  stringify(reviews);
};

async function main() {
  try {
    await findAllReviews();
  } finally {
    await sequelize.close();
  }
}

main();
