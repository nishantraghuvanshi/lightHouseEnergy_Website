// components/StatsComponent.js
import Image from "next/image";

const StatsComponent = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 ">
      <div className="flex flex-col w-full md:w-2/3 space-y-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 bg-gray-400 p-4 rounded shadow h-48">
            <h3 className="text-xl font-semibold">Section 1</h3>
            <p>Details for section 1</p>
          </div>
          <div className="flex-1 bg-gray-400 p-4 rounded shadow h-48">
            <h3 className="text-xl font-semibold">Section 2</h3>
            <p>Details for section 2</p>
          </div>
        </div>
        <div className="flex flex-col bg-blue-400 p-4 rounded shadow h-64">
          <h3 className="text-2xl font-semibold">29%</h3>
          <p>Details for the large stat</p>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 mt-4 md:mt-0 md:ml-4 bg-gray-100 p-4 rounded shadow ">
        <Image
          src="/windfarmone.jpg"
          alt="Stats or Graph"
          width={900}
          height={600}
        />
      </div>
    </div>
  );
};

export default StatsComponent;
