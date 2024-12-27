require("dotenv").config();
const nodemailer = require('nodemailer');

class serviceGmail {

    async sendMessage(name,firstName,  mail, phone, additionalInformation, paymentMethod, contact) {

        try{

            console.log(name,firstName,  mail, phone, additionalInformation, paymentMethod, contact);

            const transporter =  nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })

            const mailOptions = {
                from: process.env.EMAIL,
                to: mail,
                subject: 'Контакт',
                text: `${name} ${firstName}\nТелефон: ${phone}\nПочта: ${mail}\nДополнительная информация: ${additionalInformation}\nМетод оплаты: ${paymentMethod}\nКонтактное лицо: ${contact}`
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.error('Ошибка при отправке: ' + error);
                }

                console.log('Сообщение отправлено:'+ info.response);

                transporter.close();

            })

        }catch(e){

            console.error("Ошибка: " + e)

        }

    }

}

module.exports = new serviceGmail()