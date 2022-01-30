import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Header from './Components/Header';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App imageurl="https://m.media-amazon.com/images/M/MV5BMmMyYzA2NTctMmQ0Mi00N2Y3LTljODktZDc5N2M1NWM5NGQ2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg" description="Watch the Kings Daughter with 100s of other users live."/>
    <App imageurl="https://amc-theatres-res.cloudinary.com/v1613135955/amc-cdn/production/2/movies/54400/54422/Poster/p_800x1200_AMC_WonderWoman1984_02102021.jpg" description={<>Wonder Woman 1984 only on Netflix <br /> Free for all Users only for today</>} />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);