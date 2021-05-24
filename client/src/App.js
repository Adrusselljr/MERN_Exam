import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Router, Link } from '@reach/router'
import AllPets from './components/AllPets'
import NewPet from './components/NewPet'
import EditPet from './components/EditPet'
import PetDetails from './components/PetDetails'

function App() {

  return (

    <div className="App">

      <div className="links">
        <Link className="btn btn-primary" to = "/">Home</Link>
        <Link className="btn btn-primary" to = "/pets/new">New Pet</Link>
      </div>

      <Router>
        <AllPets path = "/"/>
        <NewPet path = "/pets/new"/>
        <EditPet path = "/pets/edit/:id"/>
        <PetDetails path = "/pets/details/:id"/>
      </Router>

    </div>

  )

}

export default App
