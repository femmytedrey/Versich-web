import { FcGoogle } from "react-icons/fc"

const Google = ({ url, text }) => {
    return (
        <button
            type="button"
            className="flex items-center gap-5 w-full transition-all duration-6000 ease-in-out md:w-4/5 m-auto justify-center py-3 rounded-lg border-2 border-versich-border hover:shadow-md hover:bg-gray-100"
            onClick={() => { window.location.href = url }}
            title={text === "" ? "Google" : ""}
        >
            <FcGoogle />
            {text}
        </button>
    )
}
export default Google