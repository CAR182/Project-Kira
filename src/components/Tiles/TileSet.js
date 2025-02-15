import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { default as Carousel } from 'react-slick';
import Tile from './Tile';
import styles from './tiles.module.css';
import { Fragment } from 'react';

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <img src='/icons/chevron-right.png' />,
  prevArrow: <img src='/icons/chevron-left.png' />,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const TileSet = ({ title, tiles }) => (
  <Fragment>
    <h2 className={styles.title}> {title} </h2>
    <Carousel {...settings}>{tiles && tiles.map((tile) => <Tile key={tile.title} tile={tile}></Tile>)}</Carousel>
  </Fragment>
);

export default TileSet;
