// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Science', 'Python', 'Plots'],
  },
  {
    title: 'Plotly',
    competency: 5,
    category: ['Data Science', 'Python', 'Plots'],
  },
  {
    title: 'Dask',
    competency: 4,
    category: ['Data Science', 'Big Data'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'PyTorch Lightning',
    competency: 5,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'TensorFlow',
    competency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
