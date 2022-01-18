const connection = require('./connection');

const createRecipeModel = async (...data) => {
  const [name, ingredients, preparation] = data;
  const conn = await connection();
  const { insertedId } = await conn
    .collection('recipes').insertOne({ name, ingredients, preparation });
  return { id: insertedId };
};

module.exports = {
  createRecipeModel,
};