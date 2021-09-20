import React from "react"
import { navigate } from "@reach/router"

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
      <button
        type="button"
        className="w-28 text-base text-logo justify-evenly items-center flex h-8 "
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#c47aff"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        Go Back
      </button>

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
