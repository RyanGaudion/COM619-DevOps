import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";
import {unstable_getServerSession} from "next-auth"
import {authOptions} from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const {
    query: {id},
    method,
  } = req;

  const session = await unstable_getServerSession(req, res, authOptions);

  if(!session){
    return res.status(401).json({success: false, message: "unauthorised"})
  }

  await dbConnect();
  switch (method) {
    case "PUT":
      try {
        const room = await Room.findByIdAndUpdate(id, req.body);
        if (!room) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: room});
      } catch (e) {
        res.status(400).json({success: false});
      }
      break;

    case "DELETE":
      try {
        const room = await Room.findByIdAndDelete(id);
        if (!room) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: room});
      } catch (e) {
        res.status(400).json({success: false});
      }
      break;

    default:
      res.status(400).json({success: false});
      break;
  }
}
