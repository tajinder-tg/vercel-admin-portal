import React, { useState, useEffect, useCallback } from "react";
import Image from "src/components/Image/image";
import AllDoneIcon from "src/assets/svg/alldone.svg";
import GuestLayout from "src/layout/GuestLayout";
import { useRouter } from "next/router";

const AllDone = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/feed");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-[100vh] flex flex-col bg-personal-bg bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <Image
          className="flex h-20 w-20 md:h-30 md:w-30 rounded-3"
          src={AllDoneIcon}
          alt="AllDone"
        />
        <h1 className="flex text-center justify-center font-bold text-5-5 md:text-7 text-white leading-natural -tracking-0-6 w-full mt-5">
          All Done !
        </h1>
      </div>
    </div>
  );
};
AllDone.getLayout = function getLayout(page: any) {
  return <GuestLayout>{page}</GuestLayout>;
};
export default AllDone;
