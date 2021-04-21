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
    ],
    timeline: [
      {
        number: '01',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '02',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '03',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '04',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      },
      {
        number: '05',
        title: 'Collection of information',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur.'
      }
    ],
    boxes: [
      {
        icon: 'far fa-user',
        title: 'Human Capital',
        paragraph: 'Humanazing business: Harness the power of technology to improve the way people work.'
      },
      {
        icon: 'fas fa-chart-pie',
        title: 'Core Business',
        paragraph: 'It takes innovative approaches to transform, modernize and run existing platform.'
      },
      {
        icon: 'far fa-clock',
        title: 'Performance',
        paragraph: 'Achieving maximun impact and value from investments in finance and supply chain.'
      }
    ]
  }
});
