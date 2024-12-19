import React from 'react';
import LineChart from '../chart/LineChart1';
import { chartAreaGradient } from '../chart/ChartjsConfig';

// Import utilities
import { tailwindConfig, hexToRGB } from '../utils/Utils';

function Dashboard1() {

  const chartData1 = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', 
      '05-01-2023', '06-01-2023', '07-01-2023', '08-01-2023', '09-01-2023',
      '10-01-2023', '11-01-2023', '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024', '06-01-2024', '07-01-2024',
      '08-01-2024', '09-01-2024', '10-01-2024', '11-01-2024', '12-01-2024',
      '01-01-2025',
    ],
    datasets: [
      {
        data: [732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192, 154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.2)` }
          ]);
        },
        borderColor: tailwindConfig().theme.colors.violet[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      {
        data: [532, 532, 532, 404, 404, 314, 314, 314, 314, 314, 234, 314, 234, 234, 314, 314, 314, 388, 314, 202, 202, 202, 202, 314, 720, 642],
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        pointHoverBackgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.gray[500])}, 0.25)`,
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  const chartData2 = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023', '03-01-2023', '04-01-2023', 
      '05-01-2023', '06-01-2023', '07-01-2023', '08-01-2023', '09-01-2023',
      '10-01-2023', '11-01-2023', '12-01-2023', '01-01-2024', '02-01-2024',
      '03-01-2024', '04-01-2024', '05-01-2024', '06-01-2024', '07-01-2024',
    ],
    datasets: [
      {
        data: [650, 600, 670, 520, 530, 540, 410, 400, 380, 420, 450, 530, 460, 400, 360, 330, 300, 330, 370, 380],
        fill: true,
        backgroundColor: function(context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.orange[500])}, 0)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.orange[500])}, 0.2)` }
          ]);
        },
        borderColor: tailwindConfig().theme.colors.orange[500],
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.orange[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.orange[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="">
      {/* Grid layout for charts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* First Chart with Header */}
        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="px-5 pt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Plus</h3>
          </div>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1 px-5">Sales</div>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1 px-5">$24,780</div>
          <div className="chart">
            <LineChart data={chartData1} width={389} height={128} />
          </div>
        </div>
        
        {/* Second Chart with Title */}
        <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="px-5 pt-5">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Revenue Trends</h3>
          </div>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1 px-5">Sales</div>
          <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1 px-5">$24,780</div>
          <div className="chart">
            <LineChart data={chartData2} width={389} height={128} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard1;
