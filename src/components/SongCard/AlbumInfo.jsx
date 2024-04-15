import "./AlbumInfo.css";

const AlbumInfo = ({ album }) => {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element?.name);
  });
  return (
    <div className="AlbumInfo-Card">
      <div className="AlbumName-Container">
        <div className="marquee">
          <p>{album?.name + " - " + artists?.join(", ")}</p>
        </div>
        <div className="AlbumInfo">
          <p>{`${album?.name} is an ${album?.album_type} with ${album?.total_tracks} track(s)`}</p>
        </div>
        <div className="Album-Release">
          <p>Release Date : {album?.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
