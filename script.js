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
    html: "<img src='images/banner/Lumi-Christmas-PosterV10-8K.png' style='height: 500px'>",
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    grow: 'fullscreen',
    background: 'transparent',
});

swal.queue(modals);