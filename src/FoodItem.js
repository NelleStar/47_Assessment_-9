import { Navigate, useParams } from "react-router-dom"; //handles nav and access route parameters
import { Card, CardBody, CardTitle, CardText } from "reactstrap"; //components for styling


// functional component that takes in items and cantFind props - 
function FoodItem({ items, cantFind }) {
  // useParams() hook to create id variable
  const { id } = useParams();

  //attempt to find the snack with the given items prop and id 
  let snack = items.find((snack) => snack.id === id);

  // if the snack is not found Navigate to redirect to cantFind route
  if (!snack) return <Navigate to={cantFind} />; 

  // renders a Card with title of snack.name and text of snack.description, snack.recipe, snack.serve
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

// export component
export default FoodItem;
