import React from "react";
import { Field } from "formik";
import { Box, FormControl, FormLabel, Select, NumberInput, NumberInputField, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const HabitacionField = ({ index, remove }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Field name={`habitaciones[${index}].tipo`}>
        {({ field, form }) => (
          <FormControl>
            <FormLabel htmlFor={`habitaciones[${index}].tipo`}>Tipo de Habitación</FormLabel>
            <Select
              {...field}
              id={`habitaciones[${index}].tipo`}
              placeholder="Seleccione tipo de habitación"
              color="#909090"
              borderColor={"#707070"}
            >
              <option value="individual">Individual</option>
              <option value="doble">Doble</option>
              <option value="suite">Suite</option>
            </Select>
          </FormControl>
        )}
      </Field>

      <Field name={`habitaciones[${index}].cantidad`}>
        {({ field, form }) => (
          <FormControl>
            <FormLabel htmlFor={`habitaciones[${index}].cantidad`}>Cantidad</FormLabel>
            <NumberInput min={1} _placeholder={{ color: "#909090" }}>
              <NumberInputField {...field} id={`habitaciones[${index}].cantidad`} borderColor={"#707070"} />
            </NumberInput>
          </FormControl>
        )}
      </Field>

      <IconButton
        aria-label="Eliminar habitación"
        icon={<DeleteIcon />}
        mt={4}
        colorScheme="red"
        onClick={() => remove(index)}
      />
    </Box>
  );
};

export default HabitacionField;
