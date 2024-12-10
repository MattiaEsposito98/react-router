import { Link } from 'react-router-dom';
export default function HomePage() {

  return (
    <>
      <div className='title-homepage'>
        <h1 > Homepage</h1 >
        <Link className="link-homepage" to="/posts" >Guarda tutti posts</Link>
      </div >
    </>

  )
}