import Google from "./Google"

const SocialAccounts = ({ google = { url: "", text: "" } }) => {
    return (<>
        <div className="flex items-center gap-5 justify-between">
            <div className="bg-gray-500 h-[2px] w-full rounded-md" />
            <p>Or</p>
            <div className="bg-gray-500 h-[2px] w-full" />
        </div>
        {google && <Google url={google.url} text={google.text} />}
    </>)
}
export default SocialAccounts