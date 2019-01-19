import React, { useState, useEffect } from "react"
import "styled-components/macro"
import { withFormik } from "formik"
import { Box, Button, Text, Heading } from "rebass"
import { AutoTextarea, Input } from "./FormElements"
import { object, string, number } from "yup"

const schema = object().shape({
  secret: string().required("You need to provide a secret"),
  fragments: number()
    .min(1)
    .max(10),
  threshold: number()
    .min(2)
    .when("fragments", (fragments, schema) =>
      schema.max(
        fragments,
        "This number must be equal or less than the number of fragments you're creating"
      )
    )
})

const config = {
  mapPropsToValues: () => ({ secret: "", fragments: 6, threshold: 3 }),
  validationSchema: schema,
  handleSubmit: (values, { props }) => props.onSubmit(values)
}

const CreateForm = ({
  isOnline,
  handleSubmit,
  values,
  handleChange,
  errors,
  isSubmitting
}) => {
  const [formDisabled, setFormDisabled] = useState(isOnline)
  useEffect(
    () => {
      setFormDisabled(isOnline)
    },
    [isOnline]
  )

  return (
    <>
      <Heading mb={3}>Get started</Heading>
      <Box bg="gray.1" p={3} css={{ borderRadius: "5px" }}>
        <Heading fontWeight={700} fontSize={3} mb={2}>
          Read me first
        </Heading>
        <Text mt={0} mb={2} lineHeight={1.5}>
          To protect your security we suggest you disconnect from the internet
          temporarily to reduce any possible leaks of information. The app will
          still work if you are offline.
        </Text>

        {formDisabled && (
          <>
            <Text mb={2} lineHeight={1.5}>
              If you're aware of the risks you can click the button below to
              carry on with your internet connection enabled
            </Text>
            <Button
              onClick={() => setFormDisabled(false)}
              type="button"
              css={{ cursor: "pointer" }}
            >
              I know what I'm doing
            </Button>
          </>
        )}
      </Box>

      <form onSubmit={handleSubmit} css={{ maxWidth: "30em" }}>
        <Box mb={3} mt={3}>
          {errors.secret && <div>{errors.secret}</div>}
          <Text
            as="label"
            htmlFor="secret"
            fontSize={3}
            fontWeight={700}
            color="gray.3"
          >
            Your secret
          </Text>
          <AutoTextarea
            disabled={formDisabled}
            name="secret"
            id="secret"
            minRows={3}
            value={values.secret}
            onChange={handleChange}
          />
        </Box>
        <Box mb={3}>
          <Text
            as="label"
            htmlFor="fragments"
            fontSize={3}
            fontWeight={700}
            color="gray.3"
          >
            Number of fragments
          </Text>
          <Input
            disabled={formDisabled}
            name="fragments"
            id="fragments"
            type="number"
            min={2}
            max={10}
            value={values.fragments}
            onChange={handleChange}
          />
        </Box>

        <Box mb={3}>
          {errors.threshold && <div>{errors.threshold}</div>}
          <Text
            as="label"
            htmlFor="threshold"
            fontSize={3}
            fontWeight={700}
            color="gray.3"
          >
            Number of fragments required to reveal secret
          </Text>
          <Input
            disabled={formDisabled}
            name="threshold"
            id="threshold"
            type="number"
            min={1}
            max={10}
            value={values.threshold}
            onChange={handleChange}
          />
        </Box>

        <div>
          <Button
            disabled={isSubmitting || formDisabled}
            type="submit"
            css={p => ({
              cursor: "pointer",
              "&:disabled": {
                backgroundColor: p.theme.colors.lightBlue,
                cursor: "not-allowed"
              }
            })}
          >
            Create fragments
          </Button>
        </div>
      </form>
    </>
  )
}

export default withFormik(config)(CreateForm)
