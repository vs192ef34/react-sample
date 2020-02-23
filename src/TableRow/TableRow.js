import React from "react";
import ContractorLabel from "../ContractorLabel/ContractorLabel";
import PositionLabel from "../PositionLabel/PositionLabel";

function TableRow(props) {
  const { id, name, positionId, contractor } = props.employee;

  return (
    <tr>
      <td>{name}</td>
      <td>
        <PositionLabel positionId={positionId} positions={props.positions} />
      </td>
      <td>
        <ContractorLabel value={contractor} />
      </td>
    </tr>
  );
}

export default TableRow;
