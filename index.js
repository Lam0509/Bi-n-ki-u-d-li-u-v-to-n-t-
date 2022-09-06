// Bài 1
let a = parseInt(prompt('Nhập điểm môn Vật Lý'));
let b = parseInt(prompt('Nhập điểm môn Hóa học'));
let c = parseInt(prompt('Nhập đểm môn Sinh học'));
document.write('Điểm trung bình 3 môn là ' + ((a + b +c) / 3) + '<br>');
document.write('Tổng điểm 3 môn là ' + (a + b +c) + '<br>');

// Bài 2

let C = parseInt(prompt('Nhập giá trị độ C'));
let F = (9 * C) / 5 + 32;
document.write('Độ F là ' + F + '<br>')

// Bài 3

let width = parseInt(prompt('Nhập chiều rộng'));
let height = parseInt(prompt('Nhập chiều cao'));
let Area = width * height;
document.write('Diện tích hình tròn là ' + Area + '<br>')

// Bài 4

let r = parseInt(prompt('Nhập bán kính hình tròn'));
let CV = 2 & r * 3.14;
document.write('Chu vi hình tròn là ' + CV)

