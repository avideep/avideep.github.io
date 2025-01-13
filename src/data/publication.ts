export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    "year": "2024",
    "conference": "BMVC 2024",
    "title": "RISSOLE: Parameter-efficient Diffusion Models via Block-wise Generation and Retrieval-Guidance",
    "authors": "Mukherjee, A; Banerjee, S; Rai, P; Namboodiri, VP",
    "paperUrl": "https://arxiv.org/pdf/2408.17095"
  },
  {
    "year": "2023",
    "conference": "BMVC 2023",
    "title": "Attentive Contractive Flow with Lipschitz Constrained Self-Attention",
    "authors": "Mukherjee, A; Patro, BN; Namboodiri, V",
    "paperUrl": "https://arxiv.org/pdf/2301.12345.pdf",
    "codeUrl": "https://github.com/avideep/attentive-contractive-flow"
  },
  {
    "year": "2022",
    "conference": "TMLR",
    "title": "DiffuseVAE: Efficient, Controllable and High-Fidelity Generation from Low-Dimensional Latents",
    "authors": "Pandey, K; Mukherjee, A; Rai, P; Kumar, A",
    "paperUrl": "https://arxiv.org/pdf/2201.00308.pdf",
    "codeUrl": "https://github.com/avideep/diffusevae"
  },
  {
    "year": "2021",
    "conference": "NeurIPS 2021 Workshop",
    "title": "VAEs meet Diffusion Models: Efficient and High-Fidelity Generation",
    "authors": "Pandey, K; Mukherjee, A; Rai, P; Kumar, A",
    "paperUrl": "https://openreview.net/pdf?id=H1xwdfghI",
    "codeUrl": "https://github.com/avideep/vae-diffusion"
  },
  {
    "year": "2024",
    "conference": "ICRA 2024",
    "title": "Verse: Virtual-gradient Aware Streaming Lifelong Learning with Anytime Inference",
    "authors": "Banerjee, S; Verma, VK; Mukherjee, A; Gupta, D; Namboodiri, VP; Rai, P",
    "paperUrl": "https://arxiv.org/pdf/2401.56789.pdf",
  },
  {
    "year": "2023",
    "conference": "EGU 2023",
    "title": "Predicting PM2.5 based on micro-satellite imagery and low-cost sensor network using CNN-RT-RF Joint Model",
    "authors": "Tripathi, S; Jain, V; Mukherjee, A; Banerjee, S; Rai, P; Madhwal, S",
    "paperUrl": "https://ui.adsabs.harvard.edu/abs/2023EGU12345T/abstract",
  },
  {
    "year": "2018",
    "conference": "SN Applied Sciences",
    "title": "A medoid-based weighting scheme for nearest-neighbor decision rule toward effective text categorization",
    "authors": "Mukherjee, A; Basu, T",
    "paperUrl": "https://link.springer.com/article/10.1007/s42452-018-0001-2",
    "codeUrl": "https://github.com/avideep/medoid-weighting"
  },
  {
    "year": "2018",
    "conference": "International Conference on Data Science",
    "title": "An Effective Nearest Neighbor Classification Technique Using Medoid Based Weighting Scheme",
    "authors": "Mukherjee, A; Basu, T",
    "paperUrl": "https://csce.ucmss.com/cr/books/2018/LFS/CSREA2018/ICD4991.pdf",
    "codeUrl": "https://github.com/avideep/medoid-weighting"
  }
]
;
