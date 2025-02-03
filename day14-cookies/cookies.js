function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return "";
}

// 이름을 입력하면 쿠키에 저장하는 함수
function saveName() {
    let username = document.getElementById("username").value;
    document.cookie = `username=${username}; expires=Fri, 31 Dec 2025 23:59:59 GMT`;
    
    // 쿠키 저장 후 확인
    let storedName = getCookie("username"); // 쿠키에서 저장된 이름 가져오기
    if (storedName === username) {
        alert("이름이 저장되었습니다! (확인: " + storedName + ")");
    } else {
        alert("이름 저장에 실패했습니다. 다시 시도해주세요.");
    }
}


function showMessage() {
    let username = getCookie("username");
    if (username) {
        document.getElementById("message").innerText = `환영합니다., ${username}님!`;
    } else {
        document.getElementById("message").innerText = "이름을 입력하고 저장해주세요.";
    }
}

function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    alert("쿠키가 삭제되었습니다.");
    showMessage();
}

window.onload = showMessage;