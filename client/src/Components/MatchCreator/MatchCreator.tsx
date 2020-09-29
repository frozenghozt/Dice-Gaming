import React from "react";
import { Formik, Field, FormikHelpers } from "formik";
import { Container, Title, Content, Form, Button } from "./styles";

import Portal from "../Portal/Portal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const MatchCreator = ({ isOpen, closeModal }: Props) => {
  return isOpen ? (
    <Portal closeModal={closeModal}>
      <Container>
        <Title>
          <h3>Create duel</h3>
        </Title>
        <Content>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="John" />
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="john@acme.com"
                type="email"
              />
              <Button type="submit">Create</Button>
            </Form>
          </Formik>
        </Content>
      </Container>
    </Portal>
  ) : null;
};

export default MatchCreator;
