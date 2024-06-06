import { useState } from "react";

const Card = ({ image, title, description, tag, year }) => {

  const[isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    
    <>
      <div className="shadow-md rounded-md w-72 h-[480px] p-4 bg-zinc-800/20 hover:bg-zinc-800/40 border border-neutral-800 backdrop-blur-2xl cursor-pointer group">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-80 object-cover group-hover:scale-105 duration-500 rounded-2xl " />
          {tag && (
            <div className="absolute top-2 left-2  px-2 py-1 rounded-md text-[10px] bg-lime-400 text-zinc-800  font-semibold shadow-2xl shadow-black  ">
              {tag}
            </div>
          )}

          <div className="absolute top-2 right-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`duration-300 size-6 ${isLiked ? 'fill-red-500' : 'fill-gray-100'}`}
              onClick={handleLike}
>
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>

        </div>
        <div className="pt-2">
          <h3 className="text-xl font-bold truncate text-lime-400 lalezar-regular ">{title}</h3>
          <p className="text-gray-600 text-sm font-semibold">{description}</p>

          <div className="bg-lime-300 w-fit mt-4 px-4 py-1 rounded-md text-black text-xs font-extrabold ">
            {year}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;