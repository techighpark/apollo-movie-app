import { useQuery, gql } from '@apollo/client';
import Movie from '../components/Movie';

const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      medium_cover_image
      isLiked @client
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>Movie List</h1>
        <h4>built with Apollo</h4>
        <div>
          {data?.movies?.map((m) => (
            <div key={m.id}>
              <Movie
                id={m.id}
                title={m.title}
                bg={m.medium_cover_image}
                isLiked={m.isLiked}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
