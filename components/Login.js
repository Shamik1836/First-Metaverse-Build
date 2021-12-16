import Image from "next/image";
import { useMoralis } from "react-moralis";
const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <h1>I am Login Component</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Logo */}
        <Image
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
          className="object-cover rounded-full"
        />
        {/* Login Button */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        {/* Login form */}
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
