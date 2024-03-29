const { ObjectId } = require('mongodb');
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

const getRecipeByIdModel = async (id) => {
  const conn = await connection();
  const query = await conn.collection('recipes').findOne({ _id: new ObjectId(id) });
  return query;
};

const editRecipeModel = async (id, name, ingredients, preparation) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, ingredients, preparation } },
  );
  return { id: insertedId };
};

const deleteRecipeModel = async (id) => {
  const conn = await connection();
  await conn.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createRecipeModel,
  getAllRecipesModel,
  getRecipeByIdModel,
  editRecipeModel,
  deleteRecipeModel,
};