import React from "react";
import {
  Item,
  Poster,
  Detail,
  ItemCover,
  CoverTitle,
  Title,
  Department,
  VideoItem,
  VideoPoster,
  VideoDetail,
  VideoCreatedAt,
  VideoTitle,
  KnownFor,
} from "./style";
import RatingStart from "Components/RatingStars";
import { IPerson } from "types";

interface IProps {
  person: IPerson;
  index: number;
}

const PersonItem: React.FunctionComponent<IProps> = ({ person, index }) => {
  return (
    <Item key={index} index={index} to={`/person/${person.id}`}>
      <ItemCover>
        <CoverTitle>{person.name}</CoverTitle>
      </ItemCover>
      <Poster
        bgUrl={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w342${person.profile_path}`
            : require("assets/no-image.jpg").default
        }
      />
      <Detail>
        <Title>{person.name}</Title>
        <Department>{person.known_for_department}</Department>
        <KnownFor>Known For</KnownFor>
        {person.known_for.map((video, index) => (
          <VideoItem key={index}>
            <VideoPoster
              src={
                video.poster_path
                  ? `https://image.tmdb.org/t/p/w92${video.poster_path}`
                  : require("assets/no-image.jpg").default
              }
            />
            <VideoDetail>
              <VideoTitle>
                {video.media_type === "movie" ? video.title : video.name}
              </VideoTitle>
              <VideoCreatedAt>
                {video.media_type === "movie"
                  ? `Movie • ${video.release_date}`
                  : `TV • ${video.first_air_date}`}
              </VideoCreatedAt>
              <RatingStart rate={video.vote_average} />
            </VideoDetail>
          </VideoItem>
        ))}
      </Detail>
    </Item>
  );
};

export default PersonItem;
