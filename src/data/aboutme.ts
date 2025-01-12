export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Avideep Mukherjee",
  title: "Senior AI Researcher",
  institution: "Dolby Laboratories Inc.",
  // Note that links work in the description
  description:
    "I'm a Senior AI Researcher at Dolby Laboratories Inc. working on Generative modelling and Computer Vision. Previously I was a PhD student in the Department of Computer Science and Engineering at IIT Kanpur where I was advised by Prof. Piyush Rai and Prof. Vinay P. Namboodiri (University of Bath).",
  email: "avideep.mukherjee@dolby.com",
  imageUrl:
    "https://images.unsplash.com/photo-1581481615985-ba4775734a9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=kvAHwoYAAAAJ&hl=en",
  githubUsername: "avideep",
  linkedinUsername: "avideep",
  twitterUsername: "avideeptweets",
  blogUrl: "https://",
  cvUrl: "https://",
  institutionUrl: "https://www.stanford.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
