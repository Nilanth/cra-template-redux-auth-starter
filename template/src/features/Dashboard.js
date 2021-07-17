import logo from 'logo.svg';

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>Create React App Template Preconfigured with</p>
        <ol style={{textAlign: 'left'}}>
          <li>Redux Toolkit</li>
          <li>React Router</li>
          <li>AntD</li>
          <li>Axios</li>
          <li>Redux Saga</li>
          <li> Basic Authentication / Routes</li>
          <li> SASS</li>
          <li> Code Splitting</li>
        </ol>
        <a
          className="App-link"
          href="https://github.com/Nilanth/cra-template-redux-auth-starter"
          target="_blank"
          rel="noopener noreferrer"
        > Learn More</a>
      </header>
    </div>
  );
}

export default Dashboard;
