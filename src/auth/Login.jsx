import { LoginEndPoint } from "../spotify";
import './login.css'

const Login = () => {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/spotify_Logo_RGB_White.png"
        alt="spotify-logo"
        className="logo"
      />
      <a href={LoginEndPoint}>
        <div className="login-btn">LOG IN</div>
      </a>
    </div>
  );
};

export default Login;
