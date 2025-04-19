import './App.css';
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{ marginLeft: '-10px' }}>
          <button className="btn btn-outline-primary me-2" type="button" style={{ padding: '5px 10px' }}>
            <div style={{ width: '20px', height: '2px', backgroundColor: 'black', margin: '3px 0' }}></div>
            <div style={{ width: '20px', height: '2px', backgroundColor: 'black', margin: '3px 0' }}></div>
            <div style={{ width: '20px', height: '2px', backgroundColor: 'black', margin: '3px 0' }}></div>
          </button>
          <a className="navbar-brand" href="/"><b>FarmCrops</b></a>
          <div className="collapse navbar-collapse" id="navbarOptions">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </li>
            <li className="nav-item">
              <img
                src="/Profile_icon.png"
                alt="Profile"
                className="rounded-circle"
                style={{ width: '40px', height: '40px', marginLeft: '10px', transform: 'scale(1.0)' }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
