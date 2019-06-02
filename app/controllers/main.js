$(document).ready(function () {

    let danhSachNguoiDung = new DanhSachNguoiDung();
    let layDanhSachNguoiDung = danhSachNguoiDung.layDanhSachNguoiDung();
    layDanhSachNguoiDung.done( function (data) {
        localStorage.setItem("DSND",JSON.stringify(data));
        taoBang(data);
    }).fail(function (err) {
        console.log(err)
    });;

    $("#btnThemNguoiDung").click(() => {
        $(".modal-title").text("Thêm người dùng");
        let footer = `
            <button id="btnThemNV" type="button" class="btn btn-success" style="display: block;">Thêm người dùng</button>
            <button id="btnDong" type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
        `;
        $(".modal-footer").html(
            footer
        );        
    });


    //
    $("body").delegate("#btnThemNV", "click", () => {
        var taiKhoan = $("#TaiKhoan").val();
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val()
        var soDienThoai = $("#SoDienThoai").val();
        var loaiNguoiDung = $("#loaiNguoiDung").val();
        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDienThoai, loaiNguoiDung);
        console.log(nguoiDung);
        danhSachNguoiDung.themNguoiDung(nguoiDung);
        var tblDanhSachNguoiDung = $("#tblDanhSachNguoiDung");
        tblDanhSachNguoiDung.html("");
        layDanhSachNguoiDung.done( function (data) {
            taoBang(data);
        }).fail(function (err) {
            console.log(err)
        });;
    });

    $("body").delegate("#btnSua","click", function() { 
        let mND = JSON.parse(localStorage.getItem("DSND")) ;
        // console.log(mND); 
        let MSND = $(this).data().nguoidung;
        console.log(MSND);    
        let ND = mND.find(function(item){
            if(item.TaiKhoan == MSND){
                return true;
            }
        })
        console.log(ND);
        $(".modal-title").text("Cap Nhat Nguoi Dung: " + MSND);
        let footer = `
            <button id="btnCapNhat" type="button" class="btn btn-success" data-nguoidung="${MSND}" style="display: block;">CatNhat</button>
            <button id="btnDong" type="button" class="btn btn-danger" data-dismiss="modal">Đóng</button>
        `;
        $(".modal-footer").html(
            footer
        ); 
        $(".group-taiKhoa").hide()
        $("#HoTen").val(ND.HoTen);
        $("#MatKhau").val(ND.MatKhau);
        $("#Email").val(ND.Email)
        $("#SoDienThoai").val(ND.SoDT);  

    });
    $("body").delegate("#btnCapNhat", "click", function(){
        let MSND = $(this).data().nguoidung;
        var taiKhoan = MSND;
        var hoTen = $("#HoTen").val();
        var matKhau = $("#MatKhau").val();
        var email = $("#Email").val()
        var soDienThoai = $("#SoDienThoai").val();
        var loaiNguoiDung = $("#loaiNguoiDung").val();
        var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDienThoai, loaiNguoiDung);
        console.log(nguoiDung);
        danhSachNguoiDung.capNhatNguoiDung(nguoiDung);

    })


    $("body").delegate("#btnXoa","click", function(){
        let nguoiDung = $(this).data().nguoidung;
        danhSachNguoiDung.xoaNguoiDung(nguoiDung);
    })










    function taoBang(mangNguoiDung) {
        var tblDanhSachNguoiDung = $("#tblDanhSachNguoiDung");
        var rowData;
        var tbData;
        mangNguoiDung.forEach(obj => {
            let contentRow = `<td> ${mangNguoiDung.indexOf(obj) + 1} </td>`;
            for (const item in obj) {
                if (item == "TaiKhoan") {
                    contentRow += `<td class="taikhoan">${obj[item]}</td>`;
                } else { contentRow += `<td>${obj[item]}</td>`; }

            }
            let dataNguoiDung = obj.TaiKhoan;
            console.log(dataNguoiDung)
            contentRow += `<td>
                <button id="btnSua" class="btn btn-success" data-toggle="modal" data-nguoidung="${dataNguoiDung}" data-target="#myModal" >Sửa</button>
                <button id="btnXoa" type="button" class="btn btn-danger" data-nguoidung="${dataNguoiDung}" data-dismiss="modal">Xoa</button></td>
            `;
            rowData += `<tr>${contentRow}</tr>`;
            tbData += rowData;
        });
        tblDanhSachNguoiDung.html(rowData);
    }




});


// var url = "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung";
// var xhr = new XMLHttpRequest();
// var output = $("#mytest");
// xhr.onreadystatechange = myfunction;
// xhr.open('GET', url);
// xhr.send();
// function myfunction(){
//     if(xhr.readyState === XMLHttpRequest.DONE){
//         output.html(xhr.responseText);
//     }
// }