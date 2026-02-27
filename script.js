// ===============================
// GLOBAL PRODUCT SEARCH ENGINE
// ===============================

const globalSearchDatabase = [

  // -------- RF PRODUCTS --------
  { name: "RF Signal Generator", keywords: ["izt s1000", "s1010", "signal generator"], url: "rf-products.html#rf-s1000" },
  { name: "Satellite Link Emulator", keywords: ["c3040", "satellite emulator"], url: "rf-products.html#rf-c3040" },
  { name: "IZT R5060 Monitoring Receiver", keywords: ["r5060", "monitoring receiver"], url: "rf-products.html#rf-r5060" },
  { name: "K Band LNA", keywords: ["k band", "lna 18ghz"], url: "rf-products.html#rf-k-lna" },
  { name: "WR-10X Weather Radar", keywords: ["wr10x", "weather radar"], url: "rf-products.html#rf-wr10x" },

  // -------- TIME PRODUCTS --------
  { name: "Active Hydrogen Maser VCH-1003M", keywords: ["vch1003m", "hydrogen maser"], url: "time-products.html#time-vch1003m" },
  { name: "Passive Hydrogen Maser VCH-1008M", keywords: ["vch1008m", "maser passive"], url: "time-products.html#time-vch1008m" },
  { name: "Frequency Comparator VCH-315M", keywords: ["vch315m", "frequency comparator"], url: "time-products.html#time-vch315m" },
  { name: "Rubidium Oscillator VCH-311", keywords: ["vch311", "rubidium oscillator"], url: "time-products.html#time-vch311" },
  { name: "OCXO", keywords: ["oven oscillator"], url: "time-products.html#time-ocxo" },
  { name: "TCXO", keywords: ["temperature oscillator"], url: "time-products.html#time-tcxo" },


  // -------- OPTICS & PHOTONICS PRODUCTS --------
  { name: "Tapered Amplifier", keywords: ["tapered amplifier", "semiconductor optical amplifier"], url: "optics-products.html#optics-tapered" },
  { name: "Single Frequency Laser Diode", keywords: ["single frequency laser", "dfb", "dbr laser"], url: "optics-products.html#optics-sfld" },
  { name: "Gain Chip", keywords: ["gain chip", "external cavity laser"], url: "optics-products.html#optics-gainchip" },
  { name: "Single Mode Laser Diode", keywords: ["single mode laser diode"], url: "optics-products.html#optics-smld" },
  { name: "Multimode Laser Diode", keywords: ["multimode laser diode"], url: "optics-products.html#optics-mmld" },
  { name: "PLANEX 1550 nm Laser", keywords: ["planex", "1550 laser diode"], url: "optics-products.html#optics-planex" },
  { name: "ORION 1550 nm Laser Module", keywords: ["orion laser"], url: "optics-products.html#optics-orion" },
  { name: "GRANDE 1550 nm Laser Module", keywords: ["grande laser"], url: "optics-products.html#optics-grande" },
  { name: "Single Bar Diode Laser", keywords: ["single bar diode"], url: "optics-products.html#optics-singlebar" },
  { name: "Vertical Diode Laser", keywords: ["vertical diode laser"], url: "optics-products.html#optics-vertical" },
  { name: "Horizontal Diode Laser Array", keywords: ["horizontal diode"], url: "optics-products.html#optics-horizontal" },
  { name: "Fiber Coupled Laser", keywords: ["fiber coupled laser"], url: "optics-products.html#optics-fiber" },
  { name: "DPSS Laser LQ-527-12", keywords: ["dpss laser", "527 nm laser"], url: "optics-products.html#optics-dpss" },
  { name: "FC1500-Quantum Laser System", keywords: ["fc1500", "quantum laser comb"], url: "optics-products.html#optics-fc1500" },
  { name: "Optical Reference System ORS", keywords: ["ors", "optical reference system"], url: "optics-products.html#optics-ors" },
  { name: "Ultrastable Microwave System UMS", keywords: ["ums", "ultrastable microwave"], url: "optics-products.html#optics-ums" },
  { name: "Femtosecond Fiber Laser 1560 nm", keywords: ["femtosecond 1560"], url: "optics-products.html#optics-femto1560" },
  { name: "Femtosecond Fiber Laser 1040 nm", keywords: ["femtosecond 1040", "520 nm laser"], url: "optics-products.html#optics-femto1040" },
  { name: "ELMO Femtosecond Laser", keywords: ["elmo laser"], url: "optics-products.html#optics-elmo" },
  { name: "YLMO Seed Laser", keywords: ["ylmo seed"], url: "optics-products.html#optics-ylmo" },
  { name: "TeraSmart THz System", keywords: ["terasmart", "terahertz system"], url: "optics-products.html#optics-terasmart" },

  // -------- DETECTION SYSTEMS --------
{ 
  name: "IZT R5509 VHF Radio Direction Finder", 
  keywords: ["r5509", "vhf direction finder", "radio df", "izt r5509"], 
  url: "detection-systems.html#r5509" 
},

{ 
  name: "OHB GIDAS", 
  keywords: ["gidas", "gnss interference detection", "gps jamming detection", "ohb gidas"], 
  url: "detection-systems.html#gidas" 
},

{ 
  name: "OHB NavTD M23", 
  keywords: ["navtd m23", "gnss spoofing", "navigation warfare", "jamming simulator"], 
  url: "detection-systems.html#navtdm23" 
},

{ 
  name: "Eclipse C-UAS System", 
  keywords: ["eclipse cuas", "counter uas", "drone detection system", "oscilion eclipse"], 
  url: "detection-systems.html#eclipse" 
},

{ 
  name: "Oscilion Astor IV", 
  keywords: ["astor iv", "jamming system", "radar spectrum jamming", "oscilion astor"], 
  url: "detection-systems.html#astoriv" 
},

// -------- RF SOFTWARE TOOLS --------
{ 
  name: "GRASP", 
  keywords: ["grasp software", "reflector antenna design", "physical optics po", "ticra grasp"], 
  url: "rf-software.html#grasp" 
},

{ 
  name: "ESTEAM", 
  keywords: ["esteam software", "electromagnetic scattering", "radar cross section", "rcs analysis"], 
  url: "rf-software.html#esteam" 
},

{ 
  name: "CHAMP 3D", 
  keywords: ["champ 3d", "waveguide design", "feed analysis software", "ticra champ"], 
  url: "rf-software.html#champ3d" 
},

{ 
  name: "QUPES", 
  keywords: ["qupes", "reflectarray design", "frequency selective surface", "fss design"], 
  url: "rf-software.html#qupes" 
},

{ 
  name: "POS", 
  keywords: ["pos software", "shaped reflector design", "arrayfed reflector", "hts antenna design"], 
  url: "rf-software.html#pos" 
},

{ 
  name: "UQ", 
  keywords: ["uncertainty quantification", "uq antenna design", "confidence interval antenna"], 
  url: "rf-software.html#uq" 
},

{ 
  name: "Transfinite - Visualyse Professional", 
  keywords: ["visualyse professional", "satellite interference analysis", "gso non-gso simulation"], 
  url: "rf-software.html#visualyse-pro" 
},

{ 
  name: "Transfinite - Visualyse GSO V3", 
  keywords: ["visualyse gso v3", "gso coordination analysis", "orbital separation study"], 
  url: "rf-software.html#visualyse-gso" 
},

{ 
  name: "Transfinite - EPFD", 
  keywords: ["epfd calculation", "non-gso interference", "itu article 22.5c.1"], 
  url: "rf-software.html#epfd" 
},

];

// ===============================
// SEARCH FUNCTION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("globalSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

      e.preventDefault();
      const query = searchInput.value.toLowerCase().trim();

      if (!query) return;

      const result = globalSearchDatabase.find(product => {
  const fullText = product.name.toLowerCase() + " " + product.keywords.join(" ");
  return fullText.includes(query);
});

      if (result) {
        window.location.href = result.url;
      } else {
        alert("No matching product found.");
      }
    }

  });

});

// Highlight after page load
window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.classList.add("highlight-product");
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
});