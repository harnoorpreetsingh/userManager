
const Loader = () => {
  return (
    <div className="border border-gray-800 bg-gray-900 text-green-500 font-mono text-base p-6 w-48 mx-auto my-24 shadow-lg rounded relative overflow-hidden box-border">
      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t px-2 box-border">
        <div className="float-left text-gray-300">Status</div>
        <div className="float-right">
          <div className="inline-block w-2.5 h-2.5 ml-2 rounded-full bg-red-500"></div>
          <div className="inline-block w-2.5 h-2.5 ml-2 rounded-full bg-yellow-500"></div>
          <div className="inline-block w-2.5 h-2.5 ml-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="inline-block whitespace-nowrap overflow-hidden border-r-2 border-green-500 mt-6 animate-typeAndDelete">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
