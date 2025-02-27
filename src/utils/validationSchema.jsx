import * as Yup from 'yup';

const productSchema = Yup.object().shape({
  product_name: Yup.string()
    .trim()
    .required('Product name is required'),
//   product_description: Yup.string()
//     .trim()
//     .required('Product description is required'),
//   product_img: Yup.array()
//     .of(Yup.string().url('Each image must be a valid URL'))
//     .min(1, 'At least one product image is required'),
  quantity: Yup.number()
    .integer('Quantity must be an integer')
    .min(0, 'Quantity cannot be negative')
    .required('Quantity is required'),
  product_condition: Yup.string()
    .trim()
    .required('Product condition is required'),
  price: Yup.number()
    .min(0, 'Price cannot be negative')
    .required('Price is required'),
  user_id: Yup.mixed()
    .nullable()
    .required('User ID is required'),
  product_category: Yup.string()
    .trim()
    .required('Product category is required'),
});

export {productSchema};