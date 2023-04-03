import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {Button, TextField} from '@mui/material';
import axios from "axios";
import moment from "moment";
import BasicCard from "./uikit/card";
import "../custom.css"

interface FormValues {
    teamName: string;
    baseCity: string;
    teamCaptain: string;
    teamCaptainPhoneNo: string;
    manager: string;
    managerPhoneNo: string;
    managerEmail : string;
    comment: string;
}

const validationSchema = Yup.object().shape({
    teamName: Yup.string().required("Team Name is required"),
    baseCity: Yup.string().required("Base City Name is required"),
    teamCaptain: Yup.string().required("Team Captain Name is required"),
    teamCaptainPhoneNo: Yup.string().required("Team Captain Phone No is required"),
    manager: Yup.string().required("Team Manager Name is required"),
    managerPhoneNo: Yup.string().required("Team Manager Contact Info is required"),
    managerEmail: Yup.string().required("Team Manager Email is required").email('Email is invalid'),
    comment: Yup.string().optional()
});


const initialValues: FormValues = {
    teamName: "",
    baseCity: "",
    teamCaptain: "",
    teamCaptainPhoneNo: "",
    manager: "",
    managerPhoneNo: "",
    comment: "",
    managerEmail: ""
};

const tokenString : any = window.localStorage.getItem('profile');
const userToken = JSON.parse(tokenString)

const TCCRegForm = () => {
  
    const [formdata, setFormData] = useState<FormValues>();
    const [formdataSubmitted, setFormdataSubmitted] = useState(false);
  


    const onSubmit = async(values: FormValues) => {
        const registrationData = {
            name : userToken.name,
            email: userToken.email,
            picture: userToken.picture,
            tcc : {
                team_name : values.teamName,
                base_city : values.baseCity,
                captain: values.teamName,
                captain_phone_no: values.teamCaptainPhoneNo,
                manager_name: values.manager,
                manager_phone_no: values.managerPhoneNo,
                manager_email: values.managerEmail,
                comments: values.comment,
                registration_time: (moment().format("DD-MM-YYYY hh:mm:ss")).toString()
            }
        }

        await axios.post("https://tambangla.onrender.com/v1/tcc", registrationData).then((response) => {
            if (response.status == 201){
                setFormData(values)
                setFormdataSubmitted(true)
            }
        });    
    };

  return (
    !formdataSubmitted?
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form >
          <Field
            as={TextField}
            name="teamName"
            label="Team Name"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.teamName && Boolean(formik.errors.teamName)}
            helperText={formik.touched.teamName && formik.errors.teamName}
          />
          <Field
            as={TextField}
            name="baseCity"
            label="Base City"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.baseCity && Boolean(formik.errors.baseCity)}
            helperText={formik.touched.baseCity && formik.errors.baseCity}
          />
          <Field
            as={TextField}
            name="teamCaptain"
            label="Team Captain"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.teamCaptain && Boolean(formik.errors.teamCaptain)}
            helperText={formik.touched.teamCaptain && formik.errors.teamCaptain}
          />
          <Field
            as={TextField}
            name="teamCaptainPhoneNo"
            label="Team Captain Phone No"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.teamCaptainPhoneNo && Boolean(formik.errors.teamCaptainPhoneNo)}
            helperText={formik.touched.teamCaptainPhoneNo && formik.errors.teamCaptainPhoneNo}
          />
          <Field
            as={TextField}
            name="manager"
            label="Manger Name"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.manager && Boolean(formik.errors.manager)}
            helperText={formik.touched.manager && formik.errors.manager}
          />
          <Field
            as={TextField}
            name="managerPhoneNo"
            label="Manger Phone No"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.managerPhoneNo && Boolean(formik.errors.managerPhoneNo)}
            helperText={formik.touched.managerPhoneNo && formik.errors.managerPhoneNo}
          />
          <Field
            as={TextField}
            name="managerEmail"
            label="Manger Email"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.managerEmail && Boolean(formik.errors.managerEmail)}
            helperText={formik.touched.managerEmail && formik.errors.managerEmail}
          />
        
          <Field
            as={TextField}
            name="comment"
            label="Comments and Suggestions"
            fullWidth
            sx={{ m: 1 }}
            error={formik.touched.managerPhoneNo && Boolean(formik.errors.managerPhoneNo)}
            helperText={formik.touched.managerPhoneNo && formik.errors.managerPhoneNo}
          />
          <Button
            variant="contained"
            // color="primary"
            type="submit"
            sx={{ m: 1, backgroundColor: "#0D3580"}}
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    : 

    <BasicCard 
      userName={userToken.name}
      picture= {userToken.picture}
      teamName= {formdata?.teamName}
      baseCity= {formdata?.baseCity}
      captain= {formdata?.teamCaptain}
      captainPhoneNo= {formdata?.teamCaptainPhoneNo}
      managerName= {formdata?.manager}
      managerPhoneNo= {formdata?.managerPhoneNo}
      mangerEmail= {formdata?.managerEmail}
      registrationTime= {(moment().format("DD-MM-YYYY hh:mm:ss")).toString()} 
    />

  );
  
};

export default TCCRegForm;