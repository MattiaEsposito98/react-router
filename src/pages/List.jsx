import axios from "axios"
import { useEffect, useState } from 'react'
import { BASE_URI } from "../config"
export default function List() {

  const [posts, setPosts] = useState([])

  function fetchPosts() {
    axios
      .get(`${BASE_URI}/posts`)
      .then((res) => {
        setPosts(res.data.results)
      })
      .catch((err) => {
        console.error("Errore durante il fetch dei post:", err)
      });
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <ul className="nameCity">
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}  </li>))}

    </ul>
  )
}