import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilters, selectBanners, setBanners } from 'redux/reducers/MiscReducer';
import { selectMovies, setMovies } from 'redux/reducers/MovieReducer';
import { getFilters, getMovies, getBanners } from 'api/api';
import ImageSlider from 'components/ImageSlider';
import Filters from 'components/Filters';
import { TileSet } from 'components/Tiles';
import { LoadingSpinner } from 'components/Widgets';

import styles from '../common.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const filters = useSelector(selectFilters);
  const banners = useSelector(selectBanners);

  useEffect(() => {
    loadMovies();
    loadFilters();
    loadBanners();
  }, []);

  const loadMovies = async () => {
    const data = await getMovies();
    if (data) {
      const movies = data.reduce((acc, movie) => {
        let { tags } = movie;
        tags.forEach((tag) => {
          if (!acc.hasOwnProperty(tag)) acc[tag] = [movie];
          else acc[tag].push(movie);
        });
        return acc;
      }, {});

      dispatch(setMovies({ movies }));
    }
  };

  const loadFilters = async () => {
    const data = await getFilters();
    if (data) dispatch(setFilters(data));
  };

  const loadBanners = async () => {
    const data = await getBanners();
    if (data) dispatch(setBanners(data));
  };

  return (
    <div className={styles.container}>
      {!banners.length ? (
        <LoadingSpinner />
      ) : (
        <Fragment>
          <ImageSlider banners={banners} />
          <Filters filters={filters} />
          {Object.keys(movies).map((set) => (
            <TileSet key={set} title={set} tiles={movies[set]} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default Home;
