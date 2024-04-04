import { PropagateLoader } from "react-spinners"

const MainLoader = () => {
    return (
        <div className="py-10 md:py-14 px-3 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
            <div className="w-full h-52 my-6 py-16 md:py-32 px-3 md:px-10 max-w-[580px]">
                <PropagateLoader
                    loading={true}
                    color="#1F71BE"
                    height={3}
                    width="40%"
                />
            </div>
        </div>
    )
}
export default MainLoader