import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    name: "Front End",
    value: 40,
    description: "React, Tailwind CSS, JavaScript, TypeScript, Three.js",
  },
  {
    name: "Back End",
    value: 30,
    description: "Node.js, Express, MongoDB, Mongoose",
  },
  { name: "Tools", value: 20, description: "VS Code, GitHub, Figma, AI tools" },
  {
    name: "Soft Skills",
    value: 10,
    description: "Teamwork, communication, creativity",
  },
];

const COLORS = ["#6366f1", "#4f46e5", "#818cf8", "#a5b4fc"];

export default function SkillsChart() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="items-center justify-center relative">
      {/* Gráfico */}
      <div className="w-80 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <slice
                onMouseEnter={() =>
                  setHoveredSkill({
                    title: "Front End",
                    description:
                      "Building interactive, user-centered experiences.",
                  })
                }
                onMouseLeave={() => setHoveredSkill(null)}
              />

              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  style={{ transition: "all 0.3s ease" }}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* hover */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key={data[activeIndex].name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute left-full top-1/2 transform -translate-y-1/2 ml-6 bg-white shadow-xl rounded-xl p-4 w-64 text-center"
          >
            <h3 className="font-bold text-xl text-[#2f2e2e]">
              {data[activeIndex].name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {data[activeIndex].description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
