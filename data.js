const projects = [
  {
    "id": "powder",
    "title": "Powder Flowability Test Bench",
    "name": "Powder Flowability Test Bench",
    "org": "UEMF · Advanced Manufacturing Lab",
    "category": "Manufacturing",
    "tools": "CATIA V5 / Fusion 360 CAM / Haas VF-2 / FDM & SLS",
    "intro": "I designed and fabricated a powder-flowability test bench during my manufacturing-lab internship, using ASTM B213 as a reference.",
    "challenge": "The assignment brought together apparatus design, machining and additive prototyping in one physical bench.",
    "process": [
      "I developed the CAD in CATIA V5, working through the component geometry and assembly interfaces.",
      "I prepared CAM in Fusion 360 and used the Haas VF-2, a three-axis CNC mill, to machine components.",
      "FDM and SLS prototyping supported the fabrication work, taking the assignment beyond the CAD model."
    ],
    "result": "A fabricated test bench supported by CAD/CAM work. The project was designed with reference to ASTM B213; it is not presented as independently certified.",
    "shape": "tester"
  },
  {
    "id": "aerospace",
    "title": "Fuselage Structural Design & Optimization",
    "name": "Fuselage Structural Design & Optimization",
    "org": "EMAN Aerospace · Academic competition",
    "category": "Simulation",
    "tools": "Parametric CAD / Structural calculations / Static & modal FEA",
    "intro": "I led a team of six students on a fuselage-section design project for the EMAN Aerospace competition.",
    "challenge": "We needed to explore weight reduction while understanding how changes to the structure affected its mechanical behavior.",
    "process": [
      "I coordinated the team’s design and calculation work.",
      "We built parametric CAD and studied the fuselage section through structural calculations and static and modal FEA.",
      "We iterated the geometry to explore the trade-offs between mass and structural behavior."
    ],
    "result": "Our team placed second among the external participating teams. The project gave us a design study linking CAD decisions to structural analysis.",
    "shape": "fuselage"
  },
  {
    "id": "connector",
    "title": "MQS Connector Locking Redesign",
    "name": "MQS Connector Locking Redesign",
    "org": "TE Connectivity · Product engineering internship",
    "category": "Design",
    "tools": "Parametric CAD / ANSYS Mechanical / Excel & VBA / DFM",
    "intro": "During my TE Connectivity internship, I worked on the external locking function of an automotive MQS connector.",
    "challenge": "The locking concept had to fit a limited space while accounting for insertion, retention, assembly and injection-molding constraints.",
    "process": [
      "I broke down the locking requirements and compared design concepts through functional analysis.",
      "I developed parametric CAD and assessed locking-beam deflection with mechanical calculations and ANSYS Mechanical FEA.",
      "I used Excel/VBA for engineering calculations and prepared a prototype validation test plan."
    ],
    "result": "The work produced redesign concepts, mechanical analysis and a validation plan. Final prototype test results are not claimed.",
    "shape": "connector",
    "note": "The case study focuses on the engineering method. Customer specifications and detailed manufacturing drawings are not shared."
  },
  {
    "id": "implant",
    "title": "Patient-Specific Cranial Implant & Mold",
    "name": "Patient-Specific Cranial Implant & Mold",
    "org": "Academic · Biomedical design",
    "category": "Design",
    "tools": "3D scan reconstruction / Surface modeling / Implant interfaces / Mold design",
    "intro": "This academic project started with cranial scan geometry and continued through an implant concept and a two-part mold.",
    "challenge": "The design had to follow irregular anatomical surfaces while providing clear implant boundaries and fixation interfaces.",
    "process": [
      "I reconstructed the cranial geometry from 3D scan data and worked on the mesh and surfaces.",
      "I modeled the implant boundaries and fixation interfaces.",
      "I designed a two-part mold for prototype manufacture, with prototyping and mechanical evaluation included in the project work."
    ],
    "result": "A patient-specific CAD concept and mold design for an academic engineering study. The work does not establish clinical readiness or medical-device approval.",
    "shape": "implant"
  },
  {
    "id": "valve",
    "title": "Industrial Valve Design & CAD Automation",
    "name": "Industrial Valve Design & CAD Automation",
    "org": "Guide Valve Limited · Mechanical design",
    "category": "Design",
    "tools": "CATIA V5 / SolidWorks / GD&T / BOM / Excel & VBA",
    "intro": "At Guide Valve, I design industrial valve assemblies and prepare the drawings and documentation needed to communicate them.",
    "challenge": "Large assemblies need consistent models, dimensions and parts lists. Different valve sizes also create repeated configuration work.",
    "process": [
      "I model industrial valves in CATIA V5 and SolidWorks, including assemblies with more than 150 components.",
      "I prepare manufacturing drawings, dimensional and functional tolerances, GD&T and bills of materials.",
      "I link parametric models to Excel and use VBA to generate size-specific configurations and export STEP files and drawings."
    ],
    "result": "Parametric valve assemblies, configuration tools and manufacturing documentation.",
    "shape": "valve",
    "note": "Proprietary models and dimensions are not published. The diagram is a conceptual illustration."
  },
  {
    "id": "flyson",
    "title": "Agricultural Drone Operations & Process Improvement",
    "name": "Agricultural Drone Operations & Process Improvement",
    "org": "Flyson · Process optimization internship",
    "category": "Process",
    "tools": "Workflow observation / Checklists / Maintenance / Odoo / Python",
    "intro": "At Flyson, I followed agricultural spraying work from the customer order to the last drone flight, including time in the field.",
    "challenge": "I looked for time and energy losses in the workflow, with particular attention to mission preparation.",
    "process": [
      "I observed spraying missions and reported where preparation and operating stages lost time or energy.",
      "I helped standardize stages with checklists, prepared a maintenance plan and took part in daily drone maintenance.",
      "I built an Odoo database for flight and customer tracking and worked on Python tools for flight and battery scheduling or analysis."
    ],
    "result": "The internship recorded a 60% reduction in mission-preparation time. The figure concerns preparation, rather than total flight time or energy use.",
    "shape": "drone",
    "note": "Customer information, flight records and operational maps remain private."
  },
  {
    "id": "robotics",
    "title": "Educational Robotics & STEM Kits",
    "name": "Educational Robotics & STEM Kits",
    "org": "MOBDIE · Freelance product design",
    "category": "Manufacturing",
    "tools": "Fusion 360 / Inkscape / Laser cutting / FDM / Ultimaker Cura",
    "intro": "For MOBDIE, I designed children’s STEM kits, including an electric walking robot, an electric water wheel and an Arduino project box.",
    "challenge": "The mechanical ideas had to become parts that could be fabricated and assembled for hands-on activities.",
    "process": [
      "I developed the concepts and CAD, working through the mechanisms and component interfaces.",
      "I prepared DXF layouts for laser cutting and parts for FDM printing, using Inkscape and Ultimaker Cura alongside Fusion 360.",
      "I fabricated and assembled functional prototypes to take the kits beyond the digital design."
    ],
    "result": "Functional educational prototypes and the CAD and fabrication layouts behind them.",
    "shape": "robot"
  },
  {
    "id": "exchanger",
    "title": "Shell & Tube Heat Exchanger Sizing",
    "name": "Shell & Tube Heat Exchanger Sizing",
    "org": "Academic · Thermal engineering",
    "category": "Simulation",
    "tools": "Heat-duty calculation / LMTD & NTU / Pressure drop / Excel",
    "intro": "For this thermal-engineering project, I sized a shell-and-tube heat exchanger and built an Excel workbook to automate the calculations.",
    "challenge": "Heat-transfer requirements had to be considered alongside hydraulic losses and the exchanger geometry.",
    "process": [
      "I calculated heat duty and used LMTD and NTU methods for thermal sizing.",
      "I evaluated pressure drops and considered baffle pitch with reference to TEMA guidance.",
      "I developed an Excel workbook to automate the sizing calculations."
    ],
    "result": "A thermal and hydraulic sizing study with an Excel calculation tool. TEMA was a design reference, rather than a claim of independently verified compliance.",
    "shape": "exchanger"
  },
  {
    "id": "bender",
    "title": "Tube Bending Machine Design",
    "name": "Tube Bending Machine Design",
    "org": "Academic · Machine design",
    "category": "Design",
    "tools": "Functional analysis / Kinematic synthesis / Structural sizing / DFM",
    "intro": "This project covered a tube-bending machine from its required functions to the mechanism and supporting frame.",
    "challenge": "I needed to connect the bending motion with an architecture that could be sized and considered for manufacture.",
    "process": [
      "I carried out functional analysis and developed the machine architecture.",
      "I worked through the mechanism kinematics and the structural sizing of the frame.",
      "I considered actuation, part manufacture and assembly as the design developed."
    ],
    "result": "A machine-design study covering the mechanism, frame and manufacturing considerations. It is presented as design work; physical machine performance has not been established.",
    "shape": "bender"
  },
  {
    "id": "airfoil",
    "title": "NACA 2412 vs. NACA 0012",
    "name": "NACA 2412 vs. NACA 0012",
    "org": "Academic · Aerodynamic modeling",
    "category": "Simulation",
    "tools": "MATLAB / Numerical modeling / Lift & drag coefficients",
    "intro": "I used MATLAB to compare the aerodynamic coefficients of a cambered NACA 2412 profile and a symmetric NACA 0012 profile.",
    "challenge": "The aim was to examine how the two profiles behaved as the angle of attack changed.",
    "process": [
      "I developed numerical work in MATLAB to evaluate lift and drag coefficients.",
      "I compared the coefficients across angles of attack.",
      "I plotted the results to examine the differences between the two profiles."
    ],
    "result": "An academic numerical comparison of two airfoils. The results are model-based, without experimental validation.",
    "shape": "airfoil"
  },
  {
    "id": "moody",
    "title": "Moody Diagram in MATLAB",
    "name": "Moody Diagram in MATLAB",
    "org": "Academic · Computational fluid flow",
    "category": "Simulation",
    "tools": "MATLAB / Fixed-point iteration / Turbulent flow",
    "intro": "I developed a Moody diagram from scratch in MATLAB, using an iterative method to solve turbulent-flow equations.",
    "challenge": "The task was to turn an implicit flow calculation into a numerical procedure and a readable diagram.",
    "process": [
      "I formulated the turbulent-flow calculation for an iterative solution.",
      "I implemented a fixed-point method in MATLAB.",
      "I used the numerical calculations to construct the Moody diagram."
    ],
    "result": "A MATLAB implementation connecting fluid-flow equations, iteration and engineering visualization.",
    "shape": "moody"
  },
  {
    "id": "stirling",
    "title": "Gamma Stirling Engine Thermal Analysis",
    "name": "Gamma Stirling Engine Thermal Analysis",
    "org": "Academic · Thermodynamics",
    "category": "Simulation",
    "tools": "Parametric CAD / Theoretical P–V cycle / Thermal calculations",
    "intro": "I modeled a Gamma Stirling engine and studied its theoretical thermal cycle.",
    "challenge": "The project connected the engine geometry with the pressure-volume cycle used to describe heat-to-work conversion.",
    "process": [
      "I developed a parametric CAD model of the engine.",
      "I carried out theoretical P–V-cycle calculations.",
      "I evaluated thermal-to-mechanical conversion through the cycle analysis."
    ],
    "result": "An engine CAD study and theoretical thermal analysis. The work does not claim measured power or efficiency.",
    "shape": "stirling"
  }
];
const illustrations={
 moody:'<path d="M90 50v220h330M110 90c40 120 100 145 290 145M110 120c40 90 100 100 290 100M110 150c40 40 100 45 290 45M110 180l110-100"/><path d="M90 120h330M90 195h330M190 50v220M290 50v220" stroke-dasharray="4 6"/>',
 tester:'<ellipse cx="250" cy="80" rx="90" ry="25"/><path d="M160 80l76 110v30h28v-30L340 80M145 260h210M165 120v140M335 120v140"/><ellipse cx="250" cy="244" rx="50" ry="12"/><path d="M200 244v35h100v-35"/>',
 fuselage:'<ellipse cx="120" cy="170" rx="45" ry="80"/><ellipse cx="370" cy="130" rx="45" ry="80"/><path d="M120 90l250-40M120 250l250-40M75 170l250-40M165 170l250-40"/><ellipse cx="200" cy="157" rx="45" ry="80"/><ellipse cx="285" cy="143" rx="45" ry="80"/>',
 connector:'<path d="M140 110l180-30 90 65-180 35zM140 110v110l90 60V180M230 280l180-35V145M180 126v40l30 20v-50M275 165v80l95-18v-80M300 183l45-9v27l-45 9z"/>',
 implant:'<path d="M150 260c-55-55-50-155 15-190 85-45 175-5 190 60 10 45-10 62-25 90l-45 15-15 45M165 115c45-35 95-30 125-5l-10 85-80 15z"/><path d="M180 135l90 45M175 165l90-25M210 112l30 89" stroke-dasharray="4 5"/>',
 valve:'<ellipse cx="150" cy="190" rx="30" ry="60"/><ellipse cx="350" cy="190" rx="30" ry="60"/><path d="M150 130h200M150 250h200M215 130V85h70v45M250 85V50M195 50h110"/><circle cx="250" cy="190" r="45"/><path d="M215 160l70 60M215 220l70-60"/>',
 drone:'<path d="M210 140h80v65h-80zM210 155l-80-55M290 155l80-55M210 190l-80 55M290 190l80 55M220 205l-20 45M280 205l20 45"/><ellipse cx="130" cy="100" rx="52" ry="12"/><ellipse cx="370" cy="100" rx="52" ry="12"/><ellipse cx="130" cy="245" rx="52" ry="12"/><ellipse cx="370" cy="245" rx="52" ry="12"/>',
 robot:'<rect x="195" y="105" width="110" height="90" rx="8"/><circle cx="225" cy="140" r="10"/><circle cx="275" cy="140" r="10"/><path d="M225 175h50M250 105V70M195 145l-50 45 30 30M305 145l50 45-30 30M220 195l-35 55 30 20M280 195l35 55-30 20"/><circle cx="250" cy="65" r="6"/>',
 exchanger:'<rect x="100" y="115" width="300" height="115" rx="50"/><path d="M140 135h220M140 155h220M140 175h220M140 195h220M140 215h220M180 115V75h35v40M290 230v40h35v-40M190 125v85M250 140v80M310 125v85"/>',
 bender:'<path d="M125 260h250l-30-110H160zM160 150V100h180v50M180 170v70M320 170v70M120 100h130c45 0 60-25 60-65"/><circle cx="250" cy="105" r="35"/><path d="M250 105l95-40"/>',
 airfoil:'<path d="M75 180c80-100 180-55 350 0-120-5-290 45-350 0zM75 235c95-65 240-35 350 0-110 30-255 50-350 0z"/><path d="M70 85h340M70 105h340M390 75l20 10-20 10" stroke-dasharray="5 6"/>',
 stirling:'<rect x="150" y="90" width="65" height="150" rx="10"/><rect x="290" y="135" width="65" height="105" rx="10"/><path d="M160 160h45M182 160V60h110M300 195h45M322 195V80M215 220h75M125 260h255"/><circle cx="300" cy="70" r="40"/><circle cx="300" cy="70" r="6"/>'
};
function drawing(p){return `<svg viewBox="0 0 500 320" aria-hidden="true"><g fill="none" stroke="#496254" stroke-width="1.5" stroke-linejoin="round">${illustrations[p.shape]}</g><path d="M60 285h380M60 280v10M440 280v10" fill="none" stroke="#496254" stroke-width=".6" stroke-dasharray="4 4"/></svg>`;}
const courses=[
 {year:'2022–2023',title:'Preparatory programme · Year 1',status:'Academic record',modules:['Algebra 1 & 2','Analysis 1 & 2','Point mechanics','Optics','General chemistry','Solution chemistry','Mineral chemistry','Organic chemistry','Applied thermodynamics','General thermodynamics','Computer science 1','Mathematics 1 & 2','Physical sciences 1 & 2','Languages & communication 1 & 2','English','French','Spanish','Sport']},
 {year:'2023–2024',title:'Preparatory programme · Year 2',status:'Academic record',modules:['Algebra 3 & 4','Analysis 4','Mathematics 4','Probability','Technical drawing','Electrokinetics','Electromagnetism 1 & 2','Electronics','Materials','Fluid mechanics','Solid mechanics','Strength of materials (RDM)','Vibrations','Computer science 2 & 3','Computer-aided design (CAD)','Engineering sciences & techniques 2','Physical sciences 4, 5 & 6','Engineering role & languages','Projects','Euromed culture','English','Spanish']},
 {year:'2024–2025',title:'Engineering cycle · Year 1',status:'Academic record',modules:['Computer-aided design','Materials science & metallurgy','Digital culture','Mechanical manufacturing & metrology','Engineering sciences','Engineering statistics & statistical process control','Electrical machines','Fluid mechanics','Mechanics of materials & machine components','Systems & measurements','Heat transfer','Thermal exchange','Languages & communication 1 & 2','Culture','English','Spanish']},
 {year:'2025–2026',title:'Engineering cycle · Year 2',status:'Academic record',modules:['Fluid dynamics','Computer-aided manufacturing','Engineering design 1: guidance & motion transformation','Introduction to artificial intelligence','Thermal machines','Sheet metal & forging','Entrepreneurship & business management','Additive manufacturing 1 & design of experiments','Project & production management','Engineering design 2: hydraulics & pneumatics','Numerical methods for engineers & finite element method','Systems theory','Languages & communication 2 & 4','English 3 & 4','Spanish 3 & 4']},
 {year:'2026–2027',title:'Engineering cycle · Year 3',status:'Planned / in progress · no grades provided',modules:['Vibration analysis','Control & servo systems','Non-destructive testing & surface engineering','Employment skills: communication & human resources','Additive manufacturing 2','Industrial predictive maintenance','Integrative project','Languages & communication 5','English','Spanish']}
];

const projectPhotos={
  "connector": [
    {
      "file": "te-internship.jpeg",
      "title": "TE Connectivity internship",
      "caption": "In the industrial environment during my TE Connectivity internship.",
      "width": 960,
      "height": 1280
    },
    {
      "file": "te-material-storage.jpeg",
      "title": "Manufacturing parts in storage",
      "caption": "Trays of manufacturing parts photographed during the TE internship, providing context for the production environment.",
      "width": 960,
      "height": 1280
    },
    {
      "file": "te-material-granules.jpeg",
      "title": "Manufacturing materials",
      "caption": "Material granules photographed during the TE internship; shown as process context rather than a claimed material specification.",
      "width": 960,
      "height": 1280
    },
    {
      "file": "te-creo-assembly.png",
      "title": "Connector assembly in Creo",
      "caption": "A Creo assembly screenshot showing component placement in the MQS connector model.",
      "width": 1300,
      "height": 700
    }
  ],
  "powder": [
    {
      "file": "uemf-machined-part.jpeg",
      "title": "CNC machining in practice",
      "caption": "A machined welcome/logo piece from UEMF laboratory work. This is related machining work, not the ASTM B213 tester.",
      "width": 899,
      "height": 1599
    },
    {
      "file": "uemf-recoater.webp",
      "title": "Additive-manufacturing lab context",
      "caption": "A recoater in the UEMF lab photo collection. Shown as supporting laboratory context, rather than as a component of the powder-flowability tester.",
      "width": 607,
      "height": 808
    }
  ],
  "robotics": [
    {
      "file": "mobdie-walking-robot.webp",
      "title": "Walking robot prototype",
      "caption": "The assembled walking robot brings the laser-cut structure and mechanical drive together in a physical kit.",
      "width": 1080,
      "height": 1440
    },
    {
      "file": "mobdie-walking-mechanism.webp",
      "title": "A closer look at the mechanism",
      "caption": "The side view shows the linkage and leg assembly behind the walking motion, alongside the fabricated frame.",
      "width": 1080,
      "height": 1440
    },
    {
      "file": "mobdie-water-wheel.webp",
      "title": "Electric water-wheel prototype",
      "caption": "The wheel, supports and drive assembled on the bench. This prototype connects the mechanism design to parts made for assembly.",
      "width": 1080,
      "height": 1440
    },
    {
      "file": "mobdie-kit-components.webp",
      "title": "From parts to an assembly",
      "caption": "Laser-cut pieces and small components laid out before assembly: the intermediate step between the CAD layout and the finished kit.",
      "width": 1080,
      "height": 1440
    },
    {
      "file": "mobdie-laser-cutting.webp",
      "title": "Fabrication in the workshop",
      "caption": "Laser cutting in the MOBDIE prototyping photo collection, showing the fabrication stage used to turn component layouts into parts.",
      "width": 1080,
      "height": 1440
    }
  ],
  "implant": [
    {
      "file": "uemf-cranial-model.webp",
      "title": "Related cranial model",
      "caption": "A physical cranial model from the UEMF laboratory photo collection. It provides anatomical-model context; the implant and split mold are not shown here.",
      "width": 1080,
      "height": 1440
    }
  ]
};
