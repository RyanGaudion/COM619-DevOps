import BreadCrumb from "../components/BreadCrumb";
import RoomForm from "../components/RoomForm";
import Alert from "../components/Alert";
import { useMutation } from "react-query";
import axios from "axios";
import { RoomValues } from "../components/RoomForm";

export default function Create() {

  const {isLoading, isSuccess, isError, mutate} = useMutation(
    (room: RoomValues) => {
      return axios.post("/api/rooms", room)
    }
  )


  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <h3 className="text-lg text-center mb-2"> Add A Room</h3>
        <RoomForm isLoading={isLoading} onSubmit={(r) => mutate(r)} />
        {isError && (
          <Alert variant="warning" label="There was an error creating the room"/>
        )}
        {isSuccess && (
          <Alert variant="success" label="Room Created"/>
        )}
      </div>
    </div>
  );
}
