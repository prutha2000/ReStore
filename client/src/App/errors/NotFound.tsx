import { Button, Paper, Typography,Divider } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <Container component={Paper} sx={{height: 400}}>
            <Typography gutterBottom variant='h3'>Oops - We could not find what ypu lookong for</Typography>
            <Divider/>
            <Button fullWidth component={Link} to='/catalog'>Do bckk to store</Button>
        </Container>
    )
}