import axios from "axios"
import { useEffect, useState } from 'react'
import { BASE_URI } from '../../config'
import { Link } from 'react-router-dom'
import Card from "../../components/Cards"

export default function Index() {
  const [posts, setPosts] = useState([])


  function fetchPosts() {
    axios.get(`${BASE_URI}/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.err(err)
      })
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <main>
      <section>
        <div className='container'>
          <h1 className='title'>I Posts</h1>
          {/* <Link className='link' to="/posts/create">Nuovo post</Link> */}
        </div>
        <div className="container">
          <ul className='grid grid-cols-2'>
            {posts.map(post => (
              <li key={post.id}>
                {/* <Card onDelete={() => fetchPizzas()} post={post} /> */}
                <Card />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )

}
