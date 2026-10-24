/* @ds-bundle: {"format":4,"namespace":"RecantoFerrari","components":[{"name":"Logo"},{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"Chip"},{"name":"TextField"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Card"},{"name":"ListItem"},{"name":"Badge"},{"name":"Alert"},{"name":"Dialog"},{"name":"TopAppBar"},{"name":"Tabs"},{"name":"Calendar"},{"name":"DataTable"},{"name":"Menu"},{"name":"NavigationDrawer"},{"name":"Footer"},{"name":"Hero"},{"name":"RadioGroup"},{"name":"FileUpload"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k];
    return o;
  }

  /* ---------- Icon: Material Icons (Apache 2.0) paths, 24px grid ---------- */
  var PATHS = {
    home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    notifications: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
    event: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z',
    description: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    person: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    check: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    close: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    error: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
    check_circle: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    arrow_forward: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
    chevron_right: 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
    chevron_left: 'M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z',
    arrow_upward: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
    remove: 'M19 13H5v-2h14v2z',
    arrow_downward: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
    search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    local_parking: 'M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z',
    payments: 'M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z',
    settings: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
    logout: 'M17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
    edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    block: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z',
    lock: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z',
    visibility: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    visibility_off: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z',
    mail: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
    open_in_new: 'M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z',
    grass: 'M12 20H2v-2h5.75A8.032 8.032 0 0 0 2 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 0 1 .87 4.07h8v-2h-5.75A8.061 8.061 0 0 1 22 12.26zm-6.36-1.24a10.03 10.03 0 0 1 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 0 1 1.24-3.29z',
    pest_control: 'M21 15v-2h-3.07c-.05-.39-.12-.77-.22-1.14l2.58-1.49-1-1.73L16.92 10c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18L17 4.17l-1.41-1.41-1.72 1.72c-1.68-.89-3.1-.33-3.73 0L8.41 2.76 7 4.17l1.65 1.65A3.99 3.99 0 0 0 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28L4.71 8.63l-1 1.73 2.58 1.49c-.1.37-.17.75-.22 1.14H3v2h3.07c.05.39.12.77.22 1.14l-2.58 1.49 1 1.73L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l2.37 1.37 1-1.73-2.58-1.49c.1-.37.17-.75.22-1.14H21zm-8 2h-2v-6h2v6z',
    plumbing: 'M19.28 4.93-2.12-2.12c-.78-.78-2.05-.78-2.83 0L11.5 5.64l2.12 2.12 2.12-2.12 3.54 3.54a3.012 3.012 0 0 0 0-4.25zM5.49 13.77c.59.59 1.54.59 2.12 0l2.47-2.47-2.12-2.13-2.47 2.47c-.59.59-.59 1.54 0 2.13zM15.04 7.76-.71.71-.71.71L10.44 6c-.59-.6-1.54-.6-2.12-.01a1.49 1.49 0 0 0 0 2.12l3.18 3.18-.71.71-6.36 6.36c-.78.78-.78 2.05 0 2.83.78.78 2.05.78 2.83 0L16.45 12a.996.996 0 1 0 1.41-1.41l-2.82-2.83z',
    cleaning_services: 'M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z',
    cloud: 'M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
    expand_more: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z',
    link: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    person_add: 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    person_remove: 'M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm3 2v2h6v-2h-6zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z',
    key: 'M21 10h-8.35A5.99 5.99 0 0 0 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 0 0 5.65-4H13l2 2 2-2 2 2 4-4.04L21 10zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z',
    history: 'M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z',
    swap_horiz: 'M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z',
    group: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    water_drop: 'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zM7.83 14c.37 0 .67.26.74.62.41 2.22 2.28 2.98 3.64 2.87.43-.02.79.32.79.75 0 .4-.32.73-.72.75-2.13.13-4.62-1.09-5.19-4.12a.75.75 0 0 1 .74-.87z',
    photo_camera: 'M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 1 0 0-6.4zM9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
    calculate: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z',
    pets: 'M2 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0zM6.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0zM12.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0zM17 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0zM17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z'
  };
  function Icon(props) {
    var size = props.size || 24;
    var d = PATHS[props.name] || PATHS.info;
    return h('svg', {
      className: cx('rf-icon', props.className), width: size, height: size, viewBox: '0 0 24 24',
      'aria-hidden': props.label ? undefined : 'true', role: props.label ? 'img' : undefined, 'aria-label': props.label,
      focusable: 'false'
    }, h('path', { d: d, fill: 'currentColor' }));
  }
  Icon.names = Object.keys(PATHS);
  /* Ícones para escolher em serviços com adesão (lista oferecida ao síndico). */
  Icon.servicos = ['grass', 'pest_control', 'plumbing', 'cleaning_services', 'event'];

  /* ---------- Logo ---------- */
  function Houses(props) {
    var w = props.width || 188;
    var house = function (x, roof) {
      return [
        h('path', { key: 'w' + x, d: 'M' + (x + 8) + ' 47H' + (x + 60) + 'V70Q' + (x + 60) + ' 73 ' + (x + 57) + ' 73H' + (x + 11) + 'Q' + (x + 8) + ' 73 ' + (x + 8) + ' 70Z', className: 'rf-logo-wall' }),
        h('path', { key: 'r' + x, d: 'M' + (x + 34) + ' 0L' + (x + 63.445) + ' 48.75H' + (x + 4.555) + 'Z', className: roof })
      ];
    };
    return h('svg', { className: 'rf-logo-houses', viewBox: '0 0 188 73', width: w, height: w * 73 / 188, 'aria-hidden': 'true' },
      house(0, 'rf-logo-roof'), house(60, 'rf-logo-roof-center'), house(120, 'rf-logo-roof'));
  }
  function Logo(props) {
    var variant = props.variant || 'horizontal';
    var size = props.size || 'md';
    var label = 'Condomínio Recanto Ferrari';
    var deep = props.tone === 'deep';
    if (variant === 'simbolo') {
      return h('span', { className: cx('rf-logo', 'rf-logo-' + size, props.className), role: 'img', 'aria-label': label }, h(Houses, { width: size === 'sm' ? 48 : size === 'lg' ? 188 : 96 }));
    }
    return h('span', { className: cx('rf-logo', 'rf-logo-' + variant, 'rf-logo-' + size, deep && 'rf-logo-deep', props.className), role: 'img', 'aria-label': label },
      h(Houses, null),
      h('span', { className: 'rf-logo-words', 'aria-hidden': 'true' },
        h('span', { className: 'rf-logo-name' }, 'Recanto Ferrari'),
        props.tagline === false ? null : h('span', { className: 'rf-logo-tagline' }, 'Condomínio')));
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || 'filled';
    var size = props.size || 'md';
    var rest = omit(props, ['variant', 'size', 'icon', 'trailingIcon', 'fullWidth', 'className', 'children', 'as']);
    var Tag = props.as || (props.href ? 'a' : 'button');
    if (Tag === 'button' && !rest.type) rest.type = 'button';
    rest.className = cx('rf-btn', 'rf-state', 'rf-btn-' + variant, 'rf-btn-' + size, props.fullWidth && 'rf-btn-block', props.className);
    return h(Tag, rest,
      props.icon ? h(Icon, { name: props.icon, size: size === 'sm' ? 18 : 20 }) : null,
      h('span', null, props.children),
      props.trailingIcon ? h(Icon, { name: props.trailingIcon, size: size === 'sm' ? 18 : 20 }) : null);
  }

  function IconButton(props) {
    var variant = props.variant || 'standard';
    var rest = omit(props, ['variant', 'icon', 'label', 'className', 'selected']);
    rest.type = rest.type || 'button';
    rest['aria-label'] = props.label;
    rest['data-tooltip'] = props.label; // dica no mouseover e no foco do teclado (bundle.css)
    if (props.selected !== undefined) rest['aria-pressed'] = !!props.selected;
    rest.className = cx('rf-iconbtn', 'rf-state', 'rf-iconbtn-' + variant, props.selected && 'is-selected', props.className);
    return h('button', rest, h(Icon, { name: props.icon, size: 24 }));
  }

  /* ---------- Chip ---------- */
  function Chip(props) {
    var variant = props.variant || 'assist';
    var rest = omit(props, ['variant', 'icon', 'selected', 'className', 'children']);
    rest.type = 'button';
    if (variant === 'filter') rest['aria-pressed'] = !!props.selected;
    rest.className = cx('rf-chip', 'rf-state', 'rf-chip-' + variant, props.selected && 'is-selected', props.className);
    var lead = variant === 'filter' && props.selected ? 'check' : props.icon;
    return h('button', rest, lead ? h(Icon, { name: lead, size: 18 }) : null, h('span', null, props.children));
  }

  /* ---------- TextField ---------- */
  var fid = 0;
  function TextField(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = props.id || 'rf-field-' + (++fid);
    var id = idRef.current;
    var status = props.disabled ? 'disabled' : (props.status || 'default');
    var helpId = id + '-help';
    var rest = omit(props, ['label', 'helper', 'status', 'leadingIcon', 'multiline', 'className', 'id', 'rows', 'suffix']);
    rest.id = id;
    rest.className = 'rf-field-input';
    if (props.helper) rest['aria-describedby'] = helpId;
    if (status === 'error') rest['aria-invalid'] = 'true';
    var statusIcon = status === 'error' ? 'error' : status === 'success' ? 'check_circle' : null;
    var control = props.multiline ? h('textarea', Object.assign({ rows: props.rows || 4 }, rest)) : h('input', Object.assign({ type: 'text' }, rest));
    return h('div', { className: cx('rf-field', 'rf-field-' + status, props.required && 'rf-field-required', props.multiline && 'rf-field-multiline', props.className) },
      h('label', { className: 'rf-field-label', htmlFor: id }, props.label),
      h('div', { className: 'rf-field-box' },
        props.leadingIcon ? h(Icon, { name: props.leadingIcon, size: 20 }) : null,
        control,
        props.suffix ? h('span', { className: 'rf-field-suffix', 'aria-hidden': 'true' }, props.suffix) : null,
        statusIcon ? h(Icon, { name: statusIcon, size: 20, className: 'rf-field-status' }) : null),
      props.helper ? h('p', { className: 'rf-field-help', id: helpId }, props.helper) : null);
  }

  /* ---------- Checkbox & Switch ---------- */
  function Checkbox(props) {
    var rest = omit(props, ['label', 'className', 'supporting']);
    rest.type = 'checkbox';
    rest.className = 'rf-check-input';
    return h('label', { className: cx('rf-check', props.disabled && 'is-disabled', props.className) },
      h('input', rest),
      h('span', { className: 'rf-check-box', 'aria-hidden': 'true' }, h(Icon, { name: 'check', size: 16 })),
      h('span', { className: 'rf-check-text' }, props.label, props.supporting ? h('small', null, props.supporting) : null));
  }
  function Switch(props) {
    var rest = omit(props, ['label', 'className']);
    rest.type = 'checkbox';
    rest.role = 'switch';
    rest.className = 'rf-switch-input';
    return h('label', { className: cx('rf-switch', props.disabled && 'is-disabled', props.className) },
      h('span', { className: 'rf-check-text' }, props.label),
      h('input', rest),
      h('span', { className: 'rf-switch-track', 'aria-hidden': 'true' }, h('span', { className: 'rf-switch-thumb' }, h(Icon, { name: 'check', size: 14 }))));
  }

  /* ---------- Card ---------- */
  function Card(props) {
    var variant = props.variant || 'elevated';
    var Tag = props.href ? 'a' : (props.as || 'article');
    var rest = omit(props, ['variant', 'eyebrow', 'title', 'meta', 'media', 'actions', 'className', 'children', 'as', 'badge', 'icon', 'iconTone']);
    rest.className = cx('rf-card', 'rf-card-' + variant, props.href && 'rf-card-link rf-state', props.className);
    return h(Tag, rest,
      props.media ? h('div', { className: 'rf-card-media' }, props.media) : null,
      h('div', { className: 'rf-card-body' },
        (props.eyebrow || props.badge) ? h('div', { className: 'rf-card-top' },
          props.eyebrow ? h('span', { className: 'rf-card-eyebrow' }, props.eyebrow) : h('span'),
          props.badge || null) : null,
        props.icon ? h('div', { className: 'rf-card-head' },
          h('span', { className: cx('rf-card-icon', props.iconTone === 'primary' ? 'rf-card-icon-primary' : 'rf-card-icon-secondary') }, h(Icon, { name: props.icon, size: 28 })),
          h('div', { className: 'rf-card-head-text' },
            props.title ? h('h3', { className: 'rf-card-title' }, props.title) : null,
            props.meta ? h('p', { className: 'rf-card-meta' }, props.meta) : null)) : null,
        !props.icon && props.title ? h('h3', { className: 'rf-card-title' }, props.title) : null,
        !props.icon && props.meta ? h('p', { className: 'rf-card-meta' }, props.meta) : null,
        props.children ? h('div', { className: 'rf-card-content' }, props.children) : null),
      props.actions ? h('div', { className: 'rf-card-actions' }, props.actions) : null);
  }

  /* ---------- ListItem ---------- */
  function ListItem(props) {
    var Tag = props.href ? 'a' : (props.onClick ? 'button' : 'div');
    var rest = omit(props, ['icon', 'headline', 'supporting', 'trailing', 'overline', 'className', 'external', 'tone', 'selected']);
    if (props.selected) rest['aria-current'] = 'true';
    if (Tag === 'button') rest.type = 'button';
    var ext = !!(props.external && props.href);
    if (ext) { rest.target = '_blank'; rest.rel = 'noopener noreferrer'; }
    rest.className = cx('rf-list-item', Tag !== 'div' && 'rf-state rf-list-item-action', props.selected && 'is-selected', props.className);
    return h(Tag, rest,
      props.icon ? h('span', { className: cx('rf-list-lead', props.tone === 'secondary' && 'rf-list-lead-secondary') }, h(Icon, { name: props.icon, size: 24 })) : null,
      h('span', { className: 'rf-list-text' },
        props.overline ? h('span', { className: 'rf-list-overline' }, props.overline) : null,
        h('span', { className: 'rf-list-headline' }, props.headline),
        props.supporting ? h('span', { className: 'rf-list-supporting' }, props.supporting) : null,
        ext ? h('span', { className: 'rf-sr-only' }, ' (abre em outra aba)') : null),
      props.trailing !== undefined ? h('span', { className: 'rf-list-trail' }, props.trailing)
        : (Tag !== 'div' ? h(Icon, { name: ext ? 'open_in_new' : 'chevron_right', size: ext ? 20 : 24, className: 'rf-list-chevron' }) : null));
  }

  /* ---------- Badge ---------- */
  var BADGE_ICON = { success: 'check_circle', warning: 'warning', error: 'error', info: 'info' };
  function Badge(props) {
    var tone = props.tone || 'neutral';
    var icon = props.icon === false ? null : (props.icon || BADGE_ICON[tone]);
    return h('span', { className: cx('rf-badge', 'rf-badge-' + tone, props.className) },
      icon ? h(Icon, { name: icon, size: 14 }) : null, props.children);
  }

  /* ---------- Alert ---------- */
  var ALERT_ICON = { info: 'info', success: 'check_circle', warning: 'warning', error: 'error' };
  function Alert(props) {
    var tone = props.tone || 'info';
    return h('div', { className: cx('rf-alert', 'rf-alert-' + tone, props.className), role: tone === 'error' || tone === 'warning' ? 'alert' : 'status' },
      h(Icon, { name: ALERT_ICON[tone], size: 24, className: 'rf-alert-icon' }),
      h('div', { className: 'rf-alert-body' },
        props.title ? h('p', { className: 'rf-alert-title' }, props.title) : null,
        props.children ? h('div', { className: 'rf-alert-text' }, props.children) : null,
        props.action ? h('div', { className: 'rf-alert-action' }, props.action) : null),
      props.onClose ? h(IconButton, { icon: 'close', label: 'Fechar aviso', onClick: props.onClose, className: 'rf-alert-close' }) : null);
  }

  /* ---------- Dialog ---------- */
  function Dialog(props) {
    if (props.open === false) return null;
    var titleId = 'rf-dlg-' + (props.id || 't');
    var panel = h('div', { className: 'rf-dialog', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': titleId },
      props.icon ? h(Icon, { name: props.icon, size: 24, className: 'rf-dialog-icon' }) : null,
      h('h2', { className: 'rf-dialog-title', id: titleId }, props.title),
      props.children ? h('div', { className: 'rf-dialog-content' }, props.children) : null,
      props.actions ? h('div', { className: 'rf-dialog-actions' }, props.actions) : null);
    return h('div', { className: cx('rf-dialog-scrim', props.inline && 'rf-dialog-inline'), onClick: function (e) { if (e.target === e.currentTarget && props.onClose) props.onClose(); } }, panel);
  }

  /* ---------- TopAppBar ---------- */
  function TopAppBar(props) {
    var items = props.items || [];
    return h('header', { className: cx('rf-appbar', props.className) },
      h('div', { className: 'rf-appbar-inner' },
        h('a', { className: 'rf-appbar-brand', href: props.homeHref || '#', 'aria-label': 'Condomínio Recanto Ferrari, página inicial' }, h(Logo, { variant: 'horizontal', size: 'sm', tagline: false })),
        h('nav', { className: 'rf-appbar-nav', 'aria-label': 'Principal' },
          items.map(function (it) {
            var active = it.value === props.value;
            var lp = { key: it.value, href: it.href || '#', className: cx('rf-appbar-link', 'rf-state', active && 'is-active'), 'aria-current': active ? 'page' : undefined,
              onClick: props.onChange && !it.external ? function (e) { e.preventDefault(); props.onChange(it.value); } : undefined };
            if (it.external) { lp.target = '_blank'; lp.rel = 'noopener noreferrer'; }
            return h('a', lp, it.label,
              it.external ? h(Icon, { name: 'open_in_new', size: 16 }) : null,
              it.external ? h('span', { className: 'rf-sr-only' }, ' (abre em outra aba)') : null);
          })),
        h('div', { className: 'rf-appbar-actions' }, props.actions || null,
          h(IconButton, { icon: 'menu', label: 'Abrir menu', className: 'rf-appbar-menu', onClick: props.onMenu }))));
  }

  /* ---------- Tabs ---------- */
  function Tabs(props) {
    var items = props.items || [];
    return h('div', { className: cx('rf-tabs', props.className), role: 'tablist', 'aria-label': props.label },
      items.map(function (it) {
        var active = it.value === props.value;
        return h('button', { key: it.value, type: 'button', role: 'tab', 'aria-selected': active, tabIndex: active ? 0 : -1,
          className: cx('rf-tab', 'rf-state', active && 'is-active'), onClick: function () { props.onChange && props.onChange(it.value); } },
          it.icon ? h(Icon, { name: it.icon, size: 20 }) : null,
          h('span', null, it.label),
          it.count !== undefined ? h('span', { className: 'rf-tab-count' }, it.count) : null);
      }));
  }


  /* ---------- Calendar (date table) ---------- */
  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var DIAS = [['D', 'domingo'], ['S', 'segunda-feira'], ['T', 'terça-feira'], ['Q', 'quarta-feira'], ['Q', 'quinta-feira'], ['S', 'sexta-feira'], ['S', 'sábado']];
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function iso(y, m, d) { return y + '-' + pad2(m + 1) + '-' + pad2(d); }
  function parseIso(s) { var p = String(s).split('-'); return { y: +p[0], m: (+p[1] || 1) - 1, d: +p[2] || 1 }; }
  function todayIso() { var n = new Date(); return iso(n.getFullYear(), n.getMonth(), n.getDate()); }
  function Calendar(props) {
    var today = props.today || todayIso();
    var start = parseIso(props.month || props.value || today);
    var st = React.useState({ y: start.y, m: start.m }), view = st[0], setView = st[1];
    var fs = React.useState(null), focusIso = fs[0], setFocusIso = fs[1];
    var ls = React.useState(props.defaultValue || null), local = ls[0], setLocal = ls[1];
    var value = props.value !== undefined ? props.value : local;
    var gridRef = React.useRef(null);
    var unavailable = props.unavailable || [];
    var marked = props.marked || {};
    function isDisabled(d) {
      return unavailable.indexOf(d) >= 0 || (props.min && d < props.min) || (props.max && d > props.max);
    }
    function pick(d) {
      if (isDisabled(d)) return;
      if (props.value === undefined) setLocal(d);
      if (props.onChange) props.onChange(d);
    }
    function shift(delta) {
      var m = view.m + delta, y = view.y + Math.floor(m / 12);
      setView({ y: y, m: ((m % 12) + 12) % 12 });
    }
    var daysIn = new Date(view.y, view.m + 1, 0).getDate();
    var first = new Date(view.y, view.m, 1).getDay();
    var sel = value && parseIso(value);
    var tabDay = sel && sel.y === view.y && sel.m === view.m ? sel.d : (parseIso(today).y === view.y && parseIso(today).m === view.m ? parseIso(today).d : 1);
    React.useEffect(function () {
      if (!focusIso || !gridRef.current) return;
      var el = gridRef.current.querySelector('[data-date="' + focusIso + '"]');
      if (el) el.focus();
    }, [focusIso, view.y, view.m]);
    function onKey(e, d) {
      var step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[e.key];
      if (e.key === 'Home' || e.key === 'End') step = 0;
      if (step === undefined) return;
      e.preventDefault();
      var p = parseIso(d), t = new Date(p.y, p.m, p.d + step);
      if (e.key === 'Home') t = new Date(p.y, p.m, p.d - new Date(p.y, p.m, p.d).getDay());
      if (e.key === 'End') t = new Date(p.y, p.m, p.d + 6 - new Date(p.y, p.m, p.d).getDay());
      if (t.getMonth() !== view.m || t.getFullYear() !== view.y) setView({ y: t.getFullYear(), m: t.getMonth() });
      setFocusIso(iso(t.getFullYear(), t.getMonth(), t.getDate()));
    }
    var cells = [], i;
    for (i = 0; i < first; i++) cells.push(null);
    for (i = 1; i <= daysIn; i++) cells.push(i);
    while (cells.length % 7) cells.push(null);
    var rows = [];
    for (i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
    var title = MESES[view.m] + ' de ' + view.y;
    var titleId = 'rf-cal-' + view.y + view.m + (props.id || '');
    return h('div', { className: cx('rf-cal', props.className) },
      h('div', { className: 'rf-cal-head' },
        h('p', { className: 'rf-cal-title', id: titleId, 'aria-live': 'polite' }, title),
        h('div', { className: 'rf-cal-nav' },
          h(IconButton, { icon: 'chevron_left', label: 'Mês anterior', onClick: function () { shift(-1); } }),
          h(IconButton, { icon: 'chevron_right', label: 'Próximo mês', onClick: function () { shift(1); } }))),
      h('table', { className: 'rf-cal-grid', role: 'grid', 'aria-labelledby': titleId, ref: gridRef },
        h('thead', null, h('tr', null, DIAS.map(function (w, k) { return h('th', { key: k, scope: 'col', abbr: w[1] }, h('span', { 'aria-hidden': 'true' }, w[0]), h('span', { className: 'rf-sr' }, w[1])); }))),
        h('tbody', null, rows.map(function (row, r) {
          return h('tr', { key: r }, row.map(function (day, c) {
            if (!day) return h('td', { key: c, className: 'rf-cal-empty' });
            var d = iso(view.y, view.m, day);
            var disabled = isDisabled(d), isSel = d === value, isToday = d === today;
            var mark = marked[d];
            var tone = mark && (typeof mark === 'string' ? mark : mark.tone);
            var markLabel = mark && typeof mark === 'object' ? mark.label : null;
            var aria = day + ' de ' + MESES[view.m] + (isToday ? ', hoje' : '') + (unavailable.indexOf(d) >= 0 ? ', indisponível' : '') + (markLabel ? ', ' + markLabel : '');
            return h('td', { key: c, role: 'gridcell', 'aria-selected': isSel ? 'true' : undefined },
              h('button', {
                type: 'button', 'data-date': d, disabled: disabled, tabIndex: day === tabDay ? 0 : -1, 'aria-label': aria,
                'aria-current': isToday ? 'date' : undefined,
                className: cx('rf-cal-day', 'rf-state', isSel && 'is-selected', isToday && 'is-today', unavailable.indexOf(d) >= 0 && 'is-booked'),
                onClick: function () { pick(d); }, onKeyDown: function (e) { onKey(e, d); }
              }, h('span', null, day), tone ? h('i', { className: 'rf-cal-dot rf-cal-dot-' + tone, 'aria-hidden': 'true' }) : null));
          }));
        }))),
      props.legend ? h('ul', { className: 'rf-cal-legend' }, props.legend.map(function (l, k) {
        return h('li', { key: k }, h('i', { className: cx('rf-cal-key', 'rf-cal-key-' + l.kind), 'aria-hidden': 'true' }), l.label);
      })) : null);
  }


  /* ---------- DataTable ---------- */
  function DataTable(props) {
    var columns = props.columns || [];
    var rows = props.rows || [];
    var rowKey = props.rowKey || 'id';
    var ss = React.useState(props.defaultSort || null), sort = ss[0], setSort = ss[1];
    var sl = React.useState(props.defaultSelected || []), selLocal = sl[0], setSelLocal = sl[1];
    var selected = props.selected !== undefined ? props.selected : selLocal;
    var ps = React.useState(0), page = ps[0], setPage = ps[1];
    function setSelected(next) { if (props.selected === undefined) setSelLocal(next); if (props.onSelectionChange) props.onSelectionChange(next); }
    var sorted = rows.slice();
    if (sort) {
      var col = columns.filter(function (c) { return c.key === sort.key; })[0];
      var get = col && col.sortValue ? col.sortValue : function (r) { return r[sort.key]; };
      sorted.sort(function (a, b) {
        var x = get(a), y = get(b);
        var r = (typeof x === 'number' && typeof y === 'number') ? x - y : String(x).localeCompare(String(y), 'pt-BR', { numeric: true });
        return sort.dir === 'desc' ? -r : r;
      });
    }
    var pageSize = props.pageSize || 0;
    var pages = pageSize ? Math.max(1, Math.ceil(sorted.length / pageSize)) : 1;
    var pg = Math.min(page, pages - 1);
    var visible = pageSize ? sorted.slice(pg * pageSize, pg * pageSize + pageSize) : sorted;
    var ids = visible.map(function (r) { return r[rowKey]; });
    var allOn = ids.length > 0 && ids.every(function (id) { return selected.indexOf(id) >= 0; });
    var someOn = !allOn && ids.some(function (id) { return selected.indexOf(id) >= 0; });
    function toggleAll() {
      setSelected(allOn ? selected.filter(function (id) { return ids.indexOf(id) < 0; }) : selected.concat(ids.filter(function (id) { return selected.indexOf(id) < 0; })));
    }
    function toggle(id) { setSelected(selected.indexOf(id) >= 0 ? selected.filter(function (x) { return x !== id; }) : selected.concat(id)); }
    function sortBy(c) {
      if (!c.sortable) return;
      setSort(!sort || sort.key !== c.key ? { key: c.key, dir: 'asc' } : sort.dir === 'asc' ? { key: c.key, dir: 'desc' } : null);
      setPage(0);
    }
    var allRef = React.useRef(null);
    React.useEffect(function () { if (allRef.current) allRef.current.indeterminate = someOn; });
    var nSel = selected.length;
    var head = (props.title || props.actions || (props.selectable && nSel)) ? h('div', { className: cx('rf-dt-toolbar', props.selectable && nSel && 'is-selecting') },
      props.selectable && nSel ? h('p', { className: 'rf-dt-count' }, nSel === 1 ? '1 selecionado' : nSel + ' selecionados')
        : h('div', null, props.title ? h('h3', { className: 'rf-dt-title' }, props.title) : null, props.subtitle ? h('p', { className: 'rf-dt-subtitle' }, props.subtitle) : null),
      h('div', { className: 'rf-dt-actions' }, props.selectable && nSel ? (props.bulkActions || null) : (props.actions || null))) : null;
    var from = sorted.length ? pg * pageSize + 1 : 0, to = Math.min(sorted.length, (pg + 1) * pageSize);
    return h('div', { className: cx('rf-dt', props.dense && 'rf-dt-dense', props.className) },
      head,
      h('div', { className: 'rf-dt-scroll' },
        h('table', { className: 'rf-dt-table' },
          props.caption ? h('caption', { className: 'rf-sr' }, props.caption) : null,
          h('thead', null, h('tr', null,
            props.selectable ? h('th', { className: 'rf-dt-check', scope: 'col' },
              h('label', { className: 'rf-dt-cb' }, h('input', { type: 'checkbox', ref: allRef, checked: allOn, onChange: toggleAll, 'aria-label': 'Selecionar todas as linhas desta página' }),
                h('span', { className: 'rf-check-box', 'aria-hidden': 'true' }, h(Icon, { name: someOn ? 'remove' : 'check', size: 16 })))) : null,
            columns.map(function (c) {
              var active = sort && sort.key === c.key;
              var ariaSort = active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : (c.sortable ? 'none' : undefined);
              var inner = c.sortable
                ? h('button', { type: 'button', className: cx('rf-dt-sort', active && 'is-active'), onClick: function () { sortBy(c); } },
                    h('span', null, c.label), h(Icon, { name: active && sort.dir === 'desc' ? 'arrow_downward' : 'arrow_upward', size: 16, className: 'rf-dt-sort-icon' }))
                : c.label;
              return h('th', { key: c.key, scope: 'col', 'aria-sort': ariaSort, className: cx(c.numeric && 'is-num', c.align === 'center' && 'is-center'), style: c.width ? { width: c.width } : undefined }, inner);
            }))),
          h('tbody', null, visible.length ? visible.map(function (r) {
            var id = r[rowKey], on = selected.indexOf(id) >= 0;
            return h('tr', { key: id, className: cx(on && 'is-selected', props.onRowClick && 'is-clickable'), 'aria-selected': props.selectable ? on : undefined,
              onClick: props.onRowClick ? function (e) { if (e.target.closest('input,button,a,label')) return; props.onRowClick(r); } : undefined },
              props.selectable ? h('td', { className: 'rf-dt-check' },
                h('label', { className: 'rf-dt-cb' }, h('input', { type: 'checkbox', checked: on, onChange: function () { toggle(id); }, 'aria-label': 'Selecionar ' + (props.rowLabel ? props.rowLabel(r) : 'linha') }),
                  h('span', { className: 'rf-check-box', 'aria-hidden': 'true' }, h(Icon, { name: 'check', size: 16 })))) : null,
              columns.map(function (c) {
                return h('td', { key: c.key, 'data-label': typeof c.label === 'string' ? c.label : undefined, className: cx(c.numeric && 'is-num', c.align === 'center' && 'is-center', c.primary && 'is-primary') }, c.render ? c.render(r) : r[c.key]);
              }));
          }) : h('tr', null, h('td', { className: 'rf-dt-empty', colSpan: columns.length + (props.selectable ? 1 : 0) }, props.empty || 'Nada por aqui ainda.'))))),
      pageSize && sorted.length > pageSize ? h('div', { className: 'rf-dt-foot' },
        h('span', { className: 'rf-dt-range' }, from + '–' + to + ' de ' + sorted.length),
        h(IconButton, { icon: 'chevron_left', label: 'Página anterior', disabled: pg === 0, onClick: function () { setPage(pg - 1); } }),
        h(IconButton, { icon: 'chevron_right', label: 'Próxima página', disabled: pg >= pages - 1, onClick: function () { setPage(pg + 1); } })) : null);
  }

  /* ---------- Menu (menu suspenso) ---------- */
  function Menu(props) {
    if (!props.open) return null;
    var close = props.onClose;
    var items = props.items || [];
    return h(React.Fragment, null,
      h('div', { className: 'rf-menu-layer', 'aria-hidden': 'true', onClick: close }),
      h('div', { className: cx('rf-menu', 'rf-menu-' + (props.align || 'end'), props.className), id: props.id,
        onKeyDown: function (e) { if (e.key === 'Escape' && close) close(); } },
        props.title || props.subtitle ? h('div', { className: 'rf-menu-head' },
          props.title ? h('span', { className: 'rf-menu-title' }, props.title) : null,
          props.subtitle ? h('span', { className: 'rf-menu-subtitle' }, props.subtitle) : null) : null,
        h('ul', { className: 'rf-menu-list', 'aria-label': props.label },
          items.map(function (it, i) {
            if (it.divider) return h('li', { key: 'd' + i, className: 'rf-menu-divider', role: 'separator' });
            var Tag = it.href ? 'a' : 'button';
            var p = { className: cx('rf-menu-item', 'rf-state', it.danger && 'is-danger'),
              onClick: function (e) { if (it.onClick) it.onClick(e); if (close) close(); } };
            if (it.href) { p.href = it.href; if (it.external) { p.target = '_blank'; p.rel = 'noopener noreferrer'; } }
            else p.type = 'button';
            return h('li', { key: it.value || i }, h(Tag, p,
              it.icon ? h(Icon, { name: it.icon, size: 20 }) : null,
              h('span', { className: 'rf-menu-text' }, h('span', null, it.label),
                it.supporting ? h('span', { className: 'rf-menu-supporting' }, it.supporting) : null),
              it.external ? h(Icon, { name: 'open_in_new', size: 18, className: 'rf-menu-ext' }) : null,
              it.external ? h('span', { className: 'rf-sr-only' }, ' (abre em outra aba)') : null));
          })),
        props.children || null));
  }

  /* ---------- NavigationDrawer (gaveta de navegação) ---------- */
  function NavigationDrawer(props) {
    if (props.open === false) return null;
    var close = props.onClose;
    var items = props.items || [];
    return h('div', { className: cx('rf-drawer-scrim', props.inline && 'rf-drawer-inline'),
        onClick: function (e) { if (e.target === e.currentTarget && close) close(); },
        onKeyDown: function (e) { if (e.key === 'Escape' && close) close(); } },
      h('nav', { className: cx('rf-drawer', props.className), 'aria-label': props.label || 'Menu' },
        h('div', { className: 'rf-drawer-head' },
          h(Logo, { variant: 'horizontal', size: 'sm', tagline: false }),
          close ? h(IconButton, { icon: 'close', label: 'Fechar menu', onClick: close }) : null),
        props.user ? h('div', { className: 'rf-drawer-user' },
          h('span', { className: 'rf-drawer-user-name' }, props.user.name),
          props.user.detail ? h('span', { className: 'rf-drawer-user-detail' }, props.user.detail) : null) : null,
        h('ul', { className: 'rf-drawer-list' }, items.map(function (it) {
          if (it.divider) return h('li', { key: it.value || 'div', className: 'rf-drawer-divider', role: 'separator' });
          var active = it.value === props.value;
          var p = { href: it.href || '#', className: cx('rf-drawer-item', 'rf-state', active && 'is-active'), 'aria-current': active ? 'page' : undefined,
            onClick: function (e) {
              if (it.external) return;
              if (props.onChange) { e.preventDefault(); props.onChange(it.value); }
              if (close) close();
            } };
          if (it.external) { p.target = '_blank'; p.rel = 'noopener noreferrer'; }
          return h('li', { key: it.value }, h('a', p,
            it.icon ? h(Icon, { name: it.icon, size: 24 }) : null,
            h('span', { className: 'rf-drawer-text' }, h('span', { className: 'rf-drawer-label' }, it.label),
              it.supporting ? h('span', { className: 'rf-drawer-supporting' }, it.supporting) : null),
            it.external ? h(Icon, { name: 'open_in_new', size: 18, className: 'rf-drawer-ext' }) : null,
            it.external ? h('span', { className: 'rf-sr-only' }, ' (abre em outra aba)') : null));
        })),
        props.footer ? h('div', { className: 'rf-drawer-foot' }, props.footer) : null));
  }

  /* ---------- Footer (rodapé) ---------- */
  function Footer(props) {
    var links = props.links || [];
    return h('footer', { className: cx('rf-footer', props.tone === 'surface' ? 'rf-footer-surface' : 'rf-footer-deep', props.className) },
      h('div', { className: 'rf-footer-inner' },
        props.logo ? h(Logo, { variant: 'horizontal', size: 'sm', tagline: false, tone: props.tone === 'surface' ? undefined : 'deep' }) : null,
        h('p', { className: 'rf-footer-text' }, props.text || 'Condomínio Recanto Ferrari'),
        links.length ? h('nav', { className: 'rf-footer-links', 'aria-label': 'Rodapé' }, links.map(function (l, i) {
          var p = { key: l.href + i, href: l.href || '#', className: 'rf-footer-link' };
          if (l.external) { p.target = '_blank'; p.rel = 'noopener noreferrer'; }
          return h('a', p, l.label, l.external ? h('span', { className: 'rf-sr-only' }, ' (abre em outra aba)') : null);
        })) : null,
        props.children || null));
  }

  /* ---------- RadioGroup (escolha única) ---------- */
  var radioSeq = 0;
  function RadioGroup(props) {
    var ref = React.useRef(null);
    if (!ref.current) ref.current = props.name || ('rf-radio-' + (++radioSeq));
    var name = ref.current;
    var st = React.useState(props.defaultValue), inner = st[0], setInner = st[1];
    var value = props.value !== undefined ? props.value : inner;
    var options = props.options || [];
    return h('fieldset', { className: cx('rf-radio-group', 'rf-radio-' + (props.variant || 'list'), props.orientation === 'horizontal' && 'is-horizontal', props.className), disabled: props.disabled },
      props.label ? h('legend', { className: 'rf-radio-legend' }, props.label) : null,
      props.helper ? h('p', { className: 'rf-radio-helper' }, props.helper) : null,
      h('div', { className: 'rf-radio-options' }, options.map(function (o) {
        var on = value === o.value;
        return h('label', { key: o.value, className: cx('rf-radio', on && 'is-checked', o.disabled && 'is-disabled') },
          h('input', { type: 'radio', className: 'rf-radio-input', name: name, value: o.value, checked: on, disabled: o.disabled,
            onChange: function () { setInner(o.value); if (props.onChange) props.onChange(o.value); } }),
          h('span', { className: 'rf-radio-mark', 'aria-hidden': 'true' }),
          h('span', { className: 'rf-radio-text' }, h('span', { className: 'rf-radio-label' }, o.label),
            o.supporting ? h('small', null, o.supporting) : null));
      })));
  }

  /* ---------- FileUpload (foto ou arquivo; no celular pode abrir a câmera) ---------- */
  var upSeq = 0;
  function FileUpload(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = props.id || 'rf-upload-' + (++upSeq);
    var id = idRef.current, helpId = id + '-help';
    var status = props.disabled ? 'disabled' : (props.status || 'default');
    var filled = !!(props.fileName || props.preview);
    var preview = typeof props.preview === 'string'
      ? h('img', { src: props.preview, alt: props.previewAlt || '' })
      : (props.preview || null);
    var input = h('input', {
      type: 'file', id: id, className: 'rf-upload-input', accept: props.accept || 'image/*', capture: props.capture,
      multiple: props.multiple, disabled: props.disabled, name: props.name, required: props.required,
      'aria-describedby': props.helper ? helpId : undefined, 'aria-invalid': status === 'error' ? 'true' : undefined,
      onChange: props.onChange
    });
    var body = !filled
      ? h('label', { className: 'rf-upload-zone rf-state', htmlFor: id },
          h('span', { className: 'rf-upload-icon' }, h(Icon, { name: props.icon || 'photo_camera', size: 28 })),
          h('span', { className: 'rf-upload-text' },
            h('span', { className: 'rf-upload-title' }, props.buttonLabel || 'Tirar ou escolher foto'),
            props.hint ? h('span', { className: 'rf-upload-hint' }, props.hint) : null))
      : h('div', { className: 'rf-upload-file' },
          preview ? h('div', { className: 'rf-upload-preview' }, preview) : null,
          h('div', { className: 'rf-upload-meta' },
            h('span', { className: 'rf-upload-name' }, h(Icon, { name: status === 'error' ? 'error' : 'check_circle', size: 20 }), props.fileName || 'Foto escolhida'),
            props.fileInfo ? h('span', { className: 'rf-upload-hint' }, props.fileInfo) : null,
            h('div', { className: 'rf-upload-actions' },
              h(Button, { as: 'label', htmlFor: id, variant: 'outlined', size: 'sm', icon: props.icon || 'photo_camera' }, props.changeLabel || 'Trocar foto'),
              props.onRemove ? h(Button, { variant: 'text', size: 'sm', icon: 'close', onClick: props.onRemove }, props.removeLabel || 'Remover') : null)));
    return h('div', { className: cx('rf-field', 'rf-upload', 'rf-upload-' + status, props.required && 'rf-upload-required', filled && 'is-filled', props.className) },
      props.label ? h('span', { className: 'rf-field-label', id: id + '-label' }, props.label) : null,
      input, body,
      props.helper ? h('p', { className: 'rf-field-help', id: helpId }, props.helper) : null);
  }

  /* ---------- Hero (faixa de boas-vindas com foto) ---------- */
  function Hero(props) {
    return h('section', { className: cx('rf-hero', props.className), 'aria-label': props.label },
      props.image ? h('img', { className: 'rf-hero-img', src: props.image, alt: props.imageAlt || '',
        style: props.imagePosition ? { objectPosition: props.imagePosition } : undefined }) : null,
      h('div', { className: 'rf-hero-overlay', 'aria-hidden': 'true' }),
      h('div', { className: 'rf-hero-inner' },
        props.eyebrow ? h('p', { className: 'rf-hero-eyebrow' }, props.eyebrow) : null,
        props.title ? h(props.as || 'h1', { className: 'rf-hero-title' }, props.title) : null,
        props.children ? h('div', { className: 'rf-hero-text' }, props.children) : null,
        props.actions ? h('div', { className: 'rf-hero-actions' }, props.actions) : null));
  }

  window.RecantoFerrari = Object.assign(window.RecantoFerrari || {}, {
    Logo: Logo, Icon: Icon, Button: Button, IconButton: IconButton, Chip: Chip, TextField: TextField,
    Checkbox: Checkbox, Switch: Switch, Card: Card, ListItem: ListItem, Badge: Badge, Alert: Alert,
    Dialog: Dialog, TopAppBar: TopAppBar, Tabs: Tabs, Calendar: Calendar, DataTable: DataTable,
    Menu: Menu, NavigationDrawer: NavigationDrawer, Footer: Footer, Hero: Hero, RadioGroup: RadioGroup, FileUpload: FileUpload
  });
})();
