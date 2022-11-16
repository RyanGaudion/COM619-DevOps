import {CloudUploadIcon, TrashIcon} from "@heroicons/react/outline";
import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {SpinnerCircular} from "spinners-react";
import {buildings, roomTypes} from "../data/";
import { useSession } from "next-auth/react";
import {thumbnail} from "@cloudinary/url-gen/actions/resize"
import {AdvancedImage } from "@cloudinary/react"
import useCloudinary from "../hooks/useCloudinary";
import { useState } from "react";
import { stringify } from "querystring";

export interface RoomFormProps {
  onSubmit: SubmitHandler<RoomValues>;
  isLoading?: boolean;
  triggerReset?: boolean;
  values?: DatabaseRoomValues;
  label?: string;
}

export interface RoomValues {
  number: string;
  photos: string[];
  building: string;
  capacity: number;
  notes?: string;
  type: string | {name: string; code: string};
}

export interface DatabaseRoomValues extends RoomValues {
  _id?: string;
  type: {name: string; code: string};
}

export default function RoomForm(props: RoomFormProps) {
  const {onSubmit, isLoading, triggerReset, values, label} = props;
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<RoomValues>({
    defaultValues: {...values, ...{type: values ? values.type.code : ""}},
  });

  const [thumb, setThumb] = useState(values?.photos[0] ? values?.photos[0] : "")

  const {data: {user}} = useSession();

  useEffect(() => {
    if(triggerReset){
      reset()
      setThumb("")
    }
  }, [triggerReset, reset]);

  const {Cloudinary} = useCloudinary()

  const handleUpload = () => {
    if(!process.env.NEXT_PUBLIC_CLOUDINARY_PRESET || !process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME){
      console.error("Please set ENV vars")
      return false
    }

    console.log(process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER + "/" + user.id + "/")

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const imageWidget = cloudinary.createUploadWidget({
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET, 
      folder: process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER + "/" + user.id + "/",
      sources: ["local", "camera"]},
      (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log("Done! Here is the image info: ", result.info); 
          setThumb(result.info.public_id)
        }//22:20
      }
    )
    
    imageWidget.open()


  }
  return (
    <form
      onSubmit={handleSubmit((data) =>
        onSubmit({
          ...data,
          ...{
            type: {
              name: roomTypes.find((t) => t.code === data.type).name,
              code: data.type as string,
            },
          },
          ...{photos: [thumb]}
        })
      )}
    >
      {thumb && 
      (<>
        <TrashIcon className="w-6 h-6 cursor-pointer ml-5 mb-1" onClick={() => setThumb("")}/>
        <AdvancedImage className="border-4 border-gray-100 rounded-md mb-5 ml-5" 
        cldImg={Cloudinary.image(thumb).resize(thumbnail().width(150).height(150))}/>
      </>)}
      <div className="flex flex-col align-middle  space-y-2">
        <a className="gray-outline-button" onClick={handleUpload}>
          <CloudUploadIcon className="h-5 w-5" /> Add Room Photos
        </a>
        <label className="font-semibold"> Building</label>
        <>
          {buildings.map((b, i) => (
            <div key={i} className="flex space-x-2">
              <input
                disabled={isLoading}
                {...register("building", {required: true})}
                type="radio"
                value={b.code}
                data-test="building-input"
                name="building"
              ></input>
              <label className="text-sm">
                {b.name} ({b.code})
              </label>
            </div>
          ))}
        </>
        <h3 className="font-bold text-red-600">
          {errors.building && (
            <span data-test="building-error"> Building is required</span>
          )}
        </h3>

        <label className="font-semibold"> Room Type</label>
        <>
          {roomTypes.map((b, i) => (
            <div key={i} className="flex space-x-2">
              <input
                disabled={isLoading}
                {...register("type", {required: true})}
                type="radio"
                value={b.code}
                data-test="type-input"
                name="type"
              ></input>
              <label className="text-sm">{b.name}</label>
            </div>
          ))}
        </>

        <h3 className="font-bold text-red-600">
          {errors.type && (
            <span data-test="type-error"> Room type is required</span>
          )}
        </h3>

        <label className="font-semibold"> Room Number</label>
        <input
          disabled={isLoading}
          className="border-2 rounded-md p-2"
          data-test="number-input"
          type="text"
          placeholder="Room Number"
          {...register("number", {required: true})}
        />
        <h3 className="font-bold text-red-600">
          {errors.number && (
            <span data-test="number-error"> Room number is required</span>
          )}
        </h3>
        <label className="font-semibold"> Capacity </label>
        <input
          disabled={isLoading}
          className="border-2 rounded-md p-2"
          type="number"
          placeholder="Capacity"
          data-test="capacity-input"
          {...register("capacity", {required: true, min: 5, max: 100})}
        />
        <h3 className="font-bold text-red-600">
          {errors.capacity?.type === "required" && (
            <span data-test="capacity-error">Capacity is required</span>
          )}

          {(errors.capacity?.type === "min" ||
            errors.capacity?.type === "max") && (
            <span data-test="capacity-error">
              Capacity must be between 5 and 100
            </span>
          )}
        </h3>
      </div>

      <div className="flex justify-center w-full mt-3">
        <div className="flex">
          <button
            disabled={isLoading}
            data-test="submit-button"
            className={`blue-button_no-icon flex ${isLoading && "p-0"}`}
          >
            {isLoading && <SpinnerCircular className="w-6 h-6 mt-1" />}
            {label || "Add Room"}
          </button>
        </div>
      </div>
    </form>
  );
}
