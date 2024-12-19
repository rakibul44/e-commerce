import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const sizes = ["S - 38.5", "M - 39", "L - 40", "XL - 41.5", "XXL - 42", "3XL - 43"];
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState([]);
  const [colorInput, setColorInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({
      ...data,
      colors,
      images,
    });
    // Add your submission logic here
  };

  const handleImageUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setImages([...images, ...uploadedFiles]);
  };

  const handleImageDelete = (index) => {
    setImages(images.filter((_, idx) => idx !== index));
  };

  const handleAddColor = () => {
    if (colorInput.trim() && !colors.includes(colorInput)) {
      setColors([...colors, colorInput]);
      setColorInput("");
    }
  };

  const handleDeleteColor = (color) => {
    setColors(colors.filter((c) => c !== color));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:p-8 flex flex-col lg:flex-row gap-6">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Add Product</h2>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block font-medium text-sm">Product name *</label>
          <input
            type="text"
            placeholder="Enter product name"
            {...register("productName", { required: "Product name is required", maxLength: 20 })}
            className="w-full border p-2 rounded-md"
          />
          {errors.productName && <p className="text-red-500 text-sm">{errors.productName.message}</p>}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block font-medium text-sm">Category *</label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Choose category</option>
            <option>Winter Jacket</option>
            <option>Denim Jacket</option>
            <option>Denim Jeans</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Brand */}
        <div className="mb-4">
          <label className="block font-medium text-sm">Brand *</label>
          <select
            {...register("brand", { required: "Brand is required" })}
            className="w-full border p-2 rounded-md"
          >
            <option value="">Choose brand</option>
            <option>The North Face</option>
            <option>Gant</option>
          </select>
          {errors.brand && <p className="text-red-500 text-sm">{errors.brand.message}</p>}
        </div>

        {/* Regular Price, Discount Price, Stock */}
        {["regularPrice", "discountPrice", "stock"].map((field, idx) => (
          <div key={idx} className="mb-4">
            <label className="block font-medium text-sm capitalize">{field.replace(/([A-Z])/g, " $1")} *</label>
            <input
              type="number"
              placeholder={`Enter ${field}`}
              {...register(field, { required: `${field.replace(/([A-Z])/g, " $1")} is required` })}
              className="w-full border p-2 rounded-md"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]?.message}</p>}
          </div>
        ))}

        {/* Colors */}
        <div className="mb-4">
          <label className="block font-medium text-sm">Colors *</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={colorInput}
              onChange={(e) => setColorInput(e.target.value)}
              placeholder="Enter color"
              className="w-full border p-2 rounded-md"
            />
            <button
              type="button"
              onClick={handleAddColor}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {colors.map((color, idx) => (
              <div key={idx} className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
                {color}
                <button
                  type="button"
                  onClick={() => handleDeleteColor(color)}
                  className="ml-2 text-red-500"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-sm">Description *</label>
          <textarea
            {...register("description")}
            placeholder="Description"
            className="w-full border p-2 rounded-md"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-md shadow-sm">
        {/* Image Upload */}
        <div className="mb-4">
          <h3 className="text-sm font-medium">Upload images</h3>
          <div className="flex gap-4 mt-2 flex-wrap">
            {images.length < 4 && (
              <label className="border-2 border-dashed flex items-center justify-center w-28 h-28 rounded-md cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <span className="text-blue-500">+ Upload</span>
              </label>
            )}
            {images.map((file, idx) => (
              <div key={idx} className="relative w-28 h-28">
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleImageDelete(idx)}
                  className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <h3 className="text-sm font-medium">Add size</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {sizes.map((size, idx) => (
              <button key={idx} type="button" className="border p-2 rounded-md hover:bg-gray-100">
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
