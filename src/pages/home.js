import React from 'react';
import MainNav from '../components/home/main-nav';
import MainFooter from '../components/home/main-footer';
import HomeTop from '../components/home/home-top';
import Features from '../components/home/features';
import Team from 'components/home/team';
import Call from '../components/home/call';

const Home = () => {
  return (
    <div className="home">
      <MainNav />
      <HomeTop />
      <Features />
      <Team />
      <Call />
      <MainFooter />
    </div>
  );
};

export default Home;
