import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/products.service';
import type { ProductsProps } from '../../types/product.types';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ProductsList() {

  const [fillDb, setFillDb] = useState<ProductsProps[]>([])


  async function fillDatabase() {
    let loadData = await getAllProducts()
    await setFillDb(loadData)
    return fillDb
  }


  useEffect(() => {
    fillDatabase()
  }, [])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Categoria</StyledTableCell>
            <StyledTableCell>Preço</StyledTableCell>
            <StyledTableCell>Estoque</StyledTableCell>
            <StyledTableCell>Ativo</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {fillDb.map((row: ProductsProps) => (
            <StyledTableRow key={row.nome}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell>{row.nome}</StyledTableCell>
              <StyledTableCell>{row.categoria}</StyledTableCell>
              <StyledTableCell>{row.preco}</StyledTableCell>
              <StyledTableCell>{row.estoque}</StyledTableCell>
              <StyledTableCell>{row.ativo}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}