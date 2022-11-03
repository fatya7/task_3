const judul = document.getElementById('judul');
const H3 = document.querySelector('h3');
const H3Text = document.querySelector('h3#text');
const myBtn = document.getElementById('btn');
const myBtn2 = document.getElementById('btn2');
const myBtn3 = document.getElementById('btn3');
const myBtn4 = document.getElementById('btn4');
const myImg = document.querySelector('div', 'img');    

function ubah(){
    judul.innerHTML="Hai, Saya Fatya Asti Utami";
    H3.innerHTML="Mahasiswa prodi Teknik Informatika";
}

function photo(){
    myImg.innerHTML='<img src="Fatya Asti Utami.jpg" alt="saya cantik" title="ini saya">';
}

function form(){
    let divElement = document.createElement('div');
    divElement.classList.add('container', 'center', 'form');
    divElement.innerHTML = '<h2>Hubungi Saya</h2>';
    let formElement = `
    <form method="get" class="form">
        Nama:
        <input type="text" name="nama" id="nama" placeholder="Ketik nama anda"/>
        <p>Pilih Gender Anda</p>
        <input type="radio" name="pil" id="Pria" value="Pria" />
        <label for="Pria">
            Pria
        </label> &emsp;
        <input type="radio" name="pil" id="Wanita" value="Wanita" />
        <label for="Wanita">
            Wanita
        </label>
        <br> 
        <textarea name="pesan" id="pesan" cols="30" rows="10" placeholder="Tinggalkan pesan anda untuk saya"></textarea>
        <br>
        <input type="submit" value="kirim" />
        </form>`;
    divElement.insertAdjacentHTML("beforeend", formElement);
    let containerDiv = document.querySelector('.container');
    containerDiv.appendChild(divElement);
}

function gaya(){
    var styles = `html{margin: 0;padding: 0;}
    body{
        background-color: #F6E3C5 ;
    }
    img{
        width: 100px;
    }
    .center{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .container{
        flex-direction: column;
        padding: 10px;
    }
    .text{
        height: 100px;
        overflow: hidden;
        text-align: center;
        border-radius: 50px;
    }

    .text h3{
        font-size: 2em;
        line-height: 100px;
    }
    .text h3:nth-child(1){
        animation: text-gerak 10s infinite;
    }
    @keyframes text-gerak {
        0%{
            margin-top: 0;
        }
        25%{
            margin-top: -130px;
        }
        50%{
            margin-top: -280px;
        }
        75%{
            margin-top: -130px;
        }
        100%{
            margin-top: 0;
        }
    }
    .btn{
        margin: 10px;
        padding: 16px 32px;
        background-color: white;
        color: #3C4048;
        cursor: pointer;
        transition-duration: 0.5s;
    }
    .btn:hover{
        background-color: #6CC4A1;
        color: white;
    }
    .form{
        border-radius: 5px;
        background-color: #6CC4A1;
        padding: 20px;
        margin: 20px auto;
    }
    input[type=text], textarea {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        resize: none;
    }
    input[type=submit] {
        width: 100%;
        background-color: #00ABB3;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #87F2BD;
    }`;
    var styleSheet = document.querySelector('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}

myBtn.addEventListener("click", ubah);
myBtn2.addEventListener("click", photo);
myBtn3.addEventListener("click", form);
myBtn4.addEventListener("click", gaya);