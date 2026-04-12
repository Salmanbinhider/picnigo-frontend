import { Fragment, lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('@/pages/user/home/Home'));
const Packages = lazy(() => import('@/pages/user/packages/pages/Packages'));
const PackageDetails = lazy(() => import('@/pages/user/packages/pages/PackageDetail'));
const BlogsPage = lazy(() => import('@/pages/user/blog/BlogsPage'));
const BlogDetail = lazy(() => import('@/pages/user/blog/BlogDetails'));
const About = lazy(() => import('@/pages/user/about/About'));
// const DemoSetupPage = lazy(() => import('@/pages/user/DemoSetupPage'));

const CommonRoutes = (
  <Fragment>
    <Route path="/" element={<Home />} />
    <Route path="/packages" element={<Packages />} />
    <Route path="/packages/:id" element={<PackageDetails />} />
    <Route path="/blog" element={<BlogsPage />} />
    <Route path="/blog/:slug" element={<BlogDetail />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/demo" element={<DemoSetupPage />} /> */}
  </Fragment>
);

export default CommonRoutes;
