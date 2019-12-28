const mockData = {
  data: [
    {
      id: 1,
      name: 'Fiddle Leaf Fig',
      waterAfter: 7,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 23, 2019',
        'Monday December 30, 2019',
        'Monday January 6, 2020',
        'Monday January 13, 2020',
        'Monday January 20, 2020',
        'Monday January 27, 2020',
        'Monday February 3, 2020',
        'Monday February 10, 2020',
        'Monday February 17, 2020',
        'Monday February 24, 2020',
        'Monday March 2, 2020',
        'Monday March 9, 2020',
        'Monday March 16, 2020',
        'Monday March 23, 2020',
        'Monday March 30, 2020',
        'Monday April 6, 2020',
        'Monday April 13, 2020',
        'Monday April 20, 2020',
        'Monday April 27, 2020',
        'Monday May 4, 2020',
        'Monday May 11, 2020',
        'Monday May 18, 2020',
        'Monday May 25, 2020',
        'Monday June 1, 2020',
        'Monday June 8, 2020',
        'Monday June 15, 2020',
        'Monday June 22, 2020',
        'Monday June 29, 2020',
        'Monday July 6, 2020',
        'Monday July 13, 2020',
        'Monday July 20, 2020',
        'Monday July 27, 2020',
        'Monday August 3, 2020',
        'Monday August 10, 2020',
        'Monday August 17, 2020',
        'Monday August 24, 2020',
        'Monday August 31, 2020',
        'Monday September 7, 2020',
        'Monday September 14, 2020',
        'Monday September 21, 2020',
        'Monday September 28, 2020',
        'Monday October 5, 2020',
        'Monday October 12, 2020',
        'Monday October 19, 2020',
        'Monday October 26, 2020',
        'Monday November 2, 2020',
        'Monday November 9, 2020',
        'Monday November 16, 2020',
        'Monday November 23, 2020',
        'Monday November 30, 2020',
        'Monday December 7, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 2,
      name: 'Snake Plant',
      waterAfter: 14,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 30, 2019',
        'Monday January 13, 2020',
        'Monday January 27, 2020',
        'Monday February 10, 2020',
        'Monday February 24, 2020',
        'Monday March 9, 2020',
        'Monday March 23, 2020',
        'Monday April 6, 2020',
        'Monday April 20, 2020',
        'Monday May 4, 2020',
        'Monday May 18, 2020',
        'Monday June 1, 2020',
        'Monday June 15, 2020',
        'Monday June 29, 2020',
        'Monday July 13, 2020',
        'Monday July 27, 2020',
        'Monday August 10, 2020',
        'Monday August 24, 2020',
        'Monday September 7, 2020',
        'Monday September 21, 2020',
        'Monday October 5, 2020',
        'Monday October 19, 2020',
        'Monday November 2, 2020',
        'Monday November 16, 2020',
        'Monday November 30, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 3,
      name: 'Money Tree',
      waterAfter: 14,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 30, 2019',
        'Monday January 13, 2020',
        'Monday January 27, 2020',
        'Monday February 10, 2020',
        'Monday February 24, 2020',
        'Monday March 9, 2020',
        'Monday March 23, 2020',
        'Monday April 6, 2020',
        'Monday April 20, 2020',
        'Monday May 4, 2020',
        'Monday May 18, 2020',
        'Monday June 1, 2020',
        'Monday June 15, 2020',
        'Monday June 29, 2020',
        'Monday July 13, 2020',
        'Monday July 27, 2020',
        'Monday August 10, 2020',
        'Monday August 24, 2020',
        'Monday September 7, 2020',
        'Monday September 21, 2020',
        'Monday October 5, 2020',
        'Monday October 19, 2020',
        'Monday November 2, 2020',
        'Monday November 16, 2020',
        'Monday November 30, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 4,
      name: "Bird's Nest Fern",
      waterAfter: 3,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Thursday December 19, 2019',
        'Monday December 23, 2019',
        'Thursday December 26, 2019',
        'Monday December 30, 2019',
        'Thursday January 2, 2020',
        'Monday January 6, 2020',
        'Thursday January 9, 2020',
        'Monday January 13, 2020',
        'Thursday January 16, 2020',
        'Monday January 20, 2020',
        'Thursday January 23, 2020',
        'Monday January 27, 2020',
        'Thursday January 30, 2020',
        'Monday February 3, 2020',
        'Thursday February 6, 2020',
        'Monday February 10, 2020',
        'Thursday February 13, 2020',
        'Monday February 17, 2020',
        'Thursday February 20, 2020',
        'Monday February 24, 2020',
        'Thursday February 27, 2020',
        'Monday March 2, 2020',
        'Thursday March 5, 2020',
        'Monday March 9, 2020',
        'Thursday March 12, 2020',
        'Monday March 16, 2020',
        'Thursday March 19, 2020',
        'Monday March 23, 2020',
        'Thursday March 26, 2020',
        'Monday March 30, 2020',
        'Thursday April 2, 2020',
        'Monday April 6, 2020',
        'Thursday April 9, 2020',
        'Monday April 13, 2020',
        'Thursday April 16, 2020',
        'Monday April 20, 2020',
        'Thursday April 23, 2020',
        'Monday April 27, 2020',
        'Thursday April 30, 2020',
        'Monday May 4, 2020',
        'Thursday May 7, 2020',
        'Monday May 11, 2020',
        'Thursday May 14, 2020',
        'Monday May 18, 2020',
        'Thursday May 21, 2020',
        'Monday May 25, 2020',
        'Thursday May 28, 2020',
        'Monday June 1, 2020',
        'Thursday June 4, 2020',
        'Monday June 8, 2020',
        'Thursday June 11, 2020',
        'Monday June 15, 2020',
        'Thursday June 18, 2020',
        'Monday June 22, 2020',
        'Thursday June 25, 2020',
        'Monday June 29, 2020',
        'Thursday July 2, 2020',
        'Monday July 6, 2020',
        'Thursday July 9, 2020',
        'Monday July 13, 2020',
        'Thursday July 16, 2020',
        'Monday July 20, 2020',
        'Thursday July 23, 2020',
        'Monday July 27, 2020',
        'Thursday July 30, 2020',
        'Monday August 3, 2020',
        'Thursday August 6, 2020',
        'Monday August 10, 2020',
        'Thursday August 13, 2020',
        'Monday August 17, 2020',
        'Thursday August 20, 2020',
        'Monday August 24, 2020',
        'Thursday August 27, 2020',
        'Monday August 31, 2020',
        'Thursday September 3, 2020',
        'Monday September 7, 2020',
        'Thursday September 10, 2020',
        'Monday September 14, 2020',
        'Thursday September 17, 2020',
        'Monday September 21, 2020',
        'Thursday September 24, 2020',
        'Monday September 28, 2020',
        'Thursday October 1, 2020',
        'Monday October 5, 2020',
        'Thursday October 8, 2020',
        'Monday October 12, 2020',
        'Thursday October 15, 2020',
        'Monday October 19, 2020',
        'Thursday October 22, 2020',
        'Monday October 26, 2020',
        'Thursday October 29, 2020',
        'Monday November 2, 2020',
        'Thursday November 5, 2020',
        'Monday November 9, 2020',
        'Thursday November 12, 2020',
        'Monday November 16, 2020',
        'Thursday November 19, 2020',
        'Monday November 23, 2020',
        'Thursday November 26, 2020',
        'Monday November 30, 2020',
        'Thursday December 3, 2020',
        'Monday December 7, 2020',
        'Thursday December 10, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 5,
      name: 'Strawberry Plant',
      waterAfter: 3,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Thursday December 19, 2019',
        'Monday December 23, 2019',
        'Thursday December 26, 2019',
        'Monday December 30, 2019',
        'Thursday January 2, 2020',
        'Monday January 6, 2020',
        'Thursday January 9, 2020',
        'Monday January 13, 2020',
        'Thursday January 16, 2020',
        'Monday January 20, 2020',
        'Thursday January 23, 2020',
        'Monday January 27, 2020',
        'Thursday January 30, 2020',
        'Monday February 3, 2020',
        'Thursday February 6, 2020',
        'Monday February 10, 2020',
        'Thursday February 13, 2020',
        'Monday February 17, 2020',
        'Thursday February 20, 2020',
        'Monday February 24, 2020',
        'Thursday February 27, 2020',
        'Monday March 2, 2020',
        'Thursday March 5, 2020',
        'Monday March 9, 2020',
        'Thursday March 12, 2020',
        'Monday March 16, 2020',
        'Thursday March 19, 2020',
        'Monday March 23, 2020',
        'Thursday March 26, 2020',
        'Monday March 30, 2020',
        'Thursday April 2, 2020',
        'Monday April 6, 2020',
        'Thursday April 9, 2020',
        'Monday April 13, 2020',
        'Thursday April 16, 2020',
        'Monday April 20, 2020',
        'Thursday April 23, 2020',
        'Monday April 27, 2020',
        'Thursday April 30, 2020',
        'Monday May 4, 2020',
        'Thursday May 7, 2020',
        'Monday May 11, 2020',
        'Thursday May 14, 2020',
        'Monday May 18, 2020',
        'Thursday May 21, 2020',
        'Monday May 25, 2020',
        'Thursday May 28, 2020',
        'Monday June 1, 2020',
        'Thursday June 4, 2020',
        'Monday June 8, 2020',
        'Thursday June 11, 2020',
        'Monday June 15, 2020',
        'Thursday June 18, 2020',
        'Monday June 22, 2020',
        'Thursday June 25, 2020',
        'Monday June 29, 2020',
        'Thursday July 2, 2020',
        'Monday July 6, 2020',
        'Thursday July 9, 2020',
        'Monday July 13, 2020',
        'Thursday July 16, 2020',
        'Monday July 20, 2020',
        'Thursday July 23, 2020',
        'Monday July 27, 2020',
        'Thursday July 30, 2020',
        'Monday August 3, 2020',
        'Thursday August 6, 2020',
        'Monday August 10, 2020',
        'Thursday August 13, 2020',
        'Monday August 17, 2020',
        'Thursday August 20, 2020',
        'Monday August 24, 2020',
        'Thursday August 27, 2020',
        'Monday August 31, 2020',
        'Thursday September 3, 2020',
        'Monday September 7, 2020',
        'Thursday September 10, 2020',
        'Monday September 14, 2020',
        'Thursday September 17, 2020',
        'Monday September 21, 2020',
        'Thursday September 24, 2020',
        'Monday September 28, 2020',
        'Thursday October 1, 2020',
        'Monday October 5, 2020',
        'Thursday October 8, 2020',
        'Monday October 12, 2020',
        'Thursday October 15, 2020',
        'Monday October 19, 2020',
        'Thursday October 22, 2020',
        'Monday October 26, 2020',
        'Thursday October 29, 2020',
        'Monday November 2, 2020',
        'Thursday November 5, 2020',
        'Monday November 9, 2020',
        'Thursday November 12, 2020',
        'Monday November 16, 2020',
        'Thursday November 19, 2020',
        'Monday November 23, 2020',
        'Thursday November 26, 2020',
        'Monday November 30, 2020',
        'Thursday December 3, 2020',
        'Monday December 7, 2020',
        'Thursday December 10, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 6,
      name: 'Bell Pepper Plant',
      waterAfter: 3,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Thursday December 19, 2019',
        'Monday December 23, 2019',
        'Thursday December 26, 2019',
        'Monday December 30, 2019',
        'Thursday January 2, 2020',
        'Monday January 6, 2020',
        'Thursday January 9, 2020',
        'Monday January 13, 2020',
        'Thursday January 16, 2020',
        'Monday January 20, 2020',
        'Thursday January 23, 2020',
        'Monday January 27, 2020',
        'Thursday January 30, 2020',
        'Monday February 3, 2020',
        'Thursday February 6, 2020',
        'Monday February 10, 2020',
        'Thursday February 13, 2020',
        'Monday February 17, 2020',
        'Thursday February 20, 2020',
        'Monday February 24, 2020',
        'Thursday February 27, 2020',
        'Monday March 2, 2020',
        'Thursday March 5, 2020',
        'Monday March 9, 2020',
        'Thursday March 12, 2020',
        'Monday March 16, 2020',
        'Thursday March 19, 2020',
        'Monday March 23, 2020',
        'Thursday March 26, 2020',
        'Monday March 30, 2020',
        'Thursday April 2, 2020',
        'Monday April 6, 2020',
        'Thursday April 9, 2020',
        'Monday April 13, 2020',
        'Thursday April 16, 2020',
        'Monday April 20, 2020',
        'Thursday April 23, 2020',
        'Monday April 27, 2020',
        'Thursday April 30, 2020',
        'Monday May 4, 2020',
        'Thursday May 7, 2020',
        'Monday May 11, 2020',
        'Thursday May 14, 2020',
        'Monday May 18, 2020',
        'Thursday May 21, 2020',
        'Monday May 25, 2020',
        'Thursday May 28, 2020',
        'Monday June 1, 2020',
        'Thursday June 4, 2020',
        'Monday June 8, 2020',
        'Thursday June 11, 2020',
        'Monday June 15, 2020',
        'Thursday June 18, 2020',
        'Monday June 22, 2020',
        'Thursday June 25, 2020',
        'Monday June 29, 2020',
        'Thursday July 2, 2020',
        'Monday July 6, 2020',
        'Thursday July 9, 2020',
        'Monday July 13, 2020',
        'Thursday July 16, 2020',
        'Monday July 20, 2020',
        'Thursday July 23, 2020',
        'Monday July 27, 2020',
        'Thursday July 30, 2020',
        'Monday August 3, 2020',
        'Thursday August 6, 2020',
        'Monday August 10, 2020',
        'Thursday August 13, 2020',
        'Monday August 17, 2020',
        'Thursday August 20, 2020',
        'Monday August 24, 2020',
        'Thursday August 27, 2020',
        'Monday August 31, 2020',
        'Thursday September 3, 2020',
        'Monday September 7, 2020',
        'Thursday September 10, 2020',
        'Monday September 14, 2020',
        'Thursday September 17, 2020',
        'Monday September 21, 2020',
        'Thursday September 24, 2020',
        'Monday September 28, 2020',
        'Thursday October 1, 2020',
        'Monday October 5, 2020',
        'Thursday October 8, 2020',
        'Monday October 12, 2020',
        'Thursday October 15, 2020',
        'Monday October 19, 2020',
        'Thursday October 22, 2020',
        'Monday October 26, 2020',
        'Thursday October 29, 2020',
        'Monday November 2, 2020',
        'Thursday November 5, 2020',
        'Monday November 9, 2020',
        'Thursday November 12, 2020',
        'Monday November 16, 2020',
        'Thursday November 19, 2020',
        'Monday November 23, 2020',
        'Thursday November 26, 2020',
        'Monday November 30, 2020',
        'Thursday December 3, 2020',
        'Monday December 7, 2020',
        'Thursday December 10, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 7,
      name: 'Croton',
      waterAfter: 7,
      receivedWaterOnDates: ['Monday December 16, 2019'],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 23, 2019',
        'Monday December 30, 2019',
        'Monday January 6, 2020',
        'Monday January 13, 2020',
        'Monday January 20, 2020',
        'Monday January 27, 2020',
        'Monday February 3, 2020',
        'Monday February 10, 2020',
        'Monday February 17, 2020',
        'Monday February 24, 2020',
        'Monday March 2, 2020',
        'Monday March 9, 2020',
        'Monday March 16, 2020',
        'Monday March 23, 2020',
        'Monday March 30, 2020',
        'Monday April 6, 2020',
        'Monday April 13, 2020',
        'Monday April 20, 2020',
        'Monday April 27, 2020',
        'Monday May 4, 2020',
        'Monday May 11, 2020',
        'Monday May 18, 2020',
        'Monday May 25, 2020',
        'Monday June 1, 2020',
        'Monday June 8, 2020',
        'Monday June 15, 2020',
        'Monday June 22, 2020',
        'Monday June 29, 2020',
        'Monday July 6, 2020',
        'Monday July 13, 2020',
        'Monday July 20, 2020',
        'Monday July 27, 2020',
        'Monday August 3, 2020',
        'Monday August 10, 2020',
        'Monday August 17, 2020',
        'Monday August 24, 2020',
        'Monday August 31, 2020',
        'Monday September 7, 2020',
        'Monday September 14, 2020',
        'Monday September 21, 2020',
        'Monday September 28, 2020',
        'Monday October 5, 2020',
        'Monday October 12, 2020',
        'Monday October 19, 2020',
        'Monday October 26, 2020',
        'Monday November 2, 2020',
        'Monday November 9, 2020',
        'Monday November 16, 2020',
        'Monday November 23, 2020',
        'Monday November 30, 2020',
        'Monday December 7, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 8,
      name: 'Dracaena',
      waterAfter: 14,
      receivedWaterOnDates: ['Monday December 16, 2019'],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 30, 2019',
        'Monday January 13, 2020',
        'Monday January 27, 2020',
        'Monday February 10, 2020',
        'Monday February 24, 2020',
        'Monday March 9, 2020',
        'Monday March 23, 2020',
        'Monday April 6, 2020',
        'Monday April 20, 2020',
        'Monday May 4, 2020',
        'Monday May 18, 2020',
        'Monday June 1, 2020',
        'Monday June 15, 2020',
        'Monday June 29, 2020',
        'Monday July 13, 2020',
        'Monday July 27, 2020',
        'Monday August 10, 2020',
        'Monday August 24, 2020',
        'Monday September 7, 2020',
        'Monday September 21, 2020',
        'Monday October 5, 2020',
        'Monday October 19, 2020',
        'Monday November 2, 2020',
        'Monday November 16, 2020',
        'Monday November 30, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 9,
      name: 'Spider Plant',
      waterAfter: 7,
      receivedWaterOnDates: ['Monday December 16, 2019'],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 23, 2019',
        'Monday December 30, 2019',
        'Monday January 6, 2020',
        'Monday January 13, 2020',
        'Monday January 20, 2020',
        'Monday January 27, 2020',
        'Monday February 3, 2020',
        'Monday February 10, 2020',
        'Monday February 17, 2020',
        'Monday February 24, 2020',
        'Monday March 2, 2020',
        'Monday March 9, 2020',
        'Monday March 16, 2020',
        'Monday March 23, 2020',
        'Monday March 30, 2020',
        'Monday April 6, 2020',
        'Monday April 13, 2020',
        'Monday April 20, 2020',
        'Monday April 27, 2020',
        'Monday May 4, 2020',
        'Monday May 11, 2020',
        'Monday May 18, 2020',
        'Monday May 25, 2020',
        'Monday June 1, 2020',
        'Monday June 8, 2020',
        'Monday June 15, 2020',
        'Monday June 22, 2020',
        'Monday June 29, 2020',
        'Monday July 6, 2020',
        'Monday July 13, 2020',
        'Monday July 20, 2020',
        'Monday July 27, 2020',
        'Monday August 3, 2020',
        'Monday August 10, 2020',
        'Monday August 17, 2020',
        'Monday August 24, 2020',
        'Monday August 31, 2020',
        'Monday September 7, 2020',
        'Monday September 14, 2020',
        'Monday September 21, 2020',
        'Monday September 28, 2020',
        'Monday October 5, 2020',
        'Monday October 12, 2020',
        'Monday October 19, 2020',
        'Monday October 26, 2020',
        'Monday November 2, 2020',
        'Monday November 9, 2020',
        'Monday November 16, 2020',
        'Monday November 23, 2020',
        'Monday November 30, 2020',
        'Monday December 7, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 10,
      name: 'Jade',
      waterAfter: 14,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Monday December 30, 2019',
        'Monday January 13, 2020',
        'Monday January 27, 2020',
        'Monday February 10, 2020',
        'Monday February 24, 2020',
        'Monday March 9, 2020',
        'Monday March 23, 2020',
        'Monday April 6, 2020',
        'Monday April 20, 2020',
        'Monday May 4, 2020',
        'Monday May 18, 2020',
        'Monday June 1, 2020',
        'Monday June 15, 2020',
        'Monday June 29, 2020',
        'Monday July 13, 2020',
        'Monday July 27, 2020',
        'Monday August 10, 2020',
        'Monday August 24, 2020',
        'Monday September 7, 2020',
        'Monday September 21, 2020',
        'Monday October 5, 2020',
        'Monday October 19, 2020',
        'Monday November 2, 2020',
        'Monday November 16, 2020',
        'Monday November 30, 2020',
        'Monday December 14, 2020',
      ],
    },
    {
      id: 11,
      name: 'Wavy Fern',
      waterAfter: 2,
      receivedWaterOnDates: [],
      schedule: [
        'Monday December 16, 2019',
        'Wednesday December 18, 2019',
        'Friday December 20, 2019',
        'Monday December 23, 2019',
        'Wednesday December 25, 2019',
        'Friday December 27, 2019',
        'Monday December 30, 2019',
        'Wednesday January 1, 2020',
        'Friday January 3, 2020',
        'Monday January 6, 2020',
        'Wednesday January 8, 2020',
        'Friday January 10, 2020',
        'Monday January 13, 2020',
        'Wednesday January 15, 2020',
        'Friday January 17, 2020',
        'Monday January 20, 2020',
        'Wednesday January 22, 2020',
        'Friday January 24, 2020',
        'Monday January 27, 2020',
        'Wednesday January 29, 2020',
        'Friday January 31, 2020',
        'Monday February 3, 2020',
        'Wednesday February 5, 2020',
        'Friday February 7, 2020',
        'Monday February 10, 2020',
        'Wednesday February 12, 2020',
        'Friday February 14, 2020',
        'Monday February 17, 2020',
        'Wednesday February 19, 2020',
        'Friday February 21, 2020',
        'Monday February 24, 2020',
        'Wednesday February 26, 2020',
        'Friday February 28, 2020',
        'Monday March 2, 2020',
        'Wednesday March 4, 2020',
        'Friday March 6, 2020',
        'Monday March 9, 2020',
        'Wednesday March 11, 2020',
        'Friday March 13, 2020',
        'Monday March 16, 2020',
        'Wednesday March 18, 2020',
        'Friday March 20, 2020',
        'Monday March 23, 2020',
        'Wednesday March 25, 2020',
        'Friday March 27, 2020',
        'Monday March 30, 2020',
        'Wednesday April 1, 2020',
        'Friday April 3, 2020',
        'Monday April 6, 2020',
        'Wednesday April 8, 2020',
        'Friday April 10, 2020',
        'Monday April 13, 2020',
        'Wednesday April 15, 2020',
        'Friday April 17, 2020',
        'Monday April 20, 2020',
        'Wednesday April 22, 2020',
        'Friday April 24, 2020',
        'Monday April 27, 2020',
        'Wednesday April 29, 2020',
        'Friday May 1, 2020',
        'Monday May 4, 2020',
        'Wednesday May 6, 2020',
        'Friday May 8, 2020',
        'Monday May 11, 2020',
        'Wednesday May 13, 2020',
        'Friday May 15, 2020',
        'Monday May 18, 2020',
        'Wednesday May 20, 2020',
        'Friday May 22, 2020',
        'Monday May 25, 2020',
        'Wednesday May 27, 2020',
        'Friday May 29, 2020',
        'Monday June 1, 2020',
        'Wednesday June 3, 2020',
        'Friday June 5, 2020',
        'Monday June 8, 2020',
        'Wednesday June 10, 2020',
        'Friday June 12, 2020',
        'Monday June 15, 2020',
        'Wednesday June 17, 2020',
        'Friday June 19, 2020',
        'Monday June 22, 2020',
        'Wednesday June 24, 2020',
        'Friday June 26, 2020',
        'Monday June 29, 2020',
        'Wednesday July 1, 2020',
        'Friday July 3, 2020',
        'Monday July 6, 2020',
        'Wednesday July 8, 2020',
        'Friday July 10, 2020',
        'Monday July 13, 2020',
        'Wednesday July 15, 2020',
        'Friday July 17, 2020',
        'Monday July 20, 2020',
        'Wednesday July 22, 2020',
        'Friday July 24, 2020',
        'Monday July 27, 2020',
        'Wednesday July 29, 2020',
        'Friday July 31, 2020',
        'Monday August 3, 2020',
        'Wednesday August 5, 2020',
        'Friday August 7, 2020',
        'Monday August 10, 2020',
        'Wednesday August 12, 2020',
        'Friday August 14, 2020',
        'Monday August 17, 2020',
        'Wednesday August 19, 2020',
        'Friday August 21, 2020',
        'Monday August 24, 2020',
        'Wednesday August 26, 2020',
        'Friday August 28, 2020',
        'Monday August 31, 2020',
        'Wednesday September 2, 2020',
        'Friday September 4, 2020',
        'Monday September 7, 2020',
        'Wednesday September 9, 2020',
        'Friday September 11, 2020',
        'Monday September 14, 2020',
        'Wednesday September 16, 2020',
        'Friday September 18, 2020',
        'Monday September 21, 2020',
        'Wednesday September 23, 2020',
        'Friday September 25, 2020',
        'Monday September 28, 2020',
        'Wednesday September 30, 2020',
        'Friday October 2, 2020',
        'Monday October 5, 2020',
        'Wednesday October 7, 2020',
        'Friday October 9, 2020',
        'Monday October 12, 2020',
        'Wednesday October 14, 2020',
        'Friday October 16, 2020',
        'Monday October 19, 2020',
        'Wednesday October 21, 2020',
        'Friday October 23, 2020',
        'Monday October 26, 2020',
        'Wednesday October 28, 2020',
        'Friday October 30, 2020',
        'Monday November 2, 2020',
        'Wednesday November 4, 2020',
        'Friday November 6, 2020',
        'Monday November 9, 2020',
        'Wednesday November 11, 2020',
        'Friday November 13, 2020',
        'Monday November 16, 2020',
        'Wednesday November 18, 2020',
        'Friday November 20, 2020',
        'Monday November 23, 2020',
        'Wednesday November 25, 2020',
        'Friday November 27, 2020',
        'Monday November 30, 2020',
        'Wednesday December 2, 2020',
        'Friday December 4, 2020',
        'Monday December 7, 2020',
        'Wednesday December 9, 2020',
        'Friday December 11, 2020',
        'Monday December 14, 2020',
      ],
    },
  ],
};

export default mockData;
