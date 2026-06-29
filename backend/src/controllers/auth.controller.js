import asyncHandler from "../utils/asyncHandler.js";
import { registerUserService } from "../services/auth.service.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const user = await registerUserService(req.body);

  return res
    .status(HTTP_STATUS.CREATED)
    .json(
      new ApiResponse(
        HTTP_STATUS.CREATED,
        user,
        "User registered successfully",
      ),
    );
});
export { registerUser };
