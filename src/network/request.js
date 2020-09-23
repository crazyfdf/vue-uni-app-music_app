const baseUrl = "http://localhost:3000";
// let token = uni.getStorageSync({
//   key: 'user',
//   success(res) {
//     console.log(res.data.token);
//     token=res.data.token
//   }
// });

export function request(config = {
  url: '',
  params: {},
  method: "post"
}) {
  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中',
      mask: true
    })

    // 模拟测试请求头
    // uni.setStorageSync('token','123');

    // 请求头里带一个cookie
    const cookie = uni.getStorageSync('cookie');

    // if(token) {
    // 	header.accessToken = token;
    // }
    uni.request({
      url: baseUrl + config.url + '?cookie=' + cookie,
      data: config.params,
      method: config.method,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => {
      setTimeout(() => {
        uni.hideLoading();
      }, 200);
      resolve(res[1].data);
    }).catch(err => {
      reject(err)
    })
  });
}