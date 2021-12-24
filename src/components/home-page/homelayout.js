import React from 'react';
import { Navbar, Main, Features, Footer } from './layout-wrapper';
import { ScrollSpyProvider } from './layout-wrapper/scrollspyContext';
import '../../sass/index.sass';

export default function HomeLayout() {
  return (
    <ScrollSpyProvider>
      <div className="home-container">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="home-main">
          <Main></Main>
          <Features></Features>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </ScrollSpyProvider>
  );
}
