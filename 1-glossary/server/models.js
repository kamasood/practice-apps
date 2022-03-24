// require db file
const db = require('./db.js');

// define models for save
exports.readAll = () => {
  return db.Glossary.find({}).sort({ word: 'asc'});
};

exports.saveWord = (word, definition) => {
  return db.Glossary.findOneAndUpdate(
    { word }, // filter
    { word, definition}, // replacement
    { upsert: true } // options
  );
};

exports.updateWord = (word, definition) => {
  return db.Glossary.findOneAndUpdate(
    { word },
    { word, definition}
  );
};

exports.deleteWord = (word) => {
  return db.Glossary.deleteOne({ word });
};