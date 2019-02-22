const axios = require("axios");

module.exports = {
    async callApiGet(url) {

        try {
            return await axios.get(url);
        } catch (error) {
            console.log(error);
        }

    },

    async callApiPost(url,data) {

        try {
            return await axios.post(url,data);
        } catch (error) {
            console.log(error);
        }

    },

    async callApiPut(url, data) {

        try {
            return await axios.put(url, data);
        } catch (error) {
            console.log(error);
        }

    },

    async callApiDelete(url, data) {

        try {
            return await axios.delete(url);
        } catch (error) {
            console.log(error);
        }

    }
};
