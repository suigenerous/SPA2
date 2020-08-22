import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Name is required'),
  pizzaSize: yup
    .string()
    .oneOf(['14', '16','18'], 'You must select a pizza Size'),
  specialInstructions: yup
    .string()
    .max(1000, 'Special Instructions must be less than 1000 characters'),
  toppings: yup
    .string()
})

export default formSchema
