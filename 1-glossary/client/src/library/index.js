import axios from 'axios';

const PORT = 3000; // do we need to hide this?

const url = `http://localhost:${PORT}/glossary`;

const countGlossary = (search) => (
  axios.get(url, { params: { search } })
);

const getGlossary = (page, search) => (
  axios.get(url, { params: { page, search } })
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
  countGlossary,
  getGlossary,
  addToGlossary,
  updateGlossary,
  deleteFromGlossary
};