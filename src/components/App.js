import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import LandingPage from "./LandingPage"
import Alphabet from "./Alphabet"
import '../index.css';
import Register from "./Register"
import Profile from "./Profile"
import Learn from "./Learn"
import ListofLessons from "./ListofLessons"
import Lesson from "./Lesson"
import Gesture from "./Gesture"



function App() {
  return (
    <div>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/" exact component={LandingPage} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/alphabet" component={Alphabet} />
              <Route path="/profile" component={Profile} />
              <Route exact path="/learn" component={Learn} />
              <Route path="/learn/:id" exact component={ListofLessons}/>
              <Route path="/learn/:s/:l" exact component={Lesson}/>
              <Route path="/gesture" exact component={Gesture}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  )

}

export default App;
