import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <div />
        <TextInput label="contentOld" multiline source="contentOld" />
        <TextInput label="slug" source="slug" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
