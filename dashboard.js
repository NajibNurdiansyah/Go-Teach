// Memastikan DOM siap sebelum menjalankan JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Fungsi untuk memberikan pesan saat tautan di klik
    function handleLinkClick(event) {
        event.preventDefault();
        const linkText = event.target.innerText;
        alert(`${linkText} feature is not yet implemented!`);
    }

    // Memilih semua elemen tautan dalam dashboard-item
    const dashboardLinks = document.querySelectorAll('.dashboard-item a');

    // Menambahkan event listener ke setiap tautan
    dashboardLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Fungsi untuk animasi masuk (fade-in) ketika halaman dimuat
    const dashboardItems = document.querySelectorAll('.dashboard-item');
    dashboardItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200); // Animasi berurutan setiap 200ms
    });

    // Animasi hover pada setiap dashboard-item
    dashboardItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.transform = 'scale(1.05)'; // Menambahkan efek zoom saat hover
            item.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)'; // Menambahkan shadow
        });
        item.addEventListener('mouseout', function () {
            item.style.transform = 'scale(1)'; // Mengembalikan ukuran normal
            item.style.boxShadow = 'none'; // Menghilangkan shadow
        });
    });

    // Pesan selamat datang dinamis berdasarkan waktu
    const jumbotronHeading = document.querySelector('.jumbotron h1');
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning, Teacher!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon, Teacher!";
    } else {
        greeting = "Good Evening, Teacher!";
    }

    jumbotronHeading.textContent = greeting;

    // Fungsi untuk menampilkan waktu dan tanggal saat ini di footer
    function updateTime() {
        const footer = document.querySelector('footer p');
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedDate = currentTime.toLocaleDateString();
        footer.innerHTML = `&copy; 2024 Go-Teach Apps. All Rights Reserved. <br> Current time: ${formattedDate}, ${formattedTime}`;
    }

    // Perbarui waktu setiap 1 menit
    setInterval(updateTime, 60000);
    updateTime(); // Memanggil fungsi saat halaman dimuat
});

// CSS tambahan untuk efek animasi dan hover
document.write(`
<style>
    .dashboard-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .dashboard-item:hover {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .btn-primary:hover {
        background-color: #0056b3;
        transition: background-color 0.3s ease;
    }
</style>
`);
