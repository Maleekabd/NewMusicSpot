import "./queue.css";

const Queue = ({ tracks, setCurrentIndex }) => {
  return (
    <div className="Queue-Container flex">
      <div className="queue flex">
        <p className="up-next">Up Next</p>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <p className="track-name">{track?.track?.name}</p>
              <p>0:30</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
