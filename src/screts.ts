import { dotenv } from "dotenv";

dotenv.config({ path: ".env" });

export const PORT = process.env.PORT;
export const JWT = process.env.JWT_SECRET!;
