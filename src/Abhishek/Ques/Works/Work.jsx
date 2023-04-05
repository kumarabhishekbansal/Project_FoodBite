import React from "react";
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./style.css";
const Work = () => {
  return (
    <>
      <h2 className="Workhead"> How It Works ?</h2>
      <p className="workpara">It is just a 4 step process to use this website or get amazing benefits and offers</p>
    <div className="cardswork">

    {/* card1 */}


      <Card className="cardwork">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Step 1
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            Create Your account with FoodBite
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <Button size="small">Register</Button>
          <Button size="small">Login</Button>
        </CardActions>
      </Card>



      {/* card2 */}



      <Card  className="cardwork">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Step 2
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            View Your Resturant and add order in your cart
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <Button size="small">Home</Button>
          <Button size="small">Cart</Button>
        </CardActions>
      </Card>

{/* card3 */}

    
<Card  className="cardwork">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Step 3
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            Done your payment via online transactions or you can use your wallet with amazing offers and cashback points.
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <Button size="small">Cart</Button>
        </CardActions>
      </Card>



      {/* card4 */}



      <Card  className="cardwork">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Step 4
          </Typography>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            Get your order at your home with 5 star rating delivery Person
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <Button size="small">View Menu</Button>
          
        </CardActions>
      </Card>


      </div>
    </>
  );
};

export default Work;
