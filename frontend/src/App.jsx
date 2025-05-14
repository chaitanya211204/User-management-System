import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddUser from './users/AddUser'
import EditUser from "./users/EditUser"
import ViewUser from "./users/ViewUser"
import Login from "./authenticate/login"
import Register from "./authenticate/Register"

function App() {
  return (
    <div className="App">
      {/* <ThemeToggle/> */}
      <Router>
        <Navbar/>
        <Routes>
          
          <Route exact path = "/" element = {<Home/>}></Route>
          <Route exact path = "/addUser" element = {<AddUser/>}></Route>
          <Route exact path = "/editUser/:id" element = {<EditUser/>}></Route>
          <Route exact path = "/viewUser/:id" element = {<ViewUser/>}></Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
