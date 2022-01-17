const connection = require('./connection');

const createUserModel = async (name, email, password, role) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('users').insertOne({ name, email, password, role });
  return { id: insertedId };
};

const findUserByEmailModel = async (email) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('users').find({ email });
  if (!insertedId) return null;
  return { id: insertedId };
};

module.exports = {
  createUserModel,
  findUserByEmailModel,
};