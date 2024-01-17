import './App.css';
import Homeimage from "./assets/Home.jpg"
import LOGO from "./logo.svg"

function App() {
  return (
    <div className="App flex-column">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <div className="">
          <img src={LOGO} style={{ width: 50 }} alt="Logo" />
        </div>
        <div className="text-center">
          <h1>Mudivira Design Studio</h1>
        </div>
        <div className=""></div>
      </div>
      <div className='d-flex flex-row' style={{height:"93vh"}}>
        <div className=" d-flex align-items-center  justify-content-center p-5 " >
          <h1 style={{fontWeight:700, fontSize:70,  textAlign:"left"}} >Your Dreams are designed here!</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center pr-5" >
          <img src={Homeimage} style={{ width: "80%", height: "80%", borderRadius: 150 }} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default App;
