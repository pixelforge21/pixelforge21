
export default function generateOTP(length = 6) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString(); // Only digits
  }
  return otp;
}

