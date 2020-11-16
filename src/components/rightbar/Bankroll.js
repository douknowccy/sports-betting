import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/context";
function Bankroll() {
  const {
    data: {
      user: { bankroll },
    },
  } = useGlobalContext();

  const data = {
    labels: bankroll,
    datasets: [
      {
        data: bankroll,
        backgroundColor: ["#E0E2E7"],
        borderColor: ["#4FA238"],
        borderWidth: 1,
        pointRadius: 1,
        fill: false,
        // pointHoverRadius: 3,
      },
    ],
  };
  const options = {
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            display: false,
          },
        },
      ],
    },
  };
  return (
    <BankrollWrapper>
      <Line data={data} options={options} />
    </BankrollWrapper>
  );
}
const BankrollWrapper = styled.div`
  height: 100px;
  width: 200px;
  margin-top: 20px;
`;
export default Bankroll;
