// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(3000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "mmohxx20@gmail.com",
//     pass: "wac@2002"
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });


// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "mmohxx20@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   console.log('Received request:', req.body);
//   res.status(200).json({ code: 200, message: 'Message sent successfully' });
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
// require('dotenv').config();
// const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(3000, () => console.log("Server Running on port 3000"));

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log("Error verifying email configuration:", error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => { // Notez la route '/contact'
//   console.log('Received request:', req.body); // Journal pour vérifier les données reçues

//   const name = req.body.firstName + " " + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;

//   const mail = {
//     from: name,
//     to: process.env.EMAIL_USER,
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ code: 500, message: 'Internal Server Error' });
//     } else {
//       res.status(200).json({ code: 200, message: 'Message sent successfully' });
//     }
//   });
// });

// module.exports = router;



require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Server running on port 3000"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Error verifying email configuration:", error);
  } else {
    console.log("Ready to send emails");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mailOptions = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ code: 500, message: 'Internal Server Error' });
    } else {
      res.status(200).json({ code: 200, message: 'Message sent successfully' });
    }
  });
});
