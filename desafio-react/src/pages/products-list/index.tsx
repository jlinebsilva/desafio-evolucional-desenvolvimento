import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import LayoutPage from '../../layouts';
import { getAllProducts } from '../../services/products.service';
import type { ProductsProps } from '../../types/product.types';
import { checkProductStatus } from '../../utils/checkItemActive';
import { formatCurrencyForBRL } from '../../utils/formatCurrency';
import styles from './productsList.module.css';


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
    <LayoutPage titlePage='Produtos'
      subtitle='Gerencie seu inventário e catálogo de produtos'
    >

      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow >
              <TableCell className={styles.tableHeader}>ID</TableCell>
              <TableCell className={styles.tableHeader}>Nome</TableCell>
              <TableCell className={styles.tableHeader}>Categoria</TableCell>
              <TableCell className={styles.tableHeader}>Preço</TableCell>
              <TableCell className={styles.tableHeader}>Estoque</TableCell>
              <TableCell className={styles.tableHeader}>Ativo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {fillDb.map((row: ProductsProps, index) => (
              <StyledTableRow key={row.id}>
                <TableCell key={index} component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.categoria}</TableCell>
                <TableCell>{formatCurrencyForBRL({ value: row.preco })}</TableCell>
                <TableCell>{row.estoque}</TableCell>
                <TableCell>{checkProductStatus(row.ativo)}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </LayoutPage>
  );
}