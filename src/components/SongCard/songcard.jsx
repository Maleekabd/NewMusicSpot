import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import "./songcard.css";

const SongCard = ({ album }) => {
  return (
    <div className="songcard-body flex">
      <AlbumImage url={album?.images[0].url} />
      <AlbumInfo album={album} />
    </div>
  );
};

export default SongCard;
