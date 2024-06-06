import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SliderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="link" source="link" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
