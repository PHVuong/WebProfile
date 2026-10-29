"use client";

import { useState } from "react";
import {
  Button,
  NavTray,
  Organiser3D,
  Phone,
  DueNowScreen,
  GivenScreen,
  PlasticStageBand,
  InkBand,
  PharmacyLabel,
  DataTable,
  SiteFooter,
  type OrganiserDay,
} from "@/components/ui";
import { personalData } from "@/data/site";

export default function Home() {
  const [selectedDayId, setSelectedDayId] = useState<string>("thu");

  // Map 7-day schedule to 3D Organiser
  const organiserDays: OrganiserDay[] = personalData.week7Days.map((day) => ({
    id: day.id,
    name: day.name,
    letter: day.letter,
    tint: day.tint,
    medication: day.isFree ? "RẢNH · SẴN SÀNG" : "BẬN · HỌC TRƯỜNG",
    dosage: day.isFree ? "Thực tập / Phỏng vấn" : "Đại học Duy Tân",
    time: day.isFree ? "Cả ngày" : "07:30 - 17:00",
    isCompleted: day.isFree,
  }));

  const activeDay = personalData.week7Days.find((d) => d.id === selectedDayId) || personalData.week7Days[3];

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Skip link for accessibility */}
      <a href="#content" className="skip">
        Chuyển đến nội dung chính
      </a>

      {/* Sticky Navigation */}
      <NavTray
        wordmark={
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span>{personalData.name}</span>
            <span
              style={{
                fontSize: "0.75rem",
                padding: "2px 8px",
                borderRadius: "var(--radius-pill)",
                background: "var(--color-paper-2)",
                boxShadow: "inset 0 0 0 1px var(--color-rule)",
                color: "var(--color-accent-deep)",
                fontWeight: 600,
              }}
            >
              Backend Intern
            </span>
          </span>
        }
        wordmarkHref="#hero"
        links={[
          { label: "Định hướng", href: "#dinh-huong" },
          { label: "Kỹ năng", href: "#ky-nang" },
          { label: "Dự án", href: "#du-an" },
          { label: "Lịch thực tập", href: "#lich-thuc-tap" },
          { label: "Liên hệ", href: "#lien-he" },
        ]}
        note="ĐH Duy Tân"
        action={{
          label: "Gửi Email",
          href: `mailto:${personalData.contacts.email}?subject=Liên hệ thực tập Web Backend`,
        }}
      />

      <main id="content">
        {/* ==============================================================
            HERO: PHAN HÙNG VƯƠNG & 🎯 ĐỊNH HƯỚNG
            ============================================================== */}
        <section className="hero" id="hero">
          <div className="hero__ground" />

          <div className="container hero__grid">
            <div className="hero__text" id="dinh-huong">
              <div>
                <span className="doc-badge doc-badge--accent" style={{ marginBottom: "var(--space-xs)" }}>
                  🎯 Định hướng
                </span>
                <div style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)", fontWeight: 500, marginTop: 4 }}>
                  {personalData.title}
                </div>
              </div>

              <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 4.2rem)", lineHeight: 1.05 }}>
                {personalData.orientation.headline}
              </h1>

              <div style={{ display: "grid", gap: "var(--space-xs)", maxWidth: "44ch", fontSize: "var(--text-md)", color: "var(--color-ink-2)" }}>
                <p>
                  <b>Quan tâm:</b> {personalData.orientation.interests}
                </p>
                <p>
                  <b>Mục tiêu:</b> {personalData.orientation.goal}
                </p>
              </div>

              <div className="actions">
                <Button variant="primary" href="#du-an">
                  Xem dự án nổi bật
                </Button>
                <Button variant="secondary" href="#lich-thuc-tap">
                  Lịch thực tập
                </Button>
                <Button variant="secondary" href={`mailto:${personalData.contacts.email}`}>
                  Gửi Email
                </Button>
              </div>

              <div className="hero__terms" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-accent)", display: "inline-block" }} />
                <span>Sẵn sàng phỏng vấn và thực tập (Rảnh Thứ 2, 4, 5, 7, CN)</span>
              </div>
            </div>

            {/* 3D Organiser displaying the 7 days of the week */}
            <Organiser3D
              days={organiserDays}
              initialActiveDayId={selectedDayId}
              onDayChange={(d) => setSelectedDayId(d.id)}
              showKinChips={true}
              showRipple={true}
              showWindowLight={true}
              activeLabelProps={{
                title: activeDay.name,
                regimen: activeDay.isFree ? "Rảnh cả ngày" : "Lịch học trường",
                tag: activeDay.isFree ? "SẴN SÀNG NHẬN VIỆC" : "ĐẠI HỌC DUY TÂN",
                rxNumber: `LỊCH-${activeDay.letter}`,
                rows: [
                  { label: "Tình trạng", value: activeDay.isFree ? "Rảnh phỏng vấn & thực tập" : "Bận học ở trường" },
                  { label: "Mục tiêu", value: "Thực tập Web Backend" },
                  { label: "Trạng thái", value: activeDay.isFree ? "Sẵn sàng nhận việc" : "Trao đổi online buổi tối" },
                ],
                stamp: {
                  kind: activeDay.isFree ? "given" : "due",
                  title: activeDay.isFree ? "RẢNH" : "BẬN",
                  subtitle: activeDay.isFree ? "SẴN SÀNG THỰC TẬP" : "THỨ 3 & THỨ 6",
                  isStamped: true,
                },
              }}
              kinMembers={[
                { name: "Học vấn", time: "Năm 4", status: "ĐH Duy Tân", isTicked: true },
                { name: "Mục tiêu", time: "2026", status: "Web Backend", isTicked: true },
                { name: "Phỏng vấn", time: "Sẵn sàng", status: "Đà Nẵng / Remote", isTicked: true },
              ]}
            />
          </div>
        </section>

        {/* ==============================================================
            SECTION: 💻 KỸ NĂNG
            ============================================================== */}
        <section className="day container" id="ky-nang" style={{ paddingTop: "var(--section-gap-s)" }}>
          <div className="day__head">
            <div className="day__head-title">
              <span className="doc-badge doc-badge--accent">💻 Kỹ năng</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>Kỹ năng & Công nghệ sử dụng.</h2>
            </div>
            <p className="lead">
              Tập trung vào nền tảng Backend vững chắc, xử lý Database, Client và các công cụ phát triển hiện đại.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            {/* Backend */}
            <div
              className="plastic"
              style={{
                "--t": "var(--p-thu)",
                borderRadius: "var(--radius-card)",
                padding: "var(--space-xl)",
                display: "grid",
                gap: "var(--space-sm)",
              } as React.CSSProperties}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", fontWeight: 600, color: "var(--color-muted)" }}>
                  Cốt lõi
                </span>
                <span className="ph__chip" style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}>
                  Trọng tâm
                </span>
              </div>
              <h3 style={{ fontSize: "var(--text-lg)" }}>Backend</h3>
              <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>
                {personalData.skills.backend}
              </p>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginTop: 4 }}>
                C#, Java, ASP.NET Core, Spring Boot
              </span>
            </div>

            {/* Database */}
            <div
              className="plastic"
              style={{
                "--t": "var(--p-fri)",
                borderRadius: "var(--radius-card)",
                padding: "var(--space-xl)",
                display: "grid",
                gap: "var(--space-sm)",
              } as React.CSSProperties}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", fontWeight: 600, color: "var(--color-muted)" }}>
                  Dữ liệu
                </span>
                <span className="ph__chip">Lưu trữ</span>
              </div>
              <h3 style={{ fontSize: "var(--text-lg)" }}>Database</h3>
              <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>
                {personalData.skills.database}
              </p>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginTop: 4 }}>
                SQL Server, SQLite, thiết kế CSDL & tối ưu truy vấn
              </span>
            </div>

            {/* Frontend */}
            <div
              className="plastic"
              style={{
                "--t": "var(--p-wed)",
                borderRadius: "var(--radius-card)",
                padding: "var(--space-xl)",
                display: "grid",
                gap: "var(--space-sm)",
              } as React.CSSProperties}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", fontWeight: 600, color: "var(--color-muted)" }}>
                  Client-side
                </span>
                <span className="ph__chip">Giao diện</span>
              </div>
              <h3 style={{ fontSize: "var(--text-lg)" }}>Frontend</h3>
              <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>
                {personalData.skills.frontend}
              </p>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginTop: 4 }}>
                HTML, CSS, JavaScript, ReactJS
              </span>
            </div>

            {/* Tools */}
            <div
              className="plastic"
              style={{
                "--t": "var(--p-sat)",
                borderRadius: "var(--radius-card)",
                padding: "var(--space-xl)",
                display: "grid",
                gap: "var(--space-sm)",
              } as React.CSSProperties}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "var(--text-xs)", textTransform: "uppercase", fontWeight: 600, color: "var(--color-muted)" }}>
                  Công cụ
                </span>
                <span className="ph__chip">Môi trường</span>
              </div>
              <h3 style={{ fontSize: "var(--text-lg)" }}>Tools</h3>
              <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 500, color: "var(--color-ink)" }}>
                {personalData.skills.tools}
              </p>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", marginTop: 4 }}>
                Git, Cursor IDE, VS Code, Draw.io
              </span>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION: 🚀 DỰ ÁN NỔI BẬT & 🤖 DỰ ÁN ĐANG PHÁT TRIỂN
            ============================================================== */}
        <section className="day container" id="du-an" style={{ paddingTop: "var(--section-gap-s)" }}>
          <div className="day__head">
            <div className="day__head-title">
              <span className="doc-badge doc-badge--accent">Dự án</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>Dự án đã & đang phát triển.</h2>
            </div>
            <p className="lead">
              Áp dụng kiến trúc MVC, EF Core Code First, tối ưu cơ sở dữ liệu và tích hợp trí tuệ nhân tạo.
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--space-2xl)" }}>
            {/* 🚀 Dự án nổi bật – SmartMotoRental */}
            <div
              className="plastic"
              style={{
                "--t": "var(--p-fri)",
                borderRadius: 32,
                padding: "var(--space-2xl)",
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                columnGap: "var(--gap-columns)",
                rowGap: "var(--space-xl)",
                alignItems: "start",
              } as React.CSSProperties}
            >
              <div style={{ gridColumn: "1 / span 5" }}>
                <PharmacyLabel
                  variant="flat"
                  tint="fri"
                  title={personalData.mainProject.title}
                  regimen={personalData.mainProject.desc}
                  tag="🚀 DỰ ÁN NỔI BẬT"
                  rxNumber="PROJ-01"
                  rows={[
                    { label: "Vai trò", value: personalData.mainProject.role },
                    { label: "Architecture", value: personalData.mainProject.architecture },
                    { label: "Tech", value: personalData.mainProject.tech },
                  ]}
                  stubText={
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 600 }}>MÃ NGUỒN</span>
                      <a
                        href={personalData.mainProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "var(--color-accent-deep)", fontWeight: 600, textDecoration: "underline" }}
                      >
                        GitHub - ThueMoto ↗
                      </a>
                    </div>
                  }
                  stamp={{
                    kind: "given",
                    title: "HOÀN THÀNH",
                    subtitle: "ĐÚNG TIẾN ĐỘ · OOP",
                    isStamped: true,
                  }}
                />
              </div>

              <div style={{ gridColumn: "6 / -1", display: "grid", gap: "var(--space-md)" }}>
                <div>
                  <span className="doc-badge">🚀 Dự án nổi bật</span>
                  <h3 style={{ fontSize: "var(--text-xl)", marginTop: "var(--space-xs)", marginBottom: "var(--space-xs)" }}>
                    {personalData.mainProject.title}
                  </h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: "var(--text-md)" }}>
                    {personalData.mainProject.desc}
                  </p>
                </div>

                <div
                  style={{
                    background: "var(--color-paper)",
                    padding: "var(--space-lg)",
                    borderRadius: "var(--radius-card)",
                    border: "1px solid var(--color-rule)",
                  }}
                >
                  <h4 style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>
                    Đã thực hiện:
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 8, color: "var(--color-ink)" }}>
                    {personalData.mainProject.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: "var(--tone-99_8-95)",
                    padding: "var(--space-md) var(--space-lg)",
                    borderRadius: "var(--radius-input)",
                    borderLeft: "3px solid var(--color-accent)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-ink-2)",
                  }}
                >
                  <b>Kết quả:</b> {personalData.mainProject.result}
                </div>

                <div className="actions" style={{ marginTop: "var(--space-xs)" }}>
                  <Button variant="primary" href={personalData.mainProject.repo}>
                    Xem mã nguồn trên GitHub
                  </Button>
                </div>
              </div>
            </div>

            {/* 🤖 Dự án đang phát triển – PCBuilder AI / PCStore */}
            <div
              className="plastic"
              style={{
                "--t": "var(--p-thu)",
                borderRadius: 32,
                padding: "var(--space-2xl)",
                display: "grid",
                gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
                columnGap: "var(--gap-columns)",
                rowGap: "var(--space-xl)",
                alignItems: "start",
              } as React.CSSProperties}
            >
              <div style={{ gridColumn: "1 / span 5" }}>
                <PharmacyLabel
                  variant="flat"
                  tint="thu"
                  title={personalData.upcomingProject.title}
                  regimen="Hệ thống thương mại điện tử linh kiện PC"
                  tag="🤖 ĐANG PHÁT TRIỂN"
                  rxNumber="PROJ-02"
                  rows={[
                    { label: "Tech", value: personalData.upcomingProject.tech },
                    { label: "AI & Data", value: personalData.upcomingProject.ai },
                    { label: "Tính năng 1", value: "Kiểm tra tương thích phần cứng" },
                    { label: "Tính năng 2", value: "AI tư vấn cấu hình" },
                  ]}
                  stubText={
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontWeight: 600 }}>TÍNH NĂNG AI</span>
                      <span style={{ color: "var(--color-accent-deep)", fontWeight: 600 }}>Gemini + RAG</span>
                    </div>
                  }
                  stamp={{
                    kind: "due",
                    title: "ĐANG PHÁT TRIỂN",
                    subtitle: "AI + POSTGRESQL",
                    isStamped: true,
                  }}
                />
              </div>

              <div style={{ gridColumn: "6 / -1", display: "grid", gap: "var(--space-md)" }}>
                <div>
                  <span className="doc-badge doc-badge--accent">🤖 Dự án đang phát triển</span>
                  <h3 style={{ fontSize: "var(--text-xl)", marginTop: "var(--space-xs)", marginBottom: "var(--space-xs)" }}>
                    {personalData.upcomingProject.title}
                  </h3>
                  <p style={{ color: "var(--color-ink-2)", fontSize: "var(--text-md)" }}>
                    {personalData.upcomingProject.desc}
                  </p>
                </div>

                <div
                  style={{
                    background: "var(--color-paper)",
                    padding: "var(--space-lg)",
                    borderRadius: "var(--radius-card)",
                    border: "1px solid var(--color-rule)",
                  }}
                >
                  <h4 style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>
                    Tính năng tích hợp:
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 8, color: "var(--color-ink)" }}>
                    {personalData.upcomingProject.features.map((feature, idx) => (
                      <li key={idx}>
                        <b>{feature}</b>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "var(--space-md)",
                  }}
                >
                  <div
                    style={{
                      background: "var(--tone-99_8-95)",
                      padding: "var(--space-md)",
                      borderRadius: "var(--radius-input)",
                      border: "1px solid var(--color-rule)",
                    }}
                  >
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase" }}>Công nghệ Backend</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>{personalData.upcomingProject.tech}</div>
                  </div>
                  <div
                    style={{
                      background: "var(--tone-99_8-95)",
                      padding: "var(--space-md)",
                      borderRadius: "var(--radius-input)",
                      border: "1px solid var(--color-rule)",
                    }}
                  >
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase" }}>Tích hợp AI</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>{personalData.upcomingProject.ai}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            SECTION: 📅 LỊCH THỰC TẬP
            ============================================================== */}
        <section className="day container" id="lich-thuc-tap" style={{ paddingTop: "var(--section-gap-s)" }}>
          <div className="day__head">
            <div className="day__head-title">
              <span className="doc-badge doc-badge--accent">📅 Lịch thực tập</span>
              <h2 style={{ marginTop: "var(--space-xs)" }}>Thời gian sẵn sàng thực tập.</h2>
            </div>
            <p className="lead">
              {personalData.schedule.message}
            </p>
          </div>

          <DataTable
            caption="Lịch bận và lịch rảnh của Phan Hùng Vương"
            head={["Ngày trong tuần", "Tình trạng", "Thời gian", "Mức độ sẵn sàng"]}
            rows={[
              ["Thứ 2", "Rảnh", "Cả ngày", "Sẵn sàng phỏng vấn và thực tập"],
              ["Thứ 3", "Bận", "Học ở trường", "Trao đổi online buổi tối"],
              ["Thứ 4", "Rảnh", "Cả ngày", "Sẵn sàng phỏng vấn và thực tập"],
              ["Thứ 5", "Rảnh", "Cả ngày", "Sẵn sàng phỏng vấn và thực tập"],
              ["Thứ 6", "Bận", "Học ở trường", "Trao đổi online buổi tối"],
              ["Thứ 7", "Rảnh", "Cả ngày", "Sẵn sàng phỏng vấn và thực tập"],
              ["Chủ Nhật", "Rảnh", "Cả ngày", "Sẵn sàng phỏng vấn và thực tập"],
            ]}
          />
        </section>

        {/* ==============================================================
            STATEMENT ON INK BAND
            ============================================================== */}
        <InkBand
          headline="Sẵn sàng phỏng vấn và thực tập Web Backend."
          subline="Bận: Thứ 3, Thứ 6 · Rảnh: Thứ 2, 4, 5, 7, Chủ Nhật"
        >
          <div className="actions">
            <Button
              variant="primary"
              href={`mailto:${personalData.contacts.email}?subject=Mời phỏng vấn thực tập Web Backend`}
            >
              Gửi email phỏng vấn
            </Button>
            <Button
              variant="secondary"
              href={personalData.contacts.githubUrl}
              style={{
                background: "transparent",
                color: "var(--color-paper)",
                boxShadow: "0 0 0 1px oklch(100% 0 0 / 0.35)",
              }}
            >
              GitHub ({personalData.contacts.github})
            </Button>
          </div>
        </InkBand>

        {/* ==============================================================
            SECTION: 📞 LIÊN HỆ
            ============================================================== */}
        <section className="start" id="lien-he" style={{ paddingTop: "var(--section-gap-s)" }}>
          <div className="container">
            <div className="start__tray plastic" style={{ "--t": "var(--tone-90-160)" } as React.CSSProperties}>
              <div className="start__text">
                <span className="doc-badge doc-badge--accent">📞 Liên hệ</span>
                <h2 style={{ marginTop: "var(--space-2xs)" }}>Thông tin liên hệ trực tiếp.</h2>
                <p className="lead">
                  Bạn có thể liên hệ trực tiếp với mình qua Email, GitHub hoặc Facebook để trao đổi về cơ hội thực tập:
                </p>

                <div style={{ display: "grid", gap: "var(--space-sm)", width: "100%", marginTop: "var(--space-sm)" }}>
                  <div
                    style={{
                      background: "var(--color-paper)",
                      padding: "var(--space-md) var(--space-lg)",
                      borderRadius: "var(--radius-card)",
                      border: "1px solid var(--color-rule)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase" }}>Email</div>
                      <a href={`mailto:${personalData.contacts.email}`} style={{ fontWeight: 600, color: "var(--color-ink)", fontSize: "1.05rem" }}>
                        {personalData.contacts.email}
                      </a>
                    </div>
                    <Button variant="primary" size="sm" href={`mailto:${personalData.contacts.email}`}>
                      Gửi thư
                    </Button>
                  </div>

                  <div
                    style={{
                      background: "var(--color-paper)",
                      padding: "var(--space-md) var(--space-lg)",
                      borderRadius: "var(--radius-card)",
                      border: "1px solid var(--color-rule)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase" }}>GitHub</div>
                      <a href={personalData.contacts.githubUrl} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: "var(--color-ink)", fontSize: "1.05rem" }}>
                        {personalData.contacts.github}
                      </a>
                    </div>
                    <Button variant="secondary" size="sm" href={personalData.contacts.githubUrl}>
                      Xem GitHub
                    </Button>
                  </div>

                  <div
                    style={{
                      background: "var(--color-paper)",
                      padding: "var(--space-md) var(--space-lg)",
                      borderRadius: "var(--radius-card)",
                      border: "1px solid var(--color-rule)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "var(--text-xs)", color: "var(--color-muted)", textTransform: "uppercase" }}>Facebook</div>
                      <a href={personalData.contacts.facebookUrl} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: "var(--color-ink)", fontSize: "1.05rem" }}>
                        {personalData.contacts.facebook}
                      </a>
                    </div>
                    <Button variant="secondary" size="sm" href={personalData.contacts.facebookUrl}>
                      Nhắn tin
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Phone Mockup displaying contact card */}
              <div className="start__phone">
                <Phone width={320} aspectRatio="360 / 560">
                  <div className="ui ph hh">
                    <div className="hh__lead ph__top">
                      <h4 className="ph__what">{personalData.name}</h4>
                      <span className="ph__by">{personalData.title}</span>
                    </div>

                    <ul className="ph__doses ph__doses--feed" style={{ fontSize: "1.25em", marginTop: 20 }}>
                      <li>
                        <div>
                          <b>Email</b>
                          <div className="ph__by">{personalData.contacts.email}</div>
                        </div>
                        <span className="ph__chip" style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}>Email</span>
                      </li>
                      <li>
                        <div>
                          <b>GitHub</b>
                          <div className="ph__by">{personalData.contacts.github}</div>
                        </div>
                        <span className="ph__chip">Code</span>
                      </li>
                      <li>
                        <div>
                          <b>Facebook</b>
                          <div className="ph__by">{personalData.contacts.facebook}</div>
                        </div>
                        <span className="ph__chip">Social</span>
                      </li>
                      <li>
                        <div>
                          <b>Trạng thái</b>
                          <div className="ph__by">Sẵn sàng thực tập</div>
                        </div>
                        <span className="ph__chip" style={{ background: "var(--color-accent)", color: "var(--color-accent-ink)" }}>Sẵn sàng</span>
                      </li>
                    </ul>

                    <a
                      href={`mailto:${personalData.contacts.email}`}
                      className="hh__add"
                      style={{ textDecoration: "none", cursor: "pointer" }}
                    >
                      ✉ Gửi email ngay
                    </a>
                  </div>
                </Phone>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter
        wordmark={personalData.name}
        links={[
          { label: "Định hướng", href: "#dinh-huong" },
          { label: "Kỹ năng", href: "#ky-nang" },
          { label: "Dự án", href: "#du-an" },
          { label: "Lịch thực tập", href: "#lich-thuc-tap" },
          { label: "Email", href: `mailto:${personalData.contacts.email}` },
          { label: "GitHub", href: personalData.contacts.githubUrl },
          { label: "Facebook", href: personalData.contacts.facebookUrl },
        ]}
        legalText={`© 2026 ${personalData.name}. ${personalData.title}.`}
        creditsText="Trang web cá nhân Web Backend Developer."
      />
    </div>
  );
}
