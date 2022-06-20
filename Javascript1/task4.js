// 1. Mengubah name, email dan hobby
// 2. mengambil data street dan city menggunakan destructoring

var data = {
    id : 1,
    name : 'Leanne Graham',
    username : 'Bret',
    email : 'Sincere@april.bis',
    address : {
        street : 'Kuala Light',
        suite : 'Apt. 556',
        city : 'Gwenborough',
        zipcode : '92998-3874',
    },
    phone : '1-770-736-5031 x56442',
    website : 'hildegard.org'
}

var newData = {
    name : 'Iran Situmorang',
    email : 'situmorangiran@gmail.com',
    hobby : ['Badminton', 'Catur', 'Swimming']
}

const combine = {...data, ...newData}

console.log(combine);

console.log("================================================");

const {street, city} = data.address;

console.log(street);
console.log(city);

