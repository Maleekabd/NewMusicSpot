import { useEffect, useState } from "react";
import ApiClient from "../../spotify";
import WidgetCard from "./Widgets-card";
import "./Widgets.css";

export const Widgets = ({ artistsId }) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  useEffect(() => {
    if (artistsId) {
      ApiClient.get(`/artists/${artistsId}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((error) => console.log(error));

      ApiClient.get("browse/featured-playlists")
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((error) => console.log(error));

      ApiClient.get("/browse/new-releases")
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((error) => console.log(error));
    }
  }, [artistsId]);
  return (
    <div className="widget-body flex">
      <WidgetCard title={"Similar Artists"} similar={similar} />
      <WidgetCard title={"Made for You"} featured={featured} />
      <WidgetCard title={"New Releases"} newRelease={newRelease} />
    </div>
  );
};
export default Widgets;
