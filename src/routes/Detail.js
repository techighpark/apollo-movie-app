import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GET_DETAIL = gql`
  query ($id: Int!) {
    movie(id: $id) {
      id
      title
      genres
      rating
      year
      description_full
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: {
      id: parseInt(id),
    },
  });
  return (
    <div>
      <Link to={'/'}> Home </Link>
      <h1>Detail</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>{data?.movie?.title}</h3>
          <img src={data?.movie?.medium_cover_image} />
          <p>{data?.movie?.description_full}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
