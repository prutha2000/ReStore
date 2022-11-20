import { LoadingButton } from "@mui/lab";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../App/api/agent";
import { Product } from "../../App/Models/Product";
import { useAppDispatch, useAppSelector } from "../../App/store/configureStore";
import { currencyFormat } from "../../App/util/util";
import { addBasketItemAsync, setBasket } from "../Basket/basketSlice";

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props){
    const {status} = useAppSelector(state => state.basket);
    const dispatch = useAppDispatch();


    return(
        <>
        <Card>
            <CardHeader 
                avatar={
                    <Avatar sx={{bgcolor: 'secondary.main'}}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                sx={{height: 140, backgroundSize: 'contain', bgcolor: 'primary.light'}}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                     {currencyFormat(product.price)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
            <LoadingButton
                    loading={status.includes('pendingAddItem' + product.id)}
                    onClick={() => dispatch(addBasketItemAsync({productId: product.id}))}
                    size="small">
                    Add to cart
                </LoadingButton>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
        </>
    )
}