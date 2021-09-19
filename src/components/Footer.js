import React from "react"

const Footer = () => {
  return (
    <footer className=" bg-white ">
      <div className="container text-gray-600 text-center py-4  max-auto flex flex-col items-center">
        <div className="max-w-3xl  max-auto">
          <h1 className="py-4 text-lg text-gray-700">
            Help the community by contributing to this platform 💜
          </h1>
          <p className="py-2 text-base">
            This platform is built & maintained by a bunch of startup
            enthusiasts. We are constantly updating the repository with
            resources for startups sourced from the public, private, and
            non-governmental sectors.
          </p>
          <span className="text-sm block">
            Interested in contributing to the repository?
          </span>
          <button
            type="button"
            className="my-6 w-32 h-11 font-semibold text-white bg-button transition duration-150 ease-in  rounded-lg border border-transparent hover:bg-opacity-90"
          >
            Contribute
          </button>
        </div>
        <div className="w-4/5	max-auto text-gray-600 flex justify-between items-start">
          <div className="w-1/4	flex flex-col items-start">
            <p className="text-lg  text-gray-800">A voluntary initiative by</p>
            <h1 className="text-gray-900 font-semibold">Lorem </h1>
          </div>
          <div className="w-1/4	 flex flex-col items-start">
            <p className=" text-lg  text-gray-800">Supported by</p>
            <h1 className="text-gray-900 font-semibold">LOGO </h1>
          </div>

          <div className="w-2/4 flex items-start flex-col">
            <p className="mb-2 text-lg  text-gray-800">
              Signup to our newsletter!
            </p>
            <div className="w-full   flex">
              <input
                style={{ background: "whitesmoke" }}
                className="py-2 placeholder-gray-500 mr-4 px-4 flex-1  border-transparent rounded-lg focus:border-gray-600"
                type="text"
                placeholder="Enter Email"
              />
              <button
                type="button"
                className="w-32 h-11 font-semibold text-white bg-button transition duration-150 ease-in  rounded-lg border border-transparent hover:bg-opacity-90"
              >
                Subscribe 🚀
              </button>
            </div>
          </div>
        </div>

        <div className="w-4/5 pt-10	max-auto text-gray-600 flex justify-between items-start">
          <div className="w-1/2  items-start	flex flex-col">
            <p className="text-lg  text-gray-800">Contact Us</p>
            <h1 className="my-2">Lorem@gmail.com</h1>
          </div>
          <div className="w-1/2	flex flex-col items-start">
            <p className="text-lg  text-gray-800">
              Big thanks to all our contributors
            </p>
            <h1 className="my-2">
              Made using{" "}
              <span className="border-b cursor-pointer hover:border-gray-500 ">
                GatsbyJS
              </span>{" "}
              | Hosted with support from{" "}
              <span className="border-b cursor-pointer hover:border-gray-500 ">
                Netlify & Airtable
              </span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
