

import imgCover from "../../../../assets/imgCover.jpg";
const Hero = () => {
  return (
    <div>
      <div
        className="cover_img bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${imgCover})`,
          height: "90vh",
        }}
      >
        <div
          className="flex items-center justify-start  pl-10"
          style={{ height: "100%" }}
        >
          <div>
            <p className="text-6xl text-white  ">I Am Sandesh</p>
            <p className="text-2xl text-white">Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero