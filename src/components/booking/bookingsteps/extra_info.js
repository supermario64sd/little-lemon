import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
const ExtraStep = (props) => {
    const {formik,isDisabled} = props;
    return (
        <>
            <FormControl>
                <FormLabel isInvalid={formik.touched.guests && formik.errors.guests} htmlFor="guests">Number of Guests</FormLabel>
                <Input type="number" placeholder="1" min="1"
                    max="10" id="guests" name="guests" onChange={formik.handleChange} value={formik.values.guests} onBlur={formik.handleBlur} isDisabled={isDisabled} />
                {formik.touched.guests && formik.errors.guests ? <div className="error">{formik.errors.guests}</div> : null}
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" name="occasion" onChange={formik.handleChange}
                 value={formik.values.occasion} onBlur={formik.handleBlur} isDisabled={isDisabled} placeholder="Select Occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Select>
                {formik.touched.occasion && formik.errors.occasion ? <div className="error">{formik.errors.occasion}</div> : null}
            </FormControl>
        </>
    )
}

export default ExtraStep;