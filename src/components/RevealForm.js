import React, { useState } from "react"
import "styled-components/macro"
import { Button, Box, Text, Flex } from "rebass"
import { withFormik, FieldArray } from "formik"
import { AutoTextarea } from "./FormElements"
import get from "lodash/get"
import QRUpload from "./QRUpload"
import QRCamera from "./QRCamera"

const config = {
  mapPropsToValues: () => ({ fragments: [""] }),
  handleSubmit: () => {}
}

const FragmentField = ({
  i,
  value,
  name,
  onChange,
  setFieldValue,
  setFieldError,
  onRemove,
  hasMultipleRows
}) => {
  const [showCamera, setShowCamera] = useState(false)
  const handleQrUpload = async res => {
    try {
      const data = await res
      setFieldValue(name, data.text)
    } catch (error) {
      setFieldError(name, "Could not detect a QR code")
    }
  }

  const handleScanQR = result => {
    setFieldValue(name, result.text)
    setTimeout(() => setShowCamera(false), 1500)
  }

  return (
    <>
      <Text fontWeight={700} color="gray.3" mb={1}>
        Fragment #{i + 1}
      </Text>
      <Flex mb={3}>
        <Box width={3 / 4} pr={4}>
          <AutoTextarea
            minRows={2}
            value={value}
            name={name}
            onChange={onChange}
          />
        </Box>
        <Box width={1 / 4}>
          <QRUpload onChange={handleQrUpload} />
          <Button
            type="button"
            onClick={() => setShowCamera(prev => !prev)}
            css={{ cursor: "pointer" }}
            mb={2}
            width={1}
          >
            Scan QR
          </Button>
          {showCamera && (
            <QRCamera
              onClose={() => setShowCamera(false)}
              onResult={handleScanQR}
            />
          )}

          {(i > 0 || hasMultipleRows) && (
            <Button
              type="button"
              border="3px solid"
              borderColor="blue"
              bg="white"
              color="blue"
              fontWeight={400}
              onClick={() => onRemove(i)}
              css={{ cursor: "pointer" }}
              width={1}
            >
              Remove
            </Button>
          )}
        </Box>
      </Flex>
    </>
  )
}

const RevealForm = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  setFieldValue,
  setFieldError
}) => {
  const hasMultipleRows = values.fragments.length > 1
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray
        name="fragments"
        render={arrayHelpers => (
          <>
            {values.fragments.map((f, i) => (
              <Box
                mb={3}
                css={p => ({
                  borderBottom: "1px solid",
                  borderColor: p.theme.colors.gray[2]
                })}
                key={i}
              >
                {get(errors, `fragments[${i}]`, null) && (
                  <Text color="red" mb={2}>
                    {errors.fragments[i]}
                  </Text>
                )}
                <FragmentField
                  i={i}
                  value={values.fragments[i]}
                  name={`fragments[${i}]`}
                  setFieldValue={setFieldValue}
                  setFieldError={setFieldError}
                  onChange={handleChange}
                  onRemove={arrayHelpers.remove}
                  hasMultipleRows={hasMultipleRows}
                />
              </Box>
            ))}

            <Button
              mr={3}
              type="submit"
              border="3px solid"
              borderColor="blue"
              css={{ cursor: "pointer" }}
            >
              Reveal secret
            </Button>
            <Button
              type="button"
              border="3px solid"
              borderColor="blue"
              bg="white"
              color="blue"
              fontWeight={400}
              css={{ cursor: "pointer" }}
              onClick={() => arrayHelpers.push("")}
            >
              Add new fragment
            </Button>
          </>
        )}
      />
    </form>
  )
}

export default withFormik(config)(RevealForm)
