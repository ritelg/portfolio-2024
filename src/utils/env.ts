import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
    MAILER_TO: z.string(),
    MAILER_FROM: z.string(),
    RESEND_API_KEY: z.string(),
    // NEXT_ENV: z.string(),
  },
  client: {
    // Nothing here yet
  },
  // Maybe you can use just `runtimeEnv` if there is a MAJ.
  // Please follow the docs : https://env.t3.gg/docs/nextjs#create-your-schema
  experimental__runtimeEnv: {
    // Nothing here yet, we just need to put client env here
  },
});
