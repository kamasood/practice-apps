import axios from 'axios';

const PORT = 3000; // do we need to hide this?

const url = `http://localhost:${PORT}/glossary`;

const getGlossary = () => (
  axios.get(url)
);

const addToGlossary = (word) => (
  axios.post(url, word)
);

const updateGlossary = (word) => (
  axios.patch(url, word)
);

const deleteFromGlossary = (word) => (
  axios.delete(url, { data: word })
)

export default {
  getGlossary,
  addToGlossary,
  updateGlossary,
  deleteFromGlossary
};