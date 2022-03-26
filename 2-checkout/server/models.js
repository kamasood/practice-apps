const db = require('./db');

module.exports = {

  createSession: function(sessionId) {
    return db.queryAsync(
      `INSERT INTO responses (session_id) VALUES ('${sessionId}')`
    );
  },

  readData: function(sessionId) {
    return db.queryAsync(
      `SELECT * FROM responses WHERE session_id = '${sessionId}'`
    );
  },

  postData: function(sessionId, userData) {
    let promises = [];

    for (let column in userData) {
      promises.push(db.queryAsync(
        `UPDATE responses SET ${column} = '${userData[column]}' WHERE session_id = '${sessionId}'`
      ));
    }

    return Promise.all(promises);
  }

};