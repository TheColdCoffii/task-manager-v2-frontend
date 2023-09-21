import '@styles/pages/App.module.css';
import ProtectedRoute from '../components/utils/ProtectedRoute';

export function App() {
  return (
    <ProtectedRoute>
      <h1>Hello World</h1>
    </ProtectedRoute>
  );
}

export default App;
