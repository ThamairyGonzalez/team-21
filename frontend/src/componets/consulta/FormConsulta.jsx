import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Select,
  Textarea,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
  Center,
} from '@chakra-ui/react';

export const FormConsulta = () => {
  const validateForm = (values) => {
    const errors = {};
    if (!values.nombre) errors.nombre = 'Nombre es requerido';
    if (!values.apellido) errors.apellido = 'Apellido es requerido';
    if (!values.email) {
      errors.email = 'Email es requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }
    if (!values.telefono) errors.telefono = 'Teléfono es requerido';
    if (!values.tipoReserva) errors.tipoReserva = 'Tipo de reserva es requerido';
    if (!values.fechaIng) errors.fechaIng = 'Fecha de ingreso es requerida';
    if (!values.fechaSalida) errors.fechaSalida = 'Fecha de salida es requerida';
    if (!values.nroNoche) errors.nroNoche = 'Número de noches es requerido';
    if (!values.tipoHab) errors.tipoHab = 'Tipo de habitación es requerido';
    if (!values.canHab) errors.canHab = 'Cantidad de habitaciones es requerida';
    return errors;
  };

  return (
    <Center bg='primary.500'>

   
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        tipoReserva: "",
        razonSocial: "",
        fechaIng: "",
        fechaSalida: "",
        nroNoche: "",
        tipoHab: "",
        canHab: "",
        servicioAdicional: "",
        observacion: "",
      }}
      validate={validateForm}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <VStack spacing={4} align="stretch">
            <Field name="nombre">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.nombre && form.touched.nombre}>
                  <FormLabel htmlFor="nombre">Nombre</FormLabel>
                  <Input {...field} id="nombre" placeholder="Nombre" />
                  <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="apellido">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.apellido && form.touched.apellido}>
                  <FormLabel htmlFor="apellido">Apellido</FormLabel>
                  <Input {...field} id="apellido" placeholder="Apellido" />
                  <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input {...field} id="email" placeholder="Email" type="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="telefono">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.telefono && form.touched.telefono}>
                  <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                  <Input {...field} id="telefono" placeholder="Teléfono" />
                  <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="tipoReserva">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.tipoReserva && form.touched.tipoReserva}>
                  <FormLabel htmlFor="tipoReserva">Tipo de Reserva</FormLabel>
                  <Select {...field} id="tipoReserva" placeholder="Seleccione tipo de reserva">
                    <option value="individual">Individual</option>
                    <option value="grupal">Grupal</option>
                  </Select>
                  <FormErrorMessage>{form.errors.tipoReserva}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="razonSocial">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="razonSocial">Razón Social</FormLabel>
                  <Input {...field} id="razonSocial" placeholder="Razón Social" />
                </FormControl>
              )}
            </Field>

            <Field name="fechaIng">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.fechaIng && form.touched.fechaIng}>
                  <FormLabel htmlFor="fechaIng">Fecha de Ingreso</FormLabel>
                  <Input {...field} id="fechaIng" placeholder="Fecha de Ingreso" type="date" />
                  <FormErrorMessage>{form.errors.fechaIng}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="fechaSalida">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.fechaSalida && form.touched.fechaSalida}>
                  <FormLabel htmlFor="fechaSalida">Fecha de Salida</FormLabel>
                  <Input {...field} id="fechaSalida" placeholder="Fecha de Salida" type="date" />
                  <FormErrorMessage>{form.errors.fechaSalida}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="nroNoche">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.nroNoche && form.touched.nroNoche}>
                  <FormLabel htmlFor="nroNoche">Número de Noches</FormLabel>
                  <NumberInput min={1}>
                    <NumberInputField {...field} id="nroNoche" />
                  </NumberInput>
                  <FormErrorMessage>{form.errors.nroNoche}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="tipoHab">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.tipoHab && form.touched.tipoHab}>
                  <FormLabel htmlFor="tipoHab">Tipo de Habitación</FormLabel>
                  <Select {...field} id="tipoHab" placeholder="Seleccione tipo de habitación">
                    <option value="individual">Individual</option>
                    <option value="doble">Doble</option>
                    <option value="suite">Suite</option>
                  </Select>
                  <FormErrorMessage>{form.errors.tipoHab}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="canHab">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.canHab && form.touched.canHab}>
                  <FormLabel htmlFor="canHab">Cantidad de Habitaciones</FormLabel>
                  <NumberInput min={1}>
                    <NumberInputField {...field} id="canHab" />
                  </NumberInput>
                  <FormErrorMessage>{form.errors.canHab}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="servicioAdicional">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="servicioAdicional">Servicio Adicional</FormLabel>
                  <Input {...field} id="servicioAdicional" placeholder="Servicio Adicional" />
                </FormControl>
              )}
            </Field>

            <Field name="observacion">
              {({ field, form }) => (
                <FormControl>
                  <FormLabel htmlFor="observacion">Observación</FormLabel>
                  <Textarea {...field} id="observacion" placeholder="Observación" />
                </FormControl>
              )}
            </Field>

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Enviar
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
    </Center>
  );
};

