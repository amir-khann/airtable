import React from "react"

const isTypeObj = (val) => {
  if (typeof val === "object") return null
  else return val
}

function EntrepreneurshipDetail({
  AdditionalOnElgiibility,
  AgencyName,
  ApplyButton,
  AwardCeiling,
  AwardFloor,
  CategoryofFundingActivity,
  CurrentClosingDateforApp,
  Description,
  DocType,
  DetailPage,
  EligibleApplicants,
  EstTotalProgramFunding,
  ExpNumOfAwards,
  FundingOppTitle,
  LinktoAdditionalnfo,
  OGClosingDateforApp,
  OppCategory,
  OppCategoryExplanation,
}) {
  return (
    <div
      className={
        "w-full text-gray-400 text-md overflow-hidden tracking-wider p-5 flex flex-col shadow-md bg-white "
      }
    >
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Title</div>
        <h2 className={`text-cardBlue font-semibold `}>
          {FundingOppTitle ? FundingOppTitle : "N/A"}
        </h2>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Agency Name</div>
        <span className={"text-gray-600"}>{AgencyName}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Additional On Eligibility</div>
        <span className={"text-gray-600"}>{AdditionalOnElgiibility}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Award Ceiling</div>
        <span className={"text-gray-600"}>{AwardCeiling}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Award Floor</div>
        <span className={"text-gray-600"}>{AwardFloor}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">
          Category of Funding Activity
        </div>
        <span className={"text-gray-600"}>{CategoryofFundingActivity}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Detail Page</div>
        <span className={"text-gray-600"}>{DetailPage}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Eligible Applicants</div>
        <span className={"text-gray-600"}>{EligibleApplicants}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">ExpNumOfAwards</div>
        <span className={"text-gray-600"}>{ExpNumOfAwards}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Link to Additional Info</div>
        <span className={"text-gray-600"}>{LinktoAdditionalnfo}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">OG Closing Date for App</div>
        <span className={"text-gray-600"}>{OGClosingDateforApp}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Opp Category</div>
        <span className={"text-gray-600"}>{OppCategory}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Opp Category Explanation</div>
        <span className={"text-gray-600"}>
          {OppCategoryExplanation ? OppCategoryExplanation : "N/A"}
        </span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Description</div>
        <span className={"text-gray-600"}>{Description}</span>
      </div>
      <div className="py-2">
        <div className="py-2 uppercase text-xxs">Closing Date</div>
        <span className={`text-gray-600`}>
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
          className="text-gray-600 border-b-2 transition duration-150 ease-in inline-block truncate hover:border-gray-500"
        >
          {ApplyButton}
        </a>
      </div>
    </div>
  )
}

export default EntrepreneurshipDetail
