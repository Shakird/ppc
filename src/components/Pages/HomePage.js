import Button from '../Atoms/Button';
import FetchNumberOfVisits from '../Atoms/Fetch/FetchNumberOfVisits';

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <h1><FetchNumberOfVisits/></h1>
          <Button />
        </body>
      </header>
    </div>
  );
}

