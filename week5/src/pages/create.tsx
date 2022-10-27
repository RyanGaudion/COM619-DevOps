import BreadCrumb from "../components/BreadCrumb";
import RoomForm from "../components/RoomForm";

export default function Create() {
  return (
    <div className="max-w-[80%] mx-auto mt-11">
      <BreadCrumb label={"Add Room"} />
      <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
        <RoomForm />
      </div>
    </div>
  );
}
