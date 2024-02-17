import { BsFillEyeSlashFill } from "react-icons/bs";


const InputText = () => {
  return (
    <div className="w-[400px]">
      <div className="flex items-center justify-between">
        <label htmlFor="">Label</label>
        <button className="flex items-center space-x-2">
          <BsFillEyeSlashFill />
          <span>Hide</span>
        </button>
      </div>
      <input type="text"  className="w-full h-10 rounded-md border-2 border-gray-200" />
    </div>
  );
}

export default InputText;