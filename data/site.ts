export const personalData = {
  name: "PHAN HÙNG VƯƠNG",
  title: "Sinh viên năm 4 – Công nghệ phần mềm | Đại học Duy Tân",
  school: "Đại học Duy Tân",
  major: "Công nghệ phần mềm",
  year: 4,

  // 🎯 Định hướng
  orientation: {
    headline: "Định hướng Web Backend Developer.",
    interests: "Database, Business Logic, API và hệ thống ổn định.",
    goal: "Tìm cơ hội thực tập Web Backend.",
  },

  // 💻 Kỹ năng
  skills: {
    backend: "C#, Java, ASP.NET Core, Spring Boot",
    database: "SQL Server, SQLite",
    frontend: "HTML, CSS, JavaScript, ReactJS",
    tools: "Git, Cursor IDE, VS Code, Draw.io",
  },

  // 🚀 Dự án nổi bật – SmartMotoRental
  mainProject: {
    title: "SmartMotoRental",
    desc: "Website cho thuê xe máy với chức năng đặt xe và quản lý dành cho Admin.",
    role: "Thành viên phát triển chính",
    architecture: "MVC",
    tech: "ASP.NET Core 7, EF Core, SQLite, Bootstrap 5, Git",
    tasks: [
      "Thiết kế Database bằng EF Core Code First",
      "Xây dựng tìm kiếm, lọc xe, đặt xe và tính chi phí",
      "Phát triển hệ thống Admin quản lý người dùng, đơn thuê và xe",
    ],
    result: "Hoàn thiện đúng tiến độ, áp dụng OOP và tối ưu truy vấn dữ liệu.",
    repo: "https://github.com/PHVuong/ThueMoto",
  },

  // 🤖 Dự án đang phát triển – PCBuilder AI / PCStore
  upcomingProject: {
    title: "PCBuilder AI / PCStore",
    desc: "Hệ thống thương mại điện tử linh kiện PC tích hợp kiểm tra tương thích phần cứng và AI tư vấn cấu hình.",
    features: [
      "Kiểm tra tương thích phần cứng",
      "AI tư vấn cấu hình",
    ],
    tech: "C#, ASP.NET Core, PostgreSQL",
    ai: "Gemini API + RAG",
  },

  // 📅 Lịch thực tập
  schedule: {
    busyDays: ["Thứ 3", "Thứ 6"],
    freeDays: ["Thứ 2", "Thứ 4", "Thứ 5", "Thứ 7", "Chủ Nhật"],
    message: "Sẵn sàng phỏng vấn và thực tập.",
  },

  // 7 ngày cho Organiser 3D
  week7Days: [
    { id: "mon", name: "Thứ 2", letter: "2", tint: "mon" as const, isFree: true },
    { id: "tue", name: "Thứ 3", letter: "3", tint: "tue" as const, isFree: false },
    { id: "wed", name: "Thứ 4", letter: "4", tint: "wed" as const, isFree: true },
    { id: "thu", name: "Thứ 5", letter: "5", tint: "thu" as const, isFree: true },
    { id: "fri", name: "Thứ 6", letter: "6", tint: "fri" as const, isFree: false },
    { id: "sat", name: "Thứ 7", letter: "7", tint: "sat" as const, isFree: true },
    { id: "sun", name: "Chủ Nhật", letter: "CN", tint: "sun" as const, isFree: true },
  ],

  // 📞 Liên hệ
  contacts: {
    email: "phanhungvuong2005@gmail.com",
    github: "github.com/PHVuong",
    githubUrl: "https://github.com/PHVuong",
    facebook: "facebook.com/mariam.lancaster.79",
    facebookUrl: "https://facebook.com/mariam.lancaster.79",
  },
};
