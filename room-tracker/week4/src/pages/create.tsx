import BreadCrumb from "../components/BreadCrumb";
import RoomForm from "../components/RoomForm";

export default function Create() {
  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <h3 className="text-lg text-center mb-2"> Add A Room</h3>
        <RoomForm onSubmit={() => console.log("submitted")} />
      </div>
    </div>
  );
}
