import React from "react"

const isTypeObj = (val) => {
  if (typeof val === "object") return null
  else return val
}

function EntrepreneurshipCard({
  FundingOppTitle,
  Description,
  CurrentClosingDateforApps,
  EstTotalProgramFunding,
  LinktoAdditionalnfo,
  rTruncate,
}) {
  return (
    <div
      className={`text-gray-400 text-md overflow-hidden tracking-wider p-5 flex flex-col shadow-md bg-white ${
        rTruncate ? "h-full" : ""
      }`}
    >
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Title</div>
        <h2
          className={`text-cardBlue font-semibold ${
            rTruncate ? "line-clamp-1" : ""
          }`}
        >
          {FundingOppTitle ? FundingOppTitle : "N/A"}
        </h2>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Details</div>
        <span className={`text-gray-600 ${rTruncate ? "line-clamp-3" : ""}`}>
          {Description}
        </span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Closing Date</div>
        <span className={`text-gray-600`}>
          {CurrentClosingDateforApps ? CurrentClosingDateforApps : "N/A"}
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
        <div className="py-2 uppercase text-xxs">Link to Additional Info</div>
        <p className="text-gray-600 border-b-2 truncate hover:border-gray-500">
          {LinktoAdditionalnfo}
        </p>
      </div>
    </div>
  )
}

export default EntrepreneurshipCard
