import realtorRoutes from "./api/realtor/RealtorRoutes.js";
import userRoutes from "./api/user/UserRoutes.js";
import premissesRoutes from "./api/premisses/PremissesRoutes.js";
import premissesTypeRoutes from "./api/premisses.type/PremissesTypeRoutes.js";
import premissesLikedRoutes from "./api/premisses.liked/LikedPremissesRoutes.js";
import mediaRoutes from "./api/media/MediaRoutes.js";
import reviewRoutes from "./api/review/ReviewRoutes.js";
import authRoutes from "./auth/routes/AuthRoutes.js";
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
// MIDDLEWARE
const app = express();
// ROUTES
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", authRoutes);
app.use("/api", realtorRoutes);
app.use("/api", userRoutes);
app.use("/api", premissesRoutes);
app.use("/api", premissesTypeRoutes);
app.use("/api", reviewRoutes);
app.use("/api", premissesLikedRoutes);
app.use("/api", mediaRoutes);
// START SERVER
const port = 8000;
app.listen(port, function () {
    console.log("Server is listening on port ".concat(String(port)).concat(";\n").concat("Link: 'http://localhost:").concat(String(port)).concat("'"));
});
//# sourceMappingURL=server.js.map