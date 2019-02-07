export default {
    saveAuth: (token, tokenExpirationTime, userId) => {
        sessionStorage.setItem("token_key", JSON.stringify({ "token": token, "tokenExpirationTime": tokenExpirationTime, "user_id": userId }))
    },

    getToken: () => {
        let item = sessionStorage.getItem("token_key");
        let token = null;
        if (item) {
            token = JSON.parse(item).token;
        }
        return token;
    },

    isLogged: () => {
        let item = sessionStorage.getItem("token_key");
        if (item) {
            return true;
        }
        else {
            return false;
        }
    },

    getUserId: () => {
        let item = sessionStorage.getItem("token_key");
        let userId = null;
        if (item) {
            userId = JSON.parse(item).userId;
        }
        return userId;    }
}