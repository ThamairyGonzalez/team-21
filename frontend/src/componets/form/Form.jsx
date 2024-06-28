import { Center } from "@chakra-ui/react";
import { Formik } from "formik";
import { useState } from "react";

export const Form = () => {
  const [envio, setEnvio] = useState();
  return (
    <Center bg='black'>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          fecha_ing: "",
          fecha_sali: "",
          can_hab: "",
        }}
        validate={(valores) => {}}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          setEnvio(true);
          setTimeout(() => setEnvio(false), 3000);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        )}
      </Formik>
    </Center>
  );
};
