{/*import Header from './CSS/Header/header';*/}
import Main from '../src/CSS/Main/main';
import Redes from "../src/CSS/Footer/contato"
import Projetos from './CSS/Main/Projetos';


const App = () => {
  return (
    <div className="App">
      {/*<Header />*/}
      <Main />
      <Projetos />
      <Redes />
    </div>
  );
};

export default App;