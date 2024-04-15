import "./AlbumImage.css";

const AlbumImage = ({ url }) => {
  return (
    <div className="AlbumImage flex">
      <img src={url} alt="Album Art" className="AlbumImage-Art" />
      <div className="AlbumImage-Shadow">
        <img src={url} alt="Shadow" className="AlbumImage-Shadow" />
      </div>
    </div>
  );
};

export default AlbumImage;
