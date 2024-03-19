import { GiHealthPotion } from "react-icons/gi";
import { RxLapTimer } from "react-icons/rx";
import { BiDish } from "react-icons/bi";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  const { title, healthScore, id, image, readyInMinutes, servings } = recipe;
  return (
    <Link className="shadow-3xl mb-8 sm:mb-0 relative overflow-hidden rounded-tr-2xl rounded-tl-2xl">
      <div className="rounded-tr-2xl rounded-tl-2xl">
        <img
          src={image}
          alt="recipe img"
          className="max-w-full max-h-full object-cover transition-transform duration-500 transform hover:scale-105"
        />
      </div>
      <div className="py-2 px-2 sm:py-4 sm:px-4 sm:h-[165px]">
        <h1 className="text-lg sm:text-xl font-charmonman font-bold mb-3">
          {title}
        </h1>
        <div className="flex justify-between items-center pb-3 sm:pb-24">
          <div className="flex items-center space-x-2">
            <GiHealthPotion className="text-xl sm:text-2xl text-stone-400" />
            <p className="text-stone-400">{healthScore}hs</p>
          </div>
          <div className="flex items-center space-x-2">
            <RxLapTimer className="text-stone-400" />
            <p className="text-stone-400">{readyInMinutes}mins</p>
          </div>
          <div className="flex items-center space-x-2">
            <BiDish className="text-stone-400" />
            <p className="text-stone-400">{servings}servings</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Recipe;
