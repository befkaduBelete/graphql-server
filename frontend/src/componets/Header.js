
import logo from  "./asstets/logo.png"


export default function Header() {
  return (
    <nav className="navbar bg-light mb-5 p-2">

      <div className="container">
        <div  className="d-flex">
              <a className='navbar-brand' href='/'>
      <img   src={logo} alt=""/>
         </a>
         <div>Project Management </div>
        </div>
      </div>
    </nav>
  )
}
