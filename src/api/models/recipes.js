const connection = require('./connection');

const createRecipeModel = async (name, ingredients, preparation) => {
  const conn = await connection();
  const { insertedId } = await conn
    .collection('recipes').insertOne({ name, ingredients, preparation });
  return { id: insertedId };
};

const getAllRecipesModel = async () => {
  const conn = await connection();
  const query = await conn.collection('recipes').find({}).toArray();
  return query;
};

module.exports = {
  createRecipeModel,
  getAllRecipesModel,
};