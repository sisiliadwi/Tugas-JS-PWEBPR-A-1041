document.querySelector('.btn1').addEventListener('click', function () {
    document.getElementById('profesi').src = 'assets/teknisi.png'; 
    document.querySelector('.box').style.backgroundColor = '#E12E2E'; 
    document.querySelector('.teks').innerText = 'Anda adalah seorang Teknisi';
    document.querySelector('.title').innerText = 'Anda Berbohong!';
    document.querySelector('.btn1').style.display = 'none';
    document.querySelector('.btn2').style.display = 'none';
});

document.querySelector('.btn2').addEventListener('click', function () {
    document.getElementById('profesi').src = 'assets/mahasiswa.png'; 
    document.querySelector('.box').style.backgroundColor = '#6FD240'; 
    document.querySelector('.teks').innerText = 'Anda adalah seorang Mahasiswa';
    document.querySelector('.title').innerText = 'Anda Benar!';
    document.querySelector('.btn1').style.display = 'none';
    document.querySelector('.btn2').style.display = 'none';
});