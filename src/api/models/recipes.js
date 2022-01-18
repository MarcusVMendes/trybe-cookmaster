const connection = require('./connection');

const createRecipeModel = async (name, ingredients, preparation) => {
  const conn = await connection();
  const { insertedId } = await conn
    .collection('recipes').insertOne({ name, ingredients, preparation });
  return { id: insertedId };
};

module.exports = {
  createRecipeModel,
};