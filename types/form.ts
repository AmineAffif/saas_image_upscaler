import * as yup from 'yup';

export interface FormValues {
  file: File | null;
}

export const validationSchema = yup.object().shape({
  file: yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "The file is too large",
      (value) => value && (value as File).size <= 1024 * 1024 * 5 // 5MB
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        value && ["image/jpeg", "image/png"].includes((value as File).type)
    ),
});
