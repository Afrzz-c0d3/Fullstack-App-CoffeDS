import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-kcoffee-light">
      <h1 className="text-4xl font-bold text-kcoffee mb-6">Welcome to testing</h1>
      <nav className="space-x-4">
        <Link to="/login" className="text-kcoffee-dark hover:underline">Login</Link>
        <Link to="/register" className="text-kcoffee-dark hover:underline">Register</Link>
      </nav>
    </div>
  );
}

export default App;
