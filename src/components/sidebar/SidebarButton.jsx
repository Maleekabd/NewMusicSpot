import { Link } from "react-router-dom";
import "./SidebarButton.css";
import { IconContext } from "react-icons";
import { useLocation } from "react-router-dom";

const SidebarButton = ({ title, to, icon }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const btnClass = isActive ? 'btn-body active' : "btn-body"
  return (
    <Link to={to}>
      <div className={btnClass}>
        <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
          {icon}
          <p className="btn-title">{title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
