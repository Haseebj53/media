import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumbsList from "./AlbumsList";
function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleRemoveUser = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleRemoveUser}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user...</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumbsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
