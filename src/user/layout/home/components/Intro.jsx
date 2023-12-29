

const Intro = () => {
  return (
    <div>
      <div className="container mx-auto ">
        {/* section intro */}
        <p
          className="text-2xl text-gray-900 border-b-4 pb-3 mt-10 border-blue-400"
          style={{ width: "fit-content" }}
        >
          About
        </p>
        <p>
          Experienced Frontend Developer with a passion for crafting intuitive
          user interfaces and constant learner. Proven ability to solve problems
          and motivate teams to deliver exceptional results. Committed to
          pursuing excellence in software development.
        </p>
        <div className="grid grid-cols-4 gap-4 mt-16">
          <div className="col-span-2 ">
            <img
              src="https://sandeshad100.github.io/SandeshAdhikari/assets/img/profile-img.jpg"
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div>
              <p className="my-2">
                <span className="font-bold">Born:</span> 2000, Jan
              </p>
              <p className="my-2">
                <span className="font-bold">Degree:</span> Bachelors (Now 4th
                year)
              </p>
              <p className="my-2">
                <span className="font-bold">Freelance:</span> Available
              </p>
              <p className="my-2">
                <span className="font-bold">Born:</span> 2000, Jan
              </p>
              <p className="my-2">
                <span className="font-bold">Degree:</span> Bachelors (Now 4th
                year)
              </p>
              <p className="my-2">
                <span className="font-bold">Freelance:</span> Available
              </p>
            </div>
          </div>
        </div>

        {/* section projects  */}
      

        {/* footer  */}
      </div>
    </div>
  );
}

export default Intro