function add_user() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    alert(1);
    window.location="kwitter_room.html";
    return false;
} 