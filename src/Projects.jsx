const projectData = [
  {
    title: 'Low-Latency Market Data Pipeline',
    description:
      'A C++20 pipeline that replays a 13.7M-message Binance futures capture from one thread to another through a wait-free SPSC ring buffer, benchmarked against a tuned mutex + condition variable queue. p99 handoff latency of 125 ns vs 375 ns at 500k msg/s, with correctness checked by ThreadSanitizer and a 2×10⁹-message stress run.',
    tags: ['C++20', 'Lock-free', 'Memory ordering', 'ThreadSanitizer', 'CMake'],
    image: '/market-data-pipeline-latency.png',
    imageAlt: 'p99.9 latency against offered load for the SPSC ring buffer and two mutex baselines',
    imageFit: 'contain',
    code: 'https://github.com/ksshubhan/market-data-pipeline',
  },
  {
    title: 'PRISM Trading Hackathon',
    description:
      'Two-person team entry in a weekend hackathon where bots built US-equity portfolios for simulated clients through a live API, across five rounds of tightening rules. Strategies moved from a fixed high-throughput portfolio to volatility-ranked selection, cvxpy optimisers and a final diversified heuristic with a budget buffer.',
    tags: ['Python', 'REST API', 'yfinance', 'cvxpy', 'pandas'],
    image: '/prism-leaderboard.jpg',
    imageAlt: 'PRISM round 1 leaderboard with team jt in first place',
    code: 'https://github.com/ksshubhan/prism-trading-hackathon',
  },
  {
    title: 'ExamPaper',
    description:
      'Generates original GCSE Higher Maths practice papers with mark schemes as print-ready PDFs. Questions come from deterministic, seeded builders, and every answer is derived and checked with SymPy before a question can ship. No model generates the content.',
    tags: ['Python', 'FastAPI', 'SymPy', 'React', 'TypeScript', 'Postgres'],
    image: '/exampaper-builder.jpg',
    imageAlt: 'ExamPaper paper builder: tier, paper type, length and topic selection',
    code: 'https://github.com/ksshubhan/exam-paper',
    demo: 'https://exampaper.sshubhan.com',
  },
];

export default function Projects({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 pb-[5.5rem] border-t border-white dark:border-gray-900 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2 pb-[0.4rem]">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-5 mb-8 text-base sm:text-[1.11rem]">
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-16">
          {projectData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="w-full max-w-5xl mx-auto bg-white dark:bg-gray-800
                 text-gray-900 dark:text-white rounded-2xl shadow-sm
                 border border-gray-200 dark:border-gray-700
                 flex flex-col md:flex-row items-center gap-6 p-5 md:p-6
                 hover:shadow-md transition-all duration-300 min-h-[13rem]"
    >
      {project.image && (
        <div className="w-full md:w-[40%] h-40 lg:h-44 rounded-xl overflow-hidden flex items-center justify-center">
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            className={`w-full h-full rounded-xl transition-transform duration-500 hover:scale-[1.03] ${
              project.imageFit === 'contain' ? 'object-contain bg-white' : 'object-cover'
            }`}
          />
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col justify-center text-left w-full md:w-[60%] space-y-3">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-[0.93rem] leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-[0.25rem] text-[0.83rem] bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2.5 mt-2">
          <a
            href={project.code}
            className="px-3 py-[0.45rem] text-[0.82rem] font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="px-3 py-[0.45rem] text-[0.82rem] font-medium bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
