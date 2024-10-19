"use client";
import { useSearchParams } from "next/navigation";
import flowerAni from "./flowerAni.json";
import Lottie from "lottie-react";
import { decodeString, encodeString } from "@/utils";

export default function Page() {
  const searchParams = useSearchParams();

  const search = searchParams?.get("d") ?? "";
  const decodedMessage = decodeString(search);

  return (
    <div>
      <div className="text-2xl font-medium text-center mt-5 mb-14">
        {decodedMessage}
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Lottie
          animationData={flowerAni}
          className="w-2/5 flex justify-center items-center"
          loop={true}
        />
      </div>
    </div>
  );
}
