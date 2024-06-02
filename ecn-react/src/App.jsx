import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Notices from './components/Notices';
import ImportantLinks from './components/ImportantLinks';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-serif">
      <Navbar />
      <Carousel />
      <div className="w-full grid md:grid-cols-2">
        <Notices />
        <ImportantLinks />
      </div>
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
