import axios from 'axios';

const PORT = 3000; // do we need to hide this?

const url = `http://localhost:${PORT}/glossary`;

const countGlossary = () => (
  axios.get(url)
);

const getGlossary = (page, search) => {
  console.log('page', page);
  console.log('search', search);

  return axios.get(url, { params: { page, search } });
};

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