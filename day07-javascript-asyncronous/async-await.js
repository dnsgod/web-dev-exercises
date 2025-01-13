const fetchData = (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`데이터를 성공적으로 가져왔습니다: ${url}`);
      }, 2000);
    });
  };
  
  const main = async () => {
    const data = await fetchData("http://example.com/api");
    console.log(data);
  };
  
  main();
  