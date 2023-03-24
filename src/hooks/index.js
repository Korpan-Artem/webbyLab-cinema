
import axios from "axios"

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

export const readFile = () => {
  let obj = [];
  let reader = new FileReader();

  document.querySelector('.btn-add-file').addEventListener('click', () => {
    let file = document.getElementById('file').files[0];
    reader.onload = () => {
      return () => {
        let result = reader.result;
        let textToArray = result.split('\n').map(function (x) { return x.split(':') });
        for (let i = 0; i < textToArray.length; i++) {
          if (textToArray[i][0] === '') textToArray.splice(i, 1);
        }

        const array_size = 4;
        const sliced_array = [];
        for (let i = 0; i < textToArray.length; i += array_size) {
          sliced_array.push(textToArray.slice(i, i + array_size));
        }


        for (let i = 0; i < sliced_array.length - 1; i++) {
          obj.push(Object.fromEntries(sliced_array[i]));
        }
        console.log("functiopn", obj);
        return obj;
      }
    }
    reader.readAsText(file);
    reader.onerror = () => {
      console.log(reader.error);
    }
  })

  return reader;
}



export default fetchCity