import './App.css';
import Article from './components/article';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import Section from './components/section';

function App() {
  return (
    <>
        <Header>
        </Header>
        <Nav />
        <Main>
          <Article>
            <Section />
          </Article>
          <Article>
            <Section />
          </Article>
        </Main>
        <Footer />
    </>
  );
}


export default App;
