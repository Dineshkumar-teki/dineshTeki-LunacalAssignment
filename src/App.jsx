import { GalleryCard, ProfileCard } from "./components";

const App = () => {
  return (
    <section className="bg-black min-h-[100vh] py-10 flex justify-center items-center">
      <div className="w-[90%] min-h-[800px] rounded-[28px] bg-[#191B1F] shadow-3xl py-[60px] px-[29px] flex justify-between flex-wrap-reverse">
        <div className="bg-[#616161] border-[#96BEE7] border-[1px] rounded-[27px] lg:w-[48%] max-lg:w-[100%] max-lg:mt-5 min-h-[400px] text-white"></div>
        <div className="lg:w-[48%] max-lg:w-[100%]  flex flex-col items-center justify-between gap-5">
          <ProfileCard />
          <hr className="rounded-sm w-[80%] border-2 border-[#282828] shadow-4xl" />
          <GalleryCard />
          <hr className="rounded-sm w-[80%] border-2 border-[#282828] shadow-4xl" />
        </div>
      </div>
    </section>
  );
};

export default App;
