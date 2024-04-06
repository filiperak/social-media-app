import "./ErrorStyle.css";
import { ReactComponent as Refresh} from '../../assets/Refresh.svg'
import { useNavigate } from "react-router-dom";

const Error = ({ error }) => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(0); 
  };
  return (
    <div className="error-wrapper">
      <p>Something went wrong. Please try again</p>
      <p>{error ? error.data : null}</p>
      <div className="refresh-icon" onClick={refreshPage}>
        <Refresh />
      </div>
    </div>
  );
};

export default Error;