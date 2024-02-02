import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainBody from './components/MainBody.jsx';
import './App.css';

export default function App() {
  return (
    <div>
      <Header title={"React Routing Demo Site"} />
      <MainBody />
      <Footer />
    </div>
  );
}