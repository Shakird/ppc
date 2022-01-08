import './App.css';
import Button from './components/atoms/Button'

<script async src="https://api.countapi.xyz/hit/purplecow.tech/1cc732e-b55a-4404-ad3f-0f99c02fe44e?callback=websiteVisits"></script>


function websiteVisits(response){
  document.querySelector('#visits').textContent = response.value;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <h1>We have been visited <span id="visits"></span> times. </h1>
          <Button/>
        </body>
      </header>
    </div>
  );
}

export default App;
