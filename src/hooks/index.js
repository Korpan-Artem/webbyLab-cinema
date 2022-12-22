
import axios from "axios"

export function msToTime(duration) {
  let
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;

  return hours + ":" + minutes;
}

const fetchCity = async (city) => {
  let data;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
  if (city) {
    data = await axios.get(url).then((response) => {
      return response.data
    })
  }
  return data;
}
 

export default fetchCity