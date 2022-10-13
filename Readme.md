# Fibonacci ticket

Спроба реалізації багатопоточності Node за допомогою worker_threads.

Є ендпойнт для постановки задачі на обчислення числа Фібоначчі за індексом і ендпойнт 
для виведення результату. Саме обчислення відбувається в потоці і не блокує основний процес.

За допомогою ejs виведена форма проекту для зручнішого користування

## Основні можливості

* Постановка задачі на обчислення числа Фібоначчі, в результаті отримуємо номер тікета
* Виведення результату обчислення за тікетом

### Використані технології

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### Запуск

* docker-compose up


