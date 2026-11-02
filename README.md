# 🎮 GameHub

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg" />
  <img alt="Node" src="https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white" />
  <img alt="MySQL" src="https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
</p>

> **GameHub** — media sosial untuk para gamer. Simpan progres game, bagikan pencapaian, cari teman, dan kelola komunitas lewat panel admin.

Aplikasi web full-stack sederhana yang dibangun dengan **Node.js + Express + MySQL**, dengan frontend **HTML/CSS/JavaScript vanilla**. Cocok dijalankan secara lokal menggunakan **Laragon**.

---

## ✨ Fitur

### Untuk User
- 🔐 Registrasi & login (password di-hash dengan **bcrypt**)
- 🏠 Feed publik berisi postingan game terbaru
- ✍️ Membuat postingan (game, status main, ulasan, upload screenshot)
- ❤️ Like & 💬 komentar pada postingan
- 🔗 Share postingan — link hasil copy langsung menuju postingan (`home.html#post-<id>`)
- 🔍 Pencarian postingan & user
- 👤 Profil: edit profil, ganti password, upload avatar, statistik gaming, daftar postingan
- 👥 Follow / unfollow user lain + daftar followers & following
- 🔔 Notifikasi (like, komentar, follow, postingan baru) dengan badge unread
- 🚩 Report postingan yang melanggar
- 📩 Kirim feedback / request game baru ke admin

### Untuk Admin
- 📊 Dashboard statistik (total user, post, game, report, dll.)
- 🎮 Manajemen game (tambah, edit, hapus, upload cover)
- 👥 Manajemen user (ban / unban)
- 📝 Moderasi postingan (hapus postingan)
- 🚩 Manajemen report:
  - Lihat daftar laporan
  - **Lihat detail postingan yang dilaporkan** (konten, gambar, likes, status, plus info laporan)
  - Resolve (hapus postingan) atau Dismiss laporan
- 📬 Manajemen feedback / request game
- 🧭 Sidebar dinamis sesuai role (guest / user / admin)

### Tampilan
- 📱 Responsive untuk desktop & handphone
- Guest (belum login), user, dan admin punya navigasi yang menyesuaikan

---

## 🧰 Tech Stack

| Kategori | Teknologi |
|---|---|
| Runtime | Node.js 18+ |
| Backend | Express 5 |
| Database | MySQL (mysql2) |
| Auth | bcrypt (hash password) + session via `localStorage` |
| Upload | multer (disimpan lokal di folder `/uploads`) |
| Frontend | HTML5, CSS3, JavaScript (vanilla) |
| Ikon | [Lucide](https://lucide.dev/) |

---

## 📁 Struktur Project

```
project/
├── assets/
│   ├── css/                  # CSS per halaman (admin, post, profile, search, dll.)
│   ├── img/                  # Aset gambar
│   └── js/                   # JS per halaman + sidebar bersama
│       ├── admin.js
│       ├── notification.js
│       ├── post.js
│       ├── profile.js
│       ├── search.js
│       └── sidebar.js        # Sidebar dinamis (guest / user / admin)
├── pages/
│   ├── admin.html            # Dashboard admin
│   ├── admin-games.html      # Manajemen game
│   ├── admin-users.html      # Manajemen user
│   ├── admin-posts.html      # Moderasi postingan
│   ├── admin-feedbacks.html  # Feedback / request game
│   ├── admin-reports.html    # Reports + detail postingan
│   ├── login.html
│   ├── register.html
│   ├── post.html             # Buat postingan
│   ├── profile.html
│   ├── search.html
│   ├── notification.html
│   └── library.html
├── uploads/                  # File upload (screenshot & avatar)
├── .env                      # Konfigurasi environment (JANGAN di-commit)
├── base.css                  # Style global + responsive layout
├── home.css                  # Style halaman home
├── home.html                 # Halaman utama (feed)
├── main.js                   # Logic halaman home
├── schema.sql                # Skema database utama
├── add-follows.sql           # Tabel follows
├── migrate-passwords.js      # Script migrasi password plaintext → bcrypt
├── server.js                 # Server Express + seluruh API
└── package.json
```

---

## ✅ Prasyarat

- [Node.js](https://nodejs.org/) **18 atau lebih baru**
- [Laragon](https://laragon.org/) (atau MySQL/MariaDB versi lain) dengan **MySQL berjalan**
- npm (sudah termasuk dengan Node.js)

---

## 🚀 Instalasi & Menjalankan

### 1. Clone / letakkan project

Letakkan project di folder web Laragon:

```
C:\laragon\www\project
```

### 2. Jalankan MySQL

Buka **Laragon** → **Start All** (minimal MySQL aktif).

### 3. Buat database & import skema

Buat database (default: `gamelog_db`), lalu import:

```sql
CREATE DATABASE IF NOT EXISTS gamelog_db;
```

Import file berikut lewat phpMyAdmin / HeidiSQL / CLI:

```sh
mysql -u root -p gamelog_db < schema.sql
mysql -u root -p gamelog_db < add-follows.sql
```

> `schema.sql` membuat tabel: `users`, `games`, `posts`, `likes`, `comments`, `notifications`, `reports`, `feedbacks`.
> `add-follows.sql` membuat tabel `follows`.

### 4. Buat file `.env`

Buat file `.env` di root project (sesuaikan dengan konfigurasi lokal):

```env
# DATABASE
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=gamelog_db
DB_PORT=3306
DB_SSL=false

# SERVER
PORT=3000

# ADMIN
ADMIN_SECRET_CODE=ganti-dengan-kode-rahasia-kamu

# CLOUDINARY (opsional, saat ini upload disimpan lokal di /uploads)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

> ⚠️ File `.env` **tidak boleh** di-commit ke Git (sudah masuk `.gitignore`).

### 5. Install dependency

```sh
npm install
```

### 6. Jalankan server

```sh
npm start
# atau
node server.js
```

Buka di browser:

```
http://localhost:3000
```

> Frontend dan API disajikan oleh server yang sama (Express static + API), jadi cukup satu port.

---

## 🔑 Membuat Akun Admin

1. Buka halaman **Register**.
2. Isi username, email, dan password.
3. Saat registrasi, sertakan `secret_code` admin (lihat `ADMIN_SECRET_CODE` di `.env` / logika di `server.js`).
4. Login → menu **Admin Panel** akan muncul di sidebar.

---

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

### Auth & User
| Method | Endpoint | Deskripsi |
|---|---|---|
| POST | `/api/register` | Registrasi user (opsional `secret_code` untuk admin) |
| POST | `/api/login` | Login (cek password & status banned) |
| GET | `/api/users` | Daftar semua user |
| GET | `/api/users/:id` | Detail user |
| GET | `/api/users/count` | Total user |
| PUT | `/api/users/:id/profile` | Update profil (multipart, `avatar`) |
| PUT | `/api/users/:id/password` | Ganti password |
| PUT | `/api/users/:id/ban` | Ban / unban user (admin) |
| GET | `/api/users/:id/posts` | Postingan milik user |
| GET | `/api/users/:userId/likes` | Daftar post yang di-like user |

### Posts
| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/posts` | Semua postingan + total likes |
| GET | `/api/posts/:id` | Detail satu postingan |
| POST | `/api/posts` | Buat postingan (multipart, `image`) |
| DELETE | `/api/posts/:id` | Hapus postingan |
| POST | `/api/posts/:id/like` | Like / unlike |

### Komentar
| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/posts/:postId/comments` | Daftar komentar |
| POST | `/api/posts/:postId/comments` | Tambah komentar |

### Games
| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/games` | Daftar game |
| GET | `/api/games/trending` | Game trending |
| POST | `/api/games` | Tambah game (multipart, `cover`) |
| PUT | `/api/games/:id` | Edit game |
| DELETE | `/api/games/:id` | Hapus game |

### Follow
| Method | Endpoint | Deskripsi |
|---|---|---|
| POST | `/api/follow` | Follow / unfollow |
| GET | `/api/follow/status` | Cek status follow |
| GET | `/api/users/:id/followers` | Daftar followers |
| GET | `/api/users/:id/following` | Daftar following |

### Notifikasi
| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/notifications?user_id=` | Daftar notifikasi user |
| GET | `/api/notifications/unread-count?user_id=` | Jumlah notifikasi belum dibaca |
| PUT | `/api/notifications/:id/read` | Tandai satu sudah dibaca |
| PUT | `/api/notifications/read-all` | Tandai semua sudah dibaca |

### Report
| Method | Endpoint | Deskripsi |
|---|---|---|
| POST | `/api/reports` | Kirim report |
| GET | `/api/reports` | Daftar report (admin) |
| PUT | `/api/reports/:id/status` | Update status (`pending` / `resolved` / `dismissed`) |

### Feedback
| Method | Endpoint | Deskripsi |
|---|---|---|
| POST | `/api/feedbacks` | Kirim feedback / request game |
| GET | `/api/feedbacks` | Daftar feedback (admin) |
| DELETE | `/api/feedbacks/:id` | Hapus feedback (admin) |

### Statistik
| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/stats` | Statistik dashboard admin |

---

## 🗄️ Skema Database

| Tabel | Keterangan |
|---|---|
| `users` | Akun pengguna (`role`: user/admin, `is_banned`, `avatar`, `bio`, dll.) |
| `games` | Master data game (`title`, `genre`, `cover_url`) |
| `posts` | Postingan user (`content`, `status`, `post_image`) |
| `likes` | Like per user per post |
| `comments` | Komentar per post |
| `notifications` | Notifikasi user (`type`, `message`, `related_id`, `is_read`) |
| `reports` | Laporan postingan (`reason`, `description`, `status`) |
| `feedbacks` | Feedback / request game dari user |
| `follows` | Relasi follow (`follower_id`, `following_id`) |

---

## 📝 Catatan Pengembangan

- **Upload file** disimpan lokal di folder `uploads/` dan diakses publik lewat `/uploads/...`. Folder dibuat otomatis saat server pertama kali jalan.
- **Password** disimpan sebagai hash bcrypt. Jika kamu punya data lama dengan password plaintext, jalankan:
  ```sh
  node migrate-passwords.js
  ```
- **Share postingan** memakai format `home.html#post-<id>`. Saat link dibuka/di-paste, halaman akan otomatis scroll ke postingan tersebut (mendukung event `hashchange`).
- **API base URL** di frontend memakai `window.location.origin`, sehingga tetap bekerja jika diakses lewat **ngrok** atau domain lain:
  ```sh
  ngrok http 3000
  ```
- **Koneksi database** memiliki auto-reconnect (retry tiap 3 detik jika koneksi terputus).
- Endpoint admin tidak memakai token JWT; pembatasan akses admin dilakukan di sisi frontend berdasarkan `role` di `localStorage`. Untuk produksi, disarankan menambahkan autentikasi/otorisasi di backend.

---

## 👤 Author

**IkhRaff**

---

## 📄 License

ISC © GameHub

---

<p align="center">Dibuat dengan ❤️ untuk para gamer.</p>
