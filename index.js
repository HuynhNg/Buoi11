async function get()
{
  try{
    const response= await fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/");
    const data= await response.json();
    return data;
  }catch(err){
      console.error(err);
  }
}
async function GetFunction() {
    try {
        const response = await fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/");
        const data = await response.json();

        // Xóa nội dung cũ trong phần tử có id là "content"
        document.getElementById("content").innerHTML = "";

        // Duyệt qua mỗi object trong data và chỉ in ra id, email, và password
        data.forEach(obj => {
            const div = document.createElement("div");

            div.textContent = `ID: ${obj.id}, Email: ${obj.email}, Password: ${obj.password}`;
            document.getElementById("content").appendChild(div);
        });
    } catch (err) {
        console.error("Lỗi khi lấy dữ liệu từ API:", err);
    }
}

async function GetById() {
    try {
        var id= document.getElementById("ID").value;
        const response = await fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/"+ id);
        const data = await response.json();

        // Xóa nội dung cũ trong phần tử có id là "content"
        document.getElementById("content").innerHTML = "";

        const div = document.createElement("div");
        div.style.display="flex";
        div.style.gap="20px";
        div.textContent = `ID: ${data.id}, Email: ${data.email}, Password: ${data.password}`;
        document.getElementById("content").appendChild(div);

    } catch (err) {
        console.error("Lỗi khi lấy dữ liệu từ API:", err);
    }
}

async function DeleteById()
{
    let id = document.getElementById("ID").value;
    try {
        const response = await fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/"+id, {
            method: "DELETE",
        });
    } catch (err) {
        console.error(err);
    }
    GetFunction();
}

async function PostObj() {
    let Email= document.getElementById("ObjEmail").value;
    let Password = document.getElementById("ObjPassword").value;
    try {
        let response = await fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/", {
            method: "POST",
            body: JSON.stringify({
            email: Email,
            password: Password
        }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        GetFunction();
    } catch (err) {
        console.error(err);
    }
}

async function UpdateById() {
    let Id = document.getElementById("IdUp").value; // Thêm .value để lấy giá trị của ô nhập liệu
    let Email = document.getElementById("EmailUp").value;
    let Password = document.getElementById("PasswordUp").value;
    try {
        let response = await fetch("https://65f001c5ead08fa78a516efe.mockapi.io/api/v1/users/" + Id, {
            method: "PUT",
            body: JSON.stringify({
                email: Email,
                password: Password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        GetFunction();
    } catch (err) {
        console.error(err);
    }
}
