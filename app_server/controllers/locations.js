/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { 
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: {
        title: 'Loc8r',
        strapline: 'Find places to work with wifi near you!'
      },
      sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      locations: [{
        name: "McDonald's",
        address: '918 S Rte 291, Liberty, MO 64068',
        phone: '(816)792-1122',
        rating: 4,
        facilities: ['Hot Drinks','Food','Premium wifi'],
        distance: '1.8 miles'
      },{
        name: "Dunkin'",
        address: '953 W Liberty Dr, Liberty, MO 64068',
        phone: '(816)415-3770',
        rating: 2,
        facilities: ['Hot drinks','Food','Wifi'],
        distance: '1.8 miles'
      },{
        name: 'The Big Biscuit',
        address: '840 Rte 291, Liberty, MO 64068',
        phone: '(816)429-5314',
        rating: 3,
        facilities: ['Hot Drinks','Food','Wifi'],
        distance: '2.0 miles'
      },{
        name: 'Over Flow Coffee House',
        address: '1005 Middlebrook Dr Ste E, Liberty, MO 64068',
        phone: '(816)328-8242',
        rating: 5,
        facilities: ['Hot Drinks','Food','Premium wifi'],
        distance: '2.2 miles'
      },{
        name: "Cici's Pizza",
        address: '202 N State Route 291, Liberty, MO 64068',
        phone: '(816)792-2428',
        rating: 3,
        facilities: ['Food','Wifi'],
        distance: '2.7 miles'
      },{
        name: 'Cariboo Coffee',
        address: '300 N Rte 291, Liberty, MO 64068',
        phone: '(816)415-3998',
        rating: 5,
        facilities: ['Hot Drinks','Food','Premium wifi'],
        distance: '2.8 miles'
      },{
        name: 'Starbucks',
        address: '1915 Star Dr, Liberty, MO 64068',
        phone: '(816)792-0018',
        rating: 5,
        facilities: ['Hot Drinks','Food','Premium wifi'],
        distance: '3.0 miles'
      },{
        name: "McAlister's Deli",
        address: '127 S Stewart Rd Ste 100, Liberty, MO 64068',
        phone: '(816)781-8215',
        rating: 4,
        facilities: ['Food','Premium wifi'],
        distance: '3.4 miles'
      },{
        name: "McDonald's",
        address: '9851 NE Barry Rd, Kansas City, MO 64157',
        phone: '(816)792-1126',
        rating: 4,
        facilities: ['Hot Drinks','Food','Premium wifi'],
        distance: '3.5 miles'
      },{
        name: 'Panera Bread',
        address: '8580 Church Rd, Kansas City, MO 64157',
        phone: '(816)792-1991',
        rating: 5,
        facilities: ['Hot drinks','Food','Bakery','Premium wifi'],
        distance: '3.5 miles'
      },{
        name: 'Cracker Barrel Old Country Store',
        address: '8225 N Church Rd, Kansas City, MO 64158',
        phone: '(816)781-1444',
        rating: 3,
        facilities: ['Hot drinks','Food','Premium wifi','Gift Shop'],
        distance: '3.8 miles'
      },{
        name: 'First Watch',
        address: '8758 NE 82nd Terrace, Kansas City, MO 64158',
        phone: '(816)659-7054',
        rating: 4,
        facilities: ['Hot drinks','Food','Wifi'],
        distance: '4.4 miles'
      }]
    });
  };

/* GET 'Location info' page */
const locationInfo = function(req, res) {
    res.render('location-info', {
      title: "McDonald's",
      pageHeader: {title: "McDonald's"},
      sidebar: {
        context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
        callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
      },
      location: {
        name: 'McDonald\'s',
        address: '918 S Rte 291, Liberty, MO 64068',
        phone: '(816)792-1122',
        rating: 4,
        facilities: ['Hot drinks','Food','Premium wifi'],
        coords: {lat: 39.236942, lng: -94.433409},
        openingTimes: [{
          days: 'Monday - Friday',
          opening: '7:00am',
          closing: '7:00pm',
          closed: false
        },{
          days: 'Saturday',
          opening: '8:00am',
          closing: '5:00pm',
          closed: false
        },{
          days: 'Sunday',
          closed: true
        }],
        reviews: [{
          author: 'Simon Cowell',
          rating: 5,
          timestamp: '16 February 2020',
          reviewText: 'What a great place. Best burger I\'ve ever had!',
        },{
          author: 'Patrick Mahomes',
          rating: 3,
          timestamp: '2 Feburary 2020',
          reviewText: 'It was okay. Coffee wans\'t great. It\'s no Whatabuger!'
        }]
       }
     });
  }; 

  /* GET 'Add review' page */
const addReview = function(req, res) {
    res.render('location-review-form', {
     title: 'Review McDonald\'s on Loc8r',
     pageHeader: { title: 'Review McDonald\'s' }
    });
  }; 

  module.exports = {
      homelist,
      locationInfo,
      addReview
  };