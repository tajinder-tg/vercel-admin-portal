import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "src/components/Image/image";
import image from "src/assets/donatuz-logo-white.png";
import GuestLayout from "src/layout/GuestLayout";
import { ROUTES } from "src/utils/routes";
export const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(ROUTES.LOGIN);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="h-[100vh] flex justify-center flex-col md:flex-row bg-personal-bg bg-cover ">
      <div className="md:flex justify-center hidden items-center mr-6">
        <Image className="flex h-20 w-70 rounded-3" src={image} alt="Welcome" />
      </div>
    </div>
  );
};
Home.getLayout = function getLayout(page: any) {
  return <GuestLayout>{page}</GuestLayout>;
};
export default Home;
