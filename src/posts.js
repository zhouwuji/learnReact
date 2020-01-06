import React from 'react'
import {
    Edit,
    SimpleForm,
    TextInput,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    Create,
    Filter
} from 'react-admin';

const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Edit>
);

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn/>
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name"/>
        </ReferenceInput>
    </Filter>
);

const PostList = props => (
    <List {...props} filters={<PostFilter/>}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="body"/>
        </Datagrid>
    </List>
);

const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);


export {PostEdit, PostList, PostCreate};
