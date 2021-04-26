import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function TopCities({ topCity }) {
  const [data, setData] = useState([]);

  const showCity = (data) => {
    return data.map((value) => (
      <div>
        <p key={value.id}>{value.name}</p>
      </div>
    ));
  };

  const getTopCities = async () => {
    const response = await api.get("city/popularCities");
    setData(response.data);
  };

  useEffect(() => {
    getTopCities();
  }, []);

  return <>{topCity.length !== 0 ? showCity(topCity) : showCity(data)}</>;
}
