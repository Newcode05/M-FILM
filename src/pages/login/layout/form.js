
const checkName = (input) => {
    const regExp = /^[\p{L}][\p{L}\s?]*$/u;
    if (regExp.test(input)) {
        return true;
    }
    else {
        return false;
    }
}
const checkEmail = (input) => {
    const regExp = /^(?!.*\.\.)[a-zA-Z][\w._+-]+@gmail.com$/;
    if (regExp.test(input)) return true;
    else return false;
}
const capitalizInput = (input) => {
    const str = input.toLowerCase().split(/\s+/);
    const data = str.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    console.log(data.join(' '));
    return data.join(' ');
}
const checkPassword = (input) => {
    const regExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#\$&])[a-zA-Z\d!&@#\$]{8,}$/;
    if (regExp.test(input)) return true;
    else return false;
}
function checkRegister(form, set) {
    if (!checkName(form['firstname'])) {
        set(1); return false;
    }
    else if (!checkName(form['lastname'])) {
        set(2); return false;
    }
    else if (!checkEmail(form['email'])) {
        set(3); return false;
    }
    else if (!checkPassword(form['password'])) {
        set(4);
        return false;
    }
    else if (!form['term']) {
        set(5);
        return false;
    }
    else {
        return true;
    }
}
function CheckLogin(form, set) {
    if (!checkEmail(form['email'])) {
        set(1);
        return false;
    }
    if (!checkPassword(form['password'])) {
        set(2);
        return false;
    }
    return true;
}
export { checkRegister, CheckLogin };