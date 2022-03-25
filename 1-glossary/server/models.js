// require db file
const db = require('./db.js');

// define models for save

exports.countAll = (search) => {
  const re = new RegExp(search, 'i'); // regex

  const query = search ? {
    $or: [
      { word: re },
      { definition: re}
    ]
  } : {};

  return db.Glossary.count(query);
}

exports.readAll = (page, search) => {
  const re = new RegExp(search, 'i'); // regex

  const query = search ? {
    $or: [
      { word: re },
      { definition: re}
    ]
  } : {};

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

exports.updateWord = (word, definition) => { // kind of redundant with the way I'm handling adds/updates
  return db.Glossary.findOneAndUpdate(
    { word },
    { word, definition}
  );
};

exports.deleteWord = (word) => {
  return db.Glossary.deleteOne({ word });
};