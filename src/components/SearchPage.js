import React from "react";
import "../styles/SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="//yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="The School of Life"
        verified
        subs="6.26M subscribers"
        noOfVideos={781}
        description="The School of Life is a collective of psychologists, philosophers and writers devoted to helping people lead calmer and more ..."
      />
      <hr />
      <VideoRow
        title="5 Reasons the Modern World Is so Ugly"
        views="828K views"
        timestamp="6 months ago"
        image="https://i.ytimg.com/vi/qgNxLiuwFDY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCmG0WjhjZ343lDRgpDIroOFQnEuw"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="How to Panic a Little Less"
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/R7YmA_-8zZo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLASBTPk0bot23bs3xNmGnZn4FIpqA"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="I Am NOT My Body!"
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/Y8zLeI0NKx8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCdGvsTv160QgxHf9qYkmsXlNDHFw"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="What If We Never Find True Love..."
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/rUtBj2PY0gQ/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCuc1-8hJLRy9YdW2QV3S3OXn8NQQ"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="How to Tell If You Are an Introvert"
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/Yo42Ebmxg_A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA22MrX2RDSVTmpaVuSNz9AtrSniA"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="How To Simplify Your Life"
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/7lECIsRif10/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDIUXIw4e63t5bmKwubzubaEueXfw"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="The Hard Work of being Lazy"
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/4_k8CFmmIi8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAavuRdVtMVZzS_wo1uNpl_NTRLLA"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
      <VideoRow
        title="Why You Don't Need to Be Exceptional"
        views="828K views"
        timestamp="1 month ago"
        image="https://i.ytimg.com/vi/pvgfucVF5cU/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD8kS3bvbpaG3wn8eXNlY1-ON_FvQ"
        channel="The School of Life"
        channelImage="https://yt3.ggpht.com/a/AATXAJxGXfgHC3VYzQPbIr5iKoO4JFEFK_Lz4DKUQ22q=s176-c-k-c0xffffffff-no-rj-mo"
        subs="6.26M"
        description="We share ideas on how to understand ourselves better, improve our relationships, take stock of our careers and deepen our social connections - as well as find serenity and grow more confident in facing challenges.  We do this through our films, online psychotherapy, online classes and a range of our own books, ebooks and games."
      />
    </div>
  );
}
