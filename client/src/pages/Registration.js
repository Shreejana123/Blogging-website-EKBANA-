import React from 'react'
import {Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from 'axios';

function Registration() {

    const initialValues = {
        username: "",
        password: "",
        role: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(12).required(),
        password: Yup.string().min(4).max(20).required(),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            console.log(data);
        });
    };

    const validateData = (data) => {
        if('admin'){
            
        }else {

        }
        } 

  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateData={validateData}>
            <Form className="formContainer">
                <label>Username: </label>
                <ErrorMessage name="username" component="span"/>
                <Field
                    autoComplete="off"
                    id="inputCreatePost"
                    name="username"
                    placeholder="(Ex. John123...)"
                />
                <label>Password: </label>
                <ErrorMessage name="password" component="span"/>
                <Field
                    autoComplete="off"
                    type="password"
                    id="inputCreatePost"
                    name="password"
                    placeholder="Your Password..."
                />
                <label>Role: </label>
                <ErrorMessage name="username" component="span"/>
                <Field
                    autoComplete="off"
                    id="inputCreatePost"
                    name="role"
                    placeholder="(Admin or User)"
                />
                <button type='submit'>Sign Up</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Registration