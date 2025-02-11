import { useNavigate } from "react-router-dom";
import { logout } from "../auth";
import Button from "../components/Button";
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <h1>Welcome to LinkedIn Clone 🏆</h1>
      <p>You are successfully logged in!</p>
      <Button onClick={handleLogout} className="w-fit">
        Logout
      </Button>
    </div>
  );
};

export default Home;
