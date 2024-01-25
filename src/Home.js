// Import specific components from reactstrap for styling
import { Card, CardBody, CardTitle } from "reactstrap";

// functional Home component - returns JSX - a Card with a CardBody that wraps a CradTitle holding the h3 showing a welcome title - found on the / route in the middle of the page
function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

// export Home component
export default Home;
