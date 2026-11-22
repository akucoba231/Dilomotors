const APP_CONFIG = {
    appName: "Dilomotors",
    ownerName: "Diding Fakhrudin, S. Pd",
    storagePrefix: "dilo",
    materiPrefix: "L",
    assetPath: "./assets/",
    videoPath: "./video/",
    colors: {
        primary: "#C62828",
        primaryLight: "#EF5350",
        bgLight: "#FDECEA",
        btnGradient: "linear-gradient(180deg, #EF5350, #C62828)",
        btnShadow: "#AD1F1F"
    },
    wordartGradient: "linear-gradient(90deg, #EF5350, #8E0000)",
    tagline: "Locomotor Motor Skills",
    tagline_id: "Lokomotor"
};

const dataMateri = [
    {
        id_materi: 'L1',
        nama_materi: 'Berlari',
        permainan: [
            {
                nama_permainan: 'Lari 100 Meter',
                instruksi: [
                    'Permainan lari 100 meter adalah latihan berlari cepat yang bertujuan untuk mengukur kecepatan maksimal atlet dalam menempuh jarak pendek.',
                    'Permainan ini bisa dilakukan secara individu atau kompetitif antar teman.'
                ],
                tujuan: 'Meningkatkan kecepatan lari dan teknik berlari cepat. Mengukur kemampuan lari dalam waktu yang singkat.',
                langkah: [
                    'Tentukan garis start dan finish sejauh 100 meter.',
                    'Setiap peserta berlari dari start menuju finish.',
                    'Catat waktu yang diperlukan untuk menyelesaikan jarak 100 meter.',
                    'Atlet dengan waktu tercepat dianggap pemenang.'
                ],
                video: ["running_satu_480p.mp4"],
                level: "Mudah"
            },
            {
                nama_permainan: 'Lari Kejar',
                instruksi: [
                    'Permainan lari kejar adalah permainan yang melibatkan dua kelompok, satu kelompok berperan sebagai pengejar dan kelompok lainnya berperan sebagai yang dikejar.',
                    'Kelompok yang dikejar harus berlari menghindar agar tidak tertangkap oleh kelompok pengejar.'
                ],
                tujuan: 'Meningkatkan daya tahan dan kecepatan berlari. Melatih kelincahan dan kemampuan untuk menghindar.',
                langkah: [
                    'Tentukan dua kelompok, satu sebagai pengejar dan satu sebagai yang dikejar.',
                    'Kelompok yang dikejar harus berlari menghindari pengejar selama waktu yang ditentukan.',
                    'Setiap orang yang tertangkap oleh pengejar harus keluar dari permainan.',
                    'Pemenang adalah kelompok yang berhasil menghindari pengejar selama waktu tertentu.'
                ],
                video: ["berlari_dua.mp4"],
                level: "Sedang"
            },
            {
                nama_permainan: 'Lari Zig-Zag',
                instruksi: [
                    'Lari zig-zag adalah permainan berlari dengan pola rintangan yang berbentuk zig-zag.',
                    'Pemain harus berlari menghindari rintangan atau berlari mengikuti jalur zig-zag dalam waktu yang cepat.'
                ],
                tujuan: 'Meningkatkan kelincahan dan koordinasi gerak. Melatih keseimbangan tubuh saat berlari dengan pola zig-zag.',
                langkah: [
                    'Tentukan garis start dan finish, serta letakkan cone atau tiang untuk membentuk jalur zig-zag.',
                    'Pemain harus berlari zig-zag menghindari atau melintasi setiap cone.',
                    'Waktu tercepat yang berhasil menyelesaikan rintangan zig-zag dengan baik adalah pemenang.'
                ],
                video: ["lari_tiga.mp4"],
                level: "Sulit"
            }
        ]
    },
    {
        id_materi: 'L2',
        nama_materi: 'Berderap',
        permainan: [
            {
                nama_permainan: 'Lomba Gallop',
                instruksi: [
                    'Permainan ini melibatkan peserta yang berlomba untuk melompat dengan cara gallop (melangkah dengan satu kaki memimpin dan kaki belakang mengikuti).',
                    'Pemain harus melakukan teknik gallop dengan benar untuk mencapai garis finish.'
                ],
                tujuan: 'Meningkatkan koordinasi antara kaki kanan dan kiri. Melatih keseimbangan dan ketepatan dalam melangkah.',
                langkah: [
                    'Tentukan garis start dan finish.',
                    'Setiap peserta diminta untuk melakukan gallop dengan kaki kanan memimpin, kemudian kaki kiri mengikuti.',
                    'Pemain yang pertama kali sampai di garis finish dengan teknik gallop yang tepat, memenangkan permainan.'
                ],
                video: ["gallop_1.mp4"],
                level: "Mudah"
            },
            {
                nama_permainan: 'Gallop Relay (Estafet Gallop)',
                instruksi: [
                    'Permainan ini adalah variasi dari permainan estafet, namun menggunakan teknik gallop.',
                    'Setiap peserta harus melakukan teknik gallop, kemudian menyentuh temannya sebagai estafet kepada rekan timnya.'
                ],
                tujuan: 'Meningkatkan kelincahan dan koordinasi tim. Mengajarkan kerja sama dan komunikasi antar anggota tim.',
                langkah: [
                    'Bagi peserta menjadi dua tim.',
                    'Setiap tim berlari menggunakan teknik gallop menuju titik tertentu.',
                    'Setelah sampai di titik tersebut, peserta pertama menyentuh temannya sebagai peserta berikutnya.',
                    'Tim yang lebih cepat menyelesaikan estafet dengan benar, memenangkan permainan.'
                ],
                video: ["gallop_2.mp4"],
                level: "Sedang"
            },
            {
                nama_permainan: 'Gallop Zigzag',
                instruksi: [
                    'Permainan ini mengharuskan peserta melakukan gallop dengan melintasi jalur zigzag.',
                    'Teknik gallop digunakan untuk meningkatkan keseimbangan dan kemampuan mengubah arah dengan cepat.'
                ],
                tujuan: 'Meningkatkan keterampilan koordinasi dan keseimbangan saat bergerak dalam pola zigzag. Melatih ketangkasan dalam mengubah arah saat berlari.',
                langkah: [
                    'Tentukan jalur zigzag dengan menggunakan cone atau tiang.',
                    'Pemain diminta untuk berlari menggunakan teknik gallop sambil mengikuti pola zigzag yang sudah disiapkan.',
                    'Pemain yang dapat menyelesaikan jalur zigzag dengan benar dan tepat waktu, menjadi pemenangnya.'
                ],
                video: ["gallop_3.mp4"],
                level: "Sulit"
            }
        ]
    },
    {
        id_materi: 'L3',
        nama_materi: 'Berjingkat',
        permainan: [
            {
                nama_permainan: 'Hop on One Leg (Melompat Satu Kaki)',
                instruksi: [
                    'Permainan ini mengharuskan pemain untuk melompat menggunakan satu kaki sepanjang jalur yang telah ditentukan.',
                    'Pemain yang dapat melompati jalur tersebut dengan benar dan tanpa jatuh akan menjadi pemenang.'
                ],
                tujuan: 'Melatih keseimbangan tubuh dan kekuatan kaki. Meningkatkan koordinasi dan daya tahan tubuh.',
                langkah: [
                    'Tentukan jalur lurus sepanjang 5 meter.',
                    'Pemain diminta untuk melompat satu kaki dari titik awal hingga titik finish.',
                    'Pemain yang dapat menyelesaikan dengan kaki yang sama tanpa jatuh, menjadi pemenangnya.',
                    'Ulangi permainan dengan kaki yang berbeda.'
                ],
                video: ["hop_satu.mp4"],
                level: "Mudah"
            },
            {
                nama_permainan: 'Hop, Skip, Jump Relay (Estafet Lompat)',
                instruksi: [
                    'Permainan ini mengkombinasikan lompatan satu kaki dengan teknik estafet.',
                    'Setiap pemain harus melompat menggunakan satu kaki, kemudian menyentuh temannya sebagai estafet ke anggota tim berikutnya.'
                ],
                tujuan: 'Meningkatkan kemampuan melompat satu kaki secara cepat. Melatih kerja sama dan koordinasi dalam tim.',
                langkah: [
                    'Bagi pemain menjadi dua tim.',
                    'Setiap peserta harus melompat satu kaki sejauh 5 meter dan menyentuh temannya sebagai estafet kepada teman satu tim.',
                    'Tim yang dapat menyelesaikan seluruh estafet lebih cepat dengan teknik yang benar, menjadi pemenang.'
                ],
                video: ["hop_relay.mp4"],
                level: "Sedang"
            },
            {
                nama_permainan: 'Hopscotch (Gambar Karet)',
                instruksi: [
                    'Permainan hopscotch adalah permainan tradisional yang mengharuskan pemain untuk melompat dari satu petak ke petak lainnya menggunakan satu kaki.',
                    'Pemain harus mengikuti pola tertentu yang sudah digambar di lantai.'
                ],
                tujuan: 'Melatih keseimbangan tubuh dengan melompat satu kaki. Mengajarkan keterampilan motorik kasar dan ketangkasan.',
                langkah: [
                    'Gambar pola hopscotch di lantai atau tanah, terdiri dari petak-petak kecil.',
                    'Pemain mulai melompat dari satu petak ke petak lain dengan satu kaki.',
                    'Pemain harus mengikuti pola yang sudah digambar tanpa jatuh atau menginjak garis.',
                    'Pemain yang berhasil menyelesaikan pola tanpa kesalahan, menjadi pemenang.'
                ],
                video: ["hop_tiga.mp4"],
                level: "Sulit"
            }
        ]
    },
    {
        id_materi: 'L4',
        nama_materi: 'Melompat',
        permainan: [
            {
                nama_permainan: 'Lompat Jauh dengan Dua Kaki',
                instruksi: [
                    'Permainan ini melibatkan pemain yang melompat sejauh mungkin dengan dua kaki, bertolak dari titik yang sama dan mendarat dengan kedua kaki bersama.',
                    'Permainan ini menguji kekuatan kaki serta keseimbangan saat mendarat.'
                ],
                tujuan: 'Meningkatkan kekuatan dan daya tahan kaki. Melatih koordinasi dan keseimbangan tubuh saat mendarat.',
                langkah: [
                    'Tandai garis start dan finish untuk jarak lompatan.',
                    'Setiap pemain bertolak dengan dua kaki dan berusaha untuk melompat sejauh mungkin.',
                    'Ukur jarak lompatan dari garis start hingga tempat pendaratan pertama kali. Pemain dengan lompatan terjauh, memenangkan permainan.'
                ],
                video: ["jumping_satu_480p.mp4"],
                level: "Mudah"
            },
            {
                nama_permainan: 'Lompat Jauh Berurutan',
                instruksi: [
                    'Permainan ini mengharuskan pemain untuk melakukan lompatan berurutan dalam satu kali percobaan.',
                    'Pemain bertolak dengan dua kaki dan berusaha mencapai jarak lompat yang lebih jauh setiap kali.'
                ],
                tujuan: 'Meningkatkan kemampuan melompat jauh secara repetitif. Mengembangkan koordinasi antar kaki dan keseimbangan tubuh.',
                langkah: [
                    'Tandai garis start dan tujuan.',
                    'Pemain melakukan lompatan dengan dua kaki, dan kemudian melakukan lompatan berturut-turut tanpa berhenti.',
                    'Ukur jarak lompatan pertama dan berikan kesempatan untuk lompatan berikutnya. Pemain yang melompati jarak terjauh, menjadi pemenang.'
                ],
                video: ["jumping_dua_480p.mp4"],
                level: "Sedang"
            },
            {
                nama_permainan: 'Lompat Jauh dengan Tali',
                instruksi: [
                    'Dalam permainan ini, pemain harus melompat sejauh mungkin dengan menggunakan dua kaki untuk melompati sebuah tali yang ditarik sejajar dengan tanah.',
                    'Tali diangkat sedikit lebih tinggi setelah setiap ronde lompatan.'
                ],
                tujuan: 'Meningkatkan koordinasi kaki dan ketangkasan. Melatih kekuatan kaki untuk mendorong tubuh lebih jauh.',
                langkah: [
                    'Sediakan tali panjang yang akan digunakan untuk melompati.',
                    'Pemain mulai dengan lompatan dari dua kaki untuk melompati tali yang ditarik sejajar dengan tanah.',
                    'Setelah setiap lompatan, tali diangkat sedikit lebih tinggi untuk tantangan yang lebih besar.',
                    'Pemain yang berhasil melompati semua tingkat tali dengan lompatan terjauh, menjadi pemenang.'
                ],
                video: ["melompat_tiga_720p.mp4"],
                level: "Sulit"
            }
        ]
    },
    {
        id_materi: 'L5',
        nama_materi: 'Berjingkrak',
        permainan: [
            {
                nama_permainan: 'Lomba Skip',
                instruksi: [
                    'Permainan ini melibatkan para peserta yang harus berlari dengan teknik skip.',
                    'Teknik skip yaitu gerakan melangkah dan melompat secara berirama dengan kaki bergantian.'
                ],
                tujuan: 'Meningkatkan koordinasi antara kaki kanan dan kiri. Melatih kelincahan dan ketepatan dalam bergerak.',
                langkah: [
                    'Tentukan garis start dan finish.',
                    'Setiap pemain diminta untuk melakukan skip (langkah dan lompat bergantian) menuju garis finish.',
                    'Pemain yang berhasil sampai di garis finish terlebih dahulu dengan teknik skip yang tepat, memenangkan lomba.'
                ],
                video: ["skipping_satu_720p.mp4"],
                level: "Mudah"
            },
            {
                nama_permainan: 'Skip Relay (Estafet Skip)',
                instruksi: [
                    'Permainan ini adalah variasi dari permainan estafet, di mana pemain harus melompat dengan teknik skip.',
                    'Pemain harus menyentuh temannya sebagai tanda estafet kepada pemain berikutnya.'
                ],
                tujuan: 'Melatih koordinasi tim dan kerja sama. Mengembangkan keterampilan skip dan daya tahan tubuh.',
                langkah: [
                    'Bagi pemain menjadi dua tim.',
                    'Setiap pemain harus melakukan skip sejauh 10 meter dan menyentuh temannya sebagai tanda estafet kepada pemain berikutnya.',
                    'Tim yang lebih cepat menyelesaikan estafet dengan menggunakan teknik skip yang benar, memenangkan permainan.'
                ],
                video: ["skip_dua.mp4"],
                level: "Sedang"
            },
            {
                nama_permainan: 'Skip Zigzag',
                instruksi: [
                    'Permainan ini melibatkan teknik skip di mana pemain harus melompat dengan kaki bergantian.',
                    'Lompatan dilakukan dengan mengikuti pola zigzag yang telah ditentukan.'
                ],
                tujuan: 'Mengembangkan kemampuan koordinasi tubuh saat bergerak dalam pola zigzag. Meningkatkan kelincahan dan ketangkasan dalam gerakan kaki bergantian.',
                langkah: [
                    'Tentukan jalur zigzag dengan menggunakan cone atau tanda lain.',
                    'Pemain diminta untuk melakukan skip mengikuti jalur zigzag yang telah ditentukan.',
                    'Pemain yang dapat menyelesaikan jalur zigzag dengan tepat dan cepat, menjadi pemenang.'
                ],
                video: ["skip_tiga.mp4"],
                level: "Sulit"
            }
        ]
    },
    {
        id_materi: 'L6',
        nama_materi: 'Meluncur',
        permainan: [
            {
                nama_permainan: '"I See" Versi Slide',
                instruksi: [
                    'Aktivitas permainan tanpa alat untuk melatih gerak lokomotor di ruang terbuka.',
                    'Guru memberi aba-aba agar siswa bergerak slide ke arah tertentu dan siswa bergerak sambil menjaga jarak antarteman.'
                ],
                tujuan: 'Melatih arah gerak, kesadaran ruang, dan kemampuan melakukan slide dengan benar tanpa bertabrakan.',
                langkah: [
                    'Guru berdiri di depan kelas lalu memberi aba-aba (misalnya: "slide ke kanan").',
                    'Siswa merespons instruksi lalu bergerak dengan teknik slide sambil menjaga jarak antarteman.'
                ],
                video: ["slide_satu.mp4"],
                level: "Mudah"
            },
            {
                nama_permainan: '"Lines" / Geser ke Garis',
                instruksi: [
                    'Permainan tanpa alat yang menuntut perpindahan dari satu titik ke titik atau garis lapangan lain.',
                    'Seluruh perpindahan dilakukan secara spesifik dengan teknik slide.'
                ],
                tujuan: 'Melatih keterampilan perpindahan slide menggunakan variasi jarak, putaran, dan kecepatan yang berbeda.',
                langkah: [
                    'Siswa berbaris di garis awal.',
                    'Guru memberi instruksi jarak, misalnya ke garis pertama, garis tengah, lalu kembali lagi.',
                    'Siswa bergerak melakukan semua perpindahan tersebut dengan teknik slide.',
                    'Guru dapat memberikan variasi putaran (contoh: putaran 1 slide kanan, putaran 2 slide kiri, putaran 3 cepat-lambat).'
                ],
                video: ["slide_dua.mp4"],
                level: "Sedang"
            },
            {
                nama_permainan: 'Slide Tag (Kejaran Menggeser)',
                instruksi: [
                    'Permainan kejar-kejaran, di mana satu pemain berperan sebagai pengejar.',
                    'Pengejar harus mengejar pemain lain dengan murni menggunakan teknik menggeser.'
                ],
                tujuan: 'Mengembangkan kelincahan, keseimbangan, dan kemampuan bergerak ke samping. Meningkatkan reaksi cepat dan koordinasi antara kaki.',
                langkah: [
                    'Tentukan area permainan dan pilih satu pemain sebagai pengejar.',
                    'Pemain yang dikejar harus berlari menjauh, sementara pengejar murni bergerak menggeser ke samping untuk mengejar.',
                    'Pemain yang dikejar akan bertahan selama mungkin tanpa tertangkap oleh pengejar.',
                    'Pemenang adalah pemain yang bertahan paling lama tanpa tertangkap.'
                ],
                video: ["slide_tiga.mp4"],
                level: "Sulit"
            }
        ]
    }
];

const dataMateri_EN = [
    {
        id_materi: 'L1',
        nama_materi: 'Running',
        permainan: [
            {
                nama_permainan: '100-Meter Dash',
                instruksi: [
                    'The 100-meter dash is a sprinting exercise aimed at measuring an athlete\'s maximum speed over a short distance.',
                    'This game can be played individually or competitively with friends.'
                ],
                tujuan: 'Improve running speed and sprinting technique. Measure running ability over a short period of time.',
                langkah: [
                    'Set a start and finish line 100 meters apart.',
                    'Each participant sprints from the start line to the finish line.',
                    'Record the time taken to complete the 100-meter distance.',
                    'The athlete with the fastest time is declared the winner.'
                ],
                video: ["running_satu_480p.mp4"],
                level: "Easy"
            },
            {
                nama_permainan: 'Chase Run',
                instruksi: [
                    'Chase run is a game involving two groups: one group acts as the chasers and the other acts as the runners.',
                    'The chased group must run and evade to avoid being caught by the chasers.'
                ],
                tujuan: 'Improve endurance and running speed. Train agility and evasion skills.',
                langkah: [
                    'Divide participants into two groups: one as the chasers and one as the runners.',
                    'The runners must run to evade the chasers for a set period of time.',
                    'Anyone caught by the chasers is out of the game.',
                    'The winning group is the one that successfully evades the chasers for the set duration.'
                ],
                video: ["berlari_dua.mp4"],
                level: "Medium"
            },
            {
                nama_permainan: 'Zig-Zag Run',
                instruksi: [
                    'Zig-zag run is a running game with obstacles arranged in a zig-zag pattern.',
                    'Players must run to avoid obstacles or follow the zig-zag path as quickly as possible.'
                ],
                tujuan: 'Improve agility and movement coordination. Train body balance while running in a zig-zag pattern.',
                langkah: [
                    'Set the start and finish lines, and place cones or poles to form a zig-zag path.',
                    'Players must run in a zig-zag pattern around or through each cone.',
                    'The fastest time to properly complete the zig-zag course wins.'
                ],
                video: ["lari_tiga.mp4"],
                level: "Hard"
            }
        ]
    },
    {
        id_materi: 'L2',
        nama_materi: 'Galloping',
        permainan: [
            {
                nama_permainan: 'Gallop Race',
                instruksi: [
                    'This game involves participants racing using a galloping motion (stepping with one foot leading and the back foot following).',
                    'Players must perform the galloping technique properly to reach the finish line.'
                ],
                tujuan: 'Improve coordination between the right and left feet. Train balance and stepping accuracy.',
                langkah: [
                    'Set the start and finish lines.',
                    'Each participant is asked to gallop with the right foot leading and the left foot following.',
                    'The first player to reach the finish line using the correct galloping technique wins the game.'
                ],
                video: ["gallop_1.mp4"],
                level: "Easy"
            },
            {
                nama_permainan: 'Gallop Relay',
                instruksi: [
                    'This game is a variation of a relay race that uses the galloping technique.',
                    'Each participant must gallop and then tag their teammate to pass the turn.'
                ],
                tujuan: 'Improve agility and team coordination. Teach teamwork and communication among team members.',
                langkah: [
                    'Divide participants into two teams.',
                    'Each team moves toward a designated point using the galloping technique.',
                    'Upon reaching the point, the first participant tags the next teammate.',
                    'The team that finishes the relay faster using the correct technique wins the game.'
                ],
                video: ["gallop_2.mp4"],
                level: "Medium"
            },
            {
                nama_permainan: 'Zig-Zag Gallop',
                instruksi: [
                    'This game requires participants to gallop along a zig-zag path.',
                    'The galloping technique is used to improve balance and the ability to change direction quickly.'
                ],
                tujuan: 'Improve coordination and balance skills while moving in a zig-zag pattern. Train agility in changing direction while moving.',
                langkah: [
                    'Set up a zig-zag path using cones or poles.',
                    'Players are asked to move using the galloping technique while following the prepared zig-zag pattern.',
                    'The player who completes the zig-zag path accurately and in the fastest time wins.'
                ],
                video: ["gallop_3.mp4"],
                level: "Hard"
            }
        ]
    },
    {
        id_materi: 'L3',
        nama_materi: 'Hopping',
        permainan: [
            {
                nama_permainan: 'Hop on One Leg',
                instruksi: [
                    'This game requires players to hop on one leg along a predetermined path.',
                    'The player who completes the path properly without falling wins.'
                ],
                tujuan: 'Train body balance and leg strength. Improve coordination and physical endurance.',
                langkah: [
                    'Set a straight path 5 meters long.',
                    'Players are asked to hop on one leg from the starting point to the finish point.',
                    'The player who finishes using the same leg without falling wins.',
                    'Repeat the game using the other leg.'
                ],
                video: ["hop_satu.mp4"],
                level: "Easy"
            },
            {
                nama_permainan: 'Hop, Skip, Jump Relay',
                instruksi: [
                    'This game combines one-legged hopping with a relay format.',
                    'Each player must hop on one leg and then tag their teammate to pass the turn to the next team member.'
                ],
                tujuan: 'Improve the ability to hop on one leg quickly. Train teamwork and coordination within a team.',
                langkah: [
                    'Divide players into two teams.',
                    'Each participant must hop on one leg for 5 meters and tag their teammate as a relay handoff.',
                    'The team that completes the entire relay faster with proper technique wins.'
                ],
                video: ["hop_relay.mp4"],
                level: "Medium"
            },
            {
                nama_permainan: 'Hopscotch',
                instruksi: [
                    'Hopscotch is a traditional game that requires players to hop from one square to another on one leg.',
                    'Players must follow a specific pattern drawn on the ground.'
                ],
                tujuan: 'Train body balance by hopping on one leg. Develop gross motor skills and agility.',
                langkah: [
                    'Draw a hopscotch pattern consisting of small squares on the floor or ground.',
                    'Players begin hopping from one square to the next on one leg.',
                    'Players must follow the drawn pattern without falling or stepping on the lines.',
                    'The player who successfully completes the pattern without any mistakes wins.'
                ],
                video: ["hop_tiga.mp4"],
                level: "Hard"
            }
        ]
    },
    {
        id_materi: 'L4',
        nama_materi: 'Jumping',
        permainan: [
            {
                nama_permainan: 'Two-Footed Long Jump',
                instruksi: [
                    'This game involves players jumping as far as possible using both feet, taking off from the same spot and landing with both feet together.',
                    'This game tests leg strength as well as balance upon landing.'
                ],
                tujuan: 'Improve leg strength and endurance. Train coordination and body balance when landing.',
                langkah: [
                    'Mark the start and finish lines for the jump distance.',
                    'Each player takes off with both feet and tries to jump as far as possible.',
                    'Measure the jump distance from the start line to the first landing spot. The player with the longest jump wins.'
                ],
                video: ["jumping_satu_480p.mp4"],
                level: "Easy"
            },
            {
                nama_permainan: 'Consecutive Long Jumps',
                instruksi: [
                    'This game requires players to perform consecutive jumps in a single attempt.',
                    'Players take off with both feet and try to achieve a farther jump distance each time.'
                ],
                tujuan: 'Improve the ability to perform repetitive long jumps. Develop coordination between both legs and body balance.',
                langkah: [
                    'Mark the start and target lines.',
                    'Players jump with both feet and immediately perform consecutive jumps without stopping.',
                    'Measure the distance of the first jump and allow subsequent jumps. The player who covers the farthest distance wins.'
                ],
                video: ["jumping_dua_480p.mp4"],
                level: "Medium"
            },
            {
                nama_permainan: 'Rope Long Jump',
                instruksi: [
                    'In this game, players must jump as far as possible using both feet to clear a rope stretched parallel to the ground.',
                    'The rope is raised slightly higher after each round of jumping.'
                ],
                tujuan: 'Improve leg coordination and agility. Train leg strength to propel the body farther.',
                langkah: [
                    'Prepare a long rope to be jumped over.',
                    'Players begin with a two-footed jump to clear the rope stretched parallel to the ground.',
                    'After each round, the rope is raised slightly higher for a greater challenge.',
                    'The player who clears all rope levels with the farthest jump wins.'
                ],
                video: ["melompat_tiga_720p.mp4"],
                level: "Hard"
            }
        ]
    },
    {
        id_materi: 'L5',
        nama_materi: 'Skipping',
        permainan: [
            {
                nama_permainan: 'Skip Race',
                instruksi: [
                    'This game involves participants racing using the skipping technique.',
                    'Skipping is a rhythmic step-and-hop movement performed with alternating feet.'
                ],
                tujuan: 'Improve coordination between the right and left feet. Train agility and precision in movement.',
                langkah: [
                    'Set the start and finish lines.',
                    'Each player is asked to skip (alternating step and hop) toward the finish line.',
                    'The player who reaches the finish line first using the correct skipping technique wins the race.'
                ],
                video: ["skipping_satu_720p.mp4"],
                level: "Easy"
            },
            {
                nama_permainan: 'Skip Relay',
                instruksi: [
                    'This game is a variation of a relay race where players must move using the skipping technique.',
                    'Players must tag their teammate as a relay handoff to the next player.'
                ],
                tujuan: 'Train team coordination and cooperation. Develop skipping skills and physical endurance.',
                langkah: [
                    'Divide players into two teams.',
                    'Each player must skip for 10 meters and tag their teammate to pass the turn.',
                    'The team that finishes the relay faster using the correct skipping technique wins.'
                ],
                video: ["skip_dua.mp4"],
                level: "Medium"
            },
            {
                nama_permainan: 'Zig-Zag Skip',
                instruksi: [
                    'This game involves the skipping technique where players hop with alternating feet.',
                    'Skipping is performed while following a predetermined zig-zag pattern.'
                ],
                tujuan: 'Develop body coordination while moving in a zig-zag pattern. Improve agility and dexterity in alternating foot movements.',
                langkah: [
                    'Set up a zig-zag path using cones or other markers.',
                    'Players are asked to skip along the designated zig-zag path.',
                    'The player who completes the zig-zag path accurately and quickly wins.'
                ],
                video: ["skip_tiga.mp4"],
                level: "Hard"
            }
        ]
    },
    {
        id_materi: 'L6',
        nama_materi: 'Sliding',
        permainan: [
            {
                nama_permainan: '"I See" Slide Version',
                instruksi: [
                    'An equipment-free game activity to practice locomotor movement in an open space.',
                    'The teacher gives cues for students to slide in a certain direction, and students move while maintaining safe spacing from classmates.'
                ],
                tujuan: 'Train movement direction, spatial awareness, and the ability to slide properly without colliding.',
                langkah: [
                    'The teacher stands in front of the class and gives a cue (for example: "slide to the right").',
                    'Students respond to the instruction by moving with the sliding technique while maintaining distance from each other.'
                ],
                video: ["slide_satu.mp4"],
                level: "Easy"
            },
            {
                nama_permainan: '"Lines" / Slide to the Line',
                instruksi: [
                    'An equipment-free game that requires moving from one point to another point or court line.',
                    'All movements must be performed specifically using the sliding technique.'
                ],
                tujuan: 'Train sliding transition skills using variations in distance, rounds, and speed.',
                langkah: [
                    'Students line up at the starting line.',
                    'The teacher gives distance instructions, such as to the first line, the center line, and back again.',
                    'Students perform all transitions using the sliding technique.',
                    'The teacher can add round variations (e.g., round 1 slide right, round 2 slide left, round 3 fast-slow).'
                ],
                video: ["slide_dua.mp4"],
                level: "Medium"
            },
            {
                nama_permainan: 'Slide Tag',
                instruksi: [
                    'A game of tag where one player acts as the chaser.',
                    'The chaser must pursue other players strictly using the sideways sliding technique.'
                ],
                tujuan: 'Develop agility, balance, and lateral movement skills. Improve quick reactions and foot coordination.',
                langkah: [
                    'Define the playing area and choose one player as the chaser.',
                    'The runners must run away, while the chaser moves strictly by sliding sideways to catch them.',
                    'The runners try to last as long as possible without getting tagged by the chaser.',
                    'The winner is the player who lasts the longest without being caught.'
                ],
                video: ["slide_tiga.mp4"],
                level: "Hard"
            }
        ]
    }
];
