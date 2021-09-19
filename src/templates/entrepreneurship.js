import React from "react"
import { graphql } from "gatsby"
//

import EntrepreneurshipCard from "../components/EntrepreneurshipCard"
import Layout from "../components/Layout"

const Entrepreneurship = ({ data }) => {
  const detail = data.airtable.data
  return (
    <Layout>
      <EntrepreneurshipCard rTruncate={false} {...detail} />
    </Layout>
  )
}

export default Entrepreneurship

export const query = graphql`
  query GetRecord($recordId: String!) {
    airtable(recordId: { eq: $recordId }) {
      id
      table
      recordId
      data {
        AgencyName
        AwardCeiling
        AwardFloor
        CategoryofFundingActivity
        CurrentClosingDateforApps
        Description
        DocType
        EligibleApplicants
        ExpNumOfAwards
        EstTotalProgramFunding
        FundingOppTitle
        LinktoAdditionalnfo
        OGClosingDateforApp
        OppCategory
        OppCategoryExplanation
        URL
      }
    }
  }
`
