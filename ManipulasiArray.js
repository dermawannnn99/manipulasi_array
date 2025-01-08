// inisialsisasi array dengan nama yang sudah ada
let names = ["Alice", "Bob", "Charlie"];

// menambahkan nama baru ke dalam array
names.push("Diana", "Edward", "Asep"); //tambahkan nama array disini

// menampilkan semua nama dalam array
console.log("Daftar nama:");
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

// menghapus nama terakhir dari array
let removedName = names.pop();
console.log(`Nama yang dihapus: ${removedName}`);

// mnampilkan daftar nama setelah penghapusan
console.log("Daftar nama setelah penghapusan:");
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});
