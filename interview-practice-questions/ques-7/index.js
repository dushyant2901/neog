const url = "https://sanyamapi.sanyam04.repl.co/";
const userName = "Dushyant";

const fetchReq = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.contents.text);
    })
    .catch((err) => console.log(err));
};
fetchReq(`${url}name?text=${userName}`);
