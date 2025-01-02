import React, { useState } from "react";

const DimensionForm = ({ onSubmit }) => {
  const [dimensions, setDimensions] = useState({
    height: "",
    bust: "",
    waist: "",
    hips: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDimensions({ ...dimensions, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dimensions);
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    //   <form
    //     onSubmit={handleSubmit}
    //     className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
    //   >
    //     <h3 className="text-2xl font-semibold text-gray-700 text-center">
    //       Enter Your Body Dimensions
    //     </h3>
    //     <div className="space-y-4">
    //       <div>
    //         <label
    //           htmlFor="height"
    //           className="block text-sm font-medium text-gray-600"
    //         >
    //           Height (cm):
    //         </label>
    //         <input
    //           type="number"
    //           name="height"
    //           id="height"
    //           value={dimensions.height}
    //           onChange={handleChange}
    //           className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
    //         />
    //       </div>
    //       <div>
    //         <label
    //           htmlFor="bust"
    //           className="block text-sm font-medium text-gray-600"
    //         >
    //           Bust (cm):
    //         </label>
    //         <input
    //           type="number"
    //           name="bust"
    //           id="bust"
    //           value={dimensions.bust}
    //           onChange={handleChange}
    //           className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
    //         />
    //       </div>
    //       <div>
    //         <label
    //           htmlFor="waist"
    //           className="block text-sm font-medium text-gray-600"
    //         >
    //           Waist (cm):
    //         </label>
    //         <input
    //           type="number"
    //           name="waist"
    //           id="waist"
    //           value={dimensions.waist}
    //           onChange={handleChange}
    //           className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
    //         />
    //       </div>
    //       <div>
    //         <label
    //           htmlFor="hips"
    //           className="block text-sm font-medium text-gray-600"
    //         >
    //           Hips (cm):
    //         </label>
    //         <input
    //           type="number"
    //           name="hips"
    //           id="hips"
    //           value={dimensions.hips}
    //           onChange={handleChange}
    //           className="mt-1 block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:border-blue-500"
    //         />
    //       </div>
    //     </div>
    //     <button
    //       type="submit"
    //       className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <div className="flex justify-center items-center min-h-screen p-6">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 space-y-6"
  >
    <h3 className="text-3xl font-bold text-gray-800 text-center mb-6 tracking-wide">
      Enter Your Body Dimensions
    </h3>
    <div className="space-y-6">
      <div>
        <label
          htmlFor="height"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Height (cm):
        </label>
        <input
          type="number"
          name="height"
          id="height"
          value={dimensions.height}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="bust"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Bust (cm):
        </label>
        <input
          type="number"
          name="bust"
          id="bust"
          value={dimensions.bust}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="waist"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Waist (cm):
        </label>
        <input
          type="number"
          name="waist"
          id="waist"
          value={dimensions.waist}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="hips"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Hips (cm):
        </label>
        <input
          type="number"
          name="hips"
          id="hips"
          value={dimensions.hips}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
    <button
      type="submit"
      className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
    >
      Submit
    </button>
  </form>
</div>

  );
};

export default DimensionForm;
