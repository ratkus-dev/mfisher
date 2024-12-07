const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
const PORT = 3010; // Сервер будет работать на http://localhost:3001/

const upload = multer({
  limits: { fileSize: 100 * 1024 * 1024 }, // Ограничение на 100MB
});
// Middleware для обработки данных формы
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Настройка маршрута для обработки формы
app.post("/order-form", upload.array("files", 3), async (req, res) => {
  const { "user-name": name, "user-email": email, "user-phone": phone, "user-comment": comment, budget, "user-nda": nda } = req.body;
  const files = req.files;

  // Конфигурация почтового сервера
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Используйте ваш почтовый сервис
    auth: {
      user: "vitalii.sementsov@gmail.com", // Укажите ваш email
      pass: "Vitaly2722383V@@", // Пароль приложения (не личный пароль)
    },
  });

  const mailOptions = {
    from: `"Website Contact Form" <your-email@gmail.com>`, // От кого
    to: "vitaly@ratkus.com.ua", // Кому
    subject: "New Form Submission", // Тема письма
    text: `
      Имя: ${name}
        Email: ${email}
        Телефон: ${phone}
        Комментарий: ${comment}
        Бюджет: ${budget}
        NDA: ${nda ? "Подписан" : "Не подписан"}
      `,
    attachments: files.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
    })),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email!" });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
