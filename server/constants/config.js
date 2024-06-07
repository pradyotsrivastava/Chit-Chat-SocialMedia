const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:8080",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const MYTOKEN = "chit - chat - token";

export { corsOptions, MYTOKEN };
