import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="contentOld" multiline source="contentOld" />
        <TextInput label="slug" source="slug" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
