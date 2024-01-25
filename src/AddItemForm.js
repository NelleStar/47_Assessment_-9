import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import { useNavigate } from "react-router-dom";

function AddItemForm({ propFoodType, onItemAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const [foodType, setFoodType] = useState(propFoodType || "snacks");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, description, recipe, serve };

    try {
      const addedItem = await SnackOrBoozeApi.addItem(foodType, newItem);

      if (addedItem && addedItem.name) {
        console.log("Item added successfully");
        // Clear the form fields
        setName("");
        setDescription("");
        setRecipe("");
        setServe("");
        // Notify parent component about the new item
        onItemAdded();

        // Construct the URL using the item's name
        const itemName = encodeURIComponent(addedItem.name.toLowerCase());
        navigate(`/${foodType}/${itemName}`);
      } else {
        console.error("Error: 'name' not found in addedItem", addedItem);
      }
    } catch (error) {
    console.error("Error adding item:", error);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="foodType">Select Type</Label>
        <Input
          type="select"
          name="foodType"
          id="foodType"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        >
          <option value="snacks">Snack</option>
          <option value="drinks">Drink</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
          type="text"
          name="recipe"
          id="recipe"
          placeholder="Enter recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
          type="text"
          name="serve"
          id="serve"
          placeholder="Enter serve instructions"
          value={serve}
          onChange={(e) => setServe(e.target.value)}
        />
      </FormGroup>

      <Button color="primary" type="submit">
        Add {foodType === "snacks" ? "Snack" : "Drink"}
      </Button>
    </Form>
  );
}

export default AddItemForm;
