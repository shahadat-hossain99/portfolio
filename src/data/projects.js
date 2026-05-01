export const projects = [
  {
    id: "bookvibe",
    title: "BookVibe",
    description:
      "A personalized reading tracker and book discovery platform for bibliophiles to manage their library, track reading progress, and discover new books.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-50JjytXNJFKykWCqCgNbqLjGSFiVlIWVR7RNPqCwdQ7zI64V8cPoLG8xfcCEXai5oYyavyb5Ld3gbxYQ7GXfdk5cJfiT64qtk4cnm-nnF6ASWCxWlCoiqFAvb8p6SzVyRKeVmAqw4A_WzKDFAOtuJAzbj52E3vLsU55mOHdIFcvVjVfuY3CY_s8Ye7x9y7rK3revBQEhIn2ee9lB49boAIZcqRXRp60-JKjbH051MvNylWMGRv_vVZwbeTt1gpbIU3ovhA6qCH4",
    tags: ["React", "Daisy UI", "Tailwind CSS", "React Icons"],
    demo: "https://book-vibe-platform.netlify.app/",
    github: "https://github.com/shahadat-hossain99/book-vibe",
    challenges: [
      "Implementing real-time sync across devices using Firebase Firestore without performance issues.",
      "Building a responsive book grid layout that works seamlessly on both mobile and desktop.",
      "Handling large datasets from the Google Books API with proper pagination and caching.",
    ],
    improvements: [
      "Add social features — follow friends and see what they're reading.",
      "Integrate AI-powered book recommendations based on reading history.",
      "Build a mobile app version using React Native.",
    ],
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    description:
      "A personal relationship management dashboard built with Next.js. Helps you keep track of friends, family, and colleagues with interaction history and relationship health tracking.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKYUIUiiG4fudYy1kDgMmtDPg6PIP720DnVVcCP6UIY5mAxppz3zMrmBunZrDNse0ijUkGh_sGZci8ngsOTJrdIHeETdr-4E2-930s5RMjWS8zwjrfso-Yt3eYg0ptut_2FKJygsyi5YTPT70m6NiKz8lnnDIpLVW_9-pkv3GB4czsK1gC0cZ7qVbXNge-4uSh9wHuSUFVYcmpxfBAvx7xQ9N2pe_RZSn9IxgCFQ65vDRkiVSLlCJ0sBBxIRMtVNev4g_jL29uUS0",
    tags: ["Next.js", "Recharts", "DaisyUI", "Context API"],
    demo: "https://a07-keen-keeper-nine.vercel.app/",
    github: "https://github.com/shahadat-hossain99/a07-keen-keeper",
    challenges: [
      "Managing complex global state across many components using React Context API without prop drilling.",
      "Designing an intuitive status tracking system (On Track / Overdue / Action Due) with dynamic color coding.",
      "Building responsive data visualizations with Recharts that adapt to different screen sizes.",
    ],
    improvements: [
      "Add notification/reminder system to alert when a relationship is going cold.",
      "Integrate with calendar APIs to automatically log interactions.",
      "Add export to CSV/PDF for relationship reports.",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description:
      "A high-performance personal portfolio built with Next.js 16, featuring smooth GSAP + Framer Motion animations, dark/light theme toggle, and fully responsive design.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBqpN39ScEbrhhmv5DCqEwqY3S4_t3DdX5pOVqtUdPMsB3Is-z0RcZC26a0FUxmTzeAM3SCrYX94nHAR29KE4v7vFjzJCfFtDY_8va-RBnXG324JSHAO9cFTKX1OEoWSAaw2MhnnKH2OVS3a_blVPqUgm8J7VsuFs0iIEL3CjvxxRhVSneZp5xkgfWe606vdxeeihaHLMGu1KOQJAZO6B_SSQ5mpK_XodwKYlEd0cLqkUyOiWddMYU3McU6LtfZe_17bJMLXLMwI",
    tags: ["Next.js", "Framer Motion", "GSAP", "Lenis"],
    demo: "https://shahadat-portfolio-999.vercel.app/",
    github: "https://github.com/shahadat-hossain99/portfolio",
    challenges: [
      "Combining GSAP ScrollTrigger and Framer Motion without animation conflicts.",
      "Implementing a flicker-free dark mode without any third-party theme libraries.",
      "Optimizing Lighthouse performance score while maintaining rich animations.",
    ],
    improvements: [
      "Add a blog section with MDX support for writing technical articles.",
      "Implement page transition animations between routes.",
      "Add a real contact form with email integration using Resend or EmailJS.",
    ],
  },
];
