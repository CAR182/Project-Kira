import { Route, Routes } from 'react-router-dom';
import Login from 'containers/Login';
import UserSelection from 'containers/UserSelection';
import Home from 'containers/Home';
import Detail from 'containers/Detail';
import Category from 'containers/Category';
import NotFound from 'containers/NotFound';

export const routes = {
  login: '/',
  home: '/home',
  userSelect: '/user-selection',
  detail: '/detail',
  category: '/category',
  notFound: '/404',
  images: '/images',
  icons: '/icons',
  video: '/videos',
};

const Router = () => (
  <Routes>
    <Route exact path='/' element={<Login />} />
    <Route path={routes.userSelect} element={<UserSelection />} />
    <Route path={routes.home} element={<Home />} />
    <Route path={`${routes.detail}/:id`} element={<Detail />} />
    <Route path={`${routes.category}/:id`} element={<Category />} />
    <Route path={routes.notFound} element={<NotFound />} />
  </Routes>
);

export default Router;
