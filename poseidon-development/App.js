function App() {
    return (
        <div className="container">
            <img src="https://i.imgur.com/rTFVdgV.jpg" className="panda" />
            <h1 className="error">502 Bad Gateway</h1>
            <p className="text"> Xin lỗi, có vẻ như máy chủ của chúng tôi đang gặp sự cố.
                <br /> Chúng tôi đang cố gắng khắc phục sự cố này và sẽ sớm đưa trang web trở lại hoạt động.
                <br /> Trong thời gian chờ đợi, mời bạn thưởng thức ca khúc của bản release lần này
            </p>
            <div className="video-responsive">
                <iframe width="853" height="480" src={`https://www.youtube.com/embed/FREeSubtAQ8`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Embedded youtube" />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);