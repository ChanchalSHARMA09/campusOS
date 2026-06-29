import UserRepository from "../repositories/user.repository.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

const registerUserService = async (userData) => {
  const { fullName, email, password } = userData;

  if (!fullName || !email || !password) {
    throw new ApiError(HTTP_STATUS.BAD_REQUEST, "All fields are required.");
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await UserRepository.findByEmail(normalizedEmail);

  if (existingUser) {
    throw new ApiError(
      HTTP_STATUS.CONFLICT,
      "User already exists with this email.",
    );
  }

  const newUser = await UserRepository.create({
    fullName: fullName.trim(),
    email: normalizedEmail,
    password,
  });

  const createdUser = await UserRepository.findById(newUser._id);

  return createdUser;
};

export { registerUserService };
