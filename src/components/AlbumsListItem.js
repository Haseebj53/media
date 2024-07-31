import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleDeleteAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <div className="flex flex-row m-2 items-center">
      <Button
        className="m-2"
        onClick={handleDeleteAlbum}
        loading={results.isLoading}>
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of Photos in the album
    </ExpandablePanel>
  );
}
export default AlbumsListItem;
