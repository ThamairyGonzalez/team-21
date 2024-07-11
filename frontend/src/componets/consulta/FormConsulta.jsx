import React, { useContext } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
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
  RadioGroup,
  HStack,
  Radio,
  CheckboxGroup,
  Checkbox,
  Text,
  Link,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import HabitacionField from "./HabitacionField";
import { MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import axios from "axios";
import { HabitacionContext } from "../../context/HabitacionContext";

export const FormConsulta = () => {
 const {rooms} = useContext(HabitacionContext);

  const validateForm = (values) => {
    const errors = {};
    if (!values.nombre) errors.nombre = "Nombre es requerido";
    if (!values.apellido) errors.apellido = "Apellido es requerido";
    if (!values.email) {
      errors.email = "Email es requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email inválido";
    }
    if (!values.telefono) errors.telefono = "Teléfono es requerido";
    if (!values.tipoReserva)
      errors.tipoReserva = "Tipo de reserva es requerido";
    if (!values.fechaIng) errors.fechaIng = "Fecha de ingreso es requerida";
    if (!values.fechaSalida)
      errors.fechaSalida = "Fecha de salida es requerida";
    if (!values.nroNoche) errors.nroNoche = "Número de noches es requerido";
    // if (!values.tipoHab) errors.tipoHab = "Tipo de habitación es requerido";
    // if (!values.canHab) errors.canHab = "Cantidad de habitaciones es requerida";
    return errors;
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formattedData = {
        client: {
          is_company: values.tipoReserva === 'empresa',
          email: values.email,
          phone: values.telefono,
          zip_code: "0000", // No tenemos este campo en el formulario original
          individual: values.tipoReserva === 'individual' ? {
            first_name: values.nombre,
            last_name: values.apellido,
          } :{
            first_name: values.nombre,
            last_name: values.apellido,
          },
          company: values.tipoReserva === 'empresa' ? {
            name: values.razonSocial,
            manager: "Virili Omar", // No tenemos este campo en el formulario original
            address: "Antonio", // No tenemos este campo en el formulario original
          } : null,
        },
        start_date: values.fechaIng,
        end_date: values.fechaSalida,
        people: 9, // Asumiendo que nroNoche es el número de personas
        payment_method: "s", // No tenemos este campo en el formulario original
        status: "A",
        room_types: values.habitaciones.map(hab => ({
         room_type_id: hab.tipo,     
          quantity: parseInt(hab.cantidad),
        })),
        
      };
      console.log('Datos enviados:', JSON.stringify(formattedData, null, 2));

      const response = await axios.post(
        'https://hotel-oceano.onrender.com/api-quotation/quotation/', 
        formattedData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      console.log('Respuesta del servidor:', response.data);
      // Aquí puedes manejar la respuesta exitosa, por ejemplo, mostrar un mensaje al usuario
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
    setSubmitting(false);
  };
  
  return (
    <Center bg="secondary.200" paddingTop={"10px"}>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          tipoReserva: "empresa",
          razonSocial: "",
          fechaIng: "",
          fechaSalida: "",
          nroNoche: "",
          tipoHab: "",
          canHab: "",
          habitaciones: [],
          servicioAdicional: [],
          observacion: "",
        }}
        validate={validateForm}
        onSubmit={handleSubmit}
        // onSubmit={(values, actions) => {
        //   console.log(values);
        //   actions.setSubmitting(false);
        // }}
      >
        {(props) => (
          <Form variants="nuevo">
            <VStack spacing={4} align="stretch">
              <Field name="nombre">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.nombre && form.touched.nombre}
                  >
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <Input
                      {...field}
                      id="nombre"
                      placeholder="Nombre"
                      _placeholder={{ color: "#909090" }}
                      borderColor={"#707070"}
                    />
                    <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="apellido">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.apellido && form.touched.apellido}
                  >
                    <FormLabel htmlFor="apellido">Apellido</FormLabel>
                    <Input
                      {...field}
                      id="apellido"
                      placeholder="Apellido"
                      _placeholder={{ color: "#909090" }}
                      borderColor={"#707070"}
                    />
                    <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      placeholder="Email"
                      type="email"
                      _placeholder={{ color: "#909090" }}
                      borderColor={"#707070"}
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="telefono">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.telefono && form.touched.telefono}
                  >
                    <FormLabel htmlFor="telefono">Teléfono</FormLabel>
                    <Input
                      {...field}
                      id="telefono"
                      placeholder="Teléfono"
                      _placeholder={{ color: "#909090" }}
                      borderColor={"#707070"}
                    />
                    <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="tipoReserva">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.tipoReserva && form.touched.tipoReserva
                    }
                  >
                    <FormLabel htmlFor="tipoReserva">Tipo de Reserva</FormLabel>
                    <RadioGroup
                      {...field}
                      id="tipoReserva"
                      onChange={(value) =>
                        form.setFieldValue("tipoReserva", value)
                      }
                      value={field.value}
                    >
                      <HStack spacing="24px">
                        <Radio
                          value="empresa"
                          borderColor={"primary.400"}
                          defaultChecked
                        >
                          Empresa
                        </Radio>
                        <Radio value="particular" borderColor={"primary.400"}>
                          Particular
                        </Radio>
                      </HStack>
                    </RadioGroup>
                    <FormErrorMessage>
                      {form.errors.tipoReserva}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              {props.values.tipoReserva === "empresa" && (
                <Field name="razonSocial">
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel htmlFor="razonSocial">Razón Social</FormLabel>
                      <Input
                        {...field}
                        id="razonSocial"
                        placeholder="Razón Social"
                        _placeholder={{ color: "#909090" }}
                        borderColor={"#707070"}
                      />
                    </FormControl>
                  )}
                </Field>
              )}
              <Field name="fechaIng">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.fechaIng && form.touched.fechaIng}
                  >
                    <FormLabel htmlFor="fechaIng">Fecha de Ingreso</FormLabel>
                    <Input
                      {...field}
                      id="fechaIng"
                      placeholder="Fecha de Ingreso"
                      type="date"
                      color="#909090"
                      _placeholder={{ color: "#909090" }}
                      borderColor={"#707070"}
                    />
                    <FormErrorMessage>{form.errors.fechaIng}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="fechaSalida">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.fechaSalida && form.touched.fechaSalida
                    }
                  >
                    <FormLabel htmlFor="fechaSalida">Fecha de Salida</FormLabel>
                    <Input
                      {...field}
                      id="fechaSalida"
                      placeholder="Fecha de Salida"
                      type="date"
                      color="#909090"
                      borderColor={"#707070"}
                    />
                    <FormErrorMessage>
                      {form.errors.fechaSalida}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="nroNoche">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.nroNoche && form.touched.nroNoche}
                  >
                    <FormLabel htmlFor="nroNoche">Número de Noches</FormLabel>
                    <NumberInput min={1} borderColor={"#707070"}>
                      <NumberInputField {...field} id="nroNoche" />
                    </NumberInput>
                    <FormErrorMessage>{form.errors.nroNoche}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="habitaciones">
                {({ form }) => (
                  <FormControl>
                    <FormLabel htmlFor="habitaciones">
                      Tipo y Cantidad de Habitaciones
                    </FormLabel>
                    <FieldArray name="habitaciones">
                      {({ push, remove }) => (
                        <>
                          {form.values.habitaciones.map((_, index) => (
                            <HabitacionField
                              key={index}
                              index={index}
                              remove={remove}
                              tipoHab={rooms}
                            />
                          ))}

                          <Text
                            color={"primary.500"}
                            fontWeight={900}
                            onClick={() => push({ tipo: "", cantidad: 1 })}
                            textDecor={"none"}
                            cursor={'pointer'}
                          >
                            Agregar Habitación
                            <PlusSquareIcon ml={15} />
                          </Text>
                        </>
                      )}
                    </FieldArray>
                  </FormControl>
                )}
              </Field>

              <Field name="servicioAdicional">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel htmlFor="servicioAdicional">
                      Servicio Adicional
                    </FormLabel>
                    <CheckboxGroup
                      {...field}
                      id="servicioAdicional"
                      onChange={(value) =>
                        form.setFieldValue("servicioAdicional", value)
                      }
                    >
                      <HStack spacing={5}>
                        <Checkbox
                          value="Desayuno incluido"
                          borderColor={"primary.400"}
                        >
                          Desayuno incluido
                        </Checkbox>
                        <Checkbox value="Traslado" borderColor={"primary.400"}>
                          Traslado
                        </Checkbox>
                        <Checkbox
                          value="Acceso a sala de reuniones"
                          borderColor={"primary.400"}
                        >
                          Acceso a sala de reuniones
                        </Checkbox>
                      </HStack>
                    </CheckboxGroup>
                  </FormControl>
                )}
              </Field>

              <Field name="observacion">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel htmlFor="observacion">Observación</FormLabel>
                    <Textarea
                      {...field}
                      id="observacion"
                      placeholder="Observación"
                      _placeholder={{ color: "#909090" }}
                      borderColor={"#707070"}
                    />
                  </FormControl>
                )}
              </Field>

              <Button
                m={4}
                variant={"filled"}
                isLoading={props.isSubmitting}
                type="submit"
              >
                Pedir Presupuesto
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Center>
  );
};
