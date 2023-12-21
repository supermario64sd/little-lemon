import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const ContactStep = (props) => {
    const {formik, isDisabled} = props;
    return (
        <>
            <FormControl isInvalid={formik.touched.fName && formik.errors.fName}>
                <FormLabel htmlFor="fName">First Name<sup>*</sup></FormLabel>
                <Input type="text" id="fName" name="fName" onChange={formik.handleChange} 
                onBlur={formik.handleBlur} value={formik.values.fName} isDisabled={isDisabled}/>
                {formik.touched.fName && formik.errors.fName ? <div className="error">{formik.errors.fName}</div> : null}
            </FormControl>
            <FormControl isInvalid={formik.touched.lName && formik.errors.lName}>
                <FormLabel htmlFor="lName" >Last Name<sup>*</sup></FormLabel>
                <Input type="text" id="lName" name="lName" onChange={formik.handleChange} 
                value={formik.values.lName} onBlur={formik.handleBlur} isDisabled={isDisabled} />
                {formik.touched.lName && formik.errors.lName ? <div className="error">{formik.errors.lName}</div> : null}
            </FormControl>
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email<sup>*</sup></FormLabel>
                <Input type="text" id="email" name="email" onChange={formik.handleChange} 
                value={formik.values.email} onBlur={formik.handleBlur} isDisabled={isDisabled}/>
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            </FormControl>
        </>
    )
}

export default ContactStep;