/* eslint-disable import/no-extraneous-dependencies */
import Navbar from 'components/Navbar';
import Footer from 'components/footer/Footer';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>

  );
}

export default Main;
