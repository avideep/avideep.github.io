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
    "I'm a Senior AI Researcher at <a href='www.dolby.com'>Dolby Laboratories Inc.</a> working on Generative modelling and Computer Vision. Previously I was a PhD student in the <a href='www.cse.iitk.ac.in'>Department of Computer Science and Engineering</a> at <a href='www.iitk.ac.in'>IIT Kanpur</a> where I was advised by <a href='https://www.cse.iitk.ac.in/users/piyush/'>Prof. Piyush Rai</a> and <a href='https://vinaypn.github.io/'>Prof. Vinay P. Namboodiri</a> <a href='https://www.bath.ac.uk/departments/department-of-computer-science/'>(University of Bath)</a>.",
  email: "[first_name]dot[last_name]@dolby.com",
  imageUrl:"https://i.ibb.co/27XX9zF/IMG-3864.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=kvAHwoYAAAAJ&hl=en",
  githubUsername: "avideep",
  linkedinUsername: "avideep",
  twitterUsername: "avideeptweets",
  //blogUrl: "https://",
  cvUrl: "https://www.dropbox.com/scl/fi/qt8vcpte3bhtrkixm04y6/Resume.pdf?rlkey=e0upn1l43zenjaipbg3myxnwd&st=nfyqdga6&dl=0",
  institutionUrl: "https://www.dolby.com",
  // altName: "",
  // secretDescription: "I like dogs.",
};
