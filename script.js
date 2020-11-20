$(document).on('mouseover', '.container .column', function () {
  $(this).addClass('active').siblings().removeClass('active')
});

var modals = [];
modals.push({
  title: 'Welcome to Lumi FansPage!',
  text: 'This website requires desktop web resolution to experience its features',
  icon: "success",
});

swal.queue(modals);