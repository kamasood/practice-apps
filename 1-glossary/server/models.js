// require db file
const db = require('./db.js');

// define models for save
exports.readAll = () => {
  console.log('reading all words from db');
  return db.Glossary.find({});
};

exports.saveWord = (word, definition) => {
  console.log('saving word:', word, 'and def:', definition, 'to db');
  return db.Glossary.findOneAndUpdate(
    { word }, // filter
    { word, definition}, // replacement
    { upsert: true } // options
  );
};

exports.updateWord = (word, definition) => {
  console.log('updating word:', word, 'and def:', definition, 'in db');
  return db.Glossary.findOneAndUpdate(
    { word },
    { word, definition}
  );
};

exports.deleteWord = (word) => {
  console.log(`deleting '${word}' from db`);
  return db.Glossary.deleteOne({ word });
};