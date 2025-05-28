
import { useNavigate } from 'react-router-dom';
const Navbar = ({ showButton = false }) => {
  const navbarClass = showButton
    ? 'bg-black bg-opacity-60'
    : 'bg-white text-black';
const navigate = useNavigate();
  return (
    <div className={`${navbarClass} w-full h-[75px] fixed top-0 z-50 flex items-center justify-between px-6`}>
      <img
        src="logo.jpg"
        className="w-[48.79px] h-[45.46px] rounded-[5px]"
        alt="Logo"
      />
      <div className={`flex items-center gap-8 text-sm ${showButton ? 'text-white' : 'text-black'}`}>
        <p className="cursor-pointer hover:underline">About Us</p>
        <p className="cursor-pointer hover:underline">Waitlist</p>
        <p className="cursor-pointer hover:underline">Cart</p>
        {showButton && (
          <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200"  onClick={()=>navigate("/final")}>
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
