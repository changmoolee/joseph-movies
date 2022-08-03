import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button, Modal, FixedHeadingStyles, BodyStyles } from "joseph-ui-kit";
import { Trailer } from "./Youtube";
import SkeletonDetail from "./SkeletonDetail";
import ScoreGraph from "./ScoreGraph";

interface DetailProps {
  movie_id: number;
}

const Detail = ({ movie_id }: DetailProps) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<any>({});
  const [videoId, setVideoId] = useState<any>("");
  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    const getDetail = axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko&page=1`
    );

    const getYoutubekey = axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    );

    axios
      .all([getDetail, getYoutubekey])
      .then(
        axios.spread((res1, res2) => {
          setDetail(res1.data);
          setVideoId(res2.data.results[0]?.key);
        })
      )
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [movie_id]);

  return loading ? (
    <SkeletonDetail />
  ) : (
    <Container>
      {detail.poster_path === null ? (
        <NullImage />
      ) : (
        <MovieImage
          src={`https://image.tmdb.org/t/p/w200/${detail?.poster_path}`}
          alt="movie poster image"
        />
      )}
      <Description>
        <Title>
          {detail.original_title +
            (detail.release_date
              ? ` (${detail.release_date.slice(0, 4)})`
              : "")}
        </Title>
        <InfoBox>
          <ScoreGraph vote_average={detail?.vote_average} />
          {videoId ? (
            <Button
              kind="ghost"
              name="예고편 재생"
              padding="5px"
              onClick={openModal}
            />
          ) : null}
        </InfoBox>
        <GenreContainer>
          <div>
            {detail.release_date}
            {detail.production_countries.map(
              (country: any) => " (" + country.iso_3166_1 + ") "
            )}
          </div>
          <div>
            {Math.floor(detail.runtime / 60) > 0
              ? Math.floor(detail.runtime / 60) + "시간 "
              : null}
            {(detail.runtime % 60) + "분"}
          </div>
          <div>
            {detail.genres.map(
              (genre: any, index: number) =>
                genre.name + (index !== detail.genres.length - 1 ? ", " : "")
            )}
          </div>
        </GenreContainer>
        <Tagline>
          <em>{detail.tagline}</em>
        </Tagline>
        <Overview>{detail.overview ? "개요" : null}</Overview>
        <Paragraph>{detail.overview}</Paragraph>
      </Description>

      {ModalOpen ? (
        <Modal
          width="50%"
          height="60%"
          label=""
          title="예고편 영상"
          closeModal={closeModal}
          firstButtonDisabled={true}
          secondaryButtonDisabled={true}
        >
          <Trailer videoId={videoId} />
        </Modal>
      ) : null}
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
`;

const NullImage = styled.div`
  min-width: 200px;
  min-height: 300px;
  background-image: url("https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
  background-color: #dbdbdb;
  object-fit: contain;
  cursor: pointer;
  @media screen and (max-width: 320px) {
    width: 120px;
    height: 180px;
  }
`;

const Description = styled.div`
  margin: 20px 0px;

  @media screen and (min-width: 800px) {
    margin: 0;
    margin-left: 50px;
  }
`;

const DefaultStyle = `
  text-align: center;
  margin: 10px;
  @media screen and (min-width: 800px) {
    text-align: left;
  }
`;

const Title = styled.div`
  ${DefaultStyle}
  ${FixedHeadingStyles.external.heading04}
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${DefaultStyle}
  @media screen and (min-width: 800px) {
    justify-content: flex-start;
  }
`;

const GenreContainer = styled.div`
  ${DefaultStyle}
  ${BodyStyles.external.bodyCompact02}
`;

const Tagline = styled.div`
  ${DefaultStyle}
  ${FixedHeadingStyles.external.heading02}
  color: gray;
  font-style: italic;
`;
const Overview = styled.div`
  ${DefaultStyle}
  ${FixedHeadingStyles.external.heading03}
  text-align: left;
`;

const Paragraph = styled.p`
  ${DefaultStyle}
  ${BodyStyles.external.body02}
`;
