import React from "react";
import ReactApexcharts from "../ReactApexChart";
import Select from "../Shared/Select";
import Image from "../Image/image";
import increaseIcon from  'src/assets/svg/increase.svg'

const AnalyticsGraph = ({title}:any) => {
  const options: any = {
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#fff",
        },
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      axisBorder: {
        show: true,
        color: "rgba(72, 70, 70, 1)",
        height: 1,
        width: "100%",
      },
    },
    yaxis: {
      title: {
        text: "",
      },
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    series: [
      {
        name: "Sales",
        data: [200, 150, 300, 400, 250, 350, 200, 450, 300, 400, 200, 300],
        markers: {
          show: false, // Remove markers (dots)
        },
      },
    ],
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      theme: false,
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        return `
              <div style="position: relative;padding:10px;box-shadow:none">
                <div style="position: relative;background-color: rgba(80, 77, 251, 1); color: #FFFFFF; padding: 5px 30px; border-radius: 5px;bottom:0">
                  <span style="color: #FBBF24">&#9679;</span>
                  <span style='color: rgba(237, 237, 237, 0.5); font-size: 13px; font-weight: 600;'>${w.globals.categoryLabels[dataPointIndex]}</span>
                  <br />
                  <span style="font-size: 15px; font-weight: bold;">$${series[seriesIndex][dataPointIndex]}</span> 
                </div>
                <div style="
                position: absolute;
                left: 50%;
                transform: translateX(-50%) translateY(-50%) rotate(45deg);
                width: 0.75rem;
                height: 0.75rem;
                background-color: #504DFB;
              "></div>
              
              </div>
            `;
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },

      marker: {
        show: true,
      },
    },
    legend: {
      position: "top",
    },

    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "rgba(72, 70, 70, 1)",
      strokeDashArray: 2, // This makes the grid lines dashed
    },
    colors: ["rgba(80, 77, 251, 1)"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0, // Adjust opacity start
        opacityTo: 0.3, // Adjust opacity end
        stops: [0, 0, 30], // Adjust gradient stops
        colorStops: [],
      },
    },
  };
  const optionsArr = [
    { label: "This Year" },
    { label: "Month" },
    { label: "Week" },
    { label: "Day" },
  ];
  return (
    <div>
      <p className="text-4-5 font-bold mb-2 text-white">{title}</p>
      <div className="bg-[#FFFFFF1A] p-4 rounded-3   text-white xs:px-0 md:p-4">
        <div className="mb-2 flex items-center justify-between px-2 mr-3">
          <div className="flex items-center gap-2 ">
            <Image src={increaseIcon} alt="Increase" />
            <p className="text-4 font-bold  text-white">45%</p>
          </div>
          <div>
            <Select optionsArr={optionsArr} />
          </div>
        </div>
        <ReactApexcharts
          options={{
            ...options,
            stroke: {
              curve: "straight",
              width: 3,
              colors: ["rgba(80, 77, 251, 1)"],
            },
          }}
          series={options.series}
          type="area"
          height={250}
        />
      </div>
    </div>
  );
};

export default AnalyticsGraph;
