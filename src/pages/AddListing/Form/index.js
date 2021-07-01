import React from "react";
import { Formik, Field, Form } from "formik";
import {
  Button,
  Input,
  Textarea,
  Select,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import { ListingCategories } from "@data";

export default function index() {
  return (
    <Formik
      initialValues={{ title: "", category: "" }}
      onSubmit={(values, actions) => {
        console.log("-->", values);
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors = {};

        console.log(values);

        if (values.title.length < 10) {
          errors.title = "Title must be at least 10 characters";
        }

        if (!values.category) {
          errors.category = "Category is required";
        }

        if (!values.description) {
          errors.description = "Description is required";
        }

        return errors;
      }}
    >
      {(props) => (
        <Form>
          <VStack spacing={4} align="flex-start">
            <Field name="title">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.title && form.touched.title}
                >
                  {console.log(form)}
                  <FormLabel size="sm" htmlFor="title" fontSize="sm">
                    Title
                  </FormLabel>
                  <Input
                    size="sm"
                    {...field}
                    id="title"
                    placeholder="Enter listing title"
                  />
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="category">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.category && form.touched.category}
                >
                  <FormLabel size="sm" htmlFor="category" fontSize="sm">
                    Listing Category
                  </FormLabel>
                  <Select
                    {...field}
                    id="category"
                    placeholder="Select a category"
                    size="sm"
                  >
                    {ListingCategories.map((cat, index) => (
                      <option key={index} value={cat.slug}>
                        {cat.title}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel size="sm" htmlFor="description" fontSize="sm">
                    Description
                  </FormLabel>

                  <Textarea {...field} />
                </FormControl>
              )}
            </Field>
            <Button
              size="sm"
              colorScheme="whatsapp"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
