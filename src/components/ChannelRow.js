import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/ChannelRow.css";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

export default function ChannelRow({
  image,
  channel,
  verified,
  noOfVideos,
  subs,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
