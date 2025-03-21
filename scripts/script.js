const navlinks = document.querySelectorAll("._navlink");
const subNavlinks = document.querySelectorAll("._subnavlink");
const hamburger = document.getElementById("hamburger");
const closeNav = document.getElementById("close_nav");
const navBar = document.getElementById("navigation_link");

navlinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    navlink.classList.toggle("active_navlink");
  })
});

subNavlinks.forEach((subnav) => {
  subnav.addEventListener("click", () => {
    console.log("aslo");
    
    subnav.classList.toggle("active_navlink");
  })
});

hamburger.addEventListener("click", () => {
  navBar.classList.add("show_nav");
  console.log("HALO")
});

closeNav.addEventListener("click", () => {
  navBar.classList.remove("show_nav");
  console.log("HALO2")
});

const buttonTabs = document.querySelectorAll("._button-tabs");
const tabs = document.querySelector("._tabs");

const dataTabs = [
  [
    {
      title: "Pelaksanaan Perkuliahan Secara Daring Selama UTBK 2025",
      date: "17/03/2025",
      url: "#",
    },
    {
      title: "Penerimaan Mahasiswa Baru Magister Ilmu Komputer",
      date: "04/03/2025",
      url: "#",
    },
    {
      title: "Webinar Pelatihan Series – DPKA UB",
      date: "04/03/2025",
      url: "#",
    },
    {
      title: "Syarat Pengajuan Cetak Satuan Kegiatan Mahasiswa (SKM)",
      date: "03/03/2025",
      url: "#",
    },
    {
      title: "Penyesuaian Jadwal Kuliah Selama Bulan Ramadhan 1446H / 2025",
      date: "27/02/2025",
      url: "#",
    },
    {
      title:
        "Informasi Pelaksanaan Perkuliahan Semester Genap T. A. 2024/2025 di FILKOM UB",
    },
  ],
  [
    {
      title: "Pelaksanaan Perkuliahan Secara Daring Selama UTBK 2025",
      date: "17/03/2025",
      url: "#",
    },
    {
      title: "Penyesuaian Jadwal Kuliah Selama Bulan Ramadhan 1446H / 2025",
      date: "27/02/2025",
      url: "#",
    },
    {
      title: "Informasi Kode Enrol LMS BRONE perkuliahan Genap 2024/2025",
      date: "09/02/2025",
      url: "#",
    },
    {
      title: "Informasi Tutup Kelas Mata Kuliah smt Genap 24/25",
      date: "08/02/2025",
      url: "#",
    },
    {
      title: "Pendataan problem KRS capstone",
      date: "07/02/2025",
      url: "#",
    },
  ],
  [
    {
      title: "Pengumuman Lolos Seleksi Internal PKM UB 2025",
      date: "09/02/2025",
      url: "#",
    },
    {
      title: "Pengumuman Pemilih Beruntung Pada PEMILWA FILKOM UB 2024",
      date: "22/11/2024",
      url: "#",
    },
    {
      title: "Beasiswa Utama LPS 2024",
      date: "27/09/2024",
      url: "#",
    },
    {
      title: "Pengambilan Ijazah dan Transkrip Nilai",
      date: "29/08/2024",
      url: "#",
    },
    {
      title: "Pengumuman Kelulusan Rekognisi Kegiatan Mahasiswa",
      date: "01/08/2024",
      url: "#",
    },
    {
      title: "Webinar Pembekalan Karir oleh DPAK UB",
      date: "19/06/2024",
      url: "#",
    },
  ],
  [
    {
      title:
        "Rekrutmen Calon Asisten Praktikum Laboratorium Pembelajaran Genap 2024-2025",
      date: "24/01/2025",
      url: "#",
    },
    {
      title: "Tes Calon Asisten Praktikum Pengembangan Aplikasi Web TI",
      date: "27/08/2024",
      url: "#",
    },
    {
      title: "Tes Calon Asisten Praktikum Pemrograman Web PTI",
      date: "21/08/2024",
      url: "#",
    },
    {
      title:
        "Rekrutmen Calon Asisten Praktikum Laboratorium Pembelajaran Ganjil 2024-2025",
      date: "13/08/2024",
      url: "#",
    },
    {
      title:
        "Pembagian Buku Rekening Kolektif Asisten Praktikum Genap 2023-2024",
      date: "12/08/2024",
      url: "#",
    },
    {
      title:
        "Rekrutmen Calon Asisten Praktikum Laboratorium Pembelajaran Genap 2023-2024",
      date: "06/02/2024",
      url: "#",
    },
  ],
  [
    {
      title: "REKRUTMEN TERBUKA DELEGASI MTQ FILKOM 2025",
      date: "20/03/2025",
      url: "#",
    },
    {
      title: "Pelaksanaan Perkuliaahan Secara Daring Selama UTBK 2025",
      date: "17/03/2025",
      url: "#",
    },
    {
      title: "Penerimaan Mahasiswa Baru Magister Ilmu Komputer",
      date: "04/03/2025",
      url: "#",
    },
    {
      title: "Webinar Pelatihan Series - DPKA UB",
      date: "04/03/2025",
      url: "#",
    },
    {
      title: "Syarat Pengajuan Cetak Satuan Kegiatan Mahasiswa (SKM)",
      date: "03/03/2025",
      url: "#",
    },
    {
      title: "Penyesuaian Jadwal kuliah Selama Bulan Ramadhan 1446H / 2025",
      date: "06/02/2024",
      url: "#",
    },
  ],
];

const onTabHandleClick = (index) => {
  buttonTabs.forEach((btn) => {
    btn.classList.replace("bg-secondary", "bg-primary");
    btn.classList.replace("text-primary", "text-white");
  });
  const buttonClick = event.target;

  buttonClick.classList.replace("bg-primary", "bg-secondary");
  buttonClick.classList.replace("text-white", "text-primary");
  tabs.innerHTML = "";
  dataTabs[index - 1].map(({ title, date, url }) => {
    const div = document.createElement("div");
    const link = document.createElement("a");
    link.href = "#";
    link.classList.add("text-primary");
    link.classList.add("font-semibold");
    link.innerText = title;
    div.appendChild(link);
    if (date) {
      const paragraph = document.createElement("p");
      paragraph.classList.add("pl-4");
      paragraph.classList.add("font-small");
      paragraph.classList.add("text-redbrown");
      paragraph.innerText = date;
      div.appendChild(paragraph);
    }
    tabs.appendChild(div);
  });
};

const collapseElements = document.querySelectorAll("._collapse");
collapseElements.forEach((el) => {
  el.addEventListener("click", () => {
    collapseElements.forEach((col) => {
      col.classList.remove("_collapse-active");
    });
    el.classList.add("_collapse-active");
  });
});

const buttonLang = document.getElementById("btn_language");
const languageContainer = document.getElementById("container_language");
const languageWrapper = document.getElementById("wrapper_language");

buttonLang.addEventListener("click", () => {
  languageContainer.classList.add("_active-lang");
});

document.addEventListener("click", (event) => {
  if (languageContainer.contains(event.target) && !languageWrapper.contains(event.target)){
    languageContainer.classList.remove("_active-lang");
  };
})

const countersWrapper = document.querySelectorAll("._counters");
const speed = 200;

const updateCount = (wrapper, counter) => {
  const target = +wrapper.getAttribute("data-target");
  const count = +counter.innerText;
  const increment = target / speed;

  if (count < target){
    counter.innerText = Math.ceil(count + increment);
    setTimeout(() => updateCount(wrapper, counter), 10);
  } else {
    counter.innerText = target;
  };
}
const handleScroll = () => {
  countersWrapper.forEach(wrapper => {
    const count = wrapper.querySelector("._count");
    const rect = count.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0){
      updateCount(wrapper, count)
    }
  });
}

window.addEventListener("scroll", handleScroll);

handleScroll()