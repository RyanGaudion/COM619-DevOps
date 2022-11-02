import BreadCrumb from "../../../components/BreadCrumb";
import Alert from "../../../components/Alert";
import { useMutation } from "react-query";
import axios from "axios";
import { GetServerSideProps } from "next";
import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";
import RoomForm, { RoomValues, DatabaseRoomValues } from "../../../components/RoomForm";


export default function Create({room} : {room: DatabaseRoomValues}) {

  const {number, building, _id} = room

  const {isLoading, isSuccess, isError, mutate} = useMutation(
    (r: RoomValues) => {
      return axios.put(`/api/rooms/${_id}`, r)
    }
  )


  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <h3 className="text-lg text-center mb-2"> Edit {building + number}</h3>
        <RoomForm isLoading={isLoading} onSubmit={(r) => mutate(r)} values={room} label="Edit Room"/>
        {isError && (
          <Alert variant="warning" label="There was an error updating the room"/>
        )}
        {isSuccess && (
          <Alert variant="success" label="Room Edited"/>
        )}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  await dbConnect();
  const room = await Room.findById(params.id).lean();
  return {props: {room: {...room, _id: room._id.toString()}}};
};

