import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { default as Carousel } from 'react-slick';
import { Link } from 'react-router-dom';
import { routes } from 'Router';

import styles from './imageSlider.module.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slideToScroll: 1,
  autoplay: true,
  nextArrow: <img src='/icons/chevron-right.png' />,
  prevArrow: <img src='/icons/chevron-left.png' />,
};

const ImageSlider = ({ banners }) => (
  <Carousel className={styles.carousel} {...settings}>
    {banners &&
      banners.map((item, index) => (
        <div key={index} className={styles.banner}>
          <Link to={`${routes.detail}/${item.title}`}>
            <img src={item.bannerImg} alt='' />
          </Link>
        </div>
      ))}
  </Carousel>
);

export default ImageSlider;
