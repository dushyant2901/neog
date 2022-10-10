const url = "https://sanyamapi.sanyam04.repl.co/error";

const fetchReq = (url) => {
  fetch(url).then((res) => {
    const { status } = res;
    if (status === 401) {
      document.write("user not logged in");
    }
    if (status === 404) {
      document.write("page not found");
    }
  });
};
fetchReq(url);
