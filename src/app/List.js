import { people } from './data.js';
import { getImageUrl } from './utils.js';


function Person({person}) {
  return (
    <li key={person.id}>
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
  let quimicosTemp = people.filter(person => person.profession === 'químico')
  let cientificiosTemp = people.filter(person => person.profession !== 'químico')
  const quimicos = quimicosTemp.map(person => <Person person={person}/>)
  const cientificos = cientificiosTemp.map(person => <Person person={person}/>)
  return (
    <article>
      <h1>Químicos</h1>
      <ul>{quimicos}</ul>
      <h1>Científicos</h1>
      <ul>{cientificos}</ul>
    </article>
  );
}
