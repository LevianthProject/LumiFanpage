$(document).on('mouseover', '.container .column', function () {
  $(this).addClass('active').siblings().removeClass('active')
});

var modals = [];
modals.push({
  title: 'Welcome to Lumi FansPage!',
  text: 'This website requires desktop web resolution to experience its features',
  icon: "success",
});

modals.push({
    html: "<img src='https://media.discordapp.net/attachments/781371112755953689/781702082196537344/Lumi-Christmas-PosterV5.png?width=1249&height=702'>",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    grow: 'fullscreen',
    background: 'transparent',
});

swal.queue(modals);