import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "joseph-ui-kit";
import { Trailer } from "../Youtube/Youtube";
import SkeletonDetail from "../SkeletonDetail/SkeletonDetail";
import ScoreGraph from "../ScoreGraph/ScoreGraph";
import * as Styled from "./Detail.styles";

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
    <Styled.Container>
      {detail.poster_path === null ? (
        <Styled.NullImage />
      ) : (
        <Styled.MovieImage
          alt="movie poster image"
          src={`https://image.tmdb.org/t/p/w200/${detail?.poster_path}`}
          referrerPolicy="no-referrer"
        />
      )}
      <Styled.Description>
        <Styled.Title>
          {detail.original_title +
            (detail.release_date
              ? ` (${detail.release_date.slice(0, 4)})`
              : "")}
        </Styled.Title>
        <Styled.InfoBox>
          <ScoreGraph vote_average={detail?.vote_average} />
          {videoId ? (
            <Button
              kind="ghost"
              name="예고편 재생"
              padding="5px"
              onClick={openModal}
            />
          ) : null}
        </Styled.InfoBox>
        <Styled.GenreContainer>
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
        </Styled.GenreContainer>
        <Styled.Tagline>
          <em>{detail.tagline}</em>
        </Styled.Tagline>
        <Styled.Overview>{detail.overview ? "개요" : null}</Styled.Overview>
        <Styled.Paragraph>{detail.overview}</Styled.Paragraph>
      </Styled.Description>

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
    </Styled.Container>
  );
};

export default Detail;
