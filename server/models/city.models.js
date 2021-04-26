import listCountry from "./countries.model.js";

//Convert initials country to complete name
function nameCountry(country) {
  const found = listCountry.some((value) => value.sigla === country);
  if (found) {
    const result = listCountry.filter((value) => value.sigla === country);
    return result[0].nome;
  } else {
    return country;
  }
}

//City Structure
let modelCity = (data) => {
  let name = data.name;
  let country = nameCountry(data.sys.country);
  let temperature = (data.main.temp - 273.15).toFixed(2);
  let humidity = data.main.humidity;
  let weather = data.weather[0].description;

  return { name, country, temperature, humidity, weather };
};

export default modelCity;
