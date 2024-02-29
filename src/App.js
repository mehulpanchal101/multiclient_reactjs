import logo from './logo.svg';
import './App.css';

// Client-specific configuration (can be fetched from an API or stored in environment variables)
const clientConfig = {
  client1: {
    primaryColor: 'blue',
    secondaryColor: 'green',
    // other client-specific configurations...
  },
  client2: {
    primaryColor: 'red',
    secondaryColor: 'yellow',
    // other client-specific configurations...
  },
  client3: {
    primaryColor: 'green',
    secondaryColor: 'yellow',
    // other client-specific configurations...
  },
  client4: {
    primaryColor: 'red',
    secondaryColor: 'yellow',
    // other client-specific configurations...
  },
  // other clients...
};

// Component that utilizes client-specific styles
const ClientComponent = ({ client }) => {
  const { primaryColor, secondaryColor } = clientConfig[client];
  const clients = process.env.REACT_APP_CLIENT;
  console.log(clients); // This will log 'client1'

  return (

    <div className="App" >
      <header className="App-header" style={{ backgroundColor: primaryColor, color: secondaryColor }} >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
};

// Parent component where client is determined
const App = ({ client }) => {
  return (
    <div>
      {/* Other components */}
      <ClientComponent client={client} />
      {/* Other components */}
    </div>
  );
};


export default App;