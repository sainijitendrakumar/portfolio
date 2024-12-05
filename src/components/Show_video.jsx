import React from "react";

function Show_video({
  src,
  type = "video/mp4",
  poster = "",
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  width = "100%",
  height = "auto",
  className = "",
}) {
  return (
    <video
      className={className}
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}

export default Show_video;
