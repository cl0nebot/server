const people = [
  {
    "id": 1,
    "firstName": "Annie",
    "lastName": "Campbell",
    "email": "acampbell0@cnbc.com",
    "phone": "63-(954)154-1049",
    "type": "admin",
    "imageSrc": "https://randomuser.me/api/portraits/women/1.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 1,
        "key": "Reliable",
        "type": "boolean",
        "value": false
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  },
  {
    "id": 2,
    "firstName": "Jesse",
    "lastName": "Olson",
    "email": "jolson1@umich.edu",
    "phone": "20-(397)570-4573",
    "type": "manager",
    "imageSrc": "https://randomuser.me/api/portraits/men/2.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 2,
        "key": "Reliable",
        "type": "boolean",
        "value": true
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 15
    }
  },
  {
    "id": 3,
    "firstName": "Christina",
    "lastName": "Hernandez",
    "email": "chernandez2@dot.gov",
    "phone": "86-(782)312-6763",
    "type": "manager",
    "imageSrc": "https://randomuser.me/api/portraits/women/3.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 3,
        "key": "Reliable",
        "type": "boolean",
        "value": false
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 20
    }
  },
  {
    "id": 4,
    "firstName": "Heather",
    "lastName": "Payne",
    "email": "hpayne3@miitbeian.gov.cn",
    "phone": "55-(454)387-0985",
    "type": "employee",
    "imageSrc": "https://randomuser.me/api/portraits/women/4.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 4,
        "key": "Reliable",
        "type": "boolean",
        "value": true
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  },
  {
    "id": 5,
    "firstName": "Rebecca",
    "lastName": "Hunter",
    "email": "rhunter4@vinaora.com",
    "phone": "1-(816)681-7469",
    "type": "employee",
    "imageSrc": "https://randomuser.me/api/portraits/women/5.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 5,
        "key": "Reliable",
        "type": "boolean",
        "value": false
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 12.5,
        "submitted": 10
    }
  },
  {
    "id": 6,
    "firstName": "Matthew",
    "lastName": "Sullivan",
    "email": "msullivan5@amazon.com",
    "phone": "46-(387)906-3742",
    "type": "employee",
    "imageSrc": "https://randomuser.me/api/portraits/men/6.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 6,
        "key": "Reliable",
        "type": "boolean",
        "value": false
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  },
  {
    "id": 7,
    "firstName": "Ann",
    "lastName": "Lawrence",
    "email": "alawrence6@dmoz.org",
    "phone": "57-(734)309-4759",
    "type": "employee",
    "imageSrc": "https://randomuser.me/api/portraits/women/7.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 7,
        "key": "Reliable",
        "type": "boolean",
        "value": true
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  },
  {
    "id": 8,
    "firstName": "Lori",
    "lastName": "Morales",
    "email": "lmorales7@xing.com",
    "phone": "66-(197)895-2507",
    "type": "employee",
    "imageSrc": "https://randomuser.me/api/portraits/women/8.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 8,
        "key": "Reliable",
        "type": "boolean",
        "value": true
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  },
  {
    "id": 9,
    "firstName": "Harry",
    "lastName": "Bishop",
    "email": "hbishop8@moonfruit.com",
    "phone": "880-(541)270-1621",
    "type": "employee",
    "imageSrc": "https://randomuser.me/api/portraits/men/9.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 9,
        "key": "Reliable",
        "type": "boolean",
        "value": true
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  },
  {
    "id": 10,
    "firstName": "Joshua",
    "lastName": "Hansen",
    "email": "jhansen9@hatena.ne.jp",
    "phone": "7-(959)110-4566",
    "type": "employee",
    "imageSrc":  "https://randomuser.me/api/portraits/men/10.jpg",
    "emergencyContactInformation": "Call zzz-zzz-zzzz.",
    "metadata": [
      {
        "id": 10,
        "key": "Reliable",
        "type": "boolean",
        "value": true
      }
    ],
    "availability": {
      "monday": [],
      "tuesday": [
        {
          "id": 100,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ],
      "wednesday": [],
      "thursday": [],
      "friday": [
        {
          "id": 400,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        },
        {
          "id": 401,
          "start": "1970-01-01T16:00:00.000-05:00",
          "end": "1970-01-01T22:00:00.000-05:00"
        }
      ],
      "saturday": [],
      "sunday": [
        {
          "id": 600,
          "start": "1970-01-01T08:00:00.000-05:00",
          "end": "1970-01-01T12:00:00.000-05:00"
        }
      ]
    },
    "hours": {
        "worked": 10,
        "submitted": 10
    }
  }
]

module.exports.default = people
