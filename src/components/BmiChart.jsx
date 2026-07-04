import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { CHART_ZONES } from '../utils/bmi';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 text-sm">
      <p className="font-medium text-gray-900 dark:text-white">{data.name}</p>
      <p className="text-gray-500 dark:text-gray-400">BMI: {data.min} - {data.max === 40 ? '40+' : data.max}</p>
    </div>
  );
}

export default function BmiChart({ bmi }) {
  const chartData = CHART_ZONES.map((zone) => ({
    name: zone.name,
    min: zone.min,
    max: zone.max,
    range: zone.max - zone.min,
    color: zone.color,
  }));

  const clampedBmi = Math.min(Math.max(bmi, 0), 42);

  return (
    <section className="card p-6 md:p-8" aria-labelledby="chart-heading">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
          <BarChart3 className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h2 id="chart-heading" className="text-xl font-semibold text-gray-900 dark:text-white">
            Shaxda BMI
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Meesha aad ku jirto qaybaha BMI
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto" role="img" aria-label={`Shaxda BMI oo muujinaysa BMI-gaaga ${bmi}`}>
        <ResponsiveContainer width="100%" height={280} minWidth={300}>
          <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: 'currentColor' }}
              className="text-gray-600 dark:text-gray-400"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 42]}
              tick={{ fontSize: 12, fill: 'currentColor' }}
              className="text-gray-600 dark:text-gray-400"
              axisLine={false}
              tickLine={false}
              label={{ value: 'BMI', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
            <Bar dataKey="max" radius={[6, 6, 0, 0]} maxBarSize={60}>
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} fillOpacity={0.85} />
              ))}
            </Bar>
            <ReferenceLine
              y={clampedBmi}
              stroke="#2563eb"
              strokeWidth={2.5}
              strokeDasharray="6 4"
              label={{
                value: `BMI: ${bmi}`,
                position: 'right',
                fill: '#2563eb',
                fontSize: 13,
                fontWeight: 600,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {CHART_ZONES.map((zone) => (
          <div key={zone.name} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: zone.color }}
              aria-hidden="true"
            />
            <span>{zone.name} ({zone.min}{zone.max === 40 ? '+' : `-${zone.max}`})</span>
          </div>
        ))}
      </div>
    </section>
  );
}
