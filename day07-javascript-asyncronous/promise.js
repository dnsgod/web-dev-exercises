const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      console.log(`데이터 요청 시작: ${url}`);
      setTimeout(() => {
        resolve("요청 데이터 성공적으로 가져옴!");
      }, 2000);
    });
  };
  
  fetchData("http://example.com/api")
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  