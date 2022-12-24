import admin from "firebase-admin";
import { applicationDefault } from "firebase-admin/app";
import ServiceAccount from "./service-account-file.js";

admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
});

export default admin;
