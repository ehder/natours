import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import SectionFeatures from './components/section-features/SectionFeatures';
import SectionTours from './components/section-tours/SectionTours';
import SectionStories from './components/section-stories/SectionStories';
import SectionBooking from './components/section-booking/SectionBooking';
import Navigation from './components/navigation/Navigation';
import PopUp from './components/popup/PopUp';

function App() {
  return (
    <div>
        <Navigation/>
        <Header/>
        <Main/>
        <SectionFeatures/>
        <SectionTours/>
        <SectionStories/>
        <SectionBooking/>
        <Footer/>
        <PopUp/>
    </div>
  );
}

export default App;
