const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const text = require('./functions/standart_functions')
const HTTPrequest1C = require('./functions/function_1c');

const token = '5702490586:AAFuAJTmWEDhxyz7aZxfsNNq-l-lzAjoSpc';
const webAppUrl = 'https://illustrious-mandazi-76fa81.netlify.app/#/';

const bot = new TelegramBot(token, {
    polling: true
});
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    let user_1c = 'неавторизован'
    if (text === '/start') {
        let answer = HTTPrequest1C.getUser(chatId)
        answer.then(function(result){
            user_1c = result
           console.log(chatId)
             bot.sendMessage(chatId, `Чат бот приветствует вас, ${user_1c.name}! Доступные вам функции:`, {
                reply_markup: {
                
                    inline_keyboard: [
                        [{
                            text: 'Создать пропуск гостя',
                            web_app: {
                                url: webAppUrl
                            }
                        }]
                    ]
                }
            })
        })
       
       
        // await bot.sendMessage(chatId, `Чат бот приветствует вас, ${user_1c}`, {})
       
        //Keyboard Button Web Apps
        // await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {

        //     reply_markup: {
                
        //         keyboard: [
        //             [{
        //                 text: 'Заполнить форму(обычная кнопка клавиатуры///)',
        //                 web_app: {
        //                     url: webAppUrl + '/form'
        //                 }
        //             }]
        //         ],
        //         resize_keyboard:true,
        //     }
            
        // })
        // //Inline Button Web Apps
    
    }

    // if(msg?.web_app_data?.data) {
    //     try {
    //         const data = JSON.parse(msg?.web_app_data?.data)
    //         console.log(data)
    //         await bot.sendMessage(chatId, 'Спасибо за обратную связь!')
    //         await bot.sendMessage(chatId, 'Ваша страна: ' + data?.country);
    //         await bot.sendMessage(chatId, 'Ваша улица: ' + data?.street);
    //         await bot.sendMessage(chatId, 'Субъект: ' + data?.subject);

    //         // setTimeout(async () => {
    //         //     await bot.sendMessage(chatId, 'Всю информацию вы получите в этом чате');
    //         // }, 3000)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
});

app.get('/web-data', async (req, res) => {
    // const {
    //     queryId,
    //     products = [],
    //     totalPrice
    // } = req.body;
    // try {
    //     await bot.answerWebAppQuery(queryId, {
    //         type: 'article',
    //         id: queryId,
    //         title: 'Успешная покупка',
    //         input_message_content: {
    //             message_text: ` Поздравляю с покупкой, вы приобрели товар на сумму ${totalPrice}, ${products.map(item => item.title).join(', ')}`
    //         }
    //     })
    //     return res.status(200).json({});
    // } catch (e) {
    //     return res.status(500).json({})
    // }
    res.json('web-data-get')
    console.log('web-data');
})
app.post('/web-data', async (req, res) => {
    // const {
    //     queryId,
    //     text
   
    // } = req.body;
    // try {
    //     await bot.answerWebAppQuery(queryId, {
    //         type: 'article',
    //         id: queryId,
    //         title: 'Успешная покупка',
    //         input_message_content: {
    //             message_text: text
    //         }
    //     })
    //     return res.status(200).json({});
    // } catch (e) {
    //     return res.status(500).json({})
    // }
    res.json('web-data-post')
})

const PORT = 8000;

// app.listen(PORT, () => console.log('сервер стартовал на  PORT ' + PORT))
app.listen(PORT, () => text.textStatusServer(PORT))

