import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../App/Models/Product";

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props){
    return(
        <>
           <Card>
                <CardHeader 
                    avatar={
                        <Avatar>
                            {product.name.charAt(0).toUpperCase()}
                        </Avatar>
                    }
                />
                <CardMedia
                    component="img"
                    height="140"
                    image="{product.pictureUrl}"
                    alt="{product.name}"
                />
                <CardContent>
                    <Typography gutterBottom color='secondary' variant="h5" component="div">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {product.brand} / {pproduct.type}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Add to Cart</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}