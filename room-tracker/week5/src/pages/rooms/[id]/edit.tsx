import axios from "axios";
import {GetServerSideProps} from "next";
import {useMutation} from "react-query";
import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";
import Alert from "../../../components/Alert";
import BreadCrumb from "../../../components/BreadCrumb";
import RoomForm, {
  DatabaseRoomValues,
  RoomValues,
} from "../../../components/RoomForm";
import {useSession} from "next-auth/react"



export default function Edit({room}: {room: DatabaseRoomValues}) {
  const {isLoading, isSuccess, isError, mutate} = useMutation(
    (updatedRoom: RoomValues) => {
      console.log("updating room");
      return axios.put(`/api/rooms/${room._id}`, updatedRoom);
    }
  );

  const {building, number} = room;

  const {data:session} = useSession()

  if (!session){
    return (
    <div className="flex justify-center items-center h-[100vh">
      <h1>Unauthorised</h1>
    </div>)
  }

  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <h3 className="text-lg text-center mb-2"> Edit {building + number} </h3>
        <RoomForm
          isLoading={isLoading}
          triggerReset={isSuccess}
          onSubmit={(room) => mutate(room)}
          values={room}
          label="Update Room"
        />
        {isError && (
          <div className="mt-5">
            <Alert
              label="There was a sever error, could update room!"
              variant="warning"
            />
          </div>
        )}
        {isSuccess && (
          <div className="mt-5">
            <Alert label="Room has been updated!" variant="success" />
          </div>
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
