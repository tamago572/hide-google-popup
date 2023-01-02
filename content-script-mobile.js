const pcPopup = document.getElementsByName('callout')[0];
const mobilePopup = document.querySelector('mobile-promo');

try {
    mobilePopup.remove();
    console.log("ポップアップを非表示にしました");
} catch(e) {
    console.log("ポップアップが存在しないか、エラーが発生しました。");
}