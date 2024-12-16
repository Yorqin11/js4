const name = prompt('Ismingizni kiriting');
const name2 = prompt('Birorta harf kiriting');  
if (name.includes(name2)) {
    alert(`${name} ismingizda ${name2} harfi mavjud`);
} else {
    alert(`${name} ismingizda ${name2} harfi mavjud emas`);
}
