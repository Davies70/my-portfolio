export const projects = [
  {
    title: 'DocuGuard',
    description:
      "An automated RAG system that audits technical documentation against changelogs to detect and 'self-heal' breaking changes using Groq/Llama 3.",
    src: '/images/docuguard.png',
    link: 'https://docu-guard-self-healing-rag.vercel.app/',
    github: 'https://github.com/Davies70/DocuGuard-Self-Healing-RAG',
    color: '#BBACAF', // Muted Rose/Grey
    tech: ['Next.js', 'FastAPI', 'Python', 'LangChain', 'Llama 3'],
  },
  {
    title: 'Secure File Pipeline',
    description:
      'Full-stack serverless application for securely uploading, optimizing, and managing files. Features a Next.js dashboard and an AWS Lambda/S3 backend.',
    src: '/images/secure-file-processing.png',
    link: 'https://secure-file-processing-ui.vercel.app/',
    github: 'https://github.com/Davies70/secure-file-upload',
    color: '#977F6D', // Earthy Brown
    tech: ['Next.js', 'AWS Lambda', 'S3', 'DynamoDB', 'Tailwind'],
  },
  {
    title: 'CheapBites',
    description:
      'Geolocation-based discovery app for affordable restaurants nearby. Integrates Foursquare Places API and Leaflet maps for interactive filtering.',
    src: '/images/cheapbites1.png',
    link: 'https://cheapbites.vercel.app',
    github: 'https://github.com/Davies70/cheapbites',
    color: '#C2491D', // Deep Orange
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Leaflet'],
  },
  {
    title: 'ShopApocalypse',
    description:
      'A parody eCommerce experience for doomsday gear. Showcases complex UI animation and immersive storytelling using Framer Motion and GSAP.',
    src: '/images/shopapo.png',
    link: 'https://shopapocalypse.netlify.app/',
    github: 'https://github.com/Davies70/shopapocalypse',
    color: '#706D63', // Tactical Green/Grey
    tech: ['React', 'Framer Motion', 'GSAP', 'TypeScript'],
  },
  {
    title: 'ThrillerFiend',
    description:
      'Tracking platform for thriller fans integrating Google Books & NYT APIs. Features user ratings, reading logs, and Firebase persistence.',
    src: '/images/ThrillerFiend2.png',
    link: 'https://thrillerfiend.netlify.app',
    github: 'https://github.com/Davies70/ThrillerFiend',
    color: '#B62429', // Blood Red
    tech: ['React', 'Firebase', 'MUI', 'Rest API'],
  },
  {
    title: 'InventoryManager API',
    description:
      'Serverless REST API for managing inventory at scale. Supports full CRUD operations and secure IAM-based access via AWS Lambda and DynamoDB.',
    src: '/images/inventory.png', // Make sure to add a placeholder image if you don't have one!
    link: '', // No external link provided in original data
    github: 'https://github.com/Davies70/inventory-manager',
    color: '#232F3E', // AWS Dark Blue
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless'],
  },
  {
    title: 'Sumbot',
    description:
      'Browser-based AI text summarizer using frequency-based scoring and Graph-based PageRank to extract key concepts from long-form text.',
    src: '/images/sumbot.png', // Placeholder needed
    link: 'https://sumbot.netlify.app',
    github: 'https://github.com/Davies70/sumbot',
    color: '#4A90E2', // Soft Blue
    tech: ['HTML', 'CSS', 'JavaScript', 'Algorithms'],
  },
];
