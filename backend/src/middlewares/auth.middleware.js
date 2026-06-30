import jwt from "jsonwebtoken";
import UserRepository from "../repositories/user.repository.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import asyncHandler from "../utils/asyncHandler.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,

      "Unauthorized Request.",
    );
  }

  const decodedToken = jwt.verify(
    token,

    process.env.JWT_ACCESS_SECRET,
  );

  const user = await UserRepository.findById(decodedToken.userId);
  if (!user) {
    throw new ApiError(
      HTTP_STATUS.UNAUTHORIZED,

      "Invalid Access Token.",
    );
  }

  req.user = user;

  next();
});

export default verifyJWT;
