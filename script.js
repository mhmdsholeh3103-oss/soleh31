/* ==========================================
   JAPANGKU
   Aplikasi Hafalan Bahasa Jepang
========================================== */


/* ==========================================
   NAVIGASI
========================================== */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   DATA KOSAKATA
   Contoh data.
   Bisa ditambah sesuai daftar kosakata
   yang kamu miliki.
========================================== */

let vocabulary = [

    // BAB 1
    {
        chapter: 1,
        japanese: "わたし",
        romaji: "watashi",
        meaning: "saya"
    },
    {
        chapter: 1,
        japanese: "あなた",
        romaji: "anata",
        meaning: "kamu"
    },
    {
        chapter: 1,
        japanese: "せんせい",
        romaji: "sensei",
        meaning: "guru"
    },
    {
        chapter: 1,
        japanese: "がくせい",
        romaji: "gakusei",
        meaning: "siswa"
    },

    // BAB 2
    {
        chapter: 2,
        japanese: "ほん",
        romaji: "hon",
        meaning: "buku"
    },
    {
        chapter: 2,
        japanese: "じしょ",
        romaji: "jisho",
        meaning: "kamus"
    },
    {
        chapter: 2,
        japanese: "かさ",
        romaji: "kasa",
        meaning: "payung"
    },

    // BAB 3
    {
        chapter: 3,
        japanese: "ここ",
        romaji: "koko",
        meaning: "di sini"
    },
    {
        chapter: 3,
        japanese: "そこ",
        romaji: "soko",
        meaning: "di situ"
    },
    {
        chapter: 3,
        japanese: "あそこ",
        romaji: "asoko",
        meaning: "di sana"
    },

    // BAB 4
    {
        chapter: 4,
        japanese: "おきます",
        romaji: "okimasu",
        meaning: "bangun"
    },
    {
        chapter: 4,
        japanese: "ねます",
        romaji: "nemasu",
        meaning: "tidur"
    },

    // BAB 5
    {
        chapter: 5,
        japanese: "いきます",
        romaji: "ikimasu",
        meaning: "pergi"
    },
    {
        chapter: 5,
        japanese: "きます",
        romaji: "kimasu",
        meaning: "datang"
    },
    {
        chapter: 5,
        japanese: "かえります",
        romaji: "kaerimasu",
        meaning: "pulang"
    }
];


/* ==========================================
   TAMPILKAN KOSAKATA
========================================== */

function displayVocabulary() {

    const chapter =
        document.getElementById("chapterSelect").value;

    const container =
        document.getElementById("vocabularyList");

    container.innerHTML = "";

    const filtered =
        vocabulary.filter(word =>
            word.chapter == chapter
        );

    if (filtered.length === 0) {

        container.innerHTML = `
            <div class="word-card">
                <h3>Belum ada data</h3>
                <p>
                    Kosakata untuk bab ini belum ditambahkan.
                </p>
            </div>
        `;

        return;
    }

    filtered.forEach(word => {

        const card = document.createElement("div");

        card.className = "word-card";

        card.innerHTML = `

            <div class="japanese">
                ${word.japanese}
            </div>

            <div class="romaji">
                ${word.romaji}
            </div>

            <div class="meaning">
                ${word.meaning}
            </div>

            <button onclick="speak('${word.japanese}')">
                🔊 Dengarkan
            </button>

        `;

        container.appendChild(card);

    });
}


/* ==========================================
   TEXT TO SPEECH
========================================== */

function speak(text) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Browser kamu belum mendukung Text-to-Speech."
        );

        return;
    }

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "ja-JP";

    speech.rate = 0.8;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


/* ==========================================
   HIRAGANA
========================================== */

const hiragana = [

    ["あ","a"], ["い","i"], ["う","u"], ["え","e"], ["お","o"],

    ["か","ka"], ["き","ki"], ["く","ku"], ["け","ke"], ["こ","ko"],
    ["が","ga"], ["ぎ","gi"], ["ぐ","gu"], ["げ","ge"], ["ご","go"],

    ["さ","sa"], ["し","shi"], ["す","su"], ["せ","se"], ["そ","so"],
    ["ざ","za"], ["じ","ji"], ["ず","zu"], ["ぜ","ze"], ["ぞ","zo"],

    ["た","ta"], ["ち","chi"], ["つ","tsu"], ["て","te"], ["と","to"],
    ["だ","da"], ["ぢ","ji"], ["づ","zu"], ["で","de"], ["ど","do"],

    ["な","na"], ["に","ni"], ["ぬ","nu"], ["ね","ne"], ["の","no"],

    ["は","ha"], ["ひ","hi"], ["ふ","fu"], ["へ","he"], ["ほ","ho"],
    ["ば","ba"], ["び","bi"], ["ぶ","bu"], ["べ","be"], ["ぼ","bo"],
    ["ぱ","pa"], ["ぴ","pi"], ["ぷ","pu"], ["ぺ","pe"], ["ぽ","po"],

    ["ま","ma"], ["み","mi"], ["む","mu"], ["め","me"], ["も","mo"],

    ["や","ya"], ["ゆ","yu"], ["よ","yo"],

    ["ら","ra"], ["り","ri"], ["る","ru"], ["れ","re"], ["ろ","ro"],

    ["わ","wa"], ["を","wo"], ["ん","n"]
];


function displayHiragana() {

    const grid =
        document.getElementById("hiraganaGrid");

    grid.innerHTML = "";

    hiragana.forEach(item => {

        const card =
            document.createElement("div");

        card.className = "character-card";

        card.innerHTML = `

            <div class="character">
                ${item[0]}
            </div>

            <div class="character-romaji">
                ${item[1]}
            </div>

            <br>

            <button onclick="speak('${item[0]}')">
                🔊
            </button>

        `;

        grid.appendChild(card);

    });
}


/* ==========================================
   KATAKANA
========================================== */

const katakana = [

    ["ア","a"], ["イ","i"], ["ウ","u"], ["エ","e"], ["オ","o"],

    ["カ","ka"], ["キ","ki"], ["ク","ku"], ["ケ","ke"], ["コ","ko"],
    ["ガ","ga"], ["ギ","gi"], ["グ","gu"], ["ゲ","ge"], ["ゴ","go"],

    ["サ","sa"], ["シ","shi"], ["ス","su"], ["セ","se"], ["ソ","so"],
    ["ザ","za"], ["ジ","ji"], ["ズ","zu"], ["ゼ","ze"], ["ゾ","zo"],

    ["タ","ta"], ["チ","chi"], ["ツ","tsu"], ["テ","te"], ["ト","to"],
    ["ダ","da"], ["ヂ","ji"], ["ヅ","zu"], ["デ","de"], ["ド","do"],

    ["ナ","na"], ["ニ","ni"], ["ヌ","nu"], ["ネ","ne"], ["ノ","no"],

    ["ハ","ha"], ["ヒ","hi"], ["フ","fu"], ["ヘ","he"], ["ホ","ho"],
    ["バ","ba"], ["ビ","bi"], ["ブ","bu"], ["ベ","be"], ["ボ","bo"],
    ["パ","pa"], ["ピ","pi"], ["プ","pu"], ["ペ","pe"], ["ポ","po"],

    ["マ","ma"], ["ミ","mi"], ["ム","mu"], ["メ","me"], ["モ","mo"],

    ["ヤ","ya"], ["ユ","yu"], ["ヨ","yo"],

    ["ラ","ra"], ["リ","ri"], ["ル","ru"], ["レ","re"], ["ロ","ro"],

    ["ワ","wa"], ["ヲ","wo"], ["ン","n"]
];


function displayKatakana() {

    const grid =
        document.getElementById("katakanaGrid");

    grid.innerHTML = "";

    katakana.forEach(item => {

        const card =
            document.createElement("div");

        card.className = "character-card";

        card.innerHTML = `

            <div class="character">
                ${item[0]}
            </div>

            <div class="character-romaji">
                ${item[1]}
            </div>

            <br>

            <button onclick="speak('${item[0]}')">
                🔊
            </button>

        `;

        grid.appendChild(card);

    });
}


/* ==========================================
   KANJI N5 DASAR
========================================== */

const kanjiData = [

    ["日", "にち / ひ", "hari / matahari"],
    ["月", "げつ / つき", "bulan"],
    ["火", "か / ひ", "api"],
    ["水", "すい / みず", "air"],
    ["木", "もく / き", "pohon"],
    ["金", "きん / かね", "emas / uang"],
    ["土", "ど / つち", "tanah"],

    ["人", "ひと / じん", "orang"],
    ["子", "こ", "anak"],
    ["女", "おんな", "perempuan"],
    ["男", "おとこ", "laki-laki"],

    ["山", "やま", "gunung"],
    ["川", "かわ", "sungai"],
    ["田", "た", "sawah"],

    ["上", "うえ", "atas"],
    ["下", "した", "bawah"],
    ["中", "なか", "tengah"],

    ["大", "おおきい", "besar"],
    ["小", "ちいさい", "kecil"],

    ["学", "がく", "belajar"],
    ["校", "こう", "sekolah"],
    ["生", "せい", "hidup / lahir"],

    ["先", "さき", "sebelum"],
    ["年", "とし", "tahun"],
    ["今", "いま", "sekarang"],

    ["本", "ほん", "buku"],
    ["名", "な", "nama"],
    ["何", "なに", "apa"]
];


function displayKanji() {

    const grid =
        document.getElementById("kanjiGrid");

    grid.innerHTML = "";

    kanjiData.forEach(item => {

        const card =
            document.createElement("div");

        card.className = "kanji-card";

        card.innerHTML = `

            <div class="kanji">
                ${item[0]}
            </div>

            <p>
                ${item[1]}
            </p>

            <p>
                <strong>${item[2]}</strong>
            </p>

            <br>

            <button onclick="speak('${item[0]}')">
                🔊 Dengarkan
            </button>

        `;

        grid.appendChild(card);

    });
}


/* ==========================================
   QUIZ
========================================== */

let quizQuestions = [];

let currentQuestion = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

const totalQuestions = 10;


function startQuiz() {

    const selectedChapter =
        document.getElementById("quizChapter").value;

    if (selectedChapter === "all") {

        quizQuestions =
            [...vocabulary];

    } else {

        quizQuestions =
            vocabulary.filter(
                item =>
                item.chapter == selectedChapter
            );

    }

    if (quizQuestions.length === 0) {

        alert("Belum ada kosakata untuk bab tersebut.");

        return;
    }

    quizQuestions =
        quizQuestions.sort(() => Math.random() - 0.5);

    quizQuestions =
        quizQuestions.slice(
            0,
            Math.min(totalQuestions, quizQuestions.length)
        );

    currentQuestion = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    showQuestion();
}


function showQuestion() {

    const area =
        document.getElementById("quizArea");

    if (currentQuestion >= quizQuestions.length) {

        finishQuiz();

        return;
    }

    const question =
        quizQuestions[currentQuestion];

    let options = [
        question.meaning
    ];

    let otherWords =
        vocabulary.filter(
            item =>
            item.meaning !== question.meaning
        );

    otherWords =
        otherWords.sort(
            () => Math.random() - 0.5
        );

    otherWords
        .slice(0, 3)
        .forEach(item => {
            options.push(item.meaning);
        });

    options =
        options.sort(
            () => Math.random() - 0.5
        );

    area.innerHTML = `

        <p>
            Soal ${currentQuestion + 1}
            dari ${quizQuestions.length}
        </p>

        <div class="question">
            ${question.japanese}
        </div>

        <p>
            Pilih arti yang benar:
        </p>

        <div id="answerArea"></div>

    `;

    const answerArea =
        document.getElementById("answerArea");

    options.forEach(option => {

        const button =
            document.createElement("button");

        button.className = "answer-button";

        button.textContent = option;

        button.onclick = function () {

            checkAnswer(
                option,
                question.meaning
            );

        };

        answerArea.appendChild(button);

    });
}


function checkAnswer(selected, correct) {

    if (selected === correct) {

        correctAnswers++;

    } else {

        wrongAnswers++;

    }

    currentQuestion++;

    setTimeout(showQuestion, 300);
}


/* ==========================================
   HASIL QUIZ
========================================== */

function finishQuiz() {

    const total =
        quizQuestions.length;

    const score =
        Math.round(
            (correctAnswers / total) * 100
        );

    document.getElementById("quizArea").innerHTML = `

        <div class="result">

            <h2>🎉 Quiz Selesai!</h2>

            <p class="score">
                ${score}
            </p>

            <p>
                Nilai kamu: <strong>${score}</strong>
            </p>

            <p>
                ✅ Benar:
                ${correctAnswers}
            </p>

            <p>
                ❌ Salah:
                ${wrongAnswers}
            </p>

            <br>

            <button onclick="startQuiz()">
                🔄 Ulangi Quiz
            </button>

        </div>

    `;
}


/* ==========================================
   TAMBAH KOSAKATA
========================================== */

function addVocabulary() {

    const japanese =
        document.getElementById("newJapanese").value.trim();

    const romaji =
        document.getElementById("newRomaji").value.trim();

    const meaning =
        document.getElementById("newMeaning").value.trim();

    const chapter =
        document.getElementById("newChapter").value;

    if (
        !japanese ||
        !romaji ||
        !meaning ||
        !chapter
    ) {

        alert("Semua data harus diisi.");

        return;
    }

    vocabulary.push({

        japanese: japanese,

        romaji: romaji,

        meaning: meaning,

        chapter: Number(chapter)

    });

    localStorage.setItem(
        "japangkuVocabulary",
        JSON.stringify(vocabulary)
    );

    alert("Kosakata berhasil ditambahkan!");

    document.getElementById("newJapanese").value = "";
    document.getElementById("newRomaji").value = "";
    document.getElementById("newMeaning").value = "";
    document.getElementById("newChapter").value = "";

    displayVocabulary();
}


/* ==========================================
   LOAD DATA
========================================== */

function loadVocabulary() {

    const saved =
        localStorage.getItem(
            "japangkuVocabulary"
        );

    if (saved) {

        vocabulary =
            JSON.parse(saved);

    }
}


/* ==========================================
   TARGET HAFALAN
========================================== */

function saveTarget() {

    const target =
        document.getElementById("targetInput").value;

    if (!target) {

        alert("Masukkan target terlebih dahulu.");

        return;
    }

    localStorage.setItem(
        "japangkuTarget",
        target
    );

    showTarget();

    alert("Target berhasil disimpan!");
}


function showTarget() {

    const target =
        localStorage.getItem(
            "japangkuTarget"
        );

    const result =
        document.getElementById("targetResult");

    if (target) {

        result.innerHTML =
            `🎯 Target hafalan kamu: <strong>${target} kosakata</strong>`;

    }

}


/* ==========================================
   START APPLICATION
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadVocabulary();

        displayVocabulary();

        displayHiragana();

        displayKatakana();

        displayKanji();

        showTarget();

    }
);