import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Designer", value: 35 },
  { name: "Coder", value: 65 }
];

const COLORS = ["#e15051", "#2f2e2e"];

export default function MySkillsPieChart() {
  return (
    <PieChart width={256} height={256}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label={({ name }) => name}
        labelStyle={{ fontWeight: "bold", fill: "#fff" }}
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}