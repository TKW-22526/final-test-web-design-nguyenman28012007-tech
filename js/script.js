// ===============================
// DANH SÁCH SẢN PHẨM
// PHẦN 1
// ===============================

const products = {

    "Hikvision DS-2CD1023G0E-I":{
        price:"950.000 VNĐ",
        image:"../assets/img/hikvision.jpg",
        description:"Camera IP Hikvision độ phân giải 2MP, hồng ngoại ban đêm 30m, chuẩn chống nước IP67, phù hợp lắp đặt trong nhà và ngoài trời."
    },

    "Dahua HAC-HFW1200TP":{
        price:"820.000 VNĐ",
        image:"../assets/img/dahua.jpg",
        description:"Camera HDCVI Dahua 2MP, hình ảnh Full HD sắc nét, hồng ngoại 20m, hoạt động ổn định."
    },

    "Imou Ranger 2":{
        price:"690.000 VNĐ",
        image:"../assets/img/imou.jpg",
        description:"Camera Wifi Imou Ranger 2 quay quét 360°, đàm thoại hai chiều, phát hiện chuyển động thông minh."
    },

    "EZVIZ C6N":{
        price:"780.000 VNĐ",
        image:"../assets/img/ezviz.jpg",
        description:"Camera Wifi EZVIZ C6N Full HD, quay 360°, theo dõi chuyển động tự động."
    },

    "KBVision KX-C2003":{
        price:"890.000 VNĐ",
        image:"../assets/img/KBVision.jpg",
        description:"Camera KBVision 2MP ngoài trời, hồng ngoại ban đêm 30m, chống nước IP67."
    },

    "Xiaomi Mi Home 360":{
        price:"850.000 VNĐ",
        image:"../assets/img/Xiaomi.jpg",
        description:"Camera Xiaomi Mi Home 360 độ Full HD, quan sát ngày đêm, lưu trữ thẻ nhớ."
    },

    "Hikvision DS-2CE16D0T":{
        price:"650.000 VNĐ",
        image:"../assets/img/Hikvision2.jpg",
        description:"Camera HDTVI Hikvision 2MP, hình ảnh sắc nét, phù hợp gia đình và cửa hàng."
    },

    "Dahua IPC-HFW1230S1":{
        price:"1.250.000 VNĐ",
        image:"../assets/img/Dahua2.jpg",
        description:"Camera IP Dahua 2MP, chuẩn nén H.265+, tiết kiệm băng thông và dung lượng lưu trữ."
    },

    "Imou Cruiser SE":{
        price:"1.190.000 VNĐ",
        image:"../assets/img/Imou2.jpg",
        description:"Camera Wifi ngoài trời Imou Cruiser SE quay 355°, chống nước IP66."
    },

    "EZVIZ H8C":{
        price:"1.390.000 VNĐ",
        image:"../assets/img/EZVIZ2.jpg",
        description:"Camera Wifi ngoài trời EZVIZ H8C quay quét 360°, phát hiện người bằng AI."
    },

    "KBVision KX-A2012":{
        price:"980.000 VNĐ",
        image:"../assets/img/KBVision2.jpg",
        description:"Camera KBVision thân trụ 2MP, hồng ngoại ban đêm, lắp đặt ngoài trời."
    },
        "Hikvision ColorVu":{
        price:"1.550.000 VNĐ",
        image:"../assets/img/Hikvision3.jpg",
        description:"Camera Hikvision ColorVu ghi hình có màu 24/7, độ phân giải 2MP, hình ảnh rõ nét cả ban đêm."
    },

    "Dahua Full Color":{
        price:"1.490.000 VNĐ",
        image:"../assets/img/Dahua3.jpg",
        description:"Camera Dahua Full Color quan sát ban đêm có màu, độ phân giải Full HD."
    },

    "Imou Cue 2":{
        price:"620.000 VNĐ",
        image:"../assets/img/Imou3.jpg",
        description:"Camera Wifi Imou Cue 2 trong nhà, AI phát hiện người, đàm thoại hai chiều."
    },

    "EZVIZ C3TN":{
        price:"990.000 VNĐ",
        image:"../assets/img/EZVIZ3.jpg",
        description:"Camera ngoài trời EZVIZ C3TN chống nước IP67, hồng ngoại ban đêm 30m."
    },

    "KBVision KX-CAi4203":{
        price:"1.750.000 VNĐ",
        image:"../assets/img/Hikvision3.jpg",
        description:"Camera AI KBVision nhận diện người và phương tiện, độ phân giải 4MP."
    },

    "Hikvision PTZ":{
        price:"4.500.000 VNĐ",
        image:"../assets/img/Hikvision4.jpg",
        description:"Camera Hikvision PTZ quay quét 360°, zoom quang học, giám sát khu vực rộng."
    },

    "Dahua PTZ":{
        price:"4.900.000 VNĐ",
        image:"../assets/img/Dahua44.jpg",
        description:"Camera Dahua PTZ điều khiển từ xa, quay quét tốc độ cao, zoom quang học."
    },

    "Imou Bullet 2":{
        price:"1.250.000 VNĐ",
        image:"../assets/img/Imou44.jpg",
        description:"Camera Wifi Imou Bullet 2 ngoài trời, chống nước IP67, hình ảnh Full HD."
    },

    "Xiaomi CW300":{
        price:"1.090.000 VNĐ",
        image:"../assets/img/Xiaomi55.jpg",
        description:"Camera Wifi Xiaomi CW300 ngoài trời, hỗ trợ đàm thoại hai chiều, chống nước."
    },

    "Hikvision DS-2CD2143G2":{
        price:"2.390.000 VNĐ",
        image:"../assets/img/Hikvision555.jpg",
        description:"Camera IP Dome Hikvision 4MP, AI nhận diện người và phương tiện, chuẩn IP67."
    }

}; // ===============================
// XEM CHI TIẾT SẢN PHẨM
// ===============================

function showDetail(name){

    // Lưu tên sản phẩm
    localStorage.setItem("productName", name);

    // Chuyển sang trang chi tiết
    window.location.href = "chi-tiet.html";

}

// ===============================
// HIỂN THỊ THÔNG TIN CHI TIẾT
// ===============================

function loadProduct(){

    let name = localStorage.getItem("productName");

    if(name == null){
        return;
    }

    let product = products[name];

    if(product == null){
        return;
    }

    // Hiển thị tên
    document.getElementById("productName").innerHTML = name;

    // Hiển thị giá
    document.getElementById("productPrice").innerHTML =
        "Giá: " + product.price;

    // Hiển thị mô tả
    document.getElementById("productDescription").innerHTML =
        product.description;

    // Hiển thị ảnh
    document.getElementById("productImage").src =
        product.image;

    // Hiển thị thương hiệu
    if(name.indexOf("Hikvision") != -1){

        document.getElementById("brand").innerHTML = "Hikvision";

    }
    else if(name.indexOf("Dahua") != -1){

        document.getElementById("brand").innerHTML = "Dahua";

    }
    else if(name.indexOf("Imou") != -1){

        document.getElementById("brand").innerHTML = "Imou";

    }
    else if(name.indexOf("EZVIZ") != -1){

        document.getElementById("brand").innerHTML = "EZVIZ";

    }
    else if(name.indexOf("KBVision") != -1){

        document.getElementById("brand").innerHTML = "KBVision";

    }
    else if(name.indexOf("Xiaomi") != -1){

        document.getElementById("brand").innerHTML = "Xiaomi";

    }

}

// ===============================
// MUA NGAY
// ===============================

function buyProduct(){

    let name = localStorage.getItem("productName");

    let result = confirm("Bạn có muốn mua " + name + " không?");

    if(result){

        alert("Đặt hàng thành công!\nChúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.");

    }
    else{

        alert("Cảm ơn bạn đã tham khảo sản phẩm.");

    }

}

// ===============================
// GỬI LIÊN HỆ
// ===============================

function sendContact(){

    alert("Cảm ơn bạn đã gửi thông tin.\nChúng tôi sẽ phản hồi sớm nhất.");

    return false;

} 