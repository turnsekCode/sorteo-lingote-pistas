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

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const initState = { values: initValues };
export default function Formulario() {
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
      router.push("/paginados");
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
    <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <FormControl isRequired isInvalid={touched.name && !values.name}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.email && !values.email}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.subject && !values.subject}>
        <FormLabel>Subject</FormLabel>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb="4"
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Checkbox
        type="checkbox"
        required
        isChecked={checkedItems}
        name="checkbox"
        value={values.checkbox}
        onChange={(e) => setCheckedItems(e.target.checked)}
      >
        Acepta las políticas de privacidad
      </Checkbox>
      <FormErrorMessage>Required</FormErrorMessage>
      <Button
        variant="outline"
        colorScheme="blue"
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
        Submit
      </Button>
    </Container>
  );
}
