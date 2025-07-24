export default function validateForm(fields) {
  const errors = {};

  for (const [key, value] of Object.entries(fields)) {
    if (!value || value.trim() === "") {
      errors[key] = ${key.charAt(0).toUpperCase() + key.slice(1)} is required.;
    }

    if (key === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = "Invalid email address.";
      }
    }

    if (key === "phone" && value) {
      if (!/^[6-9]\d{9}$/.test(value)) {
        errors.phone = "Invalid Indian mobile number.";
      }
    }

    if (key === "password" && value && value.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
  }

  return errors;
}


