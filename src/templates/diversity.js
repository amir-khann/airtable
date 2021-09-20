import React from "react"
import { graphql } from "gatsby"
//

import DetailPage from "../components/e-detail-card"
import Layout from "../components/Layout"

const Diversity = ({ data }) => {
  const detail = data.airtable.data
  return (
    <Layout>
      <DetailPage {...detail} />
    </Layout>
  )
}

export default Diversity

export const query = graphql`
  query GetDiversityRecord($recordId: String!) {
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
