import React, { useState } from "react";

import { Button, Input, Textarea, Select } from "@chakra-ui/react";

import { db } from "../../firebase.config";

const categories = [
  {
    title: "Jobs",
    slug: "jobs",
  },
  {
    title: "Vehicals",
    slug: "vehicals",
  },
  {
    title: "Houses",
    slug: "houses",
  },
];

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    db.collection(category)
      .add({
        title,
        description,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

  const onChange = (event) => {
    switch (event.target.id) {
      case "title":
        setTitle(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "category":
        setCategory(event.target.value);
        break;

      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} vertical>
      <Input
        onChange={onChange}
        value={title}
        type="text"
        name="title"
        id="title"
        placeholder="Enter post title"
      />
      <br />
      <Select
        onChange={onChange}
        // value={category}
        name="category"
        id="category"
        defaultValue="placeholder"
      >
        <option value="placeholder" disabled hidden>
          Select your category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category.slug}>
            {category.title}
          </option>
        ))}
      </Select>
      <br />
      <Textarea
        onChange={onChange}
        value={description}
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Enter the post description"
      ></Textarea>
      <br />
      <Button type="submit">Post</Button>
    </form>
  );
}
