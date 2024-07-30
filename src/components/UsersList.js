import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";
function UsersList() {
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (error) {
    return <div>Error Fetching Data...</div>;
  }
  // if (data) {
  //   return <div>{data}</div>;
  // }
  return <div>{data.length}</div>;
}

export default UsersList;
