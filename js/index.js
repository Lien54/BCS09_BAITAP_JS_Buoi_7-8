            /*========= QUẢN LÍ TUYỂN SINH =========*/
document.getElementById('btnKetQuaDiem').onclick = function () {
    // input điểm chuẩn, khu vực, đối tượng, điểm 3 môn
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var khuVuc = document.getElementById('khuVuc').value * 1;
    var doiTuong = document.getElementById('doiTuong').value * 1;
    var diemMonThu1 = document.getElementById('diemMonThu1').value * 1;
    var diemMonThu2 = document.getElementById('diemMonThu2').value * 1;
    var diemMonThu3 = document.getElementById('diemMonThu3').value * 1;

    var ketQuaDiem = '';

    // progress
    /* 
    B1: chọn đối tượng và khu vực thì sẽ cộng điểm, không chọn thì k có điểm cộng
    B2: tính tổng điểm + khu vực + đối tượng
    */
    var tongDiem = 0;
    tongDiem = khuVuc + doiTuong + diemMonThu1 + diemMonThu2 + diemMonThu3;

    var ketQuaTrungTuyen = '';
    if (tongDiem >= diemChuan && diemMonThu1 > 0 && diemMonThu2 > 0 && diemMonThu3 > 0) {
        ketQuaTrungTuyen = 'đậu'
    } else if (tongDiem < diemChuan || diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
        ketQuaTrungTuyen = 'rớt'
    }

    // In kết quả ra màn hình
    ketQuaDiem = 'Bạn đã ' + ketQuaTrungTuyen + ' - Với tổng điểm là: ' + tongDiem + ' điểm.';
    document.getElementById('inDiem').innerHTML = ketQuaDiem;
}


            /*========= TÍNH TIỀN ĐIỆN =========*/
document.getElementById('btnTienDien').onclick = function () {
    // input họ tên, số điện người dùng nhập
    var hoTen = document.getElementById('hoTen').value;
    var soDien = document.getElementById('soDien').value;

    // progress
    var ketQua = '';
    var tienDien = 0;
    if (soDien < 50) {
        tienDien = soDien * 500;
    } else if (soDien >= 50 && soDien < 100) {
        tienDien = soDien * 650;
    } else if (soDien >= 100 && soDien < 200) {
        tienDien = soDien * 850;
    } else if (soDien >= 200 && soDien < 350) {
        tienDien = soDien * 1100;
    } else if (soDien >= 350) {
        tienDien = soDien * 1300;
    }

    // In kết quả ra màn hình
    ketQua = 'Họ tên khách hàng: ' + hoTen + ' - Tiền điện tháng này là: ' + tienDien + 'VND';
    document.getElementById('inTienDien').innerHTML = ketQua;
}


            /*========= TÍNH THUẾ THU NHẬP CÁ NHÂN =========*/
document.getElementById('btnTienThue').onclick = function () {
    // input họ tên, số điện người dùng nhập
    var hoVaTen = document.getElementById('hoVaTen').value;
    var tongThuNhap = document.getElementById('tongThuNhap').value;
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value;
    var ketQuaTienThue = '';

    // progress
    var thuNhapChiuThue = 0;
    var tienThue = 0;
    thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoiPhuThuoc * 1600000;
    if (thuNhapChiuThue < 60e+6) {
        tienThue = thuNhapChiuThue * 5 / 100;
    } else if (thuNhapChiuThue >= 60e+6 && thuNhapChiuThue < 1200e+6) {
        tienThue = thuNhapChiuThue * 10 / 100;
    } else if (thuNhapChiuThue >= 1200e+6 && thuNhapChiuThue < 2100e+6) {
        tienThue = thuNhapChiuThue * 15 / 100;
    } else if (thuNhapChiuThue >= 2100e+6 && thuNhapChiuThue < 3840e+6) {
        tienThue = thuNhapChiuThue * 20 / 100;
    } else if (thuNhapChiuThue >= 3840e+6 && thuNhapChiuThue < 6240e+6) {
        tienThue = thuNhapChiuThue * 25 / 100;
    } else if (thuNhapChiuThue >= 6240e+6 && thuNhapChiuThue < 9600e+6) {
        tienThue = thuNhapChiuThue * 30 / 100;
    } else if (thuNhapChiuThue > 960e+6) {
        tienThue = thuNhapChiuThue * 35 / 100;
    }

    // In kết quả ra màn hình
    ketQuaTienThue = 'Họ tên người nộp thuế: ' + hoVaTen + ' - Tiền thuế phải nộp là: ' + tienThue + 'VND';
    document.getElementById('inTienThue').innerHTML = ketQuaTienThue;
}


            /*========= TÍNH TIỀN CÁP =========*/
document.getElementById('btnTinhTienCap').onclick = function () {
    // input họ tên, số điện người dùng nhập
    var mySelect = document.getElementById('mySelect').value;
    var maKH = document.getElementById('maKH').value;
    var soKenh = document.getElementById('soKenh').value;
    var soKetNoi = document.getElementById('soKetNoi').value;
    var ketQuaTienCap = '';

    // progress
    var tienCap = 0;
    if (mySelect == 'user') {
        tienCap = (4.5 + 20.5) + (7.5 * soKenh);
    } else if (mySelect == 'company' && soKetNoi <= 10) {
        tienCap = (15 + 75) + (50 * soKenh);
    } else if (mySelect == 'company' && soKetNoi > 10) {
        tienCap = (15 + 75 + (soKetNoi - 10) * 5) + (50 * soKenh);
    }

    // In kết quả ra màn hình
    ketQuaTienCap = 'Mã khách hàng: ' + maKH + ' - Tiền cáp phải nộp là: ' + tienCap + '$';
    document.getElementById('inTienCap').innerHTML = ketQuaTienCap;
}