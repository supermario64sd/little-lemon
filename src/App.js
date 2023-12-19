import './App.css';
import Article from './components/article';
import Body from './components/body';
import Header from './components/header';
import Nav from './components/nav';
import Section from './components/section';

function App() {
  return (
    <>
    <Body>
    <Header>
      </Header>
    <Nav></Nav>
        <Main>
          <Article>
          <Section></Section>
          </Article>
          <Article>
            <Section></Section>
          </Article>
        </Main>
       <Footer></Footer>
      </Body>
    </>
  );
}


export default App;
