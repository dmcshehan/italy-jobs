import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Select as ChakraSelect,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

import Select from "react-select";

import { useSuccessToast, useErrorToast } from "@hooks";

import { regions, italyData } from "@data";

export default function AddListingForm() {
  const [city, setCity] = useState(null);
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
    region: Yup.string().required("Region is required!"),
    city: Yup.string().required("City is required!"),
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
          .collection("jobs")
          .add({ uid, category: "jobs", ...values })
          .then((result) => {
            actions.resetForm();
            successToast("Job succuessfully added");
          })
          .catch((error) => {
            errorToast(error.message);
          });
      }}
    >
      {({
        values,
        setFieldValue,
        setValues,
        touched,
        setTouched,
        isSubmitting,
      }) => (
        <Form>
          <VStack spacing={4} align="flex-start">
            <Field name="title">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.title && form.touched.title}
                >
                  <FormLabel htmlFor="title">Job Title</FormLabel>
                  <Input {...field} id="title" placeholder="Enter job title" />
                  <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="region">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.region && form.touched.region}
                >
                  {console.log(touched)}
                  <FormLabel htmlFor="region">Region</FormLabel>
                  <ChakraSelect
                    {...field}
                    id="province"
                    placeholder="Select Region"
                    onChange={(e) => {
                      setCity(null);
                      setValues({
                        ...values,
                        region: e.target.value,
                        city: "",
                      });
                    }}
                  >
                    {regions.sort().map((region, index) => (
                      <option key={index} value={region}>
                        {region}
                      </option>
                    ))}
                  </ChakraSelect>
                  <FormErrorMessage>{form.errors.region}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {values.region && (
              <Field name="city">
                {({ field, form }) => {
                  const regionInstances = italyData.filter(
                    (data) => data["Denominazione regione"] === values.region
                  );

                  const citiesInRegios = regionInstances.map(
                    (instance) => instance["Denominazione in italiano"]
                  );

                  const cityOb = citiesInRegios.map((city) => ({
                    label: city,
                    value: city,
                  }));

                  return (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.city && form.touched.city}
                    >
                      <FormLabel htmlFor="province">City</FormLabel>
                      <Select
                        options={cityOb}
                        onChange={(value) => {
                          console.log(value);
                          setCity(value);
                          setValues({ ...values, city: value.value });
                        }}
                        onFocus={() => {
                          setTouched({ ...touched, city: true });
                        }}
                        value={city}
                      />

                      <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
            )}

            <Field name="description">
              {({ field, form }) => (
                <FormControl
                  isRequired
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                >
                  <FormLabel htmlFor="description">Description</FormLabel>

                  <Textarea {...field} />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field>
              {({ form }) => (
                <Button
                  disabled={!form.isValid}
                  colorScheme="whatsapp"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Add Job
                </Button>
              )}
            </Field>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}
