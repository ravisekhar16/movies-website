const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    overview: "A thief enters dreams to steal secrets.",
    poster: "https://images.openai.com/static-rsc-4/UCiMc7Dy2orkLJrwLPWAW9qetFuOx28wq4JlhLyDCXZvdKQ6_suQdHi4WaOCZP4FayaErSX1ouf4XCSaKoQOOvo4uyekTcq2-3-r7fBuockD-OVuyjQv_y-TeFeBrDkfKWETpuGoIuSjCSHnNXsUHAzd_Pa2apJodmJAtxtqVME?purpose=inline",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    overview: "Explorers travel through a wormhole in space.",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    overview: "Batman faces Joker in Gotham.",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    overview: "Avengers assemble to undo the snap.",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
  },
  {
    id: 5,
    title: "RRR",
    year: 2022,
    rating: 7.9,
    overview: "Two revolutionaries fight against British rule.",
    poster: "https://images.openai.com/static-rsc-4/naFZe5QN341qx-w4wnH5_1sbWp9fldHemJHNfuKNaF4dPilC3RWi8isFTfSxADiN0PDHSjHvfEtqsrPR55UFEn_Ax20XFxIr9bvV8Ew7PcvLLwrtoCny4Ul-yjw8_ulDZIsM6Q1iFg4XVDSsQJ7KbyVrlrb1mbJayOjcBAIx0NU?purpose=inline",
    trailer: "https://www.youtube.com/embed/GY4BgdUSpbE"
  },
  {
    id: 6,
    title: "Baahubali: The Beginning",
    year: 2015,
    rating: 8.0,
    overview: "A young man discovers his royal heritage.",
    poster: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    id: 7,
    title: "Baahubali 2: The Conclusion",
    year: 2017,
    rating: 8.2,
    overview: "The epic conclusion of Mahishmati kingdom.",
    poster: "https://i.pinimg.com/originals/54/db/97/54db97d1f7883e0f4e88b82314b4a9ad.jpg",
    trailer: "https://www.youtube.com/embed/G62HrubdD6o"
  },
  {
    id: 8,
    title: "KGF Chapter 1",
    year: 2018,
    rating: 8.2,
    overview: "Rise of Rocky in gold mafia world.",
    poster: "https://image.tmdb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
    trailer: "https://www.youtube.com/embed/-KfsY-qwBS0"
  },
  {
    id: 9,
    title: "KGF Chapter 2",
    year: 2022,
    rating: 8.4,
    overview: "Rocky becomes king of KGF.",
    poster: "https://images.openai.com/static-rsc-4/ZT8KMo8BIKyRSytJOsm4r9pwhnPU0u1vERwFNJmQn8yb41mVQrUV5XZRH5z-wcvHWbKXGM5GHG34ZpuDleGeupaDNjxvz2WqsgAK0p_-QIQKiSglWa6FKkAKggA731w6_-d80Rga851-XxDeMOSK06pcCOUeXOeiVu4K_DRsEuxVkr97aSLW6UFWnfxcu0TF?purpose=fullsize",
    trailer: "https://www.youtube.com/embed/JKa05nyUmuQ"
  },
  {
    id: 10,
    title: "Pushpa: The Rise",
    year: 2021,
    rating: 7.6,
    overview: "A red sandalwood smuggler rises in ranks.",
    poster: "https://images.openai.com/static-rsc-4/HG0ENLRiMnK0Ry99hW4agHPNnPnlZ_K666ILPz54RZtrl6hUynMNdBNbBwupUunFFho_0aaKFQ23UWkKNyDtDmYMG0pm40-cp5v9sDjjFrIRZ29NH2gQuySwS9LfXaKUcOiUOUlC3r2uFkK1RVKw_XIdoBXgpA6LKLu3pxZdwo4geTe-8MzsWKJcYUewClCr?purpose=fullsize",
    trailer: "https://www.youtube.com/embed/Q1NKMPhP8PY"
  },
  {
    id: 11,
    title: "Jawan",
    year: 2023,
    rating: 7.0,
    overview: "A man fights corruption and injustice.",
    poster: "https://th.bing.com/th/id/OIP.1WuGzMZMkw24rDSInkV7RgHaJQ?w=149&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    trailer: "https://www.youtube.com/embed/k8YiqM0Y-78"
  },
  {
    id: 12,
    title: "Pathaan",
    year: 2023,
    rating: 6.8,
    overview: "A spy fights against global threats.",
    poster: "https://wallpapers.com/images/high/yrf-pathaan-poster-c08bbcfgxx09bys2.webp",
    trailer: "https://www.youtube.com/embed/vqu4z34wENw"
  },
  {
    id: 13,
    title: "Dangal",
    year: 2016,
    rating: 8.4,
    overview: "A wrestler trains his daughters to be champions.",
    poster: "https://tse1.mm.bing.net/th/id/OIP.8DngPcmpaGaL4zLAbYpDjgHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/x_7YlGv9u1g"
  },
  {
    id: 14,
    title: "3 Idiots",
    year: 2009,
    rating: 8.4,
    overview: "Three friends navigate engineering life.",
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    trailer: "https://www.youtube.com/embed/K0eDlFX9GMc"
  },
  {
    id: 15,
    title: "Drishyam",
    year: 2015,
    rating: 8.2,
    overview: "A man protects his family from police.",
    poster: "https://th.bing.com/th/id/OIP.Dcp2-JGGiw8vmuzARwhsAAAAAA?w=125&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    trailer: "https://www.youtube.com/embed/AuuX2j14Nbg"
  },
  {
    id: 16,
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    overview: "A love story aboard the ill-fated ship.",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ"
  },
  {
    id: 17,
    title: "Avatar",
    year: 2009,
    rating: 7.8,
    overview: "A marine explores alien world Pandora.",
    poster: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    id: 18,
    title: "Avengers: Infinity War",
    year: 2018,
    rating: 8.4,
    overview: "Avengers face Thanos.",
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8"
  },
  {
    id: 19,
    title: "Iron Man",
    year: 2008,
    rating: 7.9,
    overview: "A billionaire builds a superhero suit.",
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    trailer: "https://www.youtube.com/embed/8hYlB38asDY"
  },
  {
    id: 20,
    title: "Captain America: Civil War",
    year: 2016,
    rating: 7.8,
    overview: "Avengers split into factions.",
    poster: "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    trailer: "https://www.youtube.com/embed/dKrVegVI0Us"
  },
  {
    id: 21,
    title: "Doctor Strange",
    year: 2016,
    rating: 7.5,
    overview: "A surgeon becomes a sorcerer.",
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    trailer: "https://www.youtube.com/embed/HSzx-zryEgM"
  },
  {
    id: 22,
    title: "Spider-Man: No Way Home",
    year: 2021,
    rating: 8.3,
    overview: "Multiverse chaos with Spider-Men.",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    trailer: "https://www.youtube.com/embed/JfVOs4VSpmA"
  },
  {
    id: 23,
    title: "Joker",
    year: 2019,
    rating: 8.4,
    overview: "Origin story of Joker.",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
  },
  {
    id: 24,
    title: "The Batman",
    year: 2022,
    rating: 7.9,
    overview: "Batman uncovers corruption in Gotham.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4"
  },
  {
    id: 25,
    title: "Black Panther",
    year: 2018,
    rating: 7.3,
    overview: "King of Wakanda protects his nation.",
    poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    trailer: "https://www.youtube.com/embed/xjDjIWPwcPU"
  },
  {
    id: 26,
    title: "Thor: Ragnarok",
    year: 2017,
    rating: 7.9,
    overview: "Thor fights to save Asgard.",
    poster: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    trailer: "https://www.youtube.com/embed/ue80QwXMRHg"
  },
  {
    id: 27,
    title: "Frozen",
    year: 2013,
    rating: 7.4,
    overview: "Princess Elsa has magical ice powers.",
    poster: "https://th.bing.com/th?q=Frozen+4K+Blu-ray+Cover&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    trailer: "https://www.youtube.com/embed/TbQm5doF_Uc"
  },
  {
    id: 28,
    title: "The Lion King",
    year: 2019,
    rating: 6.8,
    overview: "A lion cub becomes king.",
    poster: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    trailer: "https://www.youtube.com/embed/7TavVZMewpY"
  },
  {
    id: 29,
    title: "Aladdin",
    year: 2019,
    rating: 6.9,
    overview: "A street boy finds a magic lamp.",
    poster: "https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
    trailer: "https://www.youtube.com/embed/foyufD52aog"
  },
  {
    id: 30,
    title: "Fast & Furious 7",
    year: 2015,
    rating: 7.1,
    overview: "High-speed action and family bonds.",
    poster: "https://th.bing.com/th/id/OIP.2QV5u3Dn9LMWsIYIS9AEUwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/embed/Skpu5HaVkOc"
  },
  {
    id: 31,
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    overview: "An assassin seeks revenge.",
    poster: "https://th.bing.com/th/id/OIP.Td7tpJFVUBu7WBimgwVsvQHaJP?w=151&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3",
    trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
  },
  {
    id: 32,
    title: "Mission Impossible Fallout",
    year: 2018,
    rating: 7.7,
    overview: "Ethan Hunt faces nuclear threats.",
    poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    trailer: "https://www.youtube.com/embed/wb49-oV0F78"
  },
  {
    id: 33,
    title: "Top Gun Maverick",
    year: 2022,
    rating: 8.3,
    overview: "A pilot trains new recruits.",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    trailer: "https://www.youtube.com/embed/giXco2jaZ_4"
  },
  {
    id: 34,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    overview: "Reality is a simulation.",
    poster: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
  {
    id: 35,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    overview: "A general becomes a gladiator.",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    trailer: "https://www.youtube.com/embed/owK1qxDselE"
  },
  {
    id: 36,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    overview: "Hope and friendship in prison.",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
  },
  {
    id: 37,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    overview: "Life story of a simple man.",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    trailer: "https://www.youtube.com/embed/bLvqoHBptjg"
  },
  {
    id: 38,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    overview: "An underground fight club forms.",
    poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    trailer: "https://www.youtube.com/embed/qtRKdVHc-cE"
  },
  {
    id: 39,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    overview: "The story of a mafia family.",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    trailer: "https://www.youtube.com/embed/sY1S34973zA"
  },
  {
    id: 40,
    title: "The Avengers",
    year: 2012,
    rating: 8.0,
    overview: "Earth’s mightiest heroes unite.",
    poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  }
];
export default movies;