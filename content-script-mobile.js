const pcPopup = document.getElementsByName('callout')[0];
const mobilePopup = document.querySelector('mobile-promo');

try {
    mobilePopup.remove();
    alert("ポップアップを非表示にしました。")
} catch(e) {
    alert("エラー")
}