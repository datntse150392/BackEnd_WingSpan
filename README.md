# <a href="https://wingspan-dev-course.vercel.app/">WingSpan | Web Learning Course</a>

---

# Yêu Cầu Môi Trường để Chạy Dự Án | Setup Instructions

1. **Node.js and npm:**

   - Cài đặt Node.js phiên bản 18 trở lên. npm sẽ được cài đặt kèm theo. | Install Node.js version 18 or above. npm will be installed along with it.

2. **Angular CLI:**

   - Cài đặt Angular CLI bằng lệnh sau: | Install Angular CLI using the following command:
     ```bash
     npm install -g @angular/cli@latest
     ```

3. **Cài Đặt Dependencies Dự Án: | Install Project Dependencies:**

   - Trong thư mục gốc của dự án, chạy lệnh sau để cài đặt các dependencies | In the root directory of the project, run the following command to install project dependencies:
     ```bash
     npm install
     ```

4. **Chạy Dự Án | Run the Project:**
   - Chạy lệnh sau để khởi động dự án: | Execute the following command to start the project:
     ```bash
     ng serve
     ```
   - Access the application at `http://localhost:4200/` in your web browser.

---

## 1. Giới Thiệu | Introduction

<p>Dự án này là sự kết hợp của đam mê và kỹ thuật, hướng đến việc tạo ra một nền tảng giáo dục trực tuyến cho sinh viên trường FPT. Sử dụng công nghệ tiên tiến như Angular, NodeJS, và MongoDB, dự án này cung cấp một trải nghiệm học tập linh hoạt và tương tác cho người dùng.</p>
<p>This project is a fusion of passion and technical expertise, aiming to create an online education platform for FPT University students. Leveraging advanced technologies such as Angular, NodeJS, and MongoDB, this project provides a flexible and interactive learning experience for users.</p>

## 2. Hình Ảnh | Introduction Screenshots

### Màn Hình Landing | Landing Page

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/ScreenIntroduce%2Floadingpage.png?alt=media&token=15a87ef3-244e-48cf-a84e-026e084e2dfb" alt="Landing Page">
</div>
Mô tả chi tiết về Màn Hình Landing.

---

### Màn Hình Đăng Nhập | Login Page

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/ScreenIntroduce%2Flogin.png?alt=media&token=19452912-e4f3-4ede-9927-ef34b347661d" alt="Login Page">
</div>

Mô tả chi tiết về Màn Hình Đăng Nhập.

---

### Màn Hình Chi Tiết Khóa Học Page | Detail Course Page

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/ScreenIntroduce%2Fcourse_detail.png?alt=media&token=d8fbf8c2-9d17-4445-8703-40d3b3104c81" alt="Detail Course Page">
</div>

Mô tả chi tiết về Màn Hình Chi tiết khóa học.

---

### Màn Hình Video Bài Học | Lesson Video Page

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/ScreenIntroduce%2Flesson_video.png?alt=media&token=e89af1b3-43dd-44f6-b9a5-afdf6397d543" alt="Lesson Video Page">
</div>

Mô tả chi tiết về Màn Hình Video Bài Học.

---

### Màn Hình Giỏ hàng | Cart Page

<div class="screenshot-container">
  <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/ScreenIntroduce%2Fcart.png?alt=media&token=bb6d7fd0-7236-4b86-9e3e-f870d8f9ecf0" alt="Cart Page">
</div>

Mô tả chi tiết về Màn Hình Cart Page.

---

## 3. Cấu trúc của dự án | Project Structure

├── src \
│&nbsp;&nbsp;├── app \
│&nbsp;&nbsp;│&nbsp;&nbsp;├── client \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── pages \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── cart \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── cart.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-detail \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring-content \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring-content.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring-lessons \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring-lessons.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring-sidebar \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course-leanring-sidebar.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── landing \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── landing.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── profile \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── profile.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── sign-in \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── sign-in.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── index.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── index.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── client-routing.module.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── client.module.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;├── shared \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── layout \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── footer \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── footer.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── footer.component.html \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── header \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── header.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── header.component.html \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── sidebar \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── sidebar.component.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── sidebar.component.html \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── index.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── shared.module.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;├── core \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── models \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── billboard.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── cart.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── index.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── shared.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── localState.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── transaction.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── user.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── services \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── auth.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── cart.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── course.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── index.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── share.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── temp.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── toast.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── transaction.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── user.service.ts \
│&nbsp;&nbsp;│&nbsp;&nbsp;├── page-not-found \
│&nbsp;&nbsp;│&nbsp;&nbsp;│&nbsp;&nbsp;├── page-not-found.component.ts \
│&nbsp;&nbsp;├── app-routing.module.ts \
│&nbsp;&nbsp;├── app.component.css \
│&nbsp;&nbsp;├── app.component.html \
│&nbsp;&nbsp;├── app.component.spec.ts \
│&nbsp;&nbsp;├── app.component.ts \
│&nbsp;&nbsp;├── app.module.ts

---

## 4. Tính Năng Chính | Key Features

<p>Khóa Học Đa Dạng | Diverse Courses</p>

- Cung cấp nhiều khóa học lập trình web app, từ cơ bản đến nâng cao
- Offers a variety of web app programming courses, ranging from basic to advanced levels.

<p>Học Tương Tác | Interactive Learning</p>

- Tích hợp Pusher và Firebase để tạo môi trường học tập tương tác.
- Integrates Pusher and Firebase to create an interactive learning environment.
<p>Triển Khai Linh Hoạt | Flexible Deployment</p>

- Sử dụng Docker để đảm bảo quá trình triển khai dễ dàng và nhất quán.
- Flexible Deployment: Utilizes Docker to ensure an easy and consistent deployment process.

<p>Giao Diện Người Dùng Thân Thiện | User-Friendly Interface</p>

- Giao diện được thiết kế với Angular, tạo trải nghiệm người dùng mượt mà và trực quan.
- The interface is designed with Angular, providing a smooth and intuitive user experience.

---

## 5. Công Nghệ Sử Dụng | Technologies Used

- Frontend: Angular
- Backend: NodeJS, express
- Database: MongoDB
- Real-Time Interactions: Pusher, Firebase
- Containerization: Docker
- Send mail with Nodemailer
- Payment: Paypal, momo, zalopay
- GG Cloud: Login, Gmail API
  <table align="center">
    
    <tr>
      <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-angular-48.png?alt=media&token=0ab65086-a322-4850-ba81-963acffda8d0" width="48" height="48" alt="C" />
        <br />Angular
      </td>
      <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-typescript-48.png?alt=media&token=a397a416-b821-406b-aa67-7cc2816decd2" width="48" height="48" alt="C#" />
        <br />TS
      </td>
      <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-nodejs-48.png?alt=media&token=db4a7793-ce8b-4f6d-9086-4ec51f5387dc" width="48" height="48" alt="Java" />
        <br />Nodejs
      </td>
      <td align="center" width="96">
          <img src="https://img.icons8.com/color/48/express-js.png" width="48" height="48" alt="Java" />
        <br />express
      </td>
    </tr>
    
    <tr>
      <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-google-firebase-console-48.png?alt=media&token=af552a40-5db6-45c1-8564-d4cddc9a5b44" width="48" height="48" alt="TypeScript" />
        <br />Firebase
      </td>
      <td align="center" width="96">
          <img src="https://www.gstatic.com/pantheon/images/welcome/supercloud.svg" width="48" height="48" alt="TypeScript" />
        <br />Google Cloud
      </td>
      <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-docker-48.png?alt=media&token=499cdb70-387a-4a4b-a8d0-3ff95a837fdc" width="48" height="48" alt="TypeScript" />
        <br />Docker
      </td>
     <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-mongodb-a-cross-platform-document-oriented-database-program-48.png?alt=media&token=d0ec414b-79ad-437b-8835-8d567f9e80e3" width="48" height="48" alt="JavaScript" />
        <br />MongoDB
      </td>
       
    </tr>

    <tr>
       <td align="center" width="96">
          <img src="https://firebasestorage.googleapis.com/v0/b/ongbutdicode.appspot.com/o/README%2Ficons8-sass-48.png?alt=media&token=bb7a0178-6df6-4ad7-91e3-9d436e1d6282" width="48" height="48" alt="TypeScript" />
        <br />Sass
      </td>
      <td align="center" width="96">
          <img src="https://nodemailer.com/nm_logo_200x136.png" width="48" height="48" alt="TypeScript" />
        <br />Nodemailer
      </td>
       <td align="center" width="96">
          <img src="https://img.icons8.com/color/48/paypal.png" width="48" height="48" alt="TypeScript" />
        <br />Paypal
      </td>
       <td align="center" width="96">
          <img src="https://homepage.momocdn.net/jk/momo2020/img/sud/mascot-shadow.png" width="48" height="48" alt="TypeScript" />
        <br />Momo
      </td>
    </tr>

    <tr>
       <td align="center" width="96">
          <img src="https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png" width="48" height="48" alt="RxJS" />
        <br />RxJS
      </td>
    </tr>

</table>

---

## Mục Tiêu Dự Án | Project Goals

- Mục tiêu của dự án này là tạo ra một nền tảng giáo dục trực tuyến chất lượng cao, dễ tiếp cận và hữu ích cho sinh viên FPT, đặc biệt là những người có niềm đam mê với lập trình web app.
- The goal of this project is to establish a high-quality online education platform that is easily accessible and beneficial for FPT University students, especially those passionate about web app development.
