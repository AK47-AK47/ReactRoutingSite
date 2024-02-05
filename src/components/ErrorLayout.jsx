import Header from './Header';
import MainBody from './MainBody';
import Footer from './Footer';

export default function ErrorLayout() {
  return (
    //here I use Header, MainBody and Footer to keep the site view consistency
    //I can of course build here a completly new page/view as Error page/view
    //συνηθιζεται αυτο (χωρις μενου, footer κτλ ) σε καποια site, με ενα Link επιστροφή στην αρχική ή πίσω e.g.
    /*
        <>
          <p>Error Sorry for that...</p>
          <p>{error.status}</p>
          <p>{error.statusText}</p>
          <p>{error.data}</p>
        </>
    */
    <>
      <Header title="My Site" />
      <MainBody />
      <Footer />
    </>
  );
}
