import {useState} from 'react'
import RefreshButton from '../Atoms/Button/RefreshButton';
import ResetButton from '../Atoms/Button/ResetButton';
import FetchNumberOfVisits from '../Atoms/Fetch/FetchNumberOfVisits';

export default function HomePage() {

  const [buttons, setData] = useState([
    {id: 0, title:'Click to refresh'},
    {id: 1, title:'Reset Counter'}
  ])

  return (
    <div className="App">
      <header className="App-header">
        <body>
          <h1><FetchNumberOfVisits/></h1>
          <RefreshButton buttons = {buttons.filter((buttons) => buttons.id === 0)}/>
          <ResetButton buttons = {buttons.filter((buttons) => buttons.id === 1)}/>
        </body>
      </header>
    </div>
  );
}

