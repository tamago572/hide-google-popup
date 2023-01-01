# Googleでのポップアップを非表示にする拡張機能

「Googleアカウントにログイン」「GoogleがおすすめするChromeブラウザ」みたいなやつ

ユーザエージェントがPCの場合、次の要素を`document.getElementsByName("callout")[0];`で取得し、Styleを非表示にする(`display: none;`)。

```HTML
<iframe role="presentation" frameborder="0" scrolling="no" name="callout" src="https://ogs.google.co.jp/widget/callout?prid=19031780&pgid=19031779&puid=4383e907e530840&cce=1&dc=1&origin=https%3A%2F%2Fwww.google.co.jp&cn=callout&pid=1&spid=538&hl=ja" style="height: 100%; width: 100%;">…</iframe>
```

ユーザエージェントがスマホの場合は次の要素を`document.querySelector("mobile-promo")`で取得し、`element.remove();`要素を削除する。

```HTML
<mobile-promo jsname=​"EfADOe" jscontroller=​"PUpzg" jsaction=​"rcuQ6b:​npT2md">​<style data-iml=​"1672487165847">​…​</style>​<div jsname=​"EfADOe" class=​"hww53CMqxtL__mobile-promo hww53CMqxtL__visible" aria-label=​"プロモーション" role=​"region" jsaction=​"kI1s8:​yqIYpc;​ZWBgcc:​zCs3Cc">​…​</div>​</mobile-promo>​
```

ページの読み込みがすべて終わったらポップアップを非表示にするJavaScriptを実行する。

URLが[`http://google.com`](https://google.com/), [`http://google.co.jp`](https://google.co.jp)ならJavaScriptを実行。
