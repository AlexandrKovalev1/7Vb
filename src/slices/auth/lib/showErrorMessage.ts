export const showErrorMessage = (formik: any, name: string) => {
  return formik.touched[name] ? formik.errors[name] && formik.errors[name] : ''
}
