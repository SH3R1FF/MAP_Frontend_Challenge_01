import Card from './components/Card';
import sampleData from './constants/data.json';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Home = () => {

  const settings = {
    accessibility:true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
      <div className='lg:w-[85%] w-3/4 m-auto'>

          <h1 className='mt-20 text-center text-xl sm:text-5xl font-bold lalezar-regular'>GAME OF THE YE 
            <span className='text-lime-400 '>AR SINCE 2004</span> 
          </h1> 

          <div className='mt-16' >

            <Slider {...settings}>
              
              {sampleData.map((card) => (
                <Card
                key={card.id}
                image={`/src/assets/${card.image}`}
                title={card.title}
                description={card.description}
                tag={card.tag}
                year={card.year}
                />
              ))}
              
            </Slider>

          </div>
      </div>
    </>
  );
};

export default Home
