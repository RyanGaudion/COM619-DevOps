import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex justify-center items-center  max-h-max flex-col space-y-3 min-h-screen">
      <Image src="/img/404.png" width={827} height={581} alt="404 image" />
      <h1 className="text-3xl"> Page not found</h1>
      <Link href="/">
        <a className="blue-button w-48"> Go Back To Rooms </a>
      </Link>
    </div>
  );
}
