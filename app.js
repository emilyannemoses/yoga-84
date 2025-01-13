
var i = 0;
var time = 3000;
const data = [ 
    // First 10 asanas
    'images/tadasana.png', 
    'images/utkatasana.png', 
    'images/padangusthasana.png', 
    'images/padahastasana.png',
    'images/utthita-trikonasana.png', // Has right and left
    'images/utthita-trikonasana.png', // Has right and left
    'images/parivrtta-trikonasana.png', // Has right and left
    'images/parivrtta-trikonasana.png', // Has right and left
    'images/utthita-parsvakonasana.png', // Has right and left side
    'images/utthita-parsvakonasana.png', // Has right and left side
    'images/parivrtta-parsvakonasana.png', // Has right and left side
    'images/parivrtta-parsvakonasana.png', // Has right and left side
    'images/prasarita-padottanasana.png',
    'images/parsvottanasana.png', // Has right and left side
    'images/parsvottanasana.png', // Has right and left side
    // 11 - 20
    'images/utthita-hasta-padangusthasana.jpg',  // Utthita Hasta Padangusthasana (Extended Hand to Big Toe Pose)
    'images/garudasana.png',  // Garudasana (Eagle Pose)
    'images/vrksasana.jpg'  // Vrksasana (Tree Pose)
    // Utthita Ashwa Sanchalanasana (High Lunge)
    // Adho Mukha Svanasana (Downward-Facing Dog Pose)
    // Anjaneyasana (Low Lunge)
    // Urdhva Mukha Svanasana (Upward-Facing Dog Pose)
    // Balasana (Child’s Pose)
    // Bhujangasana (Cobra Pose)
    // Salabhasana (Locust Pose)
    // 21 - 30
    // 31 - 40
    // 41 - 50
    // 51 - 60
    // 61 - 70
    // 71 - 80
    // 81 - 84
]

function changeImg() {
    document.carousel.src = data[i];

    if (i < data.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}