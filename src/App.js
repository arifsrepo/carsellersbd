import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Components/Shared/Navigationbar/Navigationbar';
import Footer from './Components/Shared/Footer/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Privateroute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import NotFound from './Components/NotFound/NotFound';
import MoreDetails from './Components/MoreDetails/MoreDetails';
import MyOrder from './Components/MyOrder/MyOrder';
import DashBoard from './Components/DashBoard/DashBoard';
import Explore from './Components/Explore/Explore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigationbar></Navigationbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/more-details/:carid">
              <MoreDetails></MoreDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
