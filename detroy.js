const { Book } = require("./db/models");

async function destroy() {
  const res = await Book.destroy({ where: { id: 5 } });
  console.log(res);
}

destroy();
