const connection = require('./connection');

const createUserModel = async (name, email, password, role) => {
  const conn = await connection();
  const { insertedId } = await conn.collection('users').insertOne({ name, email, password, role });
  return { id: insertedId };
};

const findUserByEmailModel = async (email) => {
  const conn = await connection();
  const emailExists = await conn.collection('users').findOne({ email });
  if (!emailExists) return null;
  return emailExists;
};

module.exports = {
  createUserModel,
  findUserByEmailModel,
};