import { CloudUploadIcon } from "@heroicons/react/outline";

export default function RoomForm() {
  return (
    <>
      <div className="flex flex-col align-middle  space-y-2">
        <h3 className="text-lg text-center mb-2"> Add A Room</h3>
        <a className="gray-outline-button">
          <CloudUploadIcon className="h-5 w-5" /> Add Room Photos
        </a>
        <label className="font-semibold"> Building</label>
        <select className="border-2 rounded-md p-2 text-gray-400">
          <option> Building </option>
        </select>

        <label className="font-semibold"> Room Number</label>
        <input
          className="border-2 rounded-md p-2"
          type="text"
          placeholder="Room Number"
        />
        <label className="font-semibold"> Capacity </label>
        <input
          className="border-2 rounded-md p-2"
          type="number"
          placeholder="Capacity"
        />
      </div>
      <div className="flex justify-center w-full mt-3">
        <div>
          <button className="blue-button_no-icon ">Add Room</button>
        </div>
      </div>
    </>
  );
}
