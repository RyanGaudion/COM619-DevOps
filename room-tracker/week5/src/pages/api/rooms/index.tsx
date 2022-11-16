import Room from "../../../../models/Room";
import dbConnect from "../../../../lib/dbConnect";
import {unstable_getServerSession} from "next-auth"
import {authOptions} from "../auth/[...nextauth]"

export default async function handler(req, res) {
  const {method} = req;
  const session = await unstable_getServerSession(req, res, authOptions);

  if(!session){
    return res.status(401).json({success: false, message: "unauthorised"})
  }

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const pet = await Room.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({success: true, data: pet});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    default:
      res.status(400).json({success: false});
      break;
  }
}
