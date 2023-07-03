import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

const urlConfig = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  notFound: NotFound,
};

export default urlConfig;
