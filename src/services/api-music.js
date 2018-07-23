export default q => {
  console.log(q);
  const url = "https://platzi-music-api.now.sh/search?type=track&query=";
  return fetch(`${url}${q}`)
    .then(res => res.json())
    .then(json => json);
};
