import logo from './logo.svg';
import './App.css';
function hel() {
  alert("hellow you clicked")
}
function App() {
  return (
    <>

      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="#">Active</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link" href="#">Link</a>
        <a className="nav-link disabled">Disabled</a>
      </nav>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label mt-3">Example textarea</label>
        <textarea className="form-control border border-danger" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-dark w-50" onClick={hel()}>text details</button>
      </div>
      

      
    </>
  );
}

export default App;
