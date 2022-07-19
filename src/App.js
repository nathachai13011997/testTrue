import './App.css';

function App() {
  return (
    <div className="App container">
    <h1>Employee Information</h1>
    <div className="information">
      <form action="">
          <div className="mb-3">
            <label className="form-label">
              Firstname:
            </label>
            <input type='text' className='form-control' placeholder='Enter Firstname' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Lastname:
            </label>
            <input type='text' className='form-control' placeholder='Enter Lastname' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Email:
            </label>
            <input type='text' className='form-control' placeholder='Enter Email' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Address:
            </label>
            <input type='text' className='form-control' placeholder='Enter Address' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Province:
            </label>
            <input type='text' className='form-control' placeholder='Enter Province' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              khet:
            </label>
            <input type='text' className='form-control' placeholder='Enter khet' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              khwang:
            </label>
            <input type='text' className='form-control' placeholder='Enter khwang' />
          </div>
          <div className="mb-3">
            <label className="form-label">
              zipcode:
            </label>
            <input type='text' className='form-control' placeholder='Enter zipcode' />
          </div>
      </form>       
    </div>
    <button className="btn btn-success">Add</button>
    </div>
  );
}

export default App;
