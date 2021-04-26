import React, { useState, useEffect } from "react";

import api from "../services/api";

export default function LastCities({ lastCity }) {
  const [data, setData] = useState([]);

  const showCity = (data) => {
    return data.map((value) => (
      <div>
        <p key={value.id}>{value.last_cities}</p>
      </div>
    ));
  };

  const getLastCities = async () => {
    const response = await api.get("city/lastCities");
    setData(response.data);
  };

  useEffect(() => {
    getLastCities();
  }, []);

  return <>{lastCity.length !== 0 ? showCity(lastCity) : showCity(data)}</>;
}
