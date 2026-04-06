import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "All Courses",
    count: "23",
    desc: "courses you're powering through right now.",
    icons: [
      "https://cdn-icons-png.flaticon.com/512/5968/5968890.png", // React
      "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968894.png",
    ],
  },
  {
    id: 2,
    title: "Upcoming Courses",
    count: "05",
    desc: "exciting new courses waiting to boost your skills.",
    icons: ["https://cdn-icons-png.flaticon.com/512/5968/5968890.png", // React
      "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968894.png",],
  },
  {
    id: 3,
    title: "Ongoing Courses",
    count: "10",
    desc: "currently happening—don’t miss out on the action!",
    icons: ["https://cdn-icons-png.flaticon.com/512/5968/5968890.png", // React
      "https://cdn-icons-png.flaticon.com/512/5968/5968958.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968894.png",],
  },
];

export default function CourseCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleCardClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1220px]">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          {courses.map((course, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={course.id}
                layout
                onClick={() => handleCardClick(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-6 md:p-8 shadow-lg border border-gray-100 ${
                  isActive
                    ? "bg-[#EF4444] text-white"
                    : "bg-[#FFF1F1] text-[#EF4444]"
                }`}
                style={{
                  flex: isActive ? (window.innerWidth >= 1024 ? 2.9 : 1) : 1,
                  minHeight: "500px",
                }}
                whileHover={{ scale: isActive ? 1.005 : 1.02 }}
                transition={{
                  layout: { type: "spring", stiffness: 120, damping: 28 },
                }}
              >
                {/* Top Section */}
                <div className="flex justify-between items-start z-10">
                  {isActive ? (
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {course.title}
                    </h2>
                  ) : (
                    <div className="flex h-[160px] items-center">
                      <span className="text-[21px] font-semibold tracking-[0.08em] rotate-[-90deg] origin-center whitespace-nowrap text-[#E53E3E]">
                        {course.title}
                      </span>
                    </div>
                  )}

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-medium flex items-center gap-1.5 pt-1"
                    >
                      View all Courses →
                    </motion.div>
                  )}
                </div>

                {/* Icons - Only Active Card */}
                {isActive && course.icons.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4 mt-8"
                  >
                    {course.icons.map((icon, i) => (
                      <motion.img
                        key={i}
                        src={icon}
                        alt="icon"
                        className="w-14 h-14 object-contain drop-shadow"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      />
                    ))}
                  </motion.div>
                )}

                {/* Center Number */}
                <div className="flex-1 flex items-center justify-center -mt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={course.count}
                      initial={{ opacity: 0, x: direction * 90, scale: 0.75 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: direction * -90, scale: 0.75 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex items-baseline"
                    >
                      <span
                        className={`font-black tracking-[-0.05em] leading-none ${
                          isActive
                            ? "text-[120px] md:text-[145px]"
                            : "text-[82px] md:text-[95px]"
                        }`}
                      >
                        {course.count}
                      </span>
                      <span className={`ml-2 text-6xl font-medium ${isActive ? "opacity-90" : "opacity-60"}`}>
                        +
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Description - Only Active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.45 }}
                      className="text-[15px] leading-relaxed max-w-[270px] opacity-90 pb-2"
                    >
                      {course.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}