export type PaperLink = {
  label: string;
  href: string;
};

export type Author = {
  name: string;
  self?: boolean;
  href?: string;
};

export type BioPart = {
  text: string;
  href?: string;
  advisor?: boolean;
  lab?: boolean;
};

export type Paper = {
  id: string;
  title: string;
  venue: string;
  year: string;
  authors: Author[];
  summary: string;
  links: PaperLink[];
  video: {
    src: string;
    poster: string;
    label: string;
    fullSrc: string;
  };
};

const YILONG_WANG_URL = 'https://kelthuzadyl.github.io/';
const CHENG_QIAN_URL = 'https://scholar.google.com/citations?user=lxL6FqcAAAAJ&hl=en';
const EDWARD_JOHNS_URL = 'https://scholar.google.com/citations?user=dHec-LkAAAAJ&hl=en';
const YIANNIS_DEMIRIS_URL = 'https://scholar.google.com/citations?hl=en&user=B2o5i-AAAAAJ&view_op=list_works';
const ROBOT_LEARNING_LAB_URL = 'https://www.robot-learning.uk/';
const PERSONAL_ROBOTICS_LAB_URL = 'https://www.imperial.ac.uk/personal-robotics/';

export const siteConfig = {
  name: 'Yilong',
  fullName: 'Yilong Wang',
  role: 'PhD student in Robot Learning',
  portrait: 'profile_square.jpg',
  bio: [
    [
      { text: 'I am a second-year PhD student in the ' },
      { text: 'Robot Learning Lab', href: ROBOT_LEARNING_LAB_URL, lab: true },
      { text: ' at Imperial College London, advised by ' },
      { text: 'Dr. Edward Johns', href: EDWARD_JOHNS_URL, advisor: true },
      { text: '. I began my PhD in February 2025 and am currently a Student Researcher with the Robotics Team at ' },
      { text: 'Google DeepMind', href: 'https://deepmind.google/models/gemini-robotics/', lab: true },
      { text: ' in London.' },
    ],
    [
      { text: 'Prior to my PhD, I completed an MRes in Artificial Intelligence and Machine Learning in the same lab, and an MEng in Electronic and Information Engineering in the same university, working with ' },
      { text: 'Prof. Yiannis Demiris', href: YIANNIS_DEMIRIS_URL, advisor: true },
      { text: ' in the ' },
      { text: 'Personal Robotics Lab', href: PERSONAL_ROBOTICS_LAB_URL, lab: true },
      { text: '.' },
    ],
    [
      { text: 'My research interests lie in the intersection of computer vision, machine learning and robotics, with a focus on developing scalable imitation learning methods with minimal human efforts.' },
    ],
  ] satisfies BioPart[][],
  links: {
    scholar: 'https://scholar.google.com/citations?view_op=list_works&user=NSDM4YEAAAAJ',
    github: 'https://github.com/kelthuzadyl',
    linkedin: 'https://uk.linkedin.com/in/yilong-wang-93001619b',
    email: 'mailto:yw14218@ic.ac.uk',
  },

  papers: [
    {
      id: '01',
      title: 'Instant-Fold: In-Context Imitation Learning for Deformable Object Manipulation',
      venue: 'CoRL',
      year: '2026',
      authors: [
        { name: 'Yilong Wang', self: true, href: YILONG_WANG_URL },
        { name: 'Cheng Qian', href: CHENG_QIAN_URL },
        { name: 'Edward Johns', href: EDWARD_JOHNS_URL },
      ],
      summary: 'One-shot garment folding from a human demonstration trained entirely in simulation.',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2606.04269' },
        { label: 'Code', href: 'https://github.com/kelthuzadyl/Instant-Fold' },
        { label: 'Project', href: 'https://instant-fold.github.io/' },
      ],
      video: {
        src: 'videos/instant-fold.mp4',
        poster: 'videos/instant-fold.webp',
        label: 'Instant-Fold robot garment-folding demonstration',
        fullSrc: 'https://instant-fold.github.io/assets/videos/teaser.mp4',
      },
    },
    {
      id: '02',
      title: 'SynthICL: Scalable In-context Imitation Learning with Synthetic Data',
      venue: 'CoRL',
      year: '2026',
      authors: [
        { name: 'Cheng Qian', href: CHENG_QIAN_URL },
        { name: 'Ruomeng Fan' },
        { name: 'Yifei Ren' },
        { name: 'Yilong Wang', self: true, href: YILONG_WANG_URL },
        { name: 'Edward Johns', href: EDWARD_JOHNS_URL },
      ],
      summary: 'RGB-only in-context imitation learning trained entirely on scalable synthetic data.',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2606.08154' },
        { label: 'Project', href: 'https://synth-icl.github.io/' },
      ],
      video: {
        src: 'videos/synthicl.mp4',
        poster: 'videos/synthicl.webp',
        label: 'SynthICL real-world robot manipulation demonstration',
        fullSrc: 'https://synth-icl.github.io/media/output.mp4',
      },
    },
    {
      id: '03',
      title: 'Observer-Actor: Active Vision Imitation Learning with Sparse-View Gaussian Splatting',
      venue: 'ICRA',
      year: '2026',
      authors: [
        { name: 'Yilong Wang', self: true, href: YILONG_WANG_URL },
        { name: 'Cheng Qian', href: CHENG_QIAN_URL },
        { name: 'Ruomeng Fan' },
        { name: 'Edward Johns', href: EDWARD_JOHNS_URL },
      ],
      summary: 'Active viewpoint optimization within Gaussian Splats for imitation learning.',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2511.18140' },
        { label: 'Code', href: 'https://github.com/kelthuzadyl/ObAct' },
        { label: 'Project', href: 'https://obact.github.io/' },
      ],
      video: {
        src: 'videos/observer-actor.mp4',
        poster: 'videos/observer-actor.webp',
        label: 'Observer-Actor dual-arm active-vision demonstration',
        fullSrc: 'https://obact.github.io/static/obact_animation-9b7fb3b7e2c09e49e976782be1e18665.mp4',
      },
    },
    {
      id: '04',
      title: 'One-Shot Dual-Arm Imitation Learning',
      venue: 'ICRA',
      year: '2025',
      authors: [
        { name: 'Yilong Wang', self: true, href: YILONG_WANG_URL },
        { name: 'Edward Johns', href: EDWARD_JOHNS_URL },
      ],
      summary: 'One-shot imitation via visual servoing and trajectory replay for precise tasks.',
      links: [
        { label: 'Paper', href: 'https://arxiv.org/abs/2503.06831' },
        { label: 'Code', href: 'https://github.com/kelthuzadyl/ODIL' },
        { label: 'Project', href: 'https://kelthuzadyl.github.io/ODIL/' },
      ],
      video: {
        src: 'videos/gallery-preview.mp4',
        poster: 'videos/gallery-preview.webp',
        label: 'One-Shot Dual-Arm robot manipulation demonstration',
        fullSrc: 'videos/dual-arm-presentation.mp4',
      },
    },
  ] satisfies Paper[],
};
