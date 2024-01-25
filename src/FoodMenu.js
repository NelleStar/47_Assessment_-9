// component found at /snacks

import { Link } from "react-router-dom"; //import Link to create links
import "./FoodMenu.css"; // import CSS for styling
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap"; //import specific components for styling/structure

// function component called FoodMenu that is being passed snacks as a prop from App.js - renders a card that wraps the cardBody - which wraps the Card Title of Food Menu and Card Text of Some quick...content then a ListGroup which maps over the snacks list and makes a link to each item in the array using the id for the URL and the name for the name
function FoodMenu({ snacks }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Food Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {snacks.map(snack => (
              <Link to={`/snacks/${snack.id}`} key={snack.id}>
                <ListGroupItem>{snack.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

// export FoodMenu 
export default FoodMenu;
