import {PlusIcon} from "@heroicons/react/outline";
import {GetServerSideProps} from "next";
import Head from "next/head";
import Link from "next/link";
import {useState} from "react";
import dbConnect from "../../lib/dbConnect";
import Room from "../../models/Room";
import Filter from "../components/Filter";

export default function Home({rooms}) {
  const [capacity, setCapacity] = useState(1);
  const [buildings, setBuildings] = useState([]);
  const [types, setTypes] = useState([]);

  const handleSlide = (n) => setCapacity(n);
  const handleReset = () => setCapacity(1);

  return (
    <div className="flex">
      <Head>
        <title>Solent Room Tracker</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filter capacity={capacity} onSlide={handleSlide} 
        onReset={handleReset} 
        onBuildingChange={(b) => setBuildings(b)} 
        onTypeChange={(t) => setTypes(t)}/>

      <div className="min-w-full pr-20">
        <div className="max-w-[80%] mx-auto mt-11">
          <div>
            <Link href="/create">
              <a
                className="blue-button"
                data-cy="add-room-button"
                data-test="add-room-button"
              >
                <PlusIcon className="h-5 w-5" /> Add Room
              </a>
            </Link>
          </div>
          <div className="bg-white mx-auto mt-11 p-5 rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-xs border-b-2 font-semibold text-gray-700 border-gray-200 bg-gray-100 rounded-tl-lg">
                  <th className="p-3 rounded-tl-lg">Room Number</th>
                  <th>Building </th>
                  <th>Student Capacity</th>
                  <th className="rounded-tr-lg">Type</th>
                </tr>
              </thead>
              <tbody>
                {rooms
                  .filter((r) => r.capacity >= capacity)
                  .filter((r) => {
                    if(buildings.length == 0){return true}
                    return buildings.find((b) => b === r.building)
                  })
                  .filter((r) => {
                    if(types.length == 0){return true}
                    return types.find((t) => t === r.type.code)
                  })
                  .map((r, i) => (
                    <tr
                      data-test="room-item"
                      key={r._id}
                      className={(i + 1) % 2 === 0 ? "bg-gray-100" : ""}
                    >
                      <td className="p-2 text-blue rounded-l-lg">
                        <Link href={`/rooms/${r._id}`}>
                          <a className="cursor-pointer font-semibold">
                            {r.building}
                            {r.number}
                          </a>
                        </Link>
                      </td>
                      <td> {r.building}</td>
                      <td> {r.capacity}</td>
                      <td className="rounded-r-lg"> {r.type.name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* <div className="mt-6 flex justify-between">
              <h3 className="text-sm mt-5">
                Showing <b>1</b> to <b>10</b> of <b>97</b> Results
              </h3>
              <div className="flex border-t-2 border-b-2 border-l-2 rounded-md">
                <div className="border-r-2 p-3">
                  <ChevronLeftIcon className="h-5 w-5" />
                </div>
                <div className="border-r-2 p-3">1</div>
                <div className="border-r-2 p-3">2</div>
                <div className="border-r-2 p-3">3</div>
                <div className="border-r-2 p-3">...</div>
                <div className="border-r-2 p-3">8</div>
                <div className="border-r-2 p-3">9</div>
                <div className="border-r-2 p-3">10</div>
                <div className="border-r-2 p-3">
                  <ChevronRightIcon className="h-5 w-5" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect();
  const results = await Room.find({}).lean();
  const rooms = results.map((doc) => ({
    ...doc,
    ...{_id: doc._id.toString()},
  }));

  return {props: {rooms: rooms}};
};
