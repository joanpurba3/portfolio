export default function Skill() {
  return (
    <>
      <div className="w-full mt-9 text-center flex flex-col items-center">
        <h1 className="teko  text-[35px] lg:text-[45px] xl:text-[55px]">
          What i do
        </h1>
        <p className="kanit w-[90%] lg:max-w-[1000px] lg:text-[20px]">
          I am from Indonesia and currently living in Batam,i am currently
          studying for a diploma 3 in Informatics Management and i will graduate
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6  gap-4 text-center w-[95%] xl:w-[85%] xl:max-w-[1270px] place-items-center ">
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/1.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-blue-400 rounded-full px-5 py-2 inline-block">
                  Tailwind
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/html.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-orange-500 rounded-full px-5 py-2 inline-block">
                  Html
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/css.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-blue-500 rounded-full px-5 py-2 inline-block">
                  Css
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/js1.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-yellow-500 rounded-full px-5 py-2 inline-block">
                  Javascript
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/php.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-slate-500 rounded-full px-5 py-2 inline-block">
                  Php
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/sql.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-blue-600 rounded-full px-5 py-2 inline-block">
                  MySQL
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/cod.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-orange-600 rounded-full px-5 py-2 inline-block">
                  Codeigniter
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/git.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-orange-700 rounded-full px-5 py-2 inline-block">
                  Git
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white max-w-[150px] max-h-[150px] h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group  shadow-2xl  ">
            <img src="image/bot.png" alt="" />
            <div className="absolute p-5 backdrop-blur-xl w-full h-full  hidden lg:block items-center opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
              <div className="text-center w-full text-white">
                <div className=" bg-violet-600 rounded-full px-5 py-2 inline-block">
                  Bootstrap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
