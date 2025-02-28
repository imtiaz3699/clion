import * as Yup from "yup";

const productSchema = Yup.object().shape({
  product_name: Yup.string().trim().required("Product name is required"),
  quantity: Yup.number()
    .integer("Quantity must be an integer")
    .min(1, "Please add quantity.")
    .required("Quantity is required"),
  price: Yup.number()
    .min(1, "Please select price")
    .required("Price is required"),
  user_id: Yup.mixed().nullable().required("User ID is required"),
  product_category: Yup.string()
    .trim()
    .required("Product category is required"),
});
export { productSchema };
