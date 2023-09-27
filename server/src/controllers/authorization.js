import { config } from "dotenv";
config();

export const loginRequest = async (req, res) => {
  try {
    
    
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
