import cities from "../datas/cities"

export default function List() {
  return (
    <ul className="nameCity">
      {cities.map((city) => (
        <li key={city.id}>
          {city.name}  </li>))}

    </ul>
  )
}