import toast from "react-hot-toast";

function Error({ error }) {
  return (
    <div className="py-2 px-3 bg-grey text-lg font-bold font-serif flex justify-center items-center w-full">
      {toast.error(error)}
      💥💥{error}
    </div>
  );
}

export default Error;
