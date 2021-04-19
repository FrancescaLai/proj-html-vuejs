var app = new Vue({
  el: '#root',
  data: {
    topNavbar: [
      {
        openingDays: 'Mon - Sat',
        openingHours: '9.00 - 18.00',
        phoneNumber: '+1 (305)1234-5678',
        email: 'hello@nexgen.com',
      }
    ],
    navList: [
      {
        home: 'HOME',
        about: 'ABOUT',
        project: 'PROJECT',
        process: 'PROCESS',
        testimonials: 'TESTIMONIALS',
        button: 'GET IN TOUCH'
      }
    ]
  }
});
