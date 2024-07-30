import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [itemData, setitemData] = useState(null);

  useEffect(() => {
    fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPet(data.pets[0]);
        setitemData(data.pets[0].images);
      })
      .catch((error) => console.error("Error fetching pet details:", error));
  }, [id]);
  if (!pet) {
    return <div>Loading...</div>;
  }
  console.log(pet);
  return (
    <div>
      <Card>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={Math.random() * 10}>
              <img
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pet.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={"/"}>
            <Button size="small">Home</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default PetDetails;
