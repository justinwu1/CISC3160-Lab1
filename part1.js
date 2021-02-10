// Problem1: Find the frequency of a string
function frequencyCounter(word) {
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    if (!obj[word[i]]) {
      obj[word[i]] = 1;
    } else {
      obj[word[i]] += 1;
    }
  }
  return obj;
}
console.log(frequencyCounter("Hello world"));

/*
Problem2: Math calculations
Convert the weather forecase for a week(a sequence of number) Fahrenheit to Celsius and back.
Scale thatt ocalculating weather forecast for a month
*/
function convertFtoC(f) {
  let fTemp = f;
  let fToCel = (fTemp - 32) * 5 / 9;
  return `${fTemp}\xB0F is ${Math.round(fToCel)}\xB0C.`;
}
for (let i = 1; i <= 30; i++) {
  console.log(`Day${i} Temperature: ${convertFtoC(Math.floor(Math.random() * 100))}`);
}

/*
Problem3: Web Development
Make a request to any API endpoint and return its content. Display contents in a nice way. A
*/
async function searchGif(term) {
  const data = await fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=dFWuvuX6BXqw2v1GVKmCVsLHPMDdxdvj&limit=`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  })
    .then(r => r.json())
    .then(data => {
      let mainContainer = document.querySelector("#data");
      for(let i = 0; i < data.data.length; i++){
        let div = document.createElement("div");
        div.innerHTML = `<img src = ${data.data[i].images.downsized.url}>`
        mainContainer.appendChild(div);
      }
    })
    return data;
}
searchGif("simpson");
