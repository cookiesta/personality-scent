// menyembunyikan splash screen dan menampilkan konten utama
function hideSplash() {
    document.getElementById("splash-screen").classList.add("hidden");
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 500);
}

//  menyimpan nama dan lanjut ke quiz
function startQuiz() {
    let name = document.getElementById("username").value.trim();
    if (name) {
        localStorage.setItem("username", name);
        window.location.href = "quiz.html";
    } else {
        alert("Masukkan namamu dulu!");
    }
}

const questions = [
    {
        text: "Bagaimana cara terbaik untuk memulai hari versi kamu?",
        options: [
            { text: "Minum sari air lemon segar", scent: "neroli" },
            { text: "Sarapan buah segar", scent: "fruity" },
            { text: "Menghirup aroma bunga di pagi hari", scent: "jasmine" },
            { text: "Minum teh hangat", scent: "whiteTea" },
            { text: "Minum segelas susu", scent: "vanilla" },
            { text: "Pergi ke kebun bunga", scent: "floral" }
        ]
    },
    {
        text: "Bagaimana Suasana liburan favoritmu?",
        options: [
            { text: "Berjalan di taman dengan angin sejuk", scent: "neroli" },
            { text: "Mengunjungi taman rekreasi buah", scent: "fruity" },
            { text: "Piknik di taman bunga", scent: "jasmine" },
            { text: "Bersantai di pegunungan", scent: "whiteTea" },
            { text: "Pergi ke restoran eskrim", scent: "vanilla" },
            { text: "Mengunjungi perkebunan", scent: "floral" }
        ]
    },
    {
        text: "Apa minuman favoritmu saat bersantai?",
        options: [
            { text: "Jus jeruk", scent: "neroli" },
            { text: "Smoothie buah-buahan", scent: "fruity" },
            { text: "Jasmine Tea", scent: "jasmine" },
            { text: "White tea dengan madu", scent: "whiteTea" },
            { text: "Latte vanilla", scent: "vanilla" },
            { text: "Infused water dengan bunga", scent: "floral" }
        ]
    },
    {
        text: "Apa tipe parfum yang paling kamu suka?",
        options: [
            { text: "Segar & berenergi", scent: "neroli" },
            { text: "Manis & buah-buahan", scent: "fruity" },
            { text: "lembut & rileks", scent: "jasmine" },
            { text: "Aroma teh yang menenangkan", scent: "whiteTea" },
            { text: "Manis & creamy", scent: "vanilla" },
            { text: "Aroma bunga yang anggun", scent: "floral" }
        ]
    },
    {
        text: "Tempat kencan terbaik menurutmu?",
        options: [
            { text: "Taman dengan suasana menyegarkan", scent: "neroli" },
            { text: "Festival buah segar", scent: "fruity" },
            { text: "Taman bunga romantis", scent: "jasmine" },
            { text: "Tea house klasik", scent: "whiteTea" },
            { text: "Kafe dengan dessert vanilla", scent: "vanilla" },
            { text: "Kebun mawar yang harum", scent: "floral" }
        ]
    },
    {
        text: "Momen apa yang paling kamu nikmati?",
        options: [
            { text: "Berjalan di taman saat pagi hari", scent: "neroli" },
            { text: "Makan buah segar saat siang", scent: "fruity" },
            { text: "Menikmati sore dengan bunga", scent: "jasmine" },
            { text: "Menyeruput teh putih di musim dingin", scent: "whiteTea" },
            { text: "Minum cokelat vanilla hangat saat malam", scent: "vanilla" },
            { text: "Mencium wangi taman bunga setelah hujan", scent: "floral" }
        ]
    },
    {
        text: "Apa jenis kado yang ingin kamu terima?",
        options: [
            { text: "Lilin aroma terapi citrus", scent: "neroli" },
            { text: "Paket buah premium", scent: "fruity" },
            { text: "Buket bunga segar", scent: "jasmine" },
            { text: "White tea premium", scent: "whiteTea" },
            { text: "minuman dengan ekstrak vanilla", scent: "vanilla" },
            { text: "Bunga lavender", scent: "floral" }
        ]
    },
    {
        text: "Musim favoritmu?",
        options: [
            { text: "Musim semi dengan udara segar", scent: "neroli" },
            { text: "Musim panas yang penuh warna", scent: "fruity" },
            { text: "Musim semi dengan bunga bermekaran", scent: "jasmine" },
            { text: "Musim dingin yang menenangkan", scent: "whiteTea" },
            { text: "Musim gugur dengan aroma kayu manis", scent: "vanilla" },
            { text: "Musim semi dengan hamparan bunga liar", scent: "floral" }
        ]
    },
    {
        text: "Apa kegiatan santai favoritmu?",
        options: [
            { text: "Jalan kaki di taman", scent: "neroli" },
            { text: "Menikmati jus buah", scent: "fruity" },
            { text: "Mengunjungi kebun bunga", scent: "jasmine" },
            { text: "Membaca buku sambil minum teh", scent: "whiteTea" },
            { text: "Menonton film sambil makan es krim", scent: "vanilla" },
            { text: "Menyusun rangkaian bunga", scent: "floral" }
        ]
    },
    {
        text: "Jika kamu adalah aroma, mana yang paling menggambarkan kepribadianmu?",
        options: [
            { text: "Cerah, segar, dan membangkitkan semangat", scent: "neroli" },
            { text: "Manis, ceria, dan energik", scent: "fruity" },
            { text: "Lembut, elegan, dan menenangkan", scent: "jasmine" },
            { text: "Tenang, damai, dan klasik", scent: "whiteTea" },
            { text: "Hangat, nyaman, dan menyenangkan", scent: "vanilla" },
            { text: "Anggun, indah, dan memikat", scent: "floral" }
        ]
    }
];

let currentQuestionIndex = 0;
let answers = {
    neroli: 0,
    fruity: 0,
    jasmine: 0,
    vanilla: 0,
    whiteTea: 0,
    floral: 0
};

function showQuestion() {
    let questionElement = document.getElementById("question-text");
    let answerButtons = document.getElementById("answer-buttons");
    let questionCounter = document.getElementById("question-counter"); // Ambil elemen penghitung

    answerButtons.innerHTML = "";
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.text;

    // Update penghitung pertanyaan
    questionCounter.textContent = `Pertanyaan ${currentQuestionIndex + 1} dari ${questions.length}`;

    currentQuestion.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("answer-btn");
        button.onclick = function () {
            selectAnswer(option.scent, button);
        };
        answerButtons.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(scent, button) {
    answers[scent] += 1;
    document.querySelectorAll(".answer-btn").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    window.location.href = "result.html";
}

function showResult() {
    let storedAnswers = JSON.parse(localStorage.getItem("quizAnswers"));
    let sortedScents = Object.entries(storedAnswers).sort((a, b) => b[1] - a[1]);

    // Ambil tiga parameter teratas
    let topThree = sortedScents.slice(0, 3).map(item => item[0]);

    // Kombinasi untuk tiga aroma
    let combinations = {
        "neroli,fruity,jasmine": { name: "Sun Moon 日月柑橘", image: "/assets/sunmoon.jpg" },
        "fruity,jasmine,neroli": { name: "Sun Moon 日月柑橘", image: "/assets/sunmoon.jpg" },
        "jasmine,neroli,fruity": { name: "Sun Moon 日月柑橘", image: "/assets/sunmoon.jpg" },
        "vanilla,whiteTea": { name: "Vanilla Summit 香草之巅", image: "/assets/vanilla_summit.jpg" },
        "whiteTea,vanilla": { name: "Vanilla Summit 香草之巅", image: "/assets/vanilla_summit.jpg" },
        "floral,fruity": { name: "Lotus Grove 莲花幽林", image: "/assets/lotus_grove.jpg" },
        "fruity,floral": { name: "Lotus Grove 莲花幽林", image: "/assets/lotus_grove.jpg" },
        "floral,neroli": { name: "Formosa Bloom 福尔摩沙绽放", image: "/assets/formosa_bloom.jpg" },
        "neroli,floral": { name: "Formosa Bloom 福尔摩沙绽放", image: "/assets/formosa_bloom.jpg" },
        "neroli,neroli": { name: "Formosa Bloom 福尔摩沙绽放", image: "/assets/formosa_bloom.jpg" },
        "whiteTea,fruity,jasmine": { name: "Sunlit Peaks 阳光山峰", image: "/assets/sunlit_peaks.jpg" },
        "fruity,jasmine,whiteTea": { name: "Sunlit Peaks 阳光山峰", image: "/assets/sunlit_peaks.jpg" },
        "jasmine,whiteTea,fruity": { name: "Sunlit Peaks 阳光山峰", image: "/assets/sunlit_peaks.jpg" }
    };

    // Cek kombinasi tiga aroma
    let result = combinations[topThree.join(",")];

    // Jika tidak ada kombinasi tiga aroma, cek kombinasi dua aroma
    if (!result) {
        // Cek kombinasi dua aroma
        let twoCombination = [
            [topThree[0], topThree[1]],
            [topThree[0], topThree[2]],
            [topThree[1], topThree[2]]
        ];

        for (let combo of twoCombination) {
            let key = combo.join(",");
            if (combinations[key]) {
                result = combinations[key];
                break;
            }
        }
    }

    // Jika masih tidak ada hasil, tampilkan aroma unik
    if (!result) {
        result = { name: `kombinasi wangi: ${topThree[0]}`, image: "" }; // Tampilkan aroma teratas jika tidak ada kombinasi
    }

    document.getElementById("result-text").textContent = `Halo ${localStorage.getItem("username")}, Wangi yang sesuai untuk kamu adalah: ${result.name}`;
    
    // Menampilkan gambar jika ada
    let resultImage = document.getElementById("result-image");
    if (result.image) {
        resultImage.src = result.image;
        resultImage.style.display = "block"; // Tampilkan gambar
    } else {
        resultImage.style.display = "none"; // Sembunyikan gambar jika tidak ada
    }
}

function restartQuiz() {
    localStorage.clear();
    window.location.href = "index.html";
}

if (window.location.pathname.includes("result.html")) {
    showResult();
}

window.onload = function() {
    if (window.location.pathname.includes("quiz.html")) {
        showQuestion();
    }
};