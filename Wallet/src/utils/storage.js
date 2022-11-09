// 저장
await chrome.storage.sync.set({ [key]: [value] }, function () {
  if (chrome.runtime.error) {
    console.log('Runtime error.');
  }
});

// 가져오기
