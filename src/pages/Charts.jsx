import { useEffect, useState } from "react";
import { bitcoinService } from "../services/bitcoinService";
import { ChartComponent } from "../cmps/ChartComponent";

export const Charts = () => {
  const [chartData, setChartData] = useState(null);
  const [data, setData] = useState(null);
  const [duration, setDuration] = useState("6months");

  useEffect(() => {
    getData();
    if (data) {
      const mappedData = data.map((t) => ({
        time: new Date(t.x * 1000).toLocaleDateString("en-CA"),
        value: t.y,
      }));
      setChartData(mappedData);
    }
  }, [data]);

  const getData = async () => {
    const data = await bitcoinService.getMarketPrice();
    setData(data);
  };

  if (chartData)
    return (
      <div className="about">
        <h1>BTC Market Data</h1>
        <select>
          <option disabled value="">
            Choose a type
          </option>
          <option value="email">Email</option>
          <option value="name">Name</option>
        </select>
        <ChartComponent data={chartData} />
      </div>
    );
  else return <div>Loading...</div>;
};
