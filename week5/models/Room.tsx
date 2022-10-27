import {model, Model, models, Schema, Types} from "mongoose";

interface TypeInterface {
  code: string;
  name: string;
}

export interface RoomInterface {
  _id?: string;
  photos?: Types.Array<string>;
  number: string;
  building: string;
  capacity: number;
  notes?: string;
  type: TypeInterface;
}

const roomSchema = new Schema<RoomInterface, Model<RoomInterface>>({
  photos: {type: [String]},
  building: {type: String, required: true},
  number: {type: String, required: true},
  capacity: {type: Number, required: true},
  notes: {type: String},
  type: {
    code: {type: String, required: true},
    name: {type: String, required: true},
  },
});

export default (models.Room as Model<RoomInterface>) ||
  model<RoomInterface>("Room", roomSchema);
