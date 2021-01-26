import logo from 'logo.svg';

function Dashboard() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    CRA Template PreConfigured with
                </p>
                <ol style={{ textAlign: 'left' }}>
                    <li>
                        Redux
                    </li>
                    <li>
                        React Router
                    </li>
                    <li>
                        AntD
                    </li>
                    <li>
                        Axios
                    </li>
                    <li>
                        Redux Saga
                    </li>
                    <li>
                        Basic Authentication
                    </li>
                    <li>
                        SASS
                    </li>
                </ol>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Dashboard;
