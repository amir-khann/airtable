import React from "react"
import { Link, graphql } from "gatsby"
//
import EntrepreneurshipCard from "../components/e-card"
import Layout from "../components/Layout"
import SiteMeta from "../components/SiteMeta"

export default ({ data }) => {
  const entrepreneurshipData = data.allAirtable.nodes
  return (
    <Layout>
      <SiteMeta title="Entrepreneurship" description="Entrepreneurship" />
      <div className="flex justify-center items-center">
        <div className="max-w-3xl">
          <h4 className="text-center pb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            et suscipit totam provident cupiditate Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 place-content-stretch">
        {entrepreneurshipData.map(({ data, recordId, id }) => (
          <Link to={`/startup/${recordId}`}>
            <EntrepreneurshipCard
              rTruncate={true}
              key={`key-${id}`}
              {...data}
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allAirtable(filter: { table: { eq: "Startup" } }) {
      nodes {
        id
        recordId
        data {
          AdditionalOnElgiibility
          AgencyName
          ApplyButton
          AwardCeiling
          AwardFloor
          CategoryofFundingActivity
          CurrentClosingDateforApp
          Description
          DocType
          DetailPage
          EligibleApplicants
          EstTotalProgramFunding
          ExpNumOfAwards
          FundingOppTitle
          LinktoAdditionalnfo
          OGClosingDateforApp
          OppCategory
          OppCategoryExplanation
        }
      }
    }
  }
`
