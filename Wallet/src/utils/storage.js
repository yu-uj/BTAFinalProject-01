
// // 저장
// await chrome.storage.sync.set({ [key]: [value] }, function () {
//     if (chrome.runtime.error) {
//       console.log('Runtime error.');
//     }
// });
  
//   // 가져오기
//   chrome.storage.sync.get([key], function(result) {
//     console.dir(result);
// });

// chrome.storage.sync.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });

// chrome.storage.sync.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

// // local storage에 특정 key와 그에 대한 value 저장하기
// localstorage.setItem("key", "value")

// // local storage에 특정 key에 대한 value 가져오기
// localstorage.getItem("key")

// // local storage에 저장되어 있는 특정 key와 그에 대한 value 삭제하기
// localstorage.removeItem("key")

// //chrome.storage.sync.get('key', callbackfunction())
// chrome.storage.sync.get('defaultnewtab', storage => {
//   if (storage.defaultnewtab) {
//     chrome.tabs.update({ url: 'chrome-search://local-ntp/local-ntp.html' });
//   }
// });

// // password 저장
// export function setPassword (myPassword) {
//   const password = myPassword;
//   chrome.storage.sync.set({ password: myPassword });
//   console.log('set pw')
// }

// // publickey 저장

// // privatekey 저장

// // wallet account 저장

// // login 상태 저장