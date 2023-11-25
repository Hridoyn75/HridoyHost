"use client";
import axios from "axios";

const DeleteAll = ({ chatId, folderName }) => {
  const handleDeleteAll = () => {
    const result = confirm(
      "Are you sure you want to delete all photos of this folder?"
    );
    if (result) {
      axios
        .delete(process.env.NEXT_PUBLIC_API_URL + "/delete-all/" + chatId + "/" + folderName)
        .then((res) => {
          alert(res.data);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <button
      className=" text-xl bg-red-700 rounded px-4 py-1"
      onClick={handleDeleteAll}
    >
      Delete All
    </button>
  );
};

export default DeleteAll;
