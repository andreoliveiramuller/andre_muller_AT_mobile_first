import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Form = lazy(() => import('../pages/Form'));
const List = lazy(() => import('../pages/List'));

const AppRoutes = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/list" element={<List />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
