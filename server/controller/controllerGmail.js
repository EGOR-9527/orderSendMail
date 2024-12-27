const serviceGmail = require("../service/serviceGmail")

class controllerGmail {

    async sendMail(req, res, next) {

        try {

            const {name,firstName,  mail, phone, additionalInformation, paymentMethod, contact} = req.body;

            // Validation
            if(!name ||!firstName ||!mail ||!phone ||!additionalInformation ||!paymentMethod ||!contact){
                throw new Error("Все поля обязательны для заполнения");
            }

            await serviceGmail.sendMessage(name,firstName,  mail, phone, additionalInformation, paymentMethod, contact)

        }catch(e){
            next(e);
            console.error("Ошибка: " + e)

        }

    }

}

module.exports = new controllerGmail();