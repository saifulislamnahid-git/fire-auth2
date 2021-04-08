
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Box from './components/Box/Box';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Box />
      </Container>
    </div>
  );
}

export default App;
