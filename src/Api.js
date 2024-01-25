// API page - json-server will give you CRUD endpoints on snacks and drinks.

// import axios for async/await calls to API
import axios from "axios";

// create a variable for the base URL from the API at local host 5000
const BASE_API_URL = "http://localhost:5000";

/* a single action to get all snacks. need to add to this class to add new features that we build */
class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }
}

// deport class for use
export default SnackOrBoozeApi;
