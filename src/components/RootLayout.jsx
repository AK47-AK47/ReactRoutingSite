import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

export default function RootLayout() {
  return (
    <>
      <Header title="React Routing Demo Site" />
      <MainBody />
      <Footer />
    </>
  );
}
