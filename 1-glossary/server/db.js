const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

// connection

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

// schema

const glossarySchema = mongoose.Schema({
  word: String,
  definition: String
});

// model

const Glossary = mongoose.model('Glossary', glossarySchema);

// export model

module.exports.Glossary = Glossary;