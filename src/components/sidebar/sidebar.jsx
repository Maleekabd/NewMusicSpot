import SidebarButton from "./SidebarButton.jsx";
import "./sidebar.css";
import { MdFavorite } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { BiLibrary } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { useEffect, useState } from "react";
import ApiClient from "../../spotify.js";

const Sidebar = () => {
  const [image, setImage] = useState(
    "https://th.bing.com/th/id/OIP.te5-Jfhddh7mhV1AjTz-7AHaEo?rs=1&pid=ImgDetMain"
  );
  useEffect(() => {
    ApiClient.get("me").then((response) =>
      setImage(response.data.images[0].url)
    );
  });

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="img" />
      <div>
        <SidebarButton title="feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton
          title="Player"
          to="/player"
          icon={<TbPlayerPlayFilled />}
        />
        <SidebarButton
          title="Trending"
          to="/trending"
          icon={<IoIosTrendingUp />}
        />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<BiLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="/signout" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
