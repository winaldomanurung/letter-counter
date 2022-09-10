let a = "aaabbccaca";

const countLetter = (input) => {
  // Ubah input menjadi huruf kecil semua
  let word = input.toLowerCase();
  // Object untuk menyimpan data jumlah huruf
  let obj = {};

  for (let i = 0; i < word.length; i++) {
    const hasKey = obj.hasOwnProperty(word[i]);

    // Jika suatu huruf sudah ada di dalam object, maka tambahkan valuenya
    if (hasKey) {
      obj[word[i]] = obj[word[i]] + 1;
    }
    // Jika suatu huruf belum ada di dalam object, maka tambahkan sebagai key dan valuenya adalah 1
    else {
      obj[word[i]] = 1;
    }
  }

  // ubah object menjadi string sesuai format output
  let toString = (obj) =>
    Object.entries(obj)
      .map(([letter, amount]) => `${letter}= ${amount}`)
      .join(", ");

  return toString(obj);
};

console.log(countLetter(a));
