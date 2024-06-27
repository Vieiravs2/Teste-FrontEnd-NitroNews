import { schema } from "../utils/schema";
import axiosInstance from './axiosInstance';

export default class User {
  static validate(user) {
    const { error } = schema.validate(user, { abortEarly: false });

    if (!error) {
      return { isValid: true, errors: [] };
    }

    const newErrors = error.details.map((detail) => detail.message);

    return { isValid: false, errors: newErrors };
  }

  static validatePassword(value) {
    return {
      length: value.length >= 8,
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value)
    };
  }

  static async submitFormData(formData) {
    try {
      const response = await axiosInstance.post('/', formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}