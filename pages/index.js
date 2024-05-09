import React from "react";
import Formulario from "../components/Formulario";
import styles from "../styles/global.module.css";
import Image from "next/image";
import {
  Heading,
  FormControl,
  Container,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  Text,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };

const Home = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState(false);
  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }));
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      router.push("/gracias");
      toast({
        title: "Message sent",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  return (
    <>
      <div className={styles.cabecera}>
        <Image
          src="/assets/logo.png"
          alt="Fondo"
          className={styles.imagenLogo}
          width={163}
          height={30}
          priority
        />
      </div>
      <main className={styles.contenedorMain}>
        <div className={styles.contenedor}>
          <div className={styles.contenedorTexto}>
            <Image
              src="/assets/imagenGlobo.png"
              alt="Fondo"
              className={styles.imagenGlobo}
              width={127}
              height={171}
              priority
            />
            <h2>¡ENHORABUENA!</h2>
            <p>
              Si has llegado hasta aquí es porque has conseguido las{" "}
              <span className={styles.linea}> 3 pistas</span>
            </p>
            <p>
              Resuelve la siguiente ecuación con las pistas que has encontrado:
            </p>
            <div className={styles.contenedorFormPistas}>
              <div className={styles.contenedorPistas}>
                <p>Pista 1 + Pista 2 - Pista 3 =</p>
              </div>
              <div className={styles.contenedorInputPistas}>
                <FormControl
                  isRequired
                  isInvalid={touched.subject && !values.subject}
                  box-shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                >
                  <Input
                    width="61px"
                    background="#036F9A"
                    placeholder="?"
                    color="#fff"
                    height="51px"
                    className={styles.inputPista}
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                  />
                </FormControl>
              </div>
              <Image
                src="/assets/imagenPerson.png"
                alt="Fondo"
                className={styles.imagenPersona}
                width={102}
                height={137}
                priority
              />
            </div>
          </div>
          <div className={styles.contenedorFormulario}>
            <Heading>Déjanos tus datos para entrar en el sorteo</Heading>
            {error && (
              <Text color="red.300" my={4} fontSize="xl">
                {error}
              </Text>
            )}
            <FormControl
              isRequired
              position="relative"
              isInvalid={touched.name && !values.name}
              mb="4"
            >
              <AccountCircleIcon />
              <Input
                type="text"
                placeholder="Nombre y Apellido *"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Se Requiere</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={touched.message && !values.message}
              mb="4"
            >
              <LocalPhoneRoundedIcon />
              <Input
                placeholder="Teléfono *"
                type="text"
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Se Requiere</FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={touched.email && !values.email}>
              <EmailRoundedIcon />
              <Input
                placeholder="Correo electrónico *"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Se Requiere</FormErrorMessage>
            </FormControl>
            <Checkbox
              type="checkbox"
              required
              color="#fff"
              isChecked={checkedItems}
              name="checkbox"
              onChange={(e) => setCheckedItems(e.target.checked)}
            >
              He leído y acepto la{" "}
              <a
                className={styles.linkPoliticas}
                target="_blank"
                href="https://quickgold.es/politica-de-privacidad/"
              >
                política de privacidad
              </a>
            </Checkbox>
            <FormErrorMessage>Required</FormErrorMessage>
            <div className={styles.contenedorBoton}>
              <Button
                background=" #E83C82"
                variant="outline"
                borderRadius="13px"
                width="262px"
                color="#fff"
                isLoading={isLoading}
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.subject ||
                  !values.message ||
                  checkedItems === false
                }
                onClick={onSubmit}
              >
                ENVIAR
              </Button>
            </div>
          </div>
        </div>
      </main>
      <div className={styles.footer}></div>
    </>
  );
};

export default Home;
