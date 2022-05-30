import './App.css';
import PersonCard from './PersonCard'

function App() {
  return (
    <div>
      <PersonCard
        lastname="Doe"
        firstname="Jane"
        age={45}
        haircolor="Black"
      />
      <PersonCard
        lastname="Smith"
        firstname="John"
        age={88}
        haircolor="Brown"
      />
      <PersonCard
        lastname="Fillmore"
        firstname="Millord"
        age={50}
        haircolor="Brown"
      />
      <PersonCard
        lastname="Smith"
        firstname="Maria"
        age={62}
        haircolor="Brown"
      />
    </div>
  );
}

export default App;
