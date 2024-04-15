import { useLocation } from "react-router-dom";
import "./player.css";
import { useEffect, useState } from "react";
import ApiClient from "../spotify";
import SongCard from "../components/SongCard/songcard.jsx";
import Queue from "../components/Queue/Queue";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer.jsx";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state && location.state.id) {
      ApiClient.get("playlists/" + location.state?.id + "/tracks").then(
        (response) => {
          setTracks(response?.data?.items);
          setCurrentTrack(response?.data?.items[0]?.track);
        }
      );
    }
  }, [location.state]);

  useEffect(() => {
    if (tracks === undefined) {
      <div>loading...</div>;
    } else {
      setCurrentTrack(tracks[currentIndex]?.track);
    }
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          currentTrack={currentTrack}
        />
      </div>
      <div className="right-player-body">
        {currentTrack !== undefined ? (
          <>
            <SongCard album={currentTrack?.album} />
            <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
          </>
        ) : (
          <>
            <p>loading...</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Player;
