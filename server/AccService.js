const AccModel = require("./Accounts");
// Build CRUD Operations
// finds all accounts in db
exports.getAllAccs = async () => {
  return await AccModel.find();
};

// Creates a new account
exports.createAcc = async (acc) => {
  return await AccModel.create(acc);
};
// finds an accou t by id
exports.getAccById = async (id) => {
  return await AccModel.findById(id);
};
// Updates an account
exports.updateAcc = async (id, acc) => {
  return await AccModel.findByIdAndUpdate(id, acc);
};
// Deletes a particular account
exports.deleteAcc = async (id) => {
  return await AccModel.findByIdAndDelete(id);
};