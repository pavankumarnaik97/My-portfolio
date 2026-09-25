import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'proj-titan',
    title: 'Titan Eyewear',
    tagline: 'Immersive product visualization and frontend enhancement',
    description:
      'Successfully completed the first phase of the Titan Eyewear project and contributed to a 3rd model update focused on richer product visualization and improved user experience.',
    image: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 60%, #0ea5e9 100%)',
    technologies: ['React.js', 'Three.js', 'TypeScript', 'Context API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    year: '2024',
    detail: {
      problem:
        'The project needed improved product experience and richer visual storytelling for eyewear shoppers without compromising performance.',
      solution:
        'Built and refined interactive frontend experiences with improved product presentation, modern UI patterns, and enhanced 3D-style product visualization.',
      features: [
        'Enhanced product viewer experience',
        'Improved visual fidelity for eyewear models',
        'Responsive and polished frontend flows',
        'Better user interaction and product understanding',
      ],
      challenges:
        'Balancing high-fidelity product visuals with performance and smooth interaction across devices required careful UI and rendering decisions.',
      results:
        'Delivered the first project phase successfully and improved the 3rd model update with a stronger user experience and better product visualization.',
    },
  },
  {
    id: 'proj-abb',
    title: 'ABB Pulp & Paper',
    tagline: 'Industrial web application frontend',
    description:
      'Currently contributing to the ABB Pulp & Paper project by improving the frontend experience and implementing ongoing product enhancements.',
    image: 'linear-gradient(135deg, #f97316 0%, #ec4899 55%, #8b5cf6 100%)',
    technologies: ['React.js', 'Three.js', 'TypeScript', 'Context API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    year: '2024',
    detail: {
      problem:
        'The platform required scalable frontend enhancements while maintaining a clean and highly usable industrial workflow experience.',
      solution:
        'Implemented frontend improvements to support ongoing product evolution with robust React-based architecture and reusable patterns.',
      features: [
        'Interactive front-end modules',
        'Improved component reusability',
        'Responsive UI updates',
        'Ongoing product enhancements',
      ],
      challenges:
        'The application needed to remain maintainable while integrating updated UX patterns and complex data-driven views.',
      results:
        'Continued development of the application with an emphasis on maintainability, usability, and product improvement.',
    },
  },
  {
    id: 'proj-liverpool',
    title: 'Liverpool.com.mx',
    tagline: 'Multisite PWA and mobile-first storefront',
    description:
      'Worked on Liverpool.com.mx multisite and mobile PWA experience, integrating backend APIs and optimizing performance across the storefront.',
    image: 'linear-gradient(135deg, #10b981 0%, #3b82f6 60%, #6366f1 100%)',
    technologies: ['React.js', 'Next.js', 'MUI', 'Redux', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://www.liverpool.com.mx',
    year: '2022',
    detail: {
      problem:
        'A large-scale retail platform required smooth API integration, optimized page loads, and a strong mobile PWA experience.',
      solution:
        'Built components using atomic design patterns, integrated backend APIs, and optimized asset delivery and data flow for mobile and multi-site experiences.',
      features: [
        'API integration for storefront functionality',
        'Atomic design-based component architecture',
        'Performance optimization and asset tuning',
        'Google Tag Manager and Workbox support',
      ],
      challenges:
        'High-volume storefront needs required careful handling of speed, asset delivery, and data availability across different site variants.',
      results:
        'Contributed to improved frontend performance, smoother integrations, and a scalable multi-site frontend architecture.',
    },
  },
  {
    id: 'proj-kohler',
    title: 'Kohler Microsites',
    tagline: 'AEM-based retail experience and signature stores',
    description:
      'Worked on Kohler microsites including stores.kohler.com and Signature Stores using AEM 6.5, HTL, HTML5, SCSS, Bootstrap, JavaScript, React, and Redux.',
    image: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 60%, #ec4899 100%)',
    technologies: ['AEM 6.5', 'HTL', 'HTML5', 'SCSS', 'Bootstrap', 'React.js', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://stores.kohler.com',
    year: '2021',
    detail: {
      problem:
        'The client needed a scalable CMS-based solution for brand storytelling and product presentation across multiple storefront channels.',
      solution:
        'Implemented reusable AEM HTL components, frontend UI modules, and responsive page structures aligned with product and authoring requirements.',
      features: [
        'Reusable AEM component development',
        'Responsive layout implementation',
        'Authoring-friendly content structures',
        'UI testing and content validation',
      ],
      challenges:
        'Working across CMS authoring requirements and design expectations required clean structure, flexibility, and component reuse.',
      results:
        'Delivered functional UI components and supported content-driven storefront experiences tailored to client requirements.',
    },
  },
]
