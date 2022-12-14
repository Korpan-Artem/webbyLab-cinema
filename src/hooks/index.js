


export function msToTime(duration) {
    let
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    return hours + ":" + minutes;
  }

// export default function searchCity (id) {
//   // const dispatch = useDispatch();

//   const url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=545ae3ab5fa66fd646fb60c5f9658236`;
//   if (id) {
//     axios.get(url).then((response) => {
//       console.log(response.data);
//    }) 
//  }
// }