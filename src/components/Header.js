import React from "react"

function Header() {
  return (
    <header className="h-80 flex justify-center items-center bg-header py-6">
      <div className="text-center">
        <h1 className="text-3xl text-logo font-bold">
          Startup <span className="font-bold text-3xl text-white">vs</span>{" "}
          Covid-19
        </h1>

        <div className="flex justify-center items-center">
          <div className="max-w-3xl">
            <h3 className="text-white pt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              voluptatibus unde beatae quo hic cumque est autem laborum.
              Delectus a at vitae quam est amet nesciunt quas quidem
              consequuntur dicta.
            </h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
