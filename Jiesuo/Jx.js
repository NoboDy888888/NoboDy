脚本功能：简讯——解锁VIP
下载地址：https://is.gd/bs4iRX
软件版本：5.0.1
*******************************

[rewrite_local]

^https?:\/\/api\.tipsoon\.com\/api\/v1\/top\/ad url reject-img

^https:\/\/api\.tipsoon\.com\/api\/v1\/user\/info url script-response-body https://github.com/NoboDy888888/NoboDy/edit/main/Jiesuo/Jx.js
[mitm] 
hostname = api.tipsoon.com
*******************************/

body = $response.body.replace(/\"is_vip":\w+/g, '\"is_vip":true')

$done({body});
