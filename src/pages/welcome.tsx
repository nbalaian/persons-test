import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <div>
      <h1>Welcome to my test task (:</h1>
      <Link to='people'>Enjoy!</Link>
    </div>
  );
}
