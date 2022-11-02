import Room from "../../../../models/Room";
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(req, res){
    const {method} = req;

    await dbConnect();

    switch(method){
        case "POST":
            try{
                const room = await Room.create(req.body);
                res.status(201).json({success: true, data: room})
            }
            catch(error){
                res.status(400).json({success: false, data: error})
            }
        break;

        default:
            res.status(400).json({success: false})
    }
}