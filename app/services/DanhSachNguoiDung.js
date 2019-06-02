function DanhSachNguoiDung() {

    this.layDanhSachNguoiDung = function () {
        return $.ajax({
            type: "GET",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            // data: "data",
            // dataType: "JSON",
            beforeSend: function(){
                $("tblDanhSachNguoiDung").html("<h3>Dang tai du lieu</h3>")
            }
            // success: function (response) {
            // }
        })
    };

    this.themNguoiDung = function (NguoiDung){
        $.ajax ({
            type: "POST",
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            data: NguoiDung,
        })
        .done(function(data){
            if(data == "tai khoan da ton tai !"){
                alert (data);
            } else {
                location.reload();
            }
        })
        .fail(function(err){
            console.log(err);
        });
    };

    this.xoaNguoiDung = function(NguoiDung){
        $.ajax({
            type: "DELETE",
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${NguoiDung}`,
        }).done(function(data){
        })
    }

    this.capNhatNguoiDung = function(nguoidung){
        $.ajax({
            type: "PUT",
            data: nguoidung,
            contentType: "application/json",
            dataType: JSON,
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
        })
        .DONE(function(){
            console.log(data)
        })
    }

    //sua : contentType: "application/json" --- type: JSON

};

