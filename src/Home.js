// Import specific components from reactstrap for styling
import { Card, CardBody, CardTitle } from "reactstrap";

// functional Home component - returns JSX - a Card with a CardBody that wraps a CradTitle holding the h3 showing a welcome title - found on the / route in the middle of the page
function Home({ snacks, drinks}) {

  const numSnacks = snacks.length;
  const numDrinks = drinks.length;

  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            We have {numSnacks} delicious snacks and {numDrinks} refreshing
            drinks for you to choose from.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

// export Home component
export default Home;
