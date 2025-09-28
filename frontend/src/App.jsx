import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import AddUser from './users/AddUser'
import EditUser from "./users/EditUser"
import ViewUser from "./users/ViewUser"
import Login from "./authenticate/Login"
import Register from "./authenticate/Register"
import TrackAttendance from "./employee/TrackAttendance"
import EmployeeDashboard from "./employee/EmployeeDashboard"
import UpdateProfileForm from "./employee/UpdateProfileForm"
import ProjectProgressPage from "./employee/ProjectProgessPage"
import UploadDocuments from "./employee/UploadDocument"
import SalaryPay from "./employee/SalaryPay"
import ResetPasswordForm from "./employee/ResetPasswordForm"
import HRDashboard from "./admin/HRDashboard"
import EmployeePage from "./admin/EmployeePage"
import AddNoticeForm from "./admin/AddNoticeForm"
import SalaryStructureForm from "./admin/SalaryStructureForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path = "/home" element = {<HRDashboard/>}></Route>
          <Route exact path="/employees" element = {<EmployeePage/>}></Route>
          <Route exact path="/notices" element = {<AddNoticeForm/>}></Route>
          <Route exact path="/pay-salary" element = {<SalaryStructureForm/>}></Route>
          <Route exact path = "/addUser" element = {<AddUser/>}></Route>
          <Route exact path = "/editUser/:id" element = {<EditUser/>}></Route>
          <Route exact path = "/viewUser/:id" element = {<ViewUser/>}></Route>
          <Route exact path= "/dashboard" element = {<EmployeeDashboard />}></Route>
          <Route exact path="/attendance" element={<TrackAttendance/>} />
          <Route exact path="/update-profile" element={<UpdateProfileForm/>} />
          <Route exact path="/project-progress" element={<ProjectProgressPage />} />
          <Route exact path="/upload-docx" element={<UploadDocuments />} />
          <Route exact path="/salary" element={<SalaryPay/>} />
          <Route exact path="/reset-password" element = {<ResetPasswordForm></ResetPasswordForm>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
