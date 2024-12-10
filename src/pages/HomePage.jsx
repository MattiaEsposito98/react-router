import Card from '../components/Cards'
export default function HomePage() {

  return (
    <>
      <h1> Homepage</h1 >
      <div className='container'>
        {
          <div className="row">
            {/* {posts.map(post => (
              <div key={post.id}>
                <Card
                  name={post.title}
                  content={post.content}
                />
              </div>
            ))
            } */}
          </div>
        }
      </div>

    </>

  )
}