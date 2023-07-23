import React, { Fragment } from "react";
import ReactPlayer from "react-player";

const Footer = () => {
  const playerConfig = {
    youtube: {
      playerVars: {
        showinfo: "1",
        enablejsapi: "1",
        autoplay: "1",
        iv_load_policy: "3",
      },
    },
  };
  return (
    <Fragment>
      <br />
      <br />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=nTAYmMKSIaw"
        height={200}
        width={"auto"}
        config={playerConfig}
      />
      <p>Bacardi trinke ich nicht in der Woche und sonst auch nur selten! :)</p>
    </Fragment>
  );
};

export default Footer;
