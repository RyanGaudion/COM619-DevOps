import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";

export default async function handler(req, res){
    const { query: {id}, method} = req
    
    await dbConnect();

    switch(method){
        case "PUT":
            try{
                const room = await Room.findByIdAndUpdate(id, req.body);

                if(!room){
                    return res.status(400).json({success: false})
                }

                return res.status(200).json({success: true, data: room})
            }catch(error){
                return res.status(400).json({success: false})
            }
            break
        case "DELETE":
            try{
                const room = await Room.findByIdAndDelete(id);

                if(!room){
                    return res.status(400).json({success: false})
                }

                return res.status(200).json({success: true, data: room})
            }catch(error){
                return res.status(400).json({success: false})
            }
            break
        default:
            res.status(400).json({success: false})
    }
}