import { GiHamburgerMenu } from 'react-icons/gi';
export default function Navbar() {
  return (
    <>
      <div className="w-full h-[70px] bg-black flex justify-around items-center">
        <h1 className="text-white text-[30px] teko">My Portfolio</h1>
        <GiHamburgerMenu className="text-white text-[22px] md:hidden" />
        <div className=" hidden md:block">
          <div className=" teko flex items-center text-[22px] text-white gap-9 ">
            <a href="">Home</a>
            <a href="">Skill</a>
            <a href="">Project</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
}
