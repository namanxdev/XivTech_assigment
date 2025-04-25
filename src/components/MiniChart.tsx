import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface MiniChartProps {
  data: { value: number }[];
  color: string;
}

const MiniChart = ({ data, color }: MiniChartProps) => {
  return (
    <div className="w-[60px] h-[24px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            dot={false}
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;