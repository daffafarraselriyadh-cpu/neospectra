import { useEffect, useRef, useState } from "react"

const navItems = [
  ["Beranda", "beranda"],
  ["Tentang", "tentang"],
  ["NEOFEST", "neofest"],
  ["Cabang Lomba", "lomba"],
  ["NEOSTAGE", "neostage"],
  ["SPONSORSHIP & PARTNERSHIP", "sponsorship"],
  ["Timeline", "timeline"],
]

const partnershipWhatsApp =
  "https://wa.me/6285183164754?text=Halo%20tim%20NEOSPECTRA%206%2C%20saya%20ingin%20mendiskusikan%20kerja%20sama%20sponsorship."

const competitions = [
  {
    code: "01",
    name: "PBB",
    full: "Peraturan Baris-Berbaris",
    type: "Offline",
    audience: "SMP/MTs Sederajat",
    accent: "cyan",
    image: "/assets/competition-pbb.png",
    description:
      "Kompetisi ketepatan gerakan, kekompakan, kerapian, variasi formasi, dan ketegasan pemimpin regu.",
    format: [
      ["13", "Anggota / regu"],
      ["15", "Menit tampil"],
      ["10×20", "Meter lapangan"],
    ],
    rules: [
      "Setiap regu terdiri dari 13 orang termasuk Danton.",
      "Gerakan meliputi dasar PBB dan variasi formasi dengan standar Perpang TNI.",
      "Peserta wajib hadir 30 menit sebelum lomba dimulai.",
      "Lomba dilaksanakan 20 Januari 2027 di Lapangan SMAIT Nurul Islam Tengaran.",
    ],
  },
  {
    code: "02",
    name: "TTG",
    full: "Teknologi Tepat Guna",
    type: "Offline",
    audience: "SMP/MTs Sederajat",
    accent: "violet",
    image: "/assets/competition-ttg.png",
    description:
      "Merancang teknologi sederhana yang orisinal, fungsional, dan memberi manfaat nyata bagi kehidupan masyarakat.",
    format: [
      ["03", "Anggota / tim"],
      ["02", "Jam perakitan"],
      ["3–5", "Menit presentasi"],
    ],
    rules: [
      "Setiap sekolah dapat mengirim maksimal dua kelompok beranggotakan tiga siswa.",
      "Perakitan dilaksanakan langsung di lokasi menggunakan bahan yang dibawa peserta.",
      "Tema karya: Inovasi Lokal, Solusi Global.",
      "Lomba dilaksanakan 20 Januari 2027 di Lab IPA SMAIT Nurul Islam Tengaran.",
    ],
  },
  {
    code: "03",
    name: "Neospectra of Champions",
    full: "Strategi, logika, dan kolaborasi",
    type: "Offline",
    audience: "SMP/MTs Sederajat",
    accent: "pink",
    image: "/assets/competition-champions.png",
    description:
      "Pertandingan tim dalam empat babak yang menguji matematika, memori, logika, IPA, dan Bahasa Inggris.",
    format: [
      ["03", "Anggota / tim"],
      ["04", "Babak lomba"],
      ["03", "Tim / sekolah"],
    ],
    rules: [
      "Peserta menggunakan seragam sekolah yang rapi dan sopan.",
      "Lomba terdiri dari penyisihan I, penyisihan II, semifinal, dan final.",
      "Peserta dilarang membawa catatan atau perangkat elektronik saat bertanding.",
      "Keputusan dewan juri bersifat final dan tidak dapat diganggu gugat.",
    ],
  },
  {
    code: "04",
    name: "Fotografi",
    full: "Menangkap spektrum cerita",
    type: "Online",
    audience: "Terbuka untuk SMP/MTs",
    accent: "blue",
    image: "/assets/competition-photography.png",
    description:
      "Kompetisi visual untuk menangkap cerita, emosi, dan sudut pandang unik melalui satu karya fotografi terbaik.",
    format: [
      ["01", "Karya utama"],
      ["01", "Peserta"],
      ["JPG", "Format karya"],
    ],
    rules: [
      "Karya merupakan hasil orisinal peserta dan belum pernah memenangkan lomba.",
      "Penyuntingan dasar diperbolehkan tanpa manipulasi visual berlebihan.",
      "Peserta menyertakan judul dan deskripsi singkat karya.",
      "Karya dikumpulkan melalui tautan resmi sebelum batas waktu.",
    ],
  },
  {
    code: "05",
    name: "Komik Digital",
    full: "Karya visual dan narasi kreatif",
    type: "Online",
    audience: "Terbuka untuk SMP/MTs",
    accent: "violet",
    image: "/assets/competition-comic.png",
    description:
      "Menggabungkan ilustrasi dan narasi menjadi komik digital yang komunikatif, kreatif, dan memiliki pesan positif.",
    format: [
      ["04–8", "Halaman karya"],
      ["01", "Peserta"],
      ["PDF", "Format karya"],
    ],
    rules: [
      "Cerita dan ilustrasi wajib merupakan karya orisinal peserta.",
      "Karya tidak mengandung unsur SARA, kekerasan berlebihan, atau plagiarisme.",
      "Komik dikumpulkan dalam satu berkas PDF.",
      "Penilaian meliputi ide, visual, alur cerita, dan kesesuaian tema.",
    ],
  },
  {
    code: "06",
    name: "Pidato",
    full: "Suara, gagasan, dan keberanian",
    type: "Online",
    audience: "Terbuka untuk SMP/MTs",
    accent: "cyan",
    image: "/assets/competition-speech.png",
    description:
      "Ruang menyampaikan gagasan dengan struktur yang kuat, artikulasi jelas, dan keberanian tampil yang meyakinkan.",
    format: [
      ["5–7", "Menit tampil"],
      ["01", "Peserta"],
      ["MP4", "Format video"],
    ],
    rules: [
      "Naskah pidato harus sesuai tema dan merupakan karya peserta.",
      "Video direkam tanpa potongan yang mengubah isi penampilan.",
      "Peserta menggunakan bahasa yang santun dan mudah dipahami.",
      "Penilaian meliputi isi, struktur, artikulasi, ekspresi, dan ketepatan waktu.",
    ],
  },
]

const timeline = [
  ["20 OCT", "2026", "Pembukaan pendaftaran"],
  ["05 DEC", "2026", "Penutupan pendaftaran & pengumpulan karya online"],
  ["08 DEC", "2026", "TM lomba online"],
  ["15 JAN", "2027", "TM lomba offline & pengumpulan karya online"],
  ["20 JAN", "2027", "Pelaksanaan & pengumuman"],
]

const sponsorPackages = [
  {
    name: "Spectrum",
    role: "Main Partner",
    price: "Rp5.000.000",
    accent: "navy",
    summary: "Eksposur utama di seluruh rangkaian NEOSPECTRA 6.",
    benefits: [
      "Wall of Sponsor",
      "Ad-libs",
      "E-Certificate",
      "Social Media Mention",
      "Documentation & Publication",
      "Lahan Stand",
      "Lahan Promosi",
      "Logo on Participant ID Cards",
      "Product Display at Guest Star Area",
      "Backdrop Logo",
      "Logo on Souvenirs",
      "Sponsor Flags",
      "Award Plaque",
      "Guest Star Exposure",
    ],
  },
  {
    name: "Eclipse",
    role: "Co-Partner",
    price: "Rp3.500.000",
    accent: "cyan",
    summary: "Visibilitas kuat pada media acara dan publikasi digital.",
    benefits: [
      "Wall of Sponsor",
      "Ad-libs",
      "E-Certificate",
      "Social Media Mention",
      "Documentation & Publication",
      "Lahan Stand",
      "Lahan Promosi",
      "Logo on Participant ID Cards",
      "Product Display at Guest Star Area",
      "Backdrop Logo",
      "Logo on Souvenirs",
      "Sponsor Flags",
    ],
  },
  {
    name: "Stellar",
    role: "Official Partner",
    price: "Rp2.500.000",
    accent: "violet",
    summary: "Kolaborasi resmi dengan eksposur brand yang konsisten.",
    benefits: [
      "Wall of Sponsor",
      "Ad-libs",
      "E-Certificate",
      "Social Media Mention",
      "Documentation & Publication",
      "Lahan Stand",
      "Lahan Promosi",
      "Logo on Participant ID Cards",
      "Product Display at Guest Star Area",
    ],
  },
  {
    name: "Lumina",
    role: "Supporting Partner",
    price: "Rp1.500.000",
    accent: "pink",
    summary: "Dukungan bermakna dengan jangkauan promosi yang terarah.",
    benefits: [
      "Wall of Sponsor",
      "Ad-libs",
      "E-Certificate",
      "Social Media Mention",
      "Documentation & Publication",
      "Lahan Stand",
      "Lahan Promosi",
    ],
  },
  {
    name: "Breeze",
    role: "Friend Partner",
    price: "Rp500.000",
    accent: "sky",
    summary: "Pilihan ringan untuk ikut tumbuh bersama generasi muda.",
    benefits: [
      "Wall of Sponsor",
      "Ad-libs",
      "E-Certificate",
      "Social Media Mention",
    ],
  },
]

const sponsorPrivileges = [
  "Wall of Sponsor",
  "Ad-libs",
  "E-Certificate",
  "Social Media Mention",
  "Documentation & Publication",
  "Lahan Stand",
  "Lahan Promosi",
  "Logo on Participant ID Cards",
  "Product Display at Guest Star Area",
  "Backdrop Logo",
  "Logo on Souvenirs",
  "Sponsor Flags",
  "Award Plaque",
  "Guest Star Exposure",
]

const partnershipOptions = [
  {
    code: "01",
    name: "Goods Sponsor",
    type: "goods",
    description: "Dukungan berupa barang atau produk.",
    benefits: [
      "Logo di poster, backdrop, dan media sosial panitia",
      "Booth atau meja promosi produk",
      "Foto dokumentasi produk di acara",
      "Sertifikat atau plakat penghargaan",
    ],
  },
  {
    code: "02",
    name: "Prize Sponsor",
    type: "prize",
    description: "Dukungan berupa hadiah, voucher, atau merchandise.",
    benefits: [
      "Logo pada media promosi kategori prize sponsor",
      "Penyebutan oleh MC saat pembagian hadiah",
      "Kesempatan menyerahkan hadiah langsung",
      "Logo pada sertifikat atau plakat pemenang",
    ],
  },
  {
    code: "03",
    name: "Service Sponsor",
    type: "service",
    description: "Dukungan berupa jasa atau layanan.",
    benefits: [
      "Dicantumkan sebagai official service sponsor",
      "Logo atau watermark pada dokumentasi",
      "Penyebutan oleh MC selama acara",
      "Logo pada video highlight kegiatan",
    ],
  },
]

const umkmPackages = [
  {
    name: "UMKM 1",
    price: "Rp350.000",
    benefits: ["Fasilitas area stand"],
    accent: "blue",
  },
  {
    name: "UMKM 2",
    price: "Rp400.000",
    benefits: [
      "Fasilitas area stand",
      "Penyebutan nama usaha oleh MC dalam publikasi acara",
    ],
    accent: "violet",
  },
  {
    name: "UMKM 3",
    price: "Rp500.000",
    benefits: [
      "Fasilitas area stand",
      "Fasilitas stand selama kegiatan",
      "Penyebutan nama usaha oleh MC dan publikasi acara",
    ],
    accent: "cyan",
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" />
    </svg>
  )
}

function TimelineIcon({ index }: { index: number }) {
  const paths = [
    <path key="calendar" d="M7 5v4M17 5v4M4 10h16M5 7h14v13H5zM8 14h3M13 14h3M8 17h3" />,
    <path key="document" d="M7 4h7l4 4v12H7zM14 4v5h4M10 13h5M10 16h5" />,
    <path key="group" d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM17 13a3 3 0 1 0 0-6M2 20c0-4 3-7 7-7s7 3 7 7M15 14c4 0 7 2 7 6" />,
    <path key="submission" d="M7 4h7l4 4v12H7zM14 4v5h4M10 13h5M10 16h3" />,
    <path key="trophy" d="M8 5h8v5c0 4-2 7-4 7s-4-3-4-7V5ZM8 7H4v2c0 3 2 5 5 5M16 7h4v2c0 3-2 5-5 5M12 17v3M8 21h8" />,
  ]
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[index]}
    </svg>
  )
}

function PackageCrystal() {
  return (
    <svg
      className="package-crystal"
      viewBox="0 0 120 124"
      aria-hidden="true"
    >
      <polygon points="60,3 103,34 93,91 60,120 27,91 17,34" />
      <polygon
        className="crystal-facet crystal-facet-light"
        points="60,3 60,61 17,34"
      />
      <polygon
        className="crystal-facet crystal-facet-mid"
        points="60,3 103,34 60,61"
      />
      <polygon
        className="crystal-facet crystal-facet-dark"
        points="17,34 60,61 27,91"
      />
      <polygon
        className="crystal-facet crystal-facet-soft"
        points="103,34 93,91 60,61"
      />
      <polygon
        className="crystal-facet crystal-facet-glow"
        points="27,91 60,61 60,120"
      />
      <polygon
        className="crystal-facet crystal-facet-deep"
        points="60,61 93,91 60,120"
      />
      <path className="crystal-shine" d="M38 31 57 17M34 41l-7 5" />
    </svg>
  )
}

function AlternativeIcon({ type }: { type: string }) {
  if (type === "goods") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M7 18h34v24H7zM5 12h38v8H5zM24 12v30M14 12c-3-4-1-8 3-8 5 0 7 8 7 8M34 12c3-4 1-8-3-8-5 0-7 8-7 8" />
      </svg>
    )
  }
  if (type === "prize") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 7h20v8c0 8-4 14-10 14s-10-6-10-14V7ZM14 11H7v4c0 6 4 10 10 10M34 11h7v4c0 6-4 10-10 10M24 29v8M15 42h18M18 37h12" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m6 22 9-9 9 5 9-5 9 9-12 13c-3 3-8 3-11 0L6 22ZM15 13l-6-4-6 12 7 4M33 13l6-4 6 12-7 4M17 30l5 5M22 26l7 7" />
    </svg>
  )
}

function UmkmEmblem() {
  return (
    <div className="umkm-emblem" aria-hidden="true">
      <span className="umkm-emblem-orbit" />
      <svg viewBox="0 0 120 120">
        <polygon className="umkm-gem-base" points="60,4 108,42 91,96 60,116 29,96 12,42" />
        <polygon className="umkm-gem-light" points="60,4 60,59 12,42" />
        <polygon className="umkm-gem-cyan" points="60,4 108,42 60,59" />
        <polygon className="umkm-gem-deep" points="12,42 60,59 29,96" />
        <polygon className="umkm-gem-violet" points="108,42 91,96 60,59" />
        <polygon className="umkm-gem-soft" points="29,96 60,59 60,116" />
        <polygon className="umkm-gem-mid" points="60,59 91,96 60,116" />
        <path d="M37 32 55 17M32 43l-7 5" />
      </svg>
      <span className="umkm-emblem-spark">+</span>
    </div>
  )
}

function Countdown() {
  const target = new Date("2027-01-05T23:59:59+07:00").getTime()
  const getRemaining = () => Math.max(0, target - Date.now())
  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const units = [
    ["Hari", Math.floor(remaining / 86_400_000)],
    ["Jam", Math.floor((remaining / 3_600_000) % 24)],
    ["Menit", Math.floor((remaining / 60_000) % 60)],
    ["Detik", Math.floor((remaining / 1_000) % 60)],
  ]

  return (
    <div className="countdown" aria-label="Hitung mundur pendaftaran">
      {units.map(([label, value]) => (
        <div className="countdown-box" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const heroRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCompetition, setActiveCompetition] = useState(0)
  const [selectedCompetition, setSelectedCompetition] = useState<number | null>(
    null,
  )
  const [showRules, setShowRules] = useState(false)
  const [activePackage, setActivePackage] = useState(0)
  const [registrationNotice, setRegistrationNotice] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("beranda")

  useEffect(() => {
    const sectionIds = [...navItems.map(([, id]) => id), "daftar"]
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const marker = window.scrollY + window.innerHeight * 0.35
      let current = "beranda"
      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) current = id
      })
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible")
        })
      },
      { threshold: 0.12 },
    )
    const elements = document.querySelectorAll("[data-reveal]")
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const moveHero = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty("--pointer-x", `${x * 18}px`)
    event.currentTarget.style.setProperty("--pointer-y", `${y * 18}px`)
  }

  const moveAboutVisual = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty("--about-rotate-y", `${x * 8}deg`)
    event.currentTarget.style.setProperty("--about-rotate-x", `${y * -8}deg`)
  }

  useEffect(() => {
    if (selectedCompetition === null) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCompetition(null)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [selectedCompetition])

  useEffect(() => {
    if (!registrationNotice) return
    const timer = window.setTimeout(() => setRegistrationNotice(false), 6000)
    return () => window.clearTimeout(timer)
  }, [registrationNotice])

  const closeMenu = () => setMenuOpen(false)
  const changeCompetition = (direction: number) => {
    setActiveCompetition(
      (current) =>
        (current + direction + competitions.length) % competitions.length,
    )
  }
  const openCompetition = (index: number) => {
    setActiveCompetition(index)
    setShowRules(false)
    setSelectedCompetition(index)
  }
  const selectedItem =
    selectedCompetition === null ? null : competitions[selectedCompetition]

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#beranda" onClick={closeMenu}>
          <img src="/assets/neospectra-crystal-n.png" alt="" />
          <strong>NEOSPECTRA 6</strong>
        </a>

        <button
          className="menu-button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>

        <nav className={menuOpen ? "is-open" : ""} aria-label="Navigasi utama">
          {navItems.map(([label, id]) => (
            <a
              className={`${activeSection === id ? "is-active" : ""} ${
                id === "sponsorship" ? "nav-partnership" : ""
              }`}
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {id === "sponsorship" ? (
                <>
                  <span>SPONSORSHIP &</span>
                  <span>PARTNERSHIP</span>
                </>
              ) : (
                label
              )}
            </a>
          ))}
          <a
            className={`nav-cta ${
              activeSection === "daftar" ? "is-active" : ""
            }`}
            href="#daftar"
            onClick={closeMenu}
          >
            Daftar Lomba
            <ArrowIcon />
          </a>
        </nav>
      </header>

      <section
        className="hero"
        id="beranda"
        ref={heroRef}
        onPointerMove={moveHero}
      >
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
        <i className="hero-shard hero-shard-one" />
        <i className="hero-shard hero-shard-two" />
        <i className="hero-shard hero-shard-three" />
        <div className="hero-content">
          <div className="hero-kicker">
            Nurul Islam Expo, Organization, Spectacular, and Attractive
          </div>
          <h1>NEOSPECTRA 6</h1>
          <div className="hero-tagline">
            <span>Know your spectrum</span>
            <strong>Shape your legacy</strong>
          </div>
          <div className="countdown-label">NEOSPECTRA 6 dimulai dalam</div>
          <Countdown />
          <div className="hero-actions">
            <a className="button button-primary" href="#daftar">
              Daftar Lomba
              <ArrowIcon />
            </a>
            <a className="button button-ghost" href="#lomba">
              Lihat 6 Cabang
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <strong>06</strong>
              <span>Cabang kompetisi</span>
            </div>
            <div>
              <strong>20.01</strong>
              <span>Puncak acara</span>
            </div>
            <div>
              <strong>2027</strong>
              <span>Tahun pelaksanaan</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Logo N kristal NEOSPECTRA 6">
          <div className="crystal-ring ring-one" />
          <div className="crystal-ring ring-two" />
          <div className="mascot-aura" />
          <div className="hero-logo-beam" />
          <span className="spark spark-one">+</span>
          <span className="spark spark-two">+</span>
          <img
            className="hero-crystal-logo"
            src="/assets/neospectra-crystal-n.png"
            alt="Logo huruf N bergaya kristal biru, ungu, dan cyan"
          />
          <span className="mascot-chip chip-one">WONDER</span>
          <span className="mascot-chip chip-two">CREATE</span>
          <div className="visual-label">
            <span>Theme</span>
            <strong>Spectrum of Wonders</strong>
          </div>
        </div>

        <a
          className="scroll-cue"
          href="#tentang"
          aria-label="Gulir ke bagian tentang"
        >
          <span />
          Scroll to explore
        </a>
      </section>

      <section className="about section" id="tentang">
        <div className="crystal-edge" aria-hidden="true" />
        <div className="section-tag" data-reveal>
          01 / Tentang NEOSPECTRA 6
        </div>
        <div className="about-heading" data-reveal>
          <div className="about-copy">
            <h2>
              More than
              <br />
              <span>an event.</span>
            </h2>
            <p>
              NEOSPECTRA 6 merupakan kegiatan tahunan SMAIT Nurul Islam Tengaran
              yang mempertemukan generasi muda dalam ruang untuk belajar,
              berkompetisi, berkarya, dan berkembang.
            </p>
            <p>
              Melalui berbagai kegiatan kompetitif, edukatif, dan inspiratif,
              NEOSPECTRA membuka kesempatan bagi generasi muda untuk
              mengeksplorasi kemampuan, membangun pengalaman, serta memperluas
              jejaring kolaborasi dengan berbagai pihak.
            </p>
            <div className="about-facts">
              <div>
                <small>Identitas</small>
                <strong>
                  Nurul Islam Expo, Organization, Spectacular, and Attractive
                </strong>
              </div>
              <div>
                <small>Tema</small>
                <strong>Spectrum of Wonders</strong>
              </div>
              <div>
                <small>Tagline</small>
                <strong>Know your Spectrum, Shape your Legacy.</strong>
              </div>
            </div>
          </div>

          <div
            className="about-logo-card"
            onPointerMove={moveAboutVisual}
            onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--about-rotate-y", "0deg")
              event.currentTarget.style.setProperty("--about-rotate-x", "0deg")
            }}
          >
            <div className="about-logo-orbit" />
            <div className="about-mascot-aura" />
            <div className="about-mascot-pedestal" />
            <span className="about-spark about-spark-one">+</span>
            <span className="about-spark about-spark-two">+</span>
            <img
              className="about-mascot"
              src="/assets/neospectra-mascot.png"
              alt="Maskot kristal NEOSPECTRA 6"
            />
            <i className="logo-shard logo-shard-one" />
            <i className="logo-shard logo-shard-two" />
            <span className="about-mascot-badge">Meet our crystal spirit</span>
            <strong className="about-logo-name">NEOSPECTRA 6</strong>
          </div>
        </div>

        <div className="values" data-reveal>
          <article tabIndex={0}>
            <span className="value-number">01</span>
            <div className="value-gem gem-blue" />
            <h3>Grow</h3>
            <small>Potensi & Prestasi</small>
            <p>
              Mengasah bakat, kreativitas, dan prestasi melalui pengalaman yang
              menantang sekaligus inspiratif.
            </p>
          </article>
          <article tabIndex={0}>
            <span className="value-number">02</span>
            <div className="value-gem gem-violet" />
            <h3>Connect</h3>
            <small>Kolaborasi & Karakter</small>
            <p>
              Menghubungkan pelajar untuk belajar, bertukar ide, dan membangun
              jejaring yang bermakna.
            </p>
          </article>
          <article tabIndex={0}>
            <span className="value-number">03</span>
            <div className="value-gem gem-pink" />
            <h3>Create</h3>
            <small>Ide & Karya</small>
            <p>
              Memberi ruang bagi karya, inovasi, dan ekspresi untuk tumbuh
              menjadi sesuatu yang berdampak.
            </p>
          </article>
        </div>

        <div className="about-purpose-grid" data-reveal>
          <div className="about-purpose">
            <span>✦</span>
            <div>
              <small>Our purpose</small>
              <p>
                Membuka ruang bagi generasi muda untuk berkembang sekaligus
                menciptakan peluang kolaborasi dengan berbagai pihak.
              </p>
            </div>
          </div>
          <div className="attendance-card">
            <div className="attendance-orbit" />
            <div>
              <small>Community impact</small>
              <strong>200<span>+</span></strong>
              <p>Peserta hadir, bertumbuh, dan menciptakan cerita bersama.</p>
            </div>
            <div className="attendance-people" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section
        className="neofest section"
        id="neofest"
        aria-labelledby="neofest-title"
      >
        <div className="crystal-edge" aria-hidden="true" />
        <div className="event-crystal" data-reveal>
          <div className="event-mascot-stage">
            <div className="event-mascot-orbit" />
            <span className="event-mascot-spark spark-a">+</span>
            <span className="event-mascot-spark spark-b">+</span>
            <img
              src="/assets/neospectra-competition-mascot.png"
              alt="Maskot kristal NEOFEST"
            />
            <span className="event-mascot-note">
              <small>Ready to compete?</small>
              Temukan spektrummu
            </span>
          </div>
          <strong>
            06 <span>Jenis kompetisi</span>
          </strong>
        </div>
        <div className="event-copy" data-reveal>
          <div className="section-tag">02 / NEOFEST 2027</div>
          <div className="event-label">Rangkaian Utama NEOSPECTRA</div>
          <h2 id="neofest-title">
            NEOFEST
            <span>2027</span>
          </h2>
          <strong>
            Kompetisi yang mengasah potensi, kreativitas, dan keberanian pelajar
          </strong>
          <p>
            NEOFEST 2027 merupakan rangkaian kompetisi dalam NEOSPECTRA yang
            dirancang untuk mengembangkan kemampuan, kreativitas, ketangkasan,
            dan keberanian peserta dalam menghadapi berbagai tantangan.
          </p>
          <div className="event-highlights">
            <span>3 Lomba Offline</span>
            <span>3 Lomba Online</span>
            <span>SMP/MTs Sederajat</span>
          </div>
          <a className="event-link" href="#lomba">
            Jelajahi 6 cabang lomba
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="competitions section" id="lomba">
        <div className="crystal-edge" aria-hidden="true" />
        <div className="section-header">
          <div>
            <div className="section-tag">03 / Cabang Lomba</div>
            <h2>
              6 cabang,
              <br />
              <span>pilih spektrummu.</span>
            </h2>
          </div>
          <p>
            Enam kesempatan untuk menguji kemampuan, kreativitas, dan
            keberanianmu.
          </p>
        </div>

        <div className="competition-tabs" aria-label="Pilih cabang lomba">
          {competitions.map((item, index) => (
            <button
              className={`${
                activeCompetition === index ? "is-active" : ""
              } tab-${item.accent}`}
              key={item.code}
              onClick={() => setActiveCompetition(index)}
              aria-label={`Tampilkan ${item.name}`}
            >
              <strong>{item.code}</strong>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="competition-carousel">
          <div className="competition-stage">
            {competitions.map((item, index) => {
              const relative =
                (index - activeCompetition + competitions.length) %
                competitions.length
              const position =
                relative === 0
                  ? "is-active"
                  : relative === 1
                    ? "is-next"
                    : relative === competitions.length - 1
                      ? "is-prev"
                      : "is-hidden"

              return (
                <article
                  className={`competition-card accent-${item.accent} ${position}`}
                  key={item.code}
                  aria-hidden={position === "is-hidden"}
                  role="button"
                  tabIndex={position === "is-active" ? 0 : -1}
                  onClick={() => {
                    if (position === "is-active") openCompetition(index)
                    else if (position !== "is-hidden")
                      setActiveCompetition(index)
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      if (position === "is-active") openCompetition(index)
                      else if (position !== "is-hidden")
                        setActiveCompetition(index)
                    }
                  }}
                >
                  <div className="card-top">
                    <span>NS-{item.code}</span>
                    <div>
                      <small>{item.type}</small>
                      <small>1 cabang</small>
                    </div>
                  </div>
                  <img
                    className="card-logo"
                    src={item.image}
                    alt={`Maskot cabang ${item.name}`}
                  />
                  <span className="card-kicker">Explore your spectrum</span>
                  <h3>{item.name}</h3>
                  <p>{item.full}</p>
                  <div className="card-bottom">
                    <span>{item.audience}</span>
                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        openCompetition(index)
                      }}
                      aria-label={`Lihat detail ${item.name}`}
                    >
                      Lihat detail
                      <ArrowIcon />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="carousel-controls">
            <button
              onClick={() => changeCompetition(-1)}
              aria-label="Lomba sebelumnya"
            >
              <ArrowIcon />
            </button>
            <strong>
              {String(activeCompetition + 1).padStart(2, "0")}
              <span>/ {String(competitions.length).padStart(2, "0")}</span>
            </strong>
            <button
              onClick={() => changeCompetition(1)}
              aria-label="Lomba berikutnya"
            >
              <ArrowIcon />
            </button>
          </div>

          <a className="all-competitions" href="#daftar">
            Daftar ke cabang pilihanmu
            <ArrowIcon />
          </a>
        </div>
      </section>

      {selectedItem && (
        <div
          className="competition-modal-backdrop"
          onMouseDown={() => setSelectedCompetition(null)}
        >
          <div
            className="competition-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="competition-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedCompetition(null)}
              aria-label="Tutup detail lomba"
            >
              <CloseIcon />
            </button>

            <aside className="modal-identity">
              <div className="modal-code">NS-{selectedItem.code}</div>
              <div className="modal-name">{selectedItem.name}</div>
              <div className="modal-line" />
              <div className="modal-logo-stage">
                <div />
                <img
                  src={selectedItem.image}
                  alt={`Maskot cabang ${selectedItem.name}`}
                />
              </div>
              <small>NEOSPECTRA 6 · SPECTRUM OF WONDERS</small>
            </aside>

            <div className="modal-content">
              <header>
                <div className="modal-badges">
                  <span>{selectedItem.type}</span>
                  <span>{selectedItem.audience}</span>
                </div>
                <small className="modal-eyebrow">
                  Cabang lomba · NS-{selectedItem.code}
                </small>
                <h2 id="competition-modal-title">{selectedItem.name}</h2>
                <strong>{selectedItem.full}</strong>
                <p>{selectedItem.description}</p>
              </header>

              <section className="modal-format">
                <div className="modal-section-label">Format & Komposisi</div>
                <div className="format-grid">
                  {selectedItem.format.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`modal-rules ${showRules ? "is-open" : ""}`}>
                <button onClick={() => setShowRules((value) => !value)}>
                  <span>
                    <small>Petunjuk Teknis</small>
                    <strong>
                      {showRules
                        ? "Tutup ringkasan juknis"
                        : "Buka ringkasan juknis"}
                    </strong>
                  </span>
                  <i>{showRules ? "−" : "+"}</i>
                </button>
                <div className="rules-content">
                  <ol>
                    {selectedItem.rules.map((rule) => (
                      <li key={rule}>{rule}</li>
                    ))}
                  </ol>
                </div>
              </section>

              <div className="modal-actions">
                <a className="modal-primary" href="#daftar">
                  Daftar lomba ini
                  <ArrowIcon />
                </a>
                <a href="/juknis-neospectra-6.docx" download>
                  Unduh juknis lengkap
                </a>
                <small>Pendaftaran ditutup 5 Januari 2027 · 23.59 WIB</small>
              </div>
            </div>
          </div>
        </div>
      )}

      <section
        className="neostage section"
        id="neostage"
        aria-labelledby="neostage-title"
      >
        <div className="crystal-edge" aria-hidden="true" />
        <div className="neostage-intro" data-reveal>
          <div className="section-tag">04 / NEOSTAGE 2027</div>
          <div className="event-label">Rangkaian Utama NEOSPECTRA</div>
          <h2 id="neostage-title">
            NEO<span>STAGE</span>
            <strong>2027</strong>
          </h2>
          <h3>“Know Your Spectrum, Shape Your Legacy”</h3>
          <p>
            Sebagai salah satu rangkaian utama NEOSPECTRA 2027, NEOSTAGE 2027
            menghadirkan sesi talkshow yang mempertemukan peserta dengan tokoh
            inspiratif untuk memperoleh wawasan, perspektif, dan pengalaman yang
            relevan dengan pengembangan diri serta peran generasi muda.
          </p>
          <p>
            Sesi ini dirancang sebagai ruang dialog yang dekat dengan pelajar,
            interaktif, dan memberi bekal praktis bersama Sadam Permana untuk
            mengenali potensi, membangun keberanian, serta menciptakan langkah
            masa depan yang lebih bermakna.
          </p>
        </div>
        <div className="neostage-visual" data-reveal>
          <div className="speaker-card">
            <img
              src="/assets/neostage-speaker.jpg"
              alt="Sadam Permana, pembicara NEOSTAGE 2027"
            />
            <div className="speaker-caption">
              <small>Inspirational Speaker</small>
              <strong>Sadam Permana</strong>
              <span>Content Creator · Public Speaker</span>
            </div>
          </div>
          <div className="stage-orbit" />
        </div>
        <div className="stage-benefits" data-reveal>
          <article>
            <span>✦</span>
            <div>
              <strong>Wawasan Baru</strong>
              <p>Perspektif dari tokoh inspiratif untuk pengembangan diri.</p>
            </div>
          </article>
          <article>
            <span>●●</span>
            <div>
              <strong>Pengalaman Nyata</strong>
              <p>
                Cerita dan perjalanan hidup yang relevan dengan dunia pelajar.
              </p>
            </div>
          </article>
          <article>
            <span>◇</span>
            <div>
              <strong>Ruang Untuk Tumbuh</strong>
              <p>Motivasi dan panduan praktis untuk melangkah ke masa depan.</p>
            </div>
          </article>
        </div>
        <div className="stage-details" data-reveal>
          <div>
            <small>Tanggal Waktu Pelaksanaan</small>
            <strong>21 Januari 2027</strong>
          </div>
          <div>
            <small>Waktu Pelaksanaan</small>
            <strong>08.00–Selesai</strong>
          </div>
          <div>
            <small>Lokasi Pelaksanaan</small>
            <strong>Panggung Utama NEOSPECTRA</strong>
          </div>
        </div>
      </section>

      <section
        className="sponsorship section"
        id="sponsorship"
        aria-labelledby="sponsorship-title"
      >
        <div className="sponsor-grid" aria-hidden="true" />
        <i className="sponsor-shard sponsor-shard-one" />
        <i className="sponsor-shard sponsor-shard-two" />
        <div className="sponsor-hero" data-reveal>
          <div className="sponsor-heading">
            <div className="section-tag">
              05 / SPONSORSHIP &amp; PARTNERSHIP 2027
            </div>
            <span className="sponsor-eyebrow">Let&apos;s create an impact</span>
            <h2 id="sponsorship-title">
              Partner up
              <span>with us.</span>
            </h2>
            <p>
              Mari wujudkan ruang bagi generasi muda untuk berkarya,
              berkompetisi, dan berkembang bersama. Pilih bentuk kolaborasi
              yang paling sesuai dengan tujuan brand Anda.
            </p>
            <div className="sponsor-actions">
              <a
                className="button button-primary"
                href={partnershipWhatsApp}
                target="_blank"
                rel="noreferrer"
              >
                Ajukan Kerja Sama
                <ArrowIcon />
              </a>
              <a className="button button-ghost" href="#sponsor-packages">
                Lihat Paket
              </a>
            </div>
          </div>

          <div className="sponsor-mascot">
            <div className="sponsor-orbit" />
            <span className="sponsor-spark sponsor-spark-one">+</span>
            <span className="sponsor-spark sponsor-spark-two">+</span>
            <img
              src="/assets/neospectra-mascot.png"
              alt="Maskot kristal NEOSPECTRA mengajak berkolaborasi"
            />
            <div className="impact-badge">
              <strong>Grow together</strong>
              <span>Go further</span>
            </div>
          </div>
        </div>

        <div className="sponsor-packages" id="sponsor-packages" data-reveal>
          <div className="package-intro">
            <span>Be part of the journey</span>
            <h3>Sponsor Package</h3>
            <p>
              Lima level kemitraan dengan eksposur yang dapat disesuaikan
              berdasarkan kebutuhan kolaborasi.
            </p>
          </div>
          <div className="package-grid">
            {sponsorPackages.map((item, index) => (
              <button
                className={`package-card package-${item.accent} ${
                  activePackage === index ? "is-selected" : ""
                }`}
                key={item.name}
                type="button"
                style={{ "--package-order": index } as React.CSSProperties}
                aria-pressed={activePackage === index}
                onClick={() => setActivePackage(index)}
              >
                <span className="package-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="package-gem">
                  <span className="package-gem-orbit" />
                  <PackageCrystal />
                  <span className="package-gem-star">+</span>
                </div>
                <small>{item.role}</small>
                <h4>{item.name}</h4>
                <span>Mulai dari</span>
                <strong>{item.price}</strong>
                <span className="package-select">
                  {activePackage === index ? "Paket terpilih" : "Lihat benefit"}
                </span>
              </button>
            ))}
          </div>
          <div
            className={`package-detail package-detail-${sponsorPackages[activePackage].accent}`}
            aria-live="polite"
          >
            <div>
              <span>Paket terpilih</span>
              <strong>{sponsorPackages[activePackage].name}</strong>
              <p>{sponsorPackages[activePackage].summary}</p>
            </div>
            <ul>
              {sponsorPackages[activePackage].benefits.map((benefit) => (
                <li key={benefit}>
                  <span>+</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <a
              href={partnershipWhatsApp}
              target="_blank"
              rel="noreferrer"
            >
              Ajukan kerja sama
              <ArrowIcon />
            </a>
          </div>
          <div className="benefit-comparison">
            <div className="benefit-heading">
              <div>
                <span>Benefit sponsorship</span>
                <h4>Bandingkan privilege setiap paket.</h4>
              </div>
              <p>
                Pilih tier di atas untuk menyorot kolom dan melihat benefit
                yang paling sesuai dengan kebutuhan brand Anda.
              </p>
            </div>
            <div className="benefit-table-scroll">
              <div className="benefit-table">
                <div className="benefit-table-head">
                  <strong>Sponsor Privilege</strong>
                  {sponsorPackages.map((item, index) => (
                    <button
                      className={activePackage === index ? "is-active" : ""}
                      key={item.name}
                      onClick={() => setActivePackage(index)}
                      type="button"
                    >
                      <PackageCrystal />
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
                {sponsorPrivileges.map((privilege) => (
                  <div className="benefit-row" key={privilege}>
                    <span>{privilege}</span>
                    {sponsorPackages.map((item, index) => {
                      const included = item.benefits.includes(privilege)
                      return (
                        <i
                          className={`${included ? "is-included" : ""} ${
                            activePackage === index ? "is-highlighted" : ""
                          }`}
                          key={item.name}
                          aria-label={`${item.name}: ${
                            included ? "termasuk" : "tidak termasuk"
                          }`}
                        >
                          {included ? "✓" : "—"}
                        </i>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="partnership-panel" data-reveal>
          <div className="partnership-copy">
            <span>Paket alternatif</span>
            <h3>Bentuk dukungan yang fleksibel</h3>
            <p>
              Kontribusi juga dapat diberikan melalui produk, hadiah, jasa,
              fasilitas, atau paket UMKM. Seluruh dukungan dapat disesuaikan
              melalui kesepakatan bersama.
            </p>
          </div>
          <div className="partnership-options">
            {partnershipOptions.map((item) => (
              <article key={item.name}>
                <div className="alternative-icon">
                  <AlternativeIcon type={item.type} />
                </div>
                <span>{item.code}</span>
                <h4>{item.name}</h4>
                <strong>{item.description}</strong>
                <small>Benefit yang diterima:</small>
                <ul>
                  {item.benefits.map((benefit) => (
                    <li key={benefit}>
                      <i>+</i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="umkm-section">
            <div className="umkm-heading">
              <span>Paket alternatif</span>
              <h3>
                Paket <strong>UMKM</strong>
              </h3>
              <p>
                Kesempatan bagi usaha Anda untuk lebih dikenal melalui
                rangkaian kegiatan NEOSPECTRA 6.
              </p>
            </div>
            <div className="umkm-grid">
              {umkmPackages.map((item, index) => (
                <article className={`umkm-card umkm-${item.accent}`} key={item.name}>
                  <span className="umkm-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <UmkmEmblem />
                  <h4>{item.name}</h4>
                  <strong>{item.price}</strong>
                  <ul>
                    {item.benefits.map((benefit) => (
                      <li key={benefit}>
                        <i>+</i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="partnership-contact">
            <div>
              <span>Let&apos;s talk</span>
              <strong>Informasi dan kerja sama</strong>
              <p>
                Diskusikan kebutuhan kolaborasi dan paket yang paling sesuai.
              </p>
            </div>
            <a href={partnershipWhatsApp} target="_blank" rel="noreferrer">
              Ajukan kerja sama
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="timeline section" id="timeline">
        <div className="crystal-edge" aria-hidden="true" />
        <div className="section-tag">06 / Timeline Kegiatan</div>
        <div className="timeline-title">
          <h2>
            Satu perjalanan,
            <br />
            <span>banyak kemungkinan.</span>
          </h2>
          <p>
            Catat setiap tanggal penting dan siapkan karya terbaikmu untuk
            NEOSPECTRA 6.
          </p>
          <div className="timeline-mascot" data-reveal>
            <div />
            <img
              src="/assets/neospectra-competition-mascot.png"
              alt="Maskot NEOSPECTRA menemani perjalanan kegiatan"
            />
            <span>See you there</span>
          </div>
        </div>
        <div className="timeline-track">
          {timeline.map(([date, year, label], index) => (
            <article
              className={index === timeline.length - 1 ? "featured" : ""}
              key={date}
            >
              <div className="timeline-dot">
                <TimelineIcon index={index} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <strong>{date}</strong>
              <small>{year}</small>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="registration section" id="daftar">
        <div className="crystal-edge" aria-hidden="true" />
        <div className="registration-glow" />
        <i className="registration-shard registration-shard-one" />
        <i className="registration-shard registration-shard-two" />
        <div className="registration-visual" data-reveal>
          <div className="registration-orbit" />
          <div className="registration-orbit orbit-inner" />
          <img
            src="/assets/neospectra-crystal-n.png"
            alt="Logo N kristal NEOSPECTRA 6"
          />
          <span>Join the spectrum</span>
        </div>
        <div className="registration-copy" data-reveal>
          <div className="section-tag light">07 / Saatnya Beraksi</div>
          <h2>
            Your spectrum
            <br />
            starts <span>here.</span>
          </h2>
          <p>
            Pilih cabang lombamu, siapkan kemampuan terbaik, dan jadilah bagian
            dari perjalanan NEOSPECTRA 6.
          </p>
          <div className="registration-steps">
            <span><strong>01</strong>Pilih cabang</span>
            <span><strong>02</strong>Siapkan karya</span>
            <span><strong>03</strong>Jadilah bagian</span>
          </div>
        </div>
        <div className="registration-action" data-reveal>
          <span>Pendaftaran dibuka</span>
          <strong>20 Oktober 2026</strong>
          <button
            className="button button-light"
            type="button"
            onClick={() => setRegistrationNotice(true)}
          >
            Daftar Sekarang
            <ArrowIcon />
          </button>
          <small>*Tautan pendaftaran dapat diperbarui kemudian.</small>
        </div>
      </section>

      {registrationNotice && (
        <div
          className="registration-notice"
          role="status"
          aria-live="polite"
        >
          <div className="notice-icon">
            <img src="/assets/neospectra-crystal-n.png" alt="" />
          </div>
          <div>
            <small>Informasi Pendaftaran</small>
            <strong>Pendaftaran belum dibuka</strong>
            <p>
              Mohon maaf, pendaftaran NEOSPECTRA 6 baru akan dibuka pada 20
              Oktober 2026. Terima kasih atas antusiasme dan kesediaannya
              menunggu.
            </p>
          </div>
          <button
            type="button"
            aria-label="Tutup informasi pendaftaran"
            onClick={() => setRegistrationNotice(false)}
          >
            <CloseIcon />
          </button>
        </div>
      )}

      <footer>
        <div className="footer-brand footer-column">
          <div className="footer-brand-row">
            <img src="/assets/neospectra-crystal-n.png" alt="" />
            <strong>NEOSPECTRA 6</strong>
          </div>
          <div>
            <p>
              Know your Spectrum,
              <br />
              Shape your Legacy.
            </p>
            <span>Spectrum of Wonders · 2027</span>
          </div>
        </div>
        <div className="footer-column">
          <strong className="footer-title">Tautan Cepat</strong>
          <div className="footer-links">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#neofest">NEOFEST</a>
            <a href="#lomba">Cabang Lomba</a>
            <a href="#neostage">NEOSTAGE</a>
            <a href="#sponsorship">Sponsorship &amp; Partnership</a>
            <a href="#timeline">Timeline</a>
          </div>
        </div>
        <div className="footer-column footer-contact">
          <strong className="footer-title">Lokasi</strong>
          <p>
            SMAIT Nurul Islam Tengaran
            <br />
            Kabupaten Semarang, Jawa Tengah
          </p>
        </div>
        <div className="footer-column footer-contact">
          <strong className="footer-title">Terhubung Dengan Kami</strong>
          <a
            href="https://instagram.com/neospectra.ofc"
            target="_blank"
            rel="noreferrer"
          >
            Instagram · @neospectra.ofc
          </a>
          <a
            href="https://tiktok.com/@neospectra.ofc"
            target="_blank"
            rel="noreferrer"
          >
            TikTok · @neospectra.ofc
          </a>
          <a href="mailto:neospectrasmanista@gmail.com">
            neospectrasmanista@gmail.com
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 NEOSPECTRA 6 · SMAIT Nurul Islam Tengaran</span>
          <a href="#beranda">Kembali ke atas ↑</a>
        </div>
      </footer>
    </main>
  )
}
