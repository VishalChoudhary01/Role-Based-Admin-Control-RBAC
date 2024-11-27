import Button from "./Button";
import { FaEdit, FaTrash } from "react-icons/fa";

const Item = ({ item, index, handleDelete, handleUpdate, handleStatusToggle }) => {
  return (
    <tr
      key={item.id}
      className={`lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] w-full h-12 text-center capitalize hover:bg-[#c0e3f2d4] hover:text-black border-b border-[#d6d5d5] transition-colors duration-300 cursor-pointer`}
    >
      <td className="border-r border-[#a5a5a583] ">{index + 1}</td>
      <td className="border-r border-[#a5a5a583]">{item.userName}</td>
      <td className="border-r border-[#a5a5a583]">{item.role}</td>
      <td className="border-r border-[#a5a5a583]">
        <Button
          ButtonContent={item.status}
          ButtonClick={() => handleStatusToggle(item.id)}
          ButtonStyle={`${
            item.status.toLowerCase() === "active"
              ? "text-green-600 bg-teal-100"
              : "text-red-600 bg-red-50"
          } lg:px-4  md:px-3 md:py-1 px-2 py-1 md:text-[1rem] text-[0.6rem] rounded-3xl hover:shadow-[#454a7b]  active:scale-110   shadow-inner shadow-[#558488] transition-all duration-200 ease-in-out`}
        />
      </td>
      <td className="border-r border-[#a5a5a583]">

        <div className="flex justify-center md:flex-nowrap flex-wrap lg:gap-x-2 md:gap-x-1">
          {item.permissions.map((perm, idx) => (
            <span
              key={idx}
              className="lg:px-2 md:py-1 md:px-1 bg-[#f5f2f294] border border-[#fff] rounded-md bg-opacity-30 backdrop-blur-md text-gray-900 flex flex-wrap md:flex-nowrap"
            >
              {perm}
            </span>
          ))}
        </div>
      </td>
      <td className="flex justify-center items-center gap-x-4 pt-2 border-[#a5a5a583]">
        {/* Edit Button */}
        <Button
          ButtonContent={"Edit"}
          RenderLeftStyle="shake"
          RenderLeft={<FaEdit />}
          ButtonClick={() => handleUpdate(item)}
          ButtonStyle="bg-[#e7fafce4] flex items-center rounded-md px-2 py-1"
        />
        {/* Delete Button */}
        <Button
          ButtonClick={() => handleDelete(item.id)}
          RenderLeft={<FaTrash />}
          ButtonContent={"Delete"}
          ButtonStyle="text-red-600 flex items-center rounded-md px-2 py-1 bg-[#f2f1f1e4]"
        />
      </td>
    </tr>
  );
};
export default Item
