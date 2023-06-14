import './App.css';
// function hel() {
//   alert("hellow you clicked")
// }
import Navbar from './component/Navbar';
function App() {
  return (
    <>
      <Navbar Active = "HOME" about = "contact us"/>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label mt-3">Example textarea</label>
        <textarea className="form-control border border-danger" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-dark w-50" >text details</button>
      </div>

    </>
  );
}

export default App;
