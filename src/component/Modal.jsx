import Button from "./Button";
import { RiCloseLargeLine } from "react-icons/ri";

const Modal = ({ ModalClose_Open_Toggle, children }) => {
  return (
    <section className="fixed flex justify-center items-center bg-opacity-30 backdrop-blur-lg z-40 inset-0">
      <div className="bg-[#def2fad8] backdrop-blur-md bg-opacity-35 w-full max-w-md lg:w-[30rem] lg:h-[28rem] shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-end">
          {/* Button for closing the modal */}
          <Button
            ButtonClick={ModalClose_Open_Toggle} 
            ButtonContent={<RiCloseLargeLine />}
            ButtonStyle="lg:p-[0.8rem] lg:text-xl p-3 text-2xl rounded-full active:scale-105 hover:bg-slate-50 transition-all duration-200"
          />
        </div>
        <div className="">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
