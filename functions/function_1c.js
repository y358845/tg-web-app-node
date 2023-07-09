

class function_1c {

    // async uni_rersponse(payload, method, responseType = 'text') {
    //     const axios = require('axios') 
    //     const url_dev = "https://1c.rostgmu-uit.ru:4443/help_desk/hs/";
    //     return axios.post(`${url_dev}${method}`, payload, {
    //         credential: true,
    //         auth: {
    //             username: unescape(encodeURIComponent("Админ")),
    //             password: unescape(encodeURIComponent("1808")),
    //         },
    //         responseType: responseType,
    //     });
    // }

    async getUser(chatId) {
        const axios = require('axios') 
        const url_dev = "https://1c.rostgmu-uit.ru:4443/help_desk/hs/";
        const payload = {
            tgid: chatId.toString(),
            nameMethod: 'userid'
        };

        try {
            return await axios.post(`${url_dev}${payload.nameMethod}`, payload, {
              credential: true,
              auth: {
                username: unescape(encodeURIComponent("root")),
                password: unescape(encodeURIComponent("18024")),
              }
            }).then(res => {
              return res.data;
            })
          } catch (e) {
            return e;
          } finally {
  
          }

    }
}
module.exports = new function_1c
