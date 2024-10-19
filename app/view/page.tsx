"use client";
import { useSearchParams } from "next/navigation";
import flowerAni from "./flowerAni.json";
import { decodeString } from "@/utils";
import dynamic from "next/dynamic";

const Lottie = dynamic(
  () => {
    return import("lottie-react");
  },
  { ssr: false }
);

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams?.get("d") ?? "";
  const decodedMessage = decodeString(search);

  return (
    <div>
      <div className="text-2xl font-medium text-center mt-5 mb-14 mr-10 ml-10">
        {decodedMessage}
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Lottie
          animationData={flowerAni}
          className="max-w-xl flex justify-center items-center"
          loop={true}
        />
      </div>
    </div>
  );
}
