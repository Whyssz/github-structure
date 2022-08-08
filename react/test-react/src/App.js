import { useState, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoPlay] = useState(false);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoPlay((autoplay) => !autoplay);
  }

  const getImages = useCallback(() => {
    console.log('fetch');

    return [
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    ];
  }, []);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <Slide getImages={getImages} />
        <div className="text-center mt-5">
          Active slide: {slide} <br />
          {autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

  const Slide = ({ getImages }) => {
    const [images, setImage] = useState([]);

    useEffect(() => {
      setImage(getImages());
    }, [getImages]);

    return (
      <>
        {images.map((url, i) => {
          return <img className="d-block w-100" src={url} key={i} alt="slide" />;
        })}
      </>
    );
  };

function App() {
  return <Slider />;
}

export default App;
