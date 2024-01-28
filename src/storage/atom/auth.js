import { selector } from "recoil";
import { customApirequestHandler } from "../../utils";

export const authState = selector({
  key: "authState",
  get: async ({ get }) => {
    try {
      const response = await customApirequestHandler.get("/api/v1/user/check");
      return response;
    } catch (error) {
      throw error;
    }
  },
});
