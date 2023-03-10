const functions = require("firebase-functions");

import * as functions from "firebase-functions";
import {createTransport, getTestMessageUrl} from "nodemailer";

import * as cors from "cors";
const corsHandler = cors({origin: true});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

class SendCustomerEnquiryDto {
  name = '';
  email = ''
  subject = ''
  message = ''
}

export const helloWorld = functions.https.onRequest(
  async (request, response) => {
    corsHandler(request, response, async () => {
      functions.logger.info("Hello logs!", {structuredData: true});

      const payload: SendCustomerEnquiryDto = request.body;

      // create reusable transporter object using the default SMTP transport
      const transporter = createTransport({
        host: "livingcareservices.org",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "admin@livingcareservices.org", // generated ethereal user
          pass: "merquri1z", // generated ethereal password
        },
      });

      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: `${payload.name} | Customer Enquiry <support@livingcareservices.org>`,
        replyTo: payload.email,
        to: "victoria.tetteh@livingcareservices.org",
        cc: "victor.ntiamoah@livingcareservices.org",
        bcc: "duke.ababio@livingcareservices.org",
        subject: payload.subject,
        text: payload.message,
        html: `<p>${payload.message}</p>`,
      });

      console.log("Message sent: %s", info.messageId);

      console.log("Preview URL: %s", getTestMessageUrl(info));

      response.status(200).send(request.body);
    });
  }
);
