// import {Main} from "./controller/Main";
import {Login} from "./controller/Login";

function App() {
  return (
    <div className="App">
      {/*<Main></Main>*/}
        <Login date={new Date()}></Login>
    </div>
  );
}

export default App;
