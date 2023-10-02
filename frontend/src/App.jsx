import Routes from './routes'
import { Global } from './styles/global'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes />
      <Global />
      <Toaster />
    </>
  );
}

export default App;
