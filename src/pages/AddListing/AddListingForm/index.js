import React from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Formik, Field, Form } from "formik";
import {
  Button,
  Input,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";

import { useSuccessToast, useErrorToast } from "@hooks";

export default function AddListingForm() {
  //firebase stuff
  const firestore = useFirestore();
  const {
    auth: { uid },
  } = useSelector((state) => state.firebase);

  //notifications
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  //validation schema used for the form
  const validateSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is required")
      .min(10, "Title must be at least 10 characters"),
    description: Yup.string()
      .required("Description is required!")
      .min(10, "Description must be at least 10 characters"),
  });

  const initialValues = { title: "", description: "" };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      initialErrors={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        firestore
          .collection("listings")
          .add({ uid, category: "job", ...values })
          .then((result) => {
            actions.resetForm();
            successToast("Listing succuessfully added");
          })
          .catch((error) => {
            errorToast(error.message);
          });
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

            <Field name="description">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                >
                  <FormLabel size="sm" htmlFor="description" fontSize="sm">
                    Description
                  </FormLabel>

                  <Textarea {...field} size="sm" />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="description">
              {({ form }) => (
                <Button
                  disabled={!form.isValid}
                  size="sm"
                  colorScheme="whatsapp"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </Field>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
