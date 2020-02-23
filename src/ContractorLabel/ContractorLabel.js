import React from "react";
import "./ContractorLabel.css";

function ContractorLabel(props) {
  const contractorLabel = props.value ? "Contractor" : "Freelancer";
  const className = props.value ? "contractor" : "non-contractor";

  return <span className={className}>{contractorLabel}</span>;
}

export default ContractorLabel;
