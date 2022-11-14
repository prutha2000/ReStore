import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useStoreContext } from "../../App/context/StoreContext";

export default function BasketPage(){
    const {basket, setBasket, removeItem} =  useStoreContext();

    if(!basket) return <Typography >Your basket is empty.</Typography>

    return(
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {basket.items.map(item => (
            <TableRow
              key={item.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box display='flex' alignItems='center'>
                  <img src={item.pictureUrl} alt={item.name} style={{height: 50, marginRight: 20}} />
                  <span> {item.name}</span>
                </Box>
              </TableCell>
              <TableCell align="right">${(item.price / 100).toFixed(2)}</TableCell>
              <TableCell align="center">
                <IconButton color='error'>
                  <Remove />
                </IconButton>
                {item.quantity}
                <IconButton color='secondary'>
                  <Add />
                </IconButton>
              </TableCell>
              <TableCell align="right">${((item.price *  item.quantity)/100).toFixed(2)}</TableCell>
              <TableCell align="right">
                <IconButton color='error'>
                    <Delete/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}