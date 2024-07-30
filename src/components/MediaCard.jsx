import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function MediaCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.images[0]}
        title={data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description.slice(0,80)+'...'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/pets/${data.id}`}>
        <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}











