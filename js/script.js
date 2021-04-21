var app = new Vue({
  el: '#root',
  data: {
    companyInfo: [
      {
        openingDays: 'Mon - Sat',
        openingHours: '9.00 - 18.00',
        phoneNumber: '+1 (305)1234-5678',
        email: 'hello@nexgen.com',
        address: 'Main Avenue, 987',
        googleMap: 'https://www.google.it/maps'
      }
    ],
    heroList: [
      {
        title: 'HOME',
        url: 'https://www.google.it',
      },
      {
        title: 'ABOUT',
        url: 'https://www.google.it',
      },
      {
        title: 'PROJECT',
        url: 'https://www.google.it',
      },
      {
        title: 'PROCESS',
        url: 'https://www.google.it',
      },
      {
        title: 'TESTIMONIALS',
        url: 'https://www.google.it',
      },
    ]
  }
});
