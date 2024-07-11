import styled from "styled-components";

const ProvinsiStyled = styled.div`
    margin: 20px;
    text-align: center;
  
  .provinsi {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
  }
  
  .judul__provinsi {
    color: #17e66d;
  }
  
  .subJudul__provinsi {
    color: #2b8fe6;
    margin-top: 10px;
  }
  
  .provinsi__container {
    overflow-x: auto;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 8px;
    text-align: center  ;
    border-bottom: 1px solid #dee2e6;
  }
  
  .table th {
    background-color: #e9ecef;
    color: #495057;
    color: #17e66d;
  }
  
  .table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
`;

export default ProvinsiStyled;