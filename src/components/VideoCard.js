import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/VideoCard.css";

export default function VideoCard({
  title,
  image,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videoCard">
      <img src={image} alt={title} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
