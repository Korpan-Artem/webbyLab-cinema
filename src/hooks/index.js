
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

export const readFile = (file) => {
        let result = file;
        let obj = [];
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
            obj.push({
              title: sliced_array[i][0][1],
              releaseYear: sliced_array[i][1][1],
              format: sliced_array[i][2][1],
              stars: sliced_array[i][3][1]
            }) 
        }
        return obj;
}

export function readFileAsString(file, callback) {
  const reader = new FileReader();
  reader.readAsText(file, 'utf-8');
  reader.onload = () => callback(reader.result);
  reader.onerror = () => callback(null, reader.error);
}



export default fetchCity