'use client';

import { motion } from 'framer-motion';

// Stock ticker component
export const TrendTicker = () => {
  const trends = [
    { text: "ENGAGEMENT +90%", value: "+90%" },
    { text: "FOLLOWERS +40K", value: "+40K" },
    { text: "VIEWS 4M+", value: "4M+" },
    { text: "RETENTION +10%", value: "+10%" },
    { text: "TRAFFIC +15%", value: "+15%" },
    { text: "VIRALITY +65%", value: "+65%" },
    { text: "REACH 750M+", value: "750M+" },
    { text: "GROWTH +120%", value: "+120%" },
  ];

  return (
    <div className="w-full overflow-hidden bg-black text-white py-2 border-y border-white/20">
      <div className="ticker-container relative flex">
        <div className="ticker-animation flex whitespace-nowrap">
          {[...trends, ...trends].map((trend, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="font-mono text-xs sm:text-sm">{trend.text}</span>
              <span className={`ml-2 font-mono font-bold text-xs sm:text-sm ${parseFloat(trend.value) > 0 ? 'text-green-400' : 'text-red-400'}`}>{trend.value}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ticker-animation {
          animation: ticker 30s linear infinite;
        }
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

// Mini chart for items
export const MiniChart = ({ positive = true }: { positive?: boolean }) => {
  // Generate points for mini chart
  const generatePoints = () => {
    const points: number[] = [];
    let lastValue = 50 + Math.random() * 10;
    
    for (let i = 0; i < 10; i++) {
      // Random walk with upward trend for positive, downward for negative
      const change = positive 
        ? (Math.random() - 0.3) * 10 // Bias toward positive change
        : (Math.random() - 0.7) * 10; // Bias toward negative change
        
      lastValue = Math.max(10, Math.min(lastValue + change, 90));
      points.push(lastValue);
    }
    
    return points;
  };
  
  const points = generatePoints();
  const chartHeight = 20;
  const chartWidth = 60;
  
  // Convert points to SVG path
  const chartPath = points.map((point, index) => {
    const x = (index / (points.length - 1)) * chartWidth;
    const y = chartHeight - (point / 100) * chartHeight;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  
  return (
    <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
      <path
        d={chartPath}
        fill="none"
        stroke={positive ? "#22c55e" : "#ef4444"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Stock market-inspired growth chart
export const GrowthChart = ({ metric, value, growth, color = "green" }: { metric: string; value: string; growth: string; color?: string }) => {
  // Generate random chart data points for visualization
  const generateChartData = () => {
    const points: number[] = [];
    let lastValue = 50 + Math.random() * 10;
    
    for (let i = 0; i < 20; i++) {
      // Random walk with upward trend
      const change = (Math.random() - 0.3) * 10;
      lastValue = Math.max(20, Math.min(lastValue + change, 100));
      points.push(lastValue);
    }
    
    // Ensure last few points show positive trend
    for (let i = 0; i < 5; i++) {
      const upTrend = Math.random() * 5;
      const lastPoint: number = points[points.length - 1];
      points.push(Math.min(lastPoint + upTrend, 100));
    }
    
    return points;
  };
  
  const chartData = generateChartData();
  const chartHeight = 60;
  const chartWidth = 120;
  
  // Convert data points to SVG path
  const chartPath = chartData.map((point, index) => {
    const x = (index / (chartData.length - 1)) * chartWidth;
    const y = chartHeight - (point / 100) * chartHeight;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');
  
  return (
    <motion.div
      className="p-4 rounded-lg border border-zinc-200 bg-white flex flex-col h-full"
      whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-sm font-mono text-zinc-500">{metric}</h3>
          <p className="text-2xl font-mono font-bold">{value}</p>
        </div>
        <div className={`px-2 py-1 rounded text-sm font-mono font-bold ${color === "green" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}>
          {growth}
        </div>
      </div>
      
      <div className="flex-grow flex items-end">
        <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
          <defs>
            <linearGradient id={`gradient-${metric}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={color === "green" ? "#22c55e" : "#3b82f6"} stopOpacity="0.2" />
              <stop offset="100%" stopColor={color === "green" ? "#22c55e" : "#3b82f6"} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Area under the curve */}
          <path 
            d={`${chartPath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
            fill={`url(#gradient-${metric})`}
          />
          
          {/* Line */}
          <path
            d={chartPath}
            fill="none"
            stroke={color === "green" ? "#22c55e" : "#3b82f6"}
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Last point dot */}
          <circle
            cx={chartWidth}
            cy={chartHeight - (chartData[chartData.length - 1] / 100) * chartHeight}
            r="3"
            fill={color === "green" ? "#22c55e" : "#3b82f6"}
          />
        </svg>
      </div>
    </motion.div>
  );
}; 