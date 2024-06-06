import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SliderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="link" source="link" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
