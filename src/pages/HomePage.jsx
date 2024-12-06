import Card from '../components/Cards'
import cities from '../datas/cities'
export default function HomePage() {

  return (
    <>
      <h1> Homepage</h1 >
      <div className='container'>
        {
          <div className="row">
            {cities.map(city => (
              <div key={city.id}>
                <Card
                  name={city.name}
                  description={city.description}
                />
              </div>

            ))
            }
          </div>
        }
      </div>

    </>

  )
}