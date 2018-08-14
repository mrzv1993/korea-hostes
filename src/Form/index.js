import React from "react";
import styled from "styled-components";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

class ContactForm extends React.Component {
  render() {
    return (
      <Form style={{ width: "600px" }}>
        <FormGroup>
          <Label for="name">Имя:</Label>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Емейл:</Label>
          <Input type="text" name="email" />
        </FormGroup>
        <FormGroup>
          <Label for="photo">Емейл:</Label>
          <Input type="file" name="photo" />
        </FormGroup>
        <Button type="submit">Отправить</Button>
      </Form>
    );
  }
}

export default ContactForm;
