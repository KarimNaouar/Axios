const axios = require('axios')

const requestOne = axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Sousse&appid=c9cc9e8541de7459ed1dbd733e3c7b9f");
const requestTwo = axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Sfax&appid=c9cc9e8541de7459ed1dbd733e3c7b9f");
const requestThree = axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Tunis&appid=c9cc9e8541de7459ed1dbd733e3c7b9f");

axios
  .all([requestOne, requestTwo, requestThree])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });