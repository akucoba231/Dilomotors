const dataMateri = [
    {
        id_materi: 'L1',
        nama_materi: 'Running',
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
                video: ["running_satu_480p.mp4"]
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
                video: ["lari_dua_720p.mp4"]
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
                video: ["lari_tiga_480p.mp4"]
            }
        ]
    },
    {
        id_materi: 'L2',
        nama_materi: 'Galloping',
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
                video: []
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
                video: []
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
                video: []
            }
        ]
    },
    {
        id_materi: 'L3',
        nama_materi: 'Hopping',
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
                video: []
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
                video: []
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
                video: []
            }
        ]
    },
    {
        id_materi: 'L4',
        nama_materi: 'Jumping',
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
                video: ["jumping_satu_480p.mp4"]
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
                video: ["jumping_dua_480p.mp4"]
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
                video: ["melompat_tiga_720p.mp4"]
            }
        ]
    },
    {
        id_materi: 'L5',
        nama_materi: 'Skipping',
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
                video: ["skipping_satu_720p.mp4"]
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
                video: []
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
                video: []
            }
        ]
    },
    {
        id_materi: 'L6',
        nama_materi: 'Sliding',
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
                video: []
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
                video: []
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
                video: []
            }
        ]
    }
];
