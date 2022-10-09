const url = "https://sanyamapi.sanym04.repl.co/name?text=";

const fetchReq = (url) => {
  fetch(url)
    .then((res) => console.log(res))
    .catch((err) => console.log("err:", err));
};
fetchReq(url);
