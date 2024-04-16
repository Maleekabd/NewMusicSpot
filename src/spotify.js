import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const ClientId = "77d59e7430bb4208b05874fc6a455fee";

const redirectUri = "https://new-music-spot.vercel.app";

const scopes = ["user-library-read", "playlist-read-private"];

export const LoginEndPoint = `${authEndpoint}client_id=${ClientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const ApiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  ApiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default ApiClient;
