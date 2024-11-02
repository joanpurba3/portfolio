import { TypeAnimation } from 'react-type-animation';
export default function About() {
  return (
    <>
      <div className="w-full flex items-center flex-col lg:flex-row lg:justify-around xl:justify-evenly gap-3">
        <div
          className="w-[93%] lg:w-[44%] lg:order-2 max-w-[300px] h-[300px] lg:max-w-[400px] lg:h-[500px]  bg-cover "
          style={{ backgroundImage: 'url(image/bg.png)' }}>
          <img className="w-full h-full" src="image/joan.png" alt="" />
        </div>
        <div className="w-[93%] max-w-[600px] lg:w-[44%] kanit lg:order-1">
          <div>
            <h1 className="text-[18px] lg:text-[22px] ">
              HI,I'M JOAN CAROLUS AMOLA PURBA
            </h1>
          </div>
          <div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I Am Frontend Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'I Am Backend Developer',
                1000,
                'I Am Fullstack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className=" text-[30px] lg:text-[38px] font-bold"
              repeat={Infinity}
            />
          </div>
          <div>
            <p className="lg:text-[18px]">
              I am a student of D3 Informatics Management study program at Medan
              State Polytechnic.I have an interest in website development in
              both frontend and backend development. Have the ability to use
              programming languages ​​such as PHP and Javascript and be able to
              use PHP frameworks such as Codeigniter 4 and laravel and use
              frameworks Css such as Bootstrap and tailwind.
            </p>
          </div>
          <div className="mt-7">
            <a
              href=""
              className="border text-[13px] lg:text-[16px] border-gray-500 rounded-md py-2 px-5">
              VIEW MY PROJECT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
