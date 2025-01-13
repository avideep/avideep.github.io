export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "January 2025 - Present",
    title: "Senior AI Researcher",
    company: "Dolby Laboratories Inc.",
    description:
      "Working on Computer Vision, Generative Modelling and Attribution",
    manager: "Claus Bauer",
    companyUrl: "https://dolby.com",
  },
  {
    date: "August 2022 - December 2024",
    title: "Senior Student Research Associate",
    company: "Indian Institute of Technology Kanpur",
    description:
      "Developed novel algorithms for prediction of PM 2.5 concentration in the environment.",
    advisor: "Prof. Sachida Nand Tripathi & Prof. Piyush Rai",
    companyUrl: "https://iitk.ac.in",
  },
  {
    date: "Summer 2021",
    title: "Software Development Engineering Intern",
    company: "Linkedin Corporation",
    description:
      "Worked on developing text-to-image geneative models using GANs.",
    manager: "Vipin Gupta",
    companyUrl: "https://linkedin.com",
  },
  {
    date: "Summer 2017",
    title: "Summer Intern",
    company: "Indian Statistical Institute, Kolkata",
    description:
      "Worked on developing classical solutions to unconstrained video recognition using SIFT and HOG features.",
    advisor: "Prof. Partha Pratim Mohanty",
    companyUrl: "https://isical.ac.in",
  },
];
