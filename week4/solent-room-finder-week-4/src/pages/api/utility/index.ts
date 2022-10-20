import {NextApiResponse} from "next";
import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";
import {lotsOfRooms} from "../../../mocks/data";

export default async function handler(_, res: NextApiResponse) {
  try {
    await dbConnect();
    const rooms = await Room.find({}).count();

    if (rooms) {
      await Room.deleteMany({});
    }

    const result = await Room.insertMany(lotsOfRooms);
    res.status(201).json({success: true, result: result});
  } catch (e) {
    res.status(400).json({success: false, error: e});
  }
}
