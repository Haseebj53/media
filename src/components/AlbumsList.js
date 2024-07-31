import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  //   const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const result = useFetchAlbumsQuery(user);

  console.log(result);
  return <div>Albums For {user.name}</div>;
}

export default AlbumsList;
