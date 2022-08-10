
import Header from './Header';
// import Footer from './Footer';
import BodyContent from './bodyContent';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      <BodyContent/>
      <Events/>
      </header>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
