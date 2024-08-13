import GuestLayout from "src/layout/GuestLayout";

export const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-[96vh]">
        <div className="flex flex-col bg-blue-500 items-center px-4 my-20 lg:my-10 h-full">
          <div className="flex bg-blue-500 justify-center my-3 lg:my-3">
            <img className="block w-auto h-12 text-center" />
          </div>
          <h1 className="mb-5 text-center text-8 font-heavy text-large text-primary">
            Are you lost?
          </h1>
          <p className="text-center mb-9 max-w-196 text-slate">
            This page does not exist.
          </p>
        </div>
      </div>
    </>
  );
};
NotFoundPage.getLayout = function getLayout(page: any) {
  return <GuestLayout>{page}</GuestLayout>;
};
export default NotFoundPage;
