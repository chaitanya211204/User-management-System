import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import AddUser from './users/AddUser'
import EditUser from "./users/EditUser"
import ViewUser from "./users/ViewUser"
import Login from "./authenticate/Login"
import Register from "./authenticate/Register"
import Sidebar from "./employee/SideBar"
import TrackAttendance from "./employee/TrackAttendance"
import Dashboard from "./employee/DashBoard"
import UpdateProfileForm from "./employee/UpdateProfileForm"
import ProjectProgressPage from "./employee/ProjectProgessPage"
import UploadDocuments from "./employee/UploadDocument"
import SalaryPay from "./employee/SalaryPay"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path = "/home" element = {<Home/>}></Route>
          <Route exact path = "/addUser" element = {<AddUser/>}></Route>
          <Route exact path = "/editUser/:id" element = {<EditUser/>}></Route>
          <Route exact path = "/viewUser/:id" element = {<ViewUser/>}></Route>
          <Route exact path= "/employee" element = {<Sidebar/>}></Route>
          <Route exact path="/attendance" element={<TrackAttendance/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/update-profile" element={<UpdateProfileForm />} />
          <Route exact path="/project-progress" element={<ProjectProgressPage />} />
          <Route exact path="/upload-docx" element={<UploadDocuments />} />
          <Route exact path="/salary" element={<SalaryPay/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
