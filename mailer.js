var nodemailer = require('nodemailer');

var sendEmail = (email, un, pass) => {
  var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'aron.lo.li@hotmail.com',
      pass: process.env.EMAIL_PASS
    }
  });

  var html

  if (pass != process.env.IMPOSED_PASS) {
    html =
      `
      <h1>Tesis: Recolección de Patrones de Tecleo</h1>
      <p>Usuario: ${un}</p>
      <p>Contraseña: ${pass}</p>
      <p>Te agradezco mucho por participar en las pruebas.</p>
      <p>Número de contacto: 959291344</p>
      <p>Aron Lo</p>
      `
  } else {
    html =
      `
      <h1>Tesis: Recolección de Patrones de Tecleo</h1>
      <h3>Aviso: Fuiste seleccionado aleatoriamente para formar parte del grupo de personas que usarán la contraseña impuesta (${pass}) por el investigador.</h3>
      <p>Usuario: ${un}</p>
      <p>Contraseña: ${pass}</p>
      <p>Te agradezco mucho por participar en las pruebas.</p>
      <p>Número de contacto: 959291344</p>
      <p>Aron Lo</p>
      `
  }

  var mailOptions = {
    from: 'aron.lo.li@hotmail.com',
    to: email,
    subject: '¡Cuenta registrada existosamente!',
    html: html
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

exports.sendEmail = sendEmail