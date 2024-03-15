function App() {
  return (
    <div className="container">
      <img src="https://i.imgur.com/rTFVdgV.jpg" className="panda" />
      <h1 className="error">502 Bad Gateway</h1>
      <p className="text">
        Xin lỗi, có vẻ như máy chủ của chúng tôi đang gặp sự cố.
        <br />
        Chúng tôi đang cố gắng khắc phục sự cố này và sẽ sớm đưa trang web trở lại hoạt động.
        <br />
        Trong thời gian chờ đợi, bạn có thể thử lại sau một lúc hoặc truy cập trang web của chúng tôi trên các nền tảng khác.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
