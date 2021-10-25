// TODO Add a couple of lines about each project
const data = [
  {
    title: 'Seismic Data Augmentation Library',
    image: '/images/projects/back1.jpg',
    link: 'https://github.com/IMGW-univie/seismic-augmentation',
    date: '2021-09-15',
    desc:
      'A unified library for augmentations of seismic data.',
  },
  {
    title: 'SEDENOSS',
    subtitle: 'SEparating and DENOising Seismic Signals with dual-path recurrent neural network architecture',
    link: 'https://github.com/IMGW-univie/source-separation',
    image: '/images/projects/back3.jpg',
    date: '2021-09-01',
    desc:
      'Seismologists have to deal with overlapping and noisy signals. '
      + 'Techniques such as source separation can be used to solve this problem. '
      + 'Over the past few decades, signal processing techniques used for '
      + 'source separation has advanced significantly for multi-station settings. '
      + 'But not so many options are available when it comes to single-station data. '
      + 'Using Machine Learning, we demonstrate the possibility of separating sources '
      + 'for single-station, one-component seismic recordings. ',
  },
  {
    title: 'ThuderSeis',
    subtitle: 'Seismo-acoustic study of thunder and lightning using the AlpArray',
    link: 'https://github.com/IMGW-univie/thunder-seis',
    image: '/images/projects/back2.jpg',
    date: '2021-09-01',
    desc:
      'Lightning is a natural phenomenon that occurs almost everywhere on Earth. '
      + 'We have analyzed a large amount of lightning data collected with seismic '
      + 'and electromagnetic instruments. The seismic results show that lightning '
      + 'signals are visible in the seismic data, even at a relatively far distance. '
      + 'In this work, we demonstrate that different types of lightning manifest '
      + 'themselves differently on seismic data.',
  },
  {
    title: 'Ground Coupling',
    subtitle: 'Acoustic-to-seismic ground coupling: coupling efficiency and inferring near-surface properties',
    image: '/images/projects/back4.jpg',
    date: '2020-12-01',
    desc:
      'A fraction of the acoustic wave energy (from the atmosphere) may couple '
      + 'into the ground, and it can thus be recorded as ground motion '
      + 'using seismometers. We have investigated this coupling, with two questions '
      + 'in mind, a) how strong it is for small explosive sources and offsets up to '
      + 'a few tens of meters, and b) what we can learn about the shallow '
      + 'subsurface from this coupling. 25 firecracker explosions and 5 rocket '
      + 'explosions were analyzed using co-located seismic and infrasound sensors; '
      + 'we find that around 2% of the acoustic energy is admitted into the '
      + 'ground (converted to seismic energy).',
  },
];

export default data;
