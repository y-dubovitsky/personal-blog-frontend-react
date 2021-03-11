import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Content from './components/Content';
import Main from './components/Main';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import LatesPosts from './components/LatesPosts';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Content />
      <Main />
      <Technologies />
      <LatesPosts/>
      {/* <Projects/> */}
      <Contacts/>
      <Footer />
    </>
  );
}

export default App;
