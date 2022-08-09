import { useState, useCallback, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

const countTotal = (num) => {
  return num + 5;
};

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoPlay] = useState(false);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoPlay((autoplay) => !autoplay);
  }

  const getSomeImages = useCallback(() => {
    console.log('fetch');
    return [
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
    ];
  }, []);

  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(() => ({
    color: slide > 4 ? 'red' : 'black',
  }), [slide])

  useEffect(() => {
    console.log('style');
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <Slide getSomeImages={getSomeImages} />
        <div className="text-center mt-5">
          Active slide: {slide} <br />
          {autoplay ? 'auto' : null}
        </div>
        <div style={style} className="text-center mt-5">
          Total: {total} <br />
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

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);

  return (
    <>
      {images.map((url, i) => {
        return <img src={url} alt="images" key={i} />;
      })}
    </>
  );
};

function App() {
  return <Slider />;
}

export default App;
