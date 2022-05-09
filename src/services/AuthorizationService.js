import $api from "./authService";

export default class AuthService {
    login (username, password) {
        return $api.post()
    }
}
