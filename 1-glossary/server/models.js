// require db file
const db = require('./db.js');

// define models for save

exports.countAll = () => {
  return db.Glossary.count({});
}

exports.readAll = (page, search) => {
  let query = search ? {
    $or: [
      { word: `/${search}/` },
      { definition: `/${search}/` }
    ]
    } : {}

  return db.Glossary
    .find(query)
    .sort({ word: 'asc'})
    .skip((page - 1) * 10)
    .limit(10);
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