import styled from "styled-components";

export const StyledTable = styled.table`
    width: 420px;
    margin: 0 auto;
    border: 1px solid #dddddd;
`;

export const TableHead = styled.thead`
    background-color: #0349fc;      
`;

export const TableHeadTR = styled.tr`
    text-transform: uppercase;
`;

export const TableHeading = styled.th`
    padding: 8px;
    color: #fff; 
`;

export const TableBody = styled.tbody`
    color: #808080;
`;

export const TableBodyTR = styled.tr`
   
    &&:nth-child(odd) {
        background-color: #fff;
    }

    &&:nth-child(even) {
        background-color: #cccccc;
  }

`;

export const TableData = styled.td`
    padding: 8px;
    text-align: center;
    text-transform: capitalize;
`;