import { FormLabel, Input, FormControl, Select } from "@chakra-ui/react";
const TimeStep = (props)=>{
    const {formik, isDisabled} = props;

    return (
        <>
        <FormControl isInvalid={formik.touched.date && formik.errors.date}>
        <FormLabel htmlFor="date">Choose Date<sup>*</sup></FormLabel>
        <Input type="date" id="date" name="date" 
        onChange={formik.handleChange} value={formik.values.date} 
        onBlur={formik.handleBlur} isDisabled={isDisabled}/>
        {formik.touched.date && formik.errors.date? <div className="error">{formik.errors.date}</div> : null}
    </FormControl>
    <FormControl isInvalid={formik.touched.time && formik.errors.time}>
        <FormLabel htmlFor="time">Choose Time<sup>*</sup></FormLabel>
        <Select id="time" name="time" onChange={formik.handleChange} 
        value={formik.values.time} onBlur={formik.handleBlur} isDisabled={isDisabled}>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>

        </Select>
        {formik.touched.time && formik.errors.time ? <div className="error">{formik.errors.time}</div> : null}
    </FormControl>
        </>
        
    )
}

export default TimeStep;
