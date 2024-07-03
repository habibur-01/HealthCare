import banner from "../../../assets/Rectangle 5.png"

const Banner = () => {
    return (
        <div className="relative">
            <img src={banner} alt="" className="h-full w-full brightness-75" />
            <div className="bg-[#000]/20 bg-blend-overlay rounded-[54px] absolute top-0 bottom-0 h-full w-full">

            </div>
        </div>
    );
};

export default Banner;