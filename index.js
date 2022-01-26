// Bài 1
// Khối 1: số ngày làm do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: lương = lương 1 ngày * số ngày làm
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: tiền lương nhân viên


const wageEl=document.getElementById("pay");
wageEl.onclick = function(evt){
    console.log(evt.target);
    const day = +document.getElementById("day").value;
    const calcWage = day*100_000;
    const wrapperEl = document.getElementById("result-wrapper");
    const resultwageEl = document.getElementById("resultwage");
    wrapperEl.style.display = "block";
    resultwageEl.innerHTML = calcWage.toLocaleString("en-US");
}


// Bài 2
// Khối 1: 5 số thực do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: giá trị trung bình = tổng 5 số thực / 5
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: giá trị trung bình

const calcEl = document.getElementById("calc-avg");
calcEl.onclick = function(evt){
    console.log(evt.target);
    const no1 = +document.getElementById("no1").value;
    const no2 = +document.getElementById("no2").value;
    const no3 = +document.getElementById("no3").value;
    const no4 = +document.getElementById("no4").value;
    const no5 = +document.getElementById("no5").value;
    const avg = ((no1+no2+no3+no4+no5)/5);
    const wrapperAvgEl = document.getElementById("wrapper-avg");
    const resultAvgEl = document.getElementById("result-avg");
    wrapperAvgEl.style.display = "block";
    resultAvgEl.innerHTML = avg;
}

// Bài 3
// Khối 1: số tiền USD do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: số tiền sau quy đổi = số tiền USD * 23500
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: VND

const exchangeEl = document.getElementById("exchange");
exchangeEl.onclick = function(evt){
    console.log(evt.target);
    const currency = +document.getElementById("currency").value;
    const exchangeValue = currency*23500;
    const wrapperExchangeEl = document.getElementById("wrapper-exchange");
    const resultExchangeEl = document.getElementById ("result-exchange");
    wrapperExchangeEl.style.display = "block";
    resultExchangeEl.innerHTML = exchangeValue;
}

// Bài 4
// Khối 1: Chiều cao và chiều rộng của hình chữ nhật do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức diện tích và chu vi hình chữ nhật
// * diện tích = chiều cao * chiều rộng; chu vi = (chiều cao + chiều rộng) * 2
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: Diện tích và chu vi hình chữ nhật

const calcRecEl = document.getElementById("calcRec");
calcRecEl.onclick = function(evt){
    console.log(evt.target);
    const dienTichEl = document.getElementById("dienTich");
    const chuViEl = document.getElementById("chuVi");
    const dai = +document.getElementById("dai").value;
    const rong = +document.getElementById("rong").value;
    if (dienTichEl.checked){
        const dienTich = dai * rong;
        const wrapEl1 = document.getElementById("wrap_rec1");
        wrapEl1.style.display = "block";
        const resultRecEl1 = document.getElementById("dienTich_rec");
        resultRecEl1.innerHTML = dienTich;
    } else if (chuViEl.checked){
        const chuVi = (dai + rong)/2;
        const wrapEl2 = document.getElementById("wrap_rec2");
        wrapEl2.style.display = "block";
        const resultRecEl2 = document.getElementById("chuVi_rec");
        resultRecEl2.innerHTML = chuVi;
    }
}

// Bài 5
// Khối 1: số có 2 chữ số do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: tổng 2 ký số = số hàng chục + số hàng đơn vị
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: tổng 2 ký số

const calcDigitEl = document.getElementById("calc_digit");
calcDigitEl.onclick = function(evt){
    console.log(evt.target);
    const digitResultEl = document.getElementById("digit_result");
    const digitInputEl = +document.getElementById("digit_input").value;
    const tens = digitInputEl/10;
    const unit = digitInputEl%10;
    const digitResult = tens + unit;
    digitResultEl.innerHTML = Math.floor(digitResult);
} 