import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

const LIKE_MOVIE = gql`
  mutation ($id: Int!) {
    toggleLikeMovie(id: $id) @client
  }
`;

const Movie = ({ id, title, bg, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h3>{title}</h3>
        <img src={bg} />
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? 'Unlike' : 'Like'}</button>
    </div>
  );
};

export default Movie;
