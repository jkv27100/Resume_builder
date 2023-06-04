import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { BUILD_RESUME_PAGE_ROUTE } from "../../constants/routes";
import { Button } from "react-bootstrap";

import "./styles.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-animation-container">
          <Player
            className="notfound-animation-player"
            src="https://assets5.lottiefiles.com/packages/lf20_ghfpce1h.json"
            loop
            autoplay
          />
        </div>
        <div className="notfound-speration"></div>
        <div className="notfound-message">
          <h1 className="notfound-title">404</h1>
          <p style={{ fontSize: "50px", margin: 0 }}>OOPS!</p>
          <p style={{ fontSize: "30px", margin: 0 }}>
            Looks you like are lost...!
          </p>
          <p style={{ fontSize: "20px", margin: 0 }}>
            We can't seems to find the page you are looking for
          </p>
          <p style={{ fontSize: "20px", margin: 0 }}>
            This might be a inernal error or this URL might not exist
          </p>
          <p style={{ fontSize: "20px", margin: 0 }}>Check Again or</p>
          <Button
            variant="info"
            onClick={() => navigate(BUILD_RESUME_PAGE_ROUTE)}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
