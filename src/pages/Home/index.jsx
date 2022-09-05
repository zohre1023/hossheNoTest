import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Stream from "../../components/Stream";
import { getStreams } from "../../services/teamService";
import { YOU_DONT_HAVE_ANY_DATA } from "../../utilities/home";

const Home = () => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [streams, setStreams] = useState(null);

  /* handle request for get data */
  const onRequest = () => {
    setIsShowLoading(true);
  };

  /* handle success for get data */
  const onSuccess = (data) => {
    console.log(2);
    setStreams(data?.videos);
    setIsShowLoading(false);
  };

  /* handle failed for get data */
  const onFailed = () => {
    setIsShowLoading(false);
    setIsFailed(true);
  };

  /* get streams data */
  useEffect(() => {
    getStreams({ onRequest, onSuccess, onFailed });
  }, []);

  if (isShowLoading) return <Loading />;
  if (isFailed) return <div>{YOU_DONT_HAVE_ANY_DATA}</div>;
  return (
    <div className="home-page">
      <div className="stream-area">
        {streams?.map((item) => (
          <div className="stream-item" key={item.id}>
            <Stream
              src={item.video_files?.[0]?.link}
              height={"100%"}
              width={"100%"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
