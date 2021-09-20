import React from "react"

const isTypeObj = (val) => {
  if (typeof val === "object") return null
  else return val
}

function EntrepreneurshipCard({
  ApplyButton,
  CurrentClosingDateforApp,
  Description,
  EstTotalProgramFunding,
  FundingOppTitle,
}) {
  return (
    <div
      className={
        "h-full text-gray-400 text-md overflow-hidden tracking-wider p-5 flex flex-col shadow-md bg-white"
      }
    >
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Title</div>
        <h2 className="text-cardBlue font-semibold line-clamp-1">
          {FundingOppTitle ? FundingOppTitle : "N/A"}
        </h2>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Description</div>
        <span className={"text-gray-600 line-clamp-3"}>{Description}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Closing Date</div>
        <span className={`text-gray-600 line-clamp-3`}>
          {CurrentClosingDateforApp ? CurrentClosingDateforApp : "N/A"}
        </span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Est-Total Funding</div>
        <span
          className={`text-gray-600 ${
            isTypeObj(EstTotalProgramFunding) ? "font-semibold" : ""
          }`}
        >
          {isTypeObj(EstTotalProgramFunding) ? EstTotalProgramFunding : "N/A"}
        </span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Link to Apply</div>
        <a
          href={ApplyButton}
          className="text-gray-600  transition duration-150 ease-in border-b-2 block truncate hover:border-gray-500"
        >
          {ApplyButton}
        </a>
      </div>
    </div>
  )
}

export default EntrepreneurshipCard
