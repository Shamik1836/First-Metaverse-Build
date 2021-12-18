import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 m-10 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        {/* Styles are applied on the mobile first then on the large screns this is called mobile first approach */}
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            className="rounded-full object-cover"
            layout="fill"
          />
        </div>

        <div className="text-left lg:text-center col-span-4">
          {/* For larger screens center the avatar */}
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            {/* Avatar */}
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          <h1 className="text-3xl">Welcome to OUR METAVERSE</h1>
          {/* username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          {/* Change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
