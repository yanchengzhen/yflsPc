
/**
 * 使用promise 重写ajax请求
 * @param url
 * @param data
 * @returns {Promise<any>}
 */
function ajax(url, data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: 'http://192.168.1.243/'+url,
            type: data == null ? 'GET' : 'POST',
            dataType: "json",
            data: data == null ? '' : data,
            async: true,
            // contentType: "application/json",
            success: function (resp) {
                resolve(resp);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                switch (XMLHttpRequest.status) {
                    case(500):
                        reject('服务器系统内部错误');
                        break;
                    case(403):
                        reject("无权限执行此操作");
                        break;
                    case(408):
                        reject("请求超时");
                        break;
                    default:
                        reject(XMLHttpRequest.responseText);
                }
            }
        });
    });
}
