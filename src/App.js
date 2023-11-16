import './App.css';
import SidePanel from './components/SidePanel';
import MonitoringPage from './components/MonitoringPage';

function App() {
  return (
    <div className="App" style={{}}>
      <div style={{ display: "flex" }}>
        <SidePanel />
        <MonitoringPage />
      </div>
    </div>
  );
}

export default App;
