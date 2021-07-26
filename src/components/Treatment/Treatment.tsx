import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

export interface TreatmentProps {
  children?: ReactNode;
  name: string | null;
  location: string;
  price: number;
  id?: number;
  subcategory?: string;
  category?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#0f6fde",
    textTransform: "none",
    color: "white",
  },
}));

export function Treatment({
  name,
  location,
  price,
  id,
  subcategory,
  children,
  category,
}: TreatmentProps): JSX.Element {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name?.split("")[0]}
          </Avatar>
        }
        title={name}
        subheader={location}
      />

      <CardContent>
        <Typography>{subcategory}</Typography>
        <Typography>{category}</Typography>
        <Typography>
          Free transfers between airport, hotel and clinic
        </Typography>
        <Typography>Open 24 hours</Typography>
        <Typography>Free consultations</Typography>
        <Typography>7/24 working center</Typography>
        <Box>Deal: {price} £</Box>
        <Button className={classes.button}>Get a Quote</Button>
      </CardContent>
      {children}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
