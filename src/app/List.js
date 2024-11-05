import { people } from './data.js';
import { getImageUrl } from './utils.js';


function Person({person}) {
  return (
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  )
}
export default function List() {
  const quimicos = people.filter(person => person.profession === 'químico')
                    .map(person => <Person key={person.id} person={person}/>)
  const cientificos = people.filter(person => person.profession !== 'químico')
                        .map(person => <Person key={person.id} person={person}/>)
  return (
    <article>
      <div>
        <h1>Químicos</h1>
        <ul>{quimicos}</ul>
      </div>
      <div>
        <h1>Científicos</h1>
        <ul>{cientificos}</ul>
      </div>
      
    </article>
  );
}
