import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
// import { useRecoilValue } from "recoil";
// import userAtom from "./atoms/userAtom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import UserPage from "./pages/userPage";
import Dashboard from "./pages/Dashboard";
// import Sidebar from "./components/sidebar";
// import AuthPage from "./pages/AuthPage";

function App() {
  // const user = useRecoilValue(userAtom);
  // console.log(user);
  return (
    <>
      {/* {user && <Navbar />} */}
      <Navbar />
      {/* <Sidebar/> */}
      <Router>
        <Routes>
          {/* <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={!user ? <AuthPage /> : <Navigate to="/" />}
          /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
