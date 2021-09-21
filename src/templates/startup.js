import React from "react"
import { graphql } from "gatsby"
//

import DetailCard from "../components/e-detail-card"
import Layout from "../components/Layout"

const Startup = ({ data }) => {
  const detail = data.airtable.data
  return (
    <Layout>
      <DetailCard {...detail} />
    </Layout>
  )
}

export default Startup

export const query = graphql`
  query GetStartupRecord($recordId: String!) {
    airtable(recordId: { eq: $recordId }) {
      id
      table
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
`
