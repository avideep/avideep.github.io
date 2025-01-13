export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2018—2025",
    institution: "Indian Institute of Technology Kanpur",
    degree: "Integrated M.Tech. - Ph.D. in Computer Science and Engineering",
    advisor: "Prof. Piyush Rai & Prof. Vinay P. Namboodiri (University of Bath)",
  },
  {
    year: "2016—2018",
    institution: "Ramakrishna Mission Vivekananda Educational and Research Institute",
    degree: "M.S. in Computer Science",
    thesis: "A Medoid-Based Weighting Scheme for Qualitative Improvement of Nearest Neighbor Decision Rule",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
  {
    year: "2013—2016",
    institution: "Ramakrishna Mission Vidyamandira",
    degree: "B.Sc. in Computer Science",
  },
];
