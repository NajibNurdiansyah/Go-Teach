// Teks testimonial yang ingin ditampilkan dengan efek pengetikan
const testimonialText = "Aplikasi Go Teach sangat membantu saya menemukan tutor yang sesuai dengan kebutuhan saya. Saya bisa belajar dengan fleksibel tanpa harus terikat waktu. Sejauh ini saya sangat menyukai Go Teach.";
const typingSpeed = 50; // Kecepatan pengetikan dalam milidetik
const testimonialElement = document.getElementById('testimonial');
let index = 0; // Index untuk melacak karakter yang sedang ditampilkan

// Fungsi untuk menampilkan teks dengan efek pengetikan
function type() {
    if (index < testimonialText.length) {
        testimonialElement.innerHTML += testimonialText.charAt(index); // Tambahkan karakter ke elemen
        index++;
        setTimeout(type, typingSpeed); // Panggil fungsi ini lagi setelah jeda
    }
}

// Mulai efek pengetikan
type();
