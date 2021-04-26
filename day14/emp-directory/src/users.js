const users = [
    {
      "gender": "female",
      "name": { "title": "Mrs", "first": "مریم", "last": "نكو نظر" },
      "location": {
        "street": { "number": 8169, "name": "آفریقا" },
        "city": "زاهدان",
        "state": "گیلان",
        "country": "Iran",
        "postcode": 72126,
        "coordinates": { "latitude": "28.6923", "longitude": "29.7443" },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "mrym.nkwnzr@example.com",
      "login": {
        "uuid": "ab82d07f-b8a0-44dc-b38c-faa3e14f0c4a",
        "username": "silverwolf690",
        "password": "lakers1",
        "salt": "FPcr2UEo",
        "md5": "0acf2befea41fc86de084a3ecdf0310d",
        "sha1": "37db0b7bf084d7f876743843d601e7ee7aa00d68",
        "sha256": "f4e7c722182d60a38d996beb3ab93d7220c8340bbd8822487b9b271a55c73ff8"
      },
      "dob": { "date": "1980-02-17T10:46:48.846Z", "age": 41 },
      "registered": { "date": "2005-11-08T16:06:27.582Z", "age": 16 },
      "phone": "002-90726714",
      "cell": "0954-729-7878",
      "id": { "name": "", "value": null },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": { "title": "Monsieur", "first": "Giulio", "last": "Martinez" },
      "location": {
        "street": { "number": 3717, "name": "Rue de L'Abbé-Roger-Derry" },
        "city": "Gossau (Sg)",
        "state": "Basel-Landschaft",
        "country": "Switzerland",
        "postcode": 7572,
        "coordinates": { "latitude": "53.2751", "longitude": "-141.0999" },
        "timezone": { "offset": "+4:30", "description": "Kabul" }
      },
      "email": "giulio.martinez@example.com",
      "login": {
        "uuid": "687b4ecd-cd24-45aa-9952-055ff9b933f5",
        "username": "yellowgoose573",
        "password": "carole",
        "salt": "wv87MRKn",
        "md5": "f4189910bd37a5bd0fe6a64c9d9751f3",
        "sha1": "9c55b79af75c8023343f3930c0b449c869f7cbc2",
        "sha256": "b72577d7949f730c5cc1abbe7008135879e46ccacccfc66b89263d06fb5ed2a2"
      },
      "dob": { "date": "1971-10-15T08:39:24.354Z", "age": 50 },
      "registered": { "date": "2008-01-08T00:56:40.145Z", "age": 13 },
      "phone": "075 330 05 55",
      "cell": "076 424 18 04",
      "id": { "name": "AVS", "value": "756.9977.6729.33" },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/94.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/94.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/94.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "male",
      "name": { "title": "Mr", "first": "آرش", "last": "رضاییان" },
      "location": {
        "street": { "number": 6462, "name": "سبلان جنوبی" },
        "city": "قائم‌شهر",
        "state": "مرکزی",
        "country": "Iran",
        "postcode": 51873,
        "coordinates": { "latitude": "4.7824", "longitude": "0.5835" },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "arsh.rdyyn@example.com",
      "login": {
        "uuid": "5fb05500-8883-4737-9d17-ffbcab4f56b1",
        "username": "angrywolf343",
        "password": "eduardo",
        "salt": "LdcuzYwT",
        "md5": "f8ea1470d0e7e1223944d48c8d06d0eb",
        "sha1": "30e015434927f56c65b336258c62a001691702a2",
        "sha256": "43b94b199cf2be506a9cebcddcd15b1143f12598101862c274437f2e5993226f"
      },
      "dob": { "date": "1978-02-08T01:16:09.012Z", "age": 43 },
      "registered": { "date": "2011-09-23T04:00:22.499Z", "age": 10 },
      "phone": "026-99461530",
      "cell": "0948-780-6368",
      "id": { "name": "", "value": null },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": { "title": "Miss", "first": "Kelya", "last": "Blanchard" },
      "location": {
        "street": { "number": 3095, "name": "Rue Jean-Baldassini" },
        "city": "Argenteuil",
        "state": "Somme",
        "country": "France",
        "postcode": 56989,
        "coordinates": { "latitude": "-75.3431", "longitude": "-105.1500" },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "kelya.blanchard@example.com",
      "login": {
        "uuid": "ba59a790-056d-45b5-8e49-844aff7a2850",
        "username": "brownswan119",
        "password": "kimber",
        "salt": "tMgHQbhU",
        "md5": "f1d4fccb167ffc62e63b68d9d52ee721",
        "sha1": "4e0eaebd9214b664fd3312827b36c54eb09c4752",
        "sha256": "1e749568d5d050294af832ed3b2dce67100ec0ea826e042922ad9858c1445df3"
      },
      "dob": { "date": "1962-02-17T03:49:50.525Z", "age": 59 },
      "registered": { "date": "2008-01-01T18:38:02.398Z", "age": 13 },
      "phone": "04-76-60-92-06",
      "cell": "06-54-26-46-12",
      "id": { "name": "INSEE", "value": "2NNaN75527145 06" },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/73.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": { "title": "Mr", "first": "Greg", "last": "Hoffman" },
      "location": {
        "street": { "number": 6969, "name": "Royal Ln" },
        "city": "Carrollton",
        "state": "Indiana",
        "country": "United States",
        "postcode": 56394,
        "coordinates": { "latitude": "-1.5438", "longitude": "143.5082" },
        "timezone": { "offset": "-10:00", "description": "Hawaii" }
      },
      "email": "greg.hoffman@example.com",
      "login": {
        "uuid": "cd0a59d8-d714-444e-8e85-918b01b83d05",
        "username": "organiclion231",
        "password": "sand",
        "salt": "wjly871C",
        "md5": "fe874c862a680dcded1d192852750a0b",
        "sha1": "45f8193e992588c0e18a31c40ca1fdf4cd2e37ef",
        "sha256": "527a823a271d4ca0dc53161566e98e313634babacf2f5b9d9477da0f20e7153c"
      },
      "dob": { "date": "1994-06-15T01:51:18.562Z", "age": 27 },
      "registered": { "date": "2009-06-14T08:39:35.713Z", "age": 12 },
      "phone": "(900)-955-8088",
      "cell": "(940)-385-2755",
      "id": { "name": "SSN", "value": "782-38-6721" },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/76.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": { "title": "Miss", "first": "Reni", "last": "Fenzl" },
      "location": {
        "street": { "number": 3200, "name": "Wiesenweg" },
        "city": "Neuenrade",
        "state": "Mecklenburg-Vorpommern",
        "country": "Germany",
        "postcode": 52409,
        "coordinates": { "latitude": "-30.5632", "longitude": "90.9804" },
        "timezone": { "offset": "-12:00", "description": "Eniwetok, Kwajalein" }
      },
      "email": "reni.fenzl@example.com",
      "login": {
        "uuid": "cbaa0e40-a973-4979-a3b8-83c2680cf066",
        "username": "blackdog910",
        "password": "zhun",
        "salt": "d8GM5uY6",
        "md5": "31946fd8c3d2576fcecf4ba5c0627c7a",
        "sha1": "5acc15fb0c18f6cd1313c558bfedf089c3678d75",
        "sha256": "b595ed3132d1d80e7e8124aded6c566b7ba5a87ea21002ccd5675fa5e1438f7c"
      },
      "dob": { "date": "1956-06-08T12:01:19.207Z", "age": 65 },
      "registered": { "date": "2009-02-07T02:10:03.859Z", "age": 12 },
      "phone": "0208-6380894",
      "cell": "0175-5887062",
      "id": { "name": "", "value": null },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": { "title": "Mrs", "first": "Selene", "last": "Jesus" },
      "location": {
        "street": { "number": 6953, "name": "Rua Vinte E Quatro de Outubro" },
        "city": "Corumbá",
        "state": "Piauí",
        "country": "Brazil",
        "postcode": 67299,
        "coordinates": { "latitude": "-75.5117", "longitude": "70.8740" },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "selene.jesus@example.com",
      "login": {
        "uuid": "b2485236-ffd7-4c98-ae6c-e00f89d1ecf7",
        "username": "bigswan419",
        "password": "skittles",
        "salt": "1VjNAaRZ",
        "md5": "08d4e0941ea0f39bc39b6851200a7b30",
        "sha1": "38dcfc461a9d1622049526c715531229656dd6e7",
        "sha256": "881bc9983e7998634e72b64251731e17d011ec46abd750ac28a7cf750fb770ce"
      },
      "dob": { "date": "1990-07-18T19:43:36.638Z", "age": 31 },
      "registered": { "date": "2008-10-09T16:36:43.113Z", "age": 13 },
      "phone": "(38) 4247-0181",
      "cell": "(38) 7623-3771",
      "id": { "name": "", "value": null },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": { "title": "Mr", "first": "Ritthy", "last": "Shaw" },
      "location": {
        "street": { "number": 3559, "name": "Ash Dr" },
        "city": "Bakersfield",
        "state": "Montana",
        "country": "United States",
        "postcode": 27195,
        "coordinates": { "latitude": "-87.7321", "longitude": "-57.2241" },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "ritthy.shaw@example.com",
      "login": {
        "uuid": "d84c89cd-45ea-4c42-bfc3-205f9770f89e",
        "username": "redgoose605",
        "password": "1dragon",
        "salt": "OO0aU6pw",
        "md5": "680b9c070eb621706f4e764a04cf3d10",
        "sha1": "11abe2c83f24c2871354d90ad4744efa5172e170",
        "sha256": "0c7e39b204ea086ff7faab3ac3cdb3261f4d74b99eaf0075465b8b2d2cd284ca"
      },
      "dob": { "date": "1957-12-08T13:12:58.227Z", "age": 64 },
      "registered": { "date": "2016-09-06T19:26:48.000Z", "age": 5 },
      "phone": "(490)-420-0651",
      "cell": "(173)-474-5880",
      "id": { "name": "SSN", "value": "436-56-6408" },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/36.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": { "title": "Ms", "first": "Hanna", "last": "Hill" },
      "location": {
        "street": { "number": 9343, "name": "The Crescent" },
        "city": "Glasgow",
        "state": "Bedfordshire",
        "country": "United Kingdom",
        "postcode": "O38 8AD",
        "coordinates": { "latitude": "-30.7632", "longitude": "110.3897" },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "hanna.hill@example.com",
      "login": {
        "uuid": "ef22e36b-31ea-46d0-af78-9cdb0a41bd8a",
        "username": "lazybear205",
        "password": "enterprise",
        "salt": "eBW6OEb3",
        "md5": "9e7aa1272b86ce69c8326768a62dcca4",
        "sha1": "ca1a086a5efd8a8bee2fd5fd33320119856b843a",
        "sha256": "2293aaf84e6079a397ab76279b0389d8d7f5c7eb35b2613b04c692bf520fdf00"
      },
      "dob": { "date": "1998-05-30T12:37:46.227Z", "age": 23 },
      "registered": { "date": "2012-07-24T02:48:48.299Z", "age": 9 },
      "phone": "016973 70863",
      "cell": "0787-170-905",
      "id": { "name": "NINO", "value": "JC 70 40 42 W" },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/3.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": { "title": "Mr", "first": "حامد", "last": "محمدخان" },
      "location": {
        "street": { "number": 2958, "name": "دکتر علی شریعتی" },
        "city": "اراک",
        "state": "بوشهر",
        "country": "Iran",
        "postcode": 79200,
        "coordinates": { "latitude": "66.5370", "longitude": "70.3143" },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "hmd.mhmdkhn@example.com",
      "login": {
        "uuid": "f4aadc2a-60bd-4d1e-9d56-4e737c11d25c",
        "username": "whiteelephant852",
        "password": "lickit",
        "salt": "DUvoX6ph",
        "md5": "8a4f141af3453bc354195396d28e0151",
        "sha1": "eeb3e80420bb0f01c6ecce5a94c7fe09d902a4cf",
        "sha256": "1b685fcf72483456953923a9dc050210d27f02e1c758f6ce981e5d52a5e7c945"
      },
      "dob": { "date": "1965-12-13T13:49:02.654Z", "age": 56 },
      "registered": { "date": "2015-04-25T15:42:26.951Z", "age": 6 },
      "phone": "005-50402645",
      "cell": "0964-710-0949",
      "id": { "name": "", "value": null },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
      },
      "nat": "IR"
    }
  ]

export default users;