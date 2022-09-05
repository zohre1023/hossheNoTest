import axios from "axios";

export async function getStreams({ onRequest, onSuccess, onFailed }) {
  onRequest && onRequest();

  axios.defaults.headers.common["Authorization"] =
    "563492ad6f917000010000016315a2faa0ea478ead94eddb732192e9";
  let response = await axios.get(
    "https://api.pexels.com/videos/popular?per_page=64"
  );

  if (response.status === 200) {
    onSuccess(response?.data);
  } else {
    onFailed && onFailed();
    console.log("response", response);
  }
}
