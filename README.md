# fe23_ajax

<h1>Hướng dẫn sử dụng GITHUB</h1>
Thực hành git <br/>
how to use git hub
lần đầu bạn phải config bằng câu lệnh:  <br/>
<code>
    git config --global user.name "Tên bạn" 
    git config --global user.email "Email của bạn"
</code>
<br/>
git clone link vùng chứa : nó sẽ nằm ở vùng working coppy
git status sẽ kiểm tra trang thái. Màu đỏ sẽ nằm ở vùng working coppy, màu xanh thì ở vùng staging area
git add . : để đưa tất cả về staging area (nếu git status hiện ra màu xanh là oki)
git commit -m :"Nội dung đưa lên lần này, viết gì cũng được" :tạo thông điệp, sẽ chuyển qua vùng local repository
git push origin <ten nhanh>: sẽ đưa lên nhánh chính, nó sẽ hiện yêu cầu nhập tên và tài khoản. ví dụ: git push origin master

///Nhánh trong github <br/>
<code>git branch</code> : kiểm tra nhánh
<code>git branch tennhanh</code> : tao nhanh
<code>git checkout tennhanh </code>: dung de chuyen nhanh
Để kiểm tra cập nhật thì đưa về nhánh master sau đó dùng lệnh git pull
Tuy nhiên, nếu đổi lại branch khác thì phải dùng git merge branch
