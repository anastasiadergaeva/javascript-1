const password = 'simple';
const encryptedPassword = 'pmisel';

function getEncryptedPassword(password) {
    const passwordToArray = password.split('');
    const encryptedPassword = ((passwordToArray.splice(-2).concat(passwordToArray)).reverse()).join('');
    console.log(`Пароль зашифрован. Зашифрованный пароль: ${encryptedPassword}`);
}

getEncryptedPassword(password);

function decryptPassword(password) {
    const encryptedPasswordToArray = encryptedPassword.split('');
    const encryptedPasswordConcated = encryptedPasswordToArray.concat((encryptedPasswordToArray).splice(2));
    const encryptedPasswordConcatedSpliced = encryptedPasswordConcated.splice(-2);
    const decryptedPassword = (((encryptedPasswordConcatedSpliced).concat(encryptedPasswordConcated)).reverse()).join('');
    if (password == decryptedPassword) {
        console.log(`Пароли совпадают. Исходный пароль: '${password}', зашифрованный пароль: '${encryptedPassword}'`);
    }
    else {
        console.log('Не удалось расшифровать пароль');
    }
}

decryptPassword(password, encryptedPassword);