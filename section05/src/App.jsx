
import './App.css'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Button from './components/Button.jsx';
function App() {

  return (
    <>
    {/* <Header />
    <Main></Main>
    <Footer /> */}
    <Button text={"메일"} color={"red"}/>
    <Button text={"블로그"} color={"orange"}/>
    <Button text={"카페"}>
      <div>자식요소</div>
      <div>committest 지울것</div>
      <Header></Header>
    </Button>
    </>
  );
}

export default App
