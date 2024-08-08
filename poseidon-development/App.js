function App() {
  const listImage = [
    'https://i.pinimg.com/564x/3b/b7/cd/3bb7cd520aa79e721e227cd73341c6ab.jpg',
    'https://i.pinimg.com/564x/7f/d3/18/7fd3187f1e6012fc3bd9d52d91ad47f0.jpg',
    'https://i.pinimg.com/736x/5e/ef/a5/5eefa54994568d2084e89170e98623c6.jpg',
    'https://i.pinimg.com/564x/30/17/1d/30171df23f543179b238fd3e6a39275c.jpg',
    'https://i.pinimg.com/736x/24/e6/74/24e67487ab5f29ce78706af98896bbc7.jpg',
    'https://i.pinimg.com/736x/6a/80/f5/6a80f58ed8408f8972e80e65f1a0aa9c.jpg',
    'https://i.pinimg.com/736x/ae/27/a8/ae27a86284f3eeaa83f53fd4d5c92db3.jpg',
    'https://i.pinimg.com/564x/97/59/c8/9759c81551cc8b623303d9e3a42db7fd.jpg',
    'https://i.pinimg.com/564x/77/8e/8d/778e8d3a6f15118b9a626a05a140ae5c.jpg',
    'https://i.pinimg.com/564x/0a/fc/82/0afc82d6410e1f3910e8bbbb52bba0fc.jpg',
    'https://i.pinimg.com/564x/75/16/20/751620d958c626376fb8f3c3fc5e5c96.jpg',
    'https://i.pinimg.com/564x/29/cf/29/29cf2934aabd8f2b7bd62b909db670a9.jpg',
    'https://i.pinimg.com/736x/e9/ca/f8/e9caf885ebf3e21f03fb2fd7a23df56b.jpg',
  ];

  const listIdYoutube = [
    'nM127mMEan8',
    'abPmZCZZrFA',
    'AJDEu1-nSTI',
    'I-Y4kN5LXy8',
    'KxCkAb_lXyc',
    'PZaYJQAniZM',
    '-yhqOX3bLvQ',
  ];
  //   const firstVideo = '-yhqOX3bLvQ';
  const firstVideo = 'nM127mMEan8';

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img
            src={listImage[Math.floor(Math.random() * listImage?.length)]}
            className='panda'
          />
        </div>
        <div>
          <h1 className='error'>502 Bad Gateway</h1>
          <p className='text'>
            {' '}
            Xin lỗi, có vẻ như máy chủ của chúng tôi đang gặp sự cố 🥲
            <br /> Chúng tôi đang cố gắng khắc phục sự cố này và sẽ sớm đưa
            trang web trở lại hoạt động 🫡
            <br /> Trong thời gian chờ đợi, mời bạn thưởng thức những ca khúc
            của bản release lần này ❤️❤️❤️
          </p>
        </div>
      </div>

      <div className='video-responsive'>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/${firstVideo}?autoplay=1&mute=0&loop=1&playlist=${
            listIdYoutube?.length > 0 ? listIdYoutube?.toString() : ''
          }`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
    </div>
  );
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
