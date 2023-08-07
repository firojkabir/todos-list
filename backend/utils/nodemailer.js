const nodemailer = require("nodemailer");
const express = require("express");
const path = require("path");
const hbs = require("nodemailer-express-handlebars");

const viewPath = path.resolve(__dirname, "../templates/views/");
const partialsPath = path.resolve(__dirname, "../templates/partials");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extName: ".handlebars",
      layoutsDir: viewPath,
      defaultLayout: false,
      partialsDir: partialsPath,
      express,
    },
    viewPath: viewPath,
    extName: ".handlebars",
  })
);

module.exports = {
  transporter,
};
