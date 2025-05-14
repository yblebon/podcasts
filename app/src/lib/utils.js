export const createHash = (str) => {
  if (str == "") return 0;
  let hashString = 0;
  for (let character of str) {
    let charCode = character.charCodeAt(0);
    hashString = hashString << 5 - hashString;
    hashString += charCode;
    hashString |= hashString;
  }
  return Math.abs(parseInt(hashString));
}

export const sortDate = (a, b) => {
  let dateA = new Date(a.upload_date);
  let dateB = new Date(b.upload_date);
  return dateA > dateB ? 1 : -1;
};

export const getGif = async (q) => {
  const response = await fetch(`https://g.tenor.com/v1/search?q=${q}&key=LIVDSRZULELA&limit=1&media_filter=mediumgif`)

  let result = await response.json()
  let gif = result['results'][0]['media'][0]['mediumgif']
  if (gif != null) {
    return gif.url;
  }

}


export const getJoke = async () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data.joke))
    .catch(error => console.error(error));

}