import { IoPlay, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import "./Controls.css";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";

const Controls = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
  const handleSuffle = () => {};

  const handleRepeat = () => {};

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="controls-wrapper flex">
        <div className="action-button" onClick={handlePrev}>
          <IoPlaySkipBack />
        </div>
        <div
          className={
            isPlaying ? "play-pause-button active" : "play-pause-button"
          }
          onClick={handlePlayPause}
        >
          {isPlaying ? <FaPause /> : <IoPlay />}
        </div>
        <div className="action-button" onClick={handleNext}>
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
