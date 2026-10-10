// Experience.jsx
import { useState } from "react";
import { FaLaptopCode, FaUsers, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

const experienceData = [
  {
    icon: <FaChalkboardTeacher className="text-black text-xl" />,
    badge: "Teaching",
    title: "GCSE Tutor",
    company: "Private tutoring",
    date: "Present",
    description:
      "Tutor GCSE students in Maths and the AQA sciences, planning each student's revision around the topics they're weakest in.",
    bullets: [
      "Cover GCSE Maths and AQA Biology, Chemistry and Physics.",
      "Keep a red/amber/green topic tracker per student and subject to decide what each session covers.",
      "Make revision resources matched to each student's gaps.",
    ],
  },
  {
    icon: <FaTrophy className="text-black text-xl" />,
    badge: "Hackathon",
    title: "PRISM Trading Hackathon: 2nd place overall",
    company: "Two-person team",
    date: "April 2025",
    description:
      "Built Python bots that read a simulated client's budget, age and sector preferences from a live API and submitted a suitable US-equity portfolio, across five rounds of changing rules.",
    bullets: [
      "Won round 1 by running parallel copies of a fixed-portfolio bot for throughput.",
      "Rebuilt the strategy around JSON parsing and volatility-ranked stock selection when the scoring changed.",
      "Tested mean-variance optimisers in the final round, then shipped a faster diversified heuristic with a budget buffer.",
    ],
  },
  {
    icon: <FaUsers className="text-black text-xl" />,
    badge: "Leadership",
    title: "Director of Operations",
    company: "Spectra (Young Enterprise), Colchester Royal Grammar School",
    date: "Sep 2023 – Apr 2024",
    location: "Colchester, UK",
    description:
      "Ran operations for a 14-member student company that produced and sold a GCSE revision guide.",
    bullets: [
      "Coordinated production of the revision guide across the team.",
      "Kept delivery on schedule through the Young Enterprise programme.",
    ],
  },
  {
    icon: <FaLaptopCode className="text-black text-xl" />,
    badge: "Technical Support",
    title: "IT Support Volunteer",
    company: "Gants Hill Library",
    date: "2022 – 2023",
    location: "London, UK",
    description:
      "Provided technical assistance to library users, improving my problem-solving and tech support skills in real-world scenarios.",
    bullets: [
      "Assisted users with printing, scanning, and device setup.",
      "Resolved connectivity issues and software problems.",
      "Built rapport with library staff and patrons through daily support.",
    ],
  },
  {
    icon: <FaChalkboardTeacher className="text-black text-xl" />,
    badge: "Volunteering",
    title: "Fabula Reading Challenge",
    company: "Local Library",
    date: "Summer 2022",
    location: "London, UK",
    description:
      "Volunteered as a tutor supporting young children with reading and STEM skills, strengthening my communication and mentorship abilities.",
    bullets: [
      "Ran weekly reading sessions for children aged 5–10.",
      "Created engaging STEM mini-activities to support learning.",
      "Improved communication and mentoring through peer feedback.",
    ],
  },
];

export default function Experience({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="experience"
      className="
        relative w-full bg-white dark:bg-black text-black dark:text-white
        -mt-px py-16 pb-[7rem] px-6 scroll-mt-24 transition-colors
        before:content-[''] before:absolute before:inset-x-0 before:-top-px before:h-px before:bg-white dark:before:bg-black
      "
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 mt-0 pb-[0.5rem]">
            Experience & Involvement
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-[16px] sm:text-[1.11rem] mt-5 transition-colors">
            Roles and responsibilities I've taken on that showcase teamwork,
            leadership, and initiative.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative pl-6 mt-16">
          {/* the vertical line (still theme-aware; lock if you want) */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 h-full w-[2.5px]
                       bg-gray-200 dark:bg-gray-700 transition-colors"
          />
          {experienceData.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item }) {
  const [showMore, setShowMore] = useState(false);
  const visibleBullets = showMore ? item.bullets : item.bullets.slice(0, 2);

  return (
    <div className="relative mb-12 ml-4">
      {/* Timeline Bubble (fixed palette) */}
      <div
        className="absolute -left-[41px] top-[1px] w-4 h-4
                   bg-white dark:bg-black rounded-full
                   border-[4px] border-black dark:border-white shadow-md z-10"
      />

      {/* Card (fixed palette) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl pt-[21px] p-6 transition-all duration-500 hover:scale-[1.01] text-left">
        {/* badge (fixed) */}
        <div className="inline-block bg-black text-white text-xs font-semibold px-2 py-1 rounded-full -mt-2 mb-2">
          {item.badge}
        </div>

        {/* header (fixed) */}
        <div className="flex items-center gap-2 mb-1">
          {item.icon /* icons are black above */}
          <h3 className="text-lg font-semibold text-black">{item.title}</h3>
        </div>

        <p className="text-gray-700 font-medium text-sm sm:text-base hover:text-gray-900 transition-colors duration-200">
          {item.company}
        </p>

        {/* meta (fixed) */}
        <div className="flex flex-wrap items-center text-gray-500 text-sm mt-3 mb-3 gap-x-4">
          <div className="flex items-center gap-1">
            <HiOutlineCalendar className="text-base" />
            <span>{item.date}</span>
          </div>
          {item.location && (
            <div className="flex items-center gap-1">
              <HiOutlineLocationMarker className="text-base" />
              <span>{item.location}</span>
            </div>
          )}
        </div>

        {/* description (fixed) */}
        <p className="text-gray-500 mb-4 text-base">{item.description}</p>

        {/* bullets (fixed) */}
        <div className="mb-2 font-semibold text-black flex items-center gap-1 text-base">
          <span>↳</span> Key Achievements
        </div>
        <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
          {visibleBullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* show more (fixed) */}
        {item.bullets.length > 2 && (
          <p
            onClick={() => setShowMore(!showMore)}
            className="text-xs text-gray-400 mt-2 cursor-pointer select-none flex items-center gap-1 hover:text-gray-700 transition-colors duration-200"
          >
            {showMore ? (
              <>
                <HiChevronUp className="w-3 h-3" />
                Show less
              </>
            ) : (
              <>
                <HiChevronDown className="w-3 h-3" />
                + {item.bullets.length - 2} more
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
