function downloadFile(url, callback) {
    console.log(`파일 다운로드 시작: ${url}`);
    setTimeout(() => {
      callback("파일 다운로드 완료!");
    }, 3000);
  }
  
  downloadFile("http://example.com/file", (message) => {
    console.log(message);
  });
  