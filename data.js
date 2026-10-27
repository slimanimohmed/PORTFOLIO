const projects = [
  {
    "id": "powder",
    "title": "UEMF Manufacturing Lab — Design to Production",
    "name": "UEMF Manufacturing Lab — Design to Production",
    "org": "UEMF · Advanced Manufacturing Lab",
    "category": "Manufacturing",
    "tools": "CATIA V5 / Fusion 360 CAM / CNC / FDM & SLS / Tooling / Maintenance",
    "intro": "During my placement at the UEMF Advanced Manufacturing Lab, I worked across the engineering-to-production chain: design, CAD/CAM, CNC machining, additive prototyping, tooling and workshop maintenance.",
    "challenge": "Making parts and experimental devices work in practice requires more than a CAD model. It means preparing manufacturable geometry, selecting appropriate processes, checking equipment and refining the final part.",
    "process": [
      "I designed and fabricated a powder-flowability test bench with reference to ASTM B213, connecting apparatus geometry with practical fabrication.",
      "I prepared machining work using Fusion 360 CAM and worked with CNC equipment, mold machining, manual finishing and additive prototyping. The lab photo collection also documents machining setup, CAM toolpaths and SLS post-processing.",
      "I designed an interlocking-brick mold and a spherical-part mold, supported tooling planning and worked on preventive maintenance of the workshop air compressor.",
      "I gained broader hands-on exposure to laboratory measurement, instrumentation and prototyping workflows; these are practical skills and not separate industrial product-validation claims."
    ],
    "result": "Fabricated and machined laboratory parts, a powder-flowability apparatus, molds and documented practical exposure to machining, additive manufacturing, equipment maintenance and measurement. The value I bring is being able to consider fabrication and testing when making design decisions.",
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
    "result": "Redesign concepts supported by mechanical calculations, ANSYS analysis and a prototype validation plan.",
    "shape": "connector",
    "note": "From functional requirements to CAD concepts, mechanical analysis and validation planning."
  },
  {
    "id": "implant",
    "title": "Patient-Specific Cranial Implant & Mold",
    "name": "Patient-Specific Cranial Implant & Mold",
    "org": "Academic · Biomedical design",
    "category": "Design",
    "tools": "3D scan reconstruction / Surface modeling / Implant interfaces / Mold design",
    "intro": "I reconstructed cranial geometry from a 3D scan and developed an implant and split-mold concept, focusing on fitting irregular anatomy and planning the interface between the designed part and surrounding bone.",
    "challenge": "The design had to follow irregular anatomical surfaces while providing clear implant boundaries and fixation interfaces.",
    "process": [
      "I worked with imported scan geometry, mesh cleanup and surface reconstruction to establish the cranial defect boundary.",
      "I designed the implant outline and fixation-interface concept in CAD, checking how the geometry follows the reconstructed anatomical surface.",
      "I developed a split-mold concept for prototype manufacture and mechanical evaluation planning. The work was an academic engineering study rather than a certified medical product."
    ],
    "result": "A digital cranial reconstruction, implant geometry and mold-design concept, demonstrating complex-surface CAD, interface reasoning and design-for-prototyping.",
    "shape": "implant"
  },
  {
    "id": "valve",
    "title": "Industrial Valve Design & CAD Automation",
    "name": "Industrial Valve Design & CAD Automation",
    "org": "Guide Valve Limited · Mechanical design",
    "category": "Design",
    "tools": "CATIA V5 / SolidWorks / GD&T / BOM / Excel & VBA",
    "intro": "At Guide Valve, I designed industrial valve assemblies and prepared the drawings and documentation needed to communicate them.",
    "challenge": "Large assemblies need consistent models, dimensions and parts lists. Different valve sizes also create repeated configuration work.",
    "process": [
      "I modeled industrial valves in CATIA V5 and SolidWorks, including assemblies with more than 150 components.",
      "I prepared manufacturing drawings, dimensional and functional tolerances, GD&T and bills of materials.",
      "I linked parametric models to Excel and used VBA to generate size-specific configurations and export STEP files and drawings."
    ],
    "result": "Parametric valve assemblies, configuration tools and manufacturing documentation.",
    "shape": "valve",
    "note": "Mechanical design and CAD automation · February–October 2026."
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
    "result": "The internship study estimated a 60% reduction in field-preparation time through clearer pre-mission coordination and checklists.",
    "shape": "drone",
    "note": "Field operations, maintenance planning and mission-preparation workflows."
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
    "result": "A thermal and hydraulic sizing study, using TEMA as a design reference and an Excel workbook to iterate the calculations.",
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
    "result": "A complete machine-design study covering the three-roll mechanism, component sizing, supporting frame and CAD assembly.",
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
    "result": "A MATLAB study comparing lift, drag and aerodynamic efficiency across angle of attack and Reynolds number.",
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
    "result": "A Gamma Stirling CAD assembly and theoretical thermal-cycle study linking the mechanism to heat-to-work conversion.",
    "shape": "stirling"
  },
  {
    "id": "metallic",
    "title": "Steel Platform & Access Structure",
    "name": "Steel Platform & Access Structure",
    "org": "Structural CAD · Engineering project",
    "category": "Design",
    "tools": "3D CAD / Structural assembly layout / Access & guardrails",
    "intro": "I developed a three-dimensional CAD layout of a raised steel platform with a roof and an external access staircase.",
    "challenge": "The design brings together the supporting columns, braces, platform, roof, stair flights, landing and safety railings within one coordinated structural layout.",
    "process": [
      "I modeled the main structural arrangement, including supports and bracing.",
      "I integrated the raised platform, stairs, landing and railings into the CAD assembly.",
      "I reviewed the arrangement and component interfaces in an isometric view."
    ],
    "result": "A coordinated structural CAD model showing the overall platform and access arrangement. The provided rendering does not establish that load calculations, code checks or fabrication were completed.",
    "shape": "structure"
  }
];
const courses = [
  {
    "year": "2022–2023",
    "title": "Preparatory programme · Year 1",
    "status": "Academic record",
    "modules": [
      "Algebra 1 & 2",
      "Analysis 1 & 2",
      "Point mechanics",
      "Optics",
      "General chemistry",
      "Solution chemistry",
      "Mineral chemistry",
      "Organic chemistry",
      "Applied thermodynamics",
      "General thermodynamics",
      "Computer science 1",
      "Mathematics 1 & 2",
      "Physical sciences 1 & 2",
      "Languages & communication 1 & 2",
      "English",
      "French",
      "Spanish",
      "Sport"
    ]
  },
  {
    "year": "2023–2024",
    "title": "Preparatory programme · Year 2",
    "status": "Academic record",
    "modules": [
      "Algebra 3 & 4",
      "Analysis 4",
      "Mathematics 4",
      "Probability",
      "Technical drawing",
      "Electrokinetics",
      "Electromagnetism 1 & 2",
      "Electronics",
      "Materials",
      "Fluid mechanics",
      "Solid mechanics",
      "Strength of materials (RDM)",
      "Vibrations",
      "Computer science 2 & 3",
      "Computer-aided design (CAD)",
      "Engineering sciences & techniques 2",
      "Physical sciences 4, 5 & 6",
      "Engineering role & languages",
      "Projects",
      "Euromed culture",
      "English",
      "Spanish"
    ]
  },
  {
    "year": "2024–2025",
    "title": "Engineering cycle · Year 1",
    "status": "Academic record",
    "modules": [
      "Computer-aided design",
      "Materials science & metallurgy",
      "Digital culture",
      "Mechanical manufacturing & metrology",
      "Engineering sciences",
      "Engineering statistics & statistical process control",
      "Electrical machines",
      "Fluid mechanics",
      "Mechanics of materials & machine components",
      "Systems & measurements",
      "Heat transfer",
      "Thermal exchange",
      "Languages & communication 1 & 2",
      "Culture",
      "English",
      "Spanish"
    ]
  },
  {
    "year": "2025–2026",
    "title": "Engineering cycle · Year 2",
    "status": "Academic record",
    "modules": [
      "Fluid dynamics",
      "Computer-aided manufacturing",
      "Engineering design 1: guidance & motion transformation",
      "Introduction to artificial intelligence",
      "Thermal machines",
      "Sheet metal & forging",
      "Entrepreneurship & business management",
      "Additive manufacturing 1 & design of experiments",
      "Project & production management",
      "Engineering design 2: hydraulics & pneumatics",
      "Numerical methods for engineers & finite element method",
      "Systems theory",
      "Languages & communication 2 & 4",
      "English 3 & 4",
      "Spanish 3 & 4"
    ]
  },
  {
    "year": "2026–2027",
    "title": "Engineering cycle · Year 3",
    "status": "Planned / in progress · no grades provided",
    "modules": [
      "Vibration analysis",
      "Control & servo systems",
      "Non-destructive testing & surface engineering",
      "Employment skills: communication & human resources",
      "Additive manufacturing 2",
      "Industrial predictive maintenance",
      "Integrative project",
      "Languages & communication 5",
      "English",
      "Spanish"
    ]
  }
];
const projectPhotos = {
  "metallic": [{"file":"metallic-structure.svg","title":"Elevated steel structure · CAD representation","caption":"A simplified illustration of the raised steel platform, roof, access staircase and railings shown in the supplied CAD screenshot.","width":813,"height":636}],
  "powder": [
    {"file":"uemf-sls-postprocessing.jpg","title":"Hands-on SLS post-processing","caption":"Working with equipment used after polymer powder-bed printing. This documents practical post-processing exposure, not a claim of independent machine qualification.","width":1200,"height":1600},
    {
      "file": "lab-machined-cup.webp",
      "title": "Precision machining in the lab",
      "caption": "A machined metal component from the UEMF laboratory: the practical side of turning CAD geometry into a physical part.",
      "width": 1200,
      "height": 1600
    },
    {
      "file": "lab-cnc-part.webp",
      "title": "CNC machining",
      "caption": "Machined detail from the UEMF workshop, where I developed my CAD, CAM and fabrication skills.",
      "width": 899,
      "height": 1599
    },
    {
      "file": "lab-machine-maintenance.webp",
      "title": "Inside the workshop equipment",
      "caption": "The mechanical and pneumatic systems inside laboratory equipment during workshop work.",
      "width": 1200,
      "height": 1600
    }
  ],
  "implant": [
    {"file":"cranial-implant-original.jpg","title":"Implant and cranial defect — original project CAD","caption":"My project CAD view showing a reconstructed skull, cranial opening and implant-interface concept. The image documents the design study, not a clinically validated implant.","width":1080,"height":1440},
    {
      "file": "cranial-model.webp",
      "title": "Working with anatomical geometry",
      "caption": "A physical cranial model in the UEMF laboratory, connecting irregular anatomical surfaces with hands-on prototyping.",
      "width": 1080,
      "height": 1440
    },
    {
      "file": "cranial-mold-practical.webp",
      "title": "Mold-making practical",
      "caption": "A split-mold practical in the UEMF laboratory, showing the mold cavity and the shaped component.",
      "width": 1080,
      "height": 1180
    },
    {
      "file": "cranial-mold-cad.webp",
      "title": "From surfaces to mold geometry",
      "caption": "Mold geometry on the laboratory workstation: considering the cavity, surrounding material and part separation.",
      "width": 1200,
      "height": 1600
    }
  ],
  "bender": [
    {
      "file": "bender-assembly.webp",
      "title": "Three-roll bending machine",
      "caption": "The final CAD assembly from our tube-bender design report, bringing the rollers, adjustment mechanism and supporting frame together.",
      "width": 719,
      "height": 781
    },
    {
      "file": "bender-shaft.webp",
      "title": "Drive and roller shaft",
      "caption": "The shaft assembly from the design study. Component interfaces and load transmission were part of the mechanical sizing work.",
      "width": 627,
      "height": 413
    },
    {
      "file": "bender-frame.webp",
      "title": "Supporting frame",
      "caption": "The frame geometry developed for the machine architecture, linking the roller arrangement to the supporting structure.",
      "width": 1006,
      "height": 670
    },
    {
      "file": "bender-adjustment.webp",
      "title": "Adjusting the roller position",
      "caption": "The screw-operated adjustment mechanism used to position the movable roller.",
      "width": 600,
      "height": 562
    }
  ],
  "stirling": [
    {
      "file": "stirling-assembly.webp",
      "title": "Gamma Stirling CAD assembly",
      "caption": "The CAD assembly from our academic presentation, showing the separate cylinders, connecting rods and flywheel mechanism.",
      "width": 1086,
      "height": 791
    },
    {
      "file": "stirling-cylinders.webp",
      "title": "Cylinder layout",
      "caption": "The modeled cylinder arrangement from the Stirling project presentation.",
      "width": 410,
      "height": 363
    }
  ],
  "exchanger": [
    {
      "file": "exchanger-thermal-duty.webp",
      "title": "Defining the thermal duty",
      "caption": "The hot-oil and cold-water streams from our sizing report, with their inlet and outlet temperatures and mass flow rates.",
      "width": 570,
      "height": 371
    },
    {
      "file": "exchanger-calculation.webp",
      "title": "Iterating the calculation",
      "caption": "An Excel calculation excerpt from the report, used to compare the assumed and calculated overall heat-transfer coefficients.",
      "width": 886,
      "height": 326
    }
  ],
  "airfoil": [
    {
      "file": "airfoil-lift.webp",
      "title": "Lift across angle of attack",
      "caption": "The MATLAB lift-coefficient comparison from our NACA 0012 and NACA 2412 report.",
      "width": 829,
      "height": 628
    },
    {
      "file": "airfoil-drag.webp",
      "title": "The drag trade-off",
      "caption": "The corresponding drag-coefficient curves from the same numerical study.",
      "width": 837,
      "height": 633
    },
    {
      "file": "airfoil-efficiency.webp",
      "title": "Comparing lift-to-drag ratio",
      "caption": "The calculated lift-to-drag ratios, including the maximum values identified in the academic model.",
      "width": 829,
      "height": 625
    }
  ],
  "valve": [
    {
      "file": "industrial-valve-reference.webp",
      "title": "Industrial valve hardware",
      "caption": "Industry reference photograph showing flanged valve construction.",
      "width": 1600,
      "height": 1063,
      "credit": "Heather Smith / The Alloy Valve Stockist · <a href=\"https://commons.wikimedia.org/wiki/File:Gate_valve.JPG\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\" target=\"_blank\" rel=\"noopener\">CC BY 3.0</a>. Resized and converted to WebP."
    }
  ],
  "flyson": [
    {
      "file": "agricultural-drone-reference.webp",
      "title": "Agricultural UAV equipment",
      "caption": "Industry reference photograph of an agricultural drone at an exhibition.",
      "width": 1600,
      "height": 1200,
      "credit": "Vis M · <a href=\"https://commons.wikimedia.org/wiki/File:Agricultural_drone,_Kerala_2023.jpg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> · <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>. Resized and converted to WebP; this image adaptation is shared under the same license."
    },
    {
      "file": "flyson-preparation-study.webp",
      "title": "Preparation-time study",
      "caption": "The before-and-after preparation-time comparison in my internship report. The proposed workflow combined location confirmation, a preparation checklist and a short field briefing; the report estimated a 60% reduction.",
      "width": 936,
      "height": 587
    }
  ],
  "moody": [
    {
      "file": "moody-reference.svg",
      "title": "Reading the Moody diagram",
      "caption": "Reference chart showing friction factor against Reynolds number and relative roughness—the engineering relationship explored in my MATLAB implementation.",
      "width": 1464,
      "height": 906,
      "credit": "S. Beck and R. Collins, University of Sheffield; SVG conversion by Marc Derumaux · <a href=\"https://commons.wikimedia.org/wiki/File:Moody_EN.svg\" target=\"_blank\" rel=\"noopener\">Wikimedia Commons</a> · <a href=\"https://creativecommons.org/licenses/by-sa/4.0/\" target=\"_blank\" rel=\"noopener\">CC BY-SA 4.0</a>. Original SVG, unchanged."
    }
  ],
  "connector": [
    {
      "file": "te-report-assembly.webp",
      "title": "The connector architecture",
      "caption": "The assembled MQS connector studied during the internship. The redesign focused on the locking function within this existing architecture.",
      "width": 1600,
      "height": 729
    },
    {
      "file": "te-report-exploded.webp",
      "title": "Understanding the interfaces",
      "caption": "The exploded view separates the carrier, terminal module, terminal and cover. This helped identify where the locking function could be integrated.",
      "width": 847,
      "height": 573
    },
    {
      "file": "te-report-fea.webp",
      "title": "Checking the concept numerically",
      "caption": "ANSYS Static Structural view of the model and normal elastic strain, supporting the preliminary stiffness assessment.",
      "width": 1292,
      "height": 683
    },
    {
      "file": "te-report-prototype.webp",
      "title": "Preparing a prototype",
      "caption": "Sliced toolpaths prepared for the module prototype and its geometric and assembly assessment.",
      "width": 1317,
      "height": 406
    }
  ],
  "aerospace": [
    {
      "file": "fuselage-cad.webp",
      "title": "Fuselage-section CAD",
      "caption": "The team’s fuselage-section model, showing the outer skin and internal structure. The CAD model was the basis for the structural study.",
      "width": 721,
      "height": 580
    },
    {
      "file": "fuselage-stress.webp",
      "title": "Static stress analysis",
      "caption": "Equivalent (von Mises) stress distribution used to examine load transfer through the modeled fuselage structure.",
      "width": 967,
      "height": 562
    },
    {
      "file": "fuselage-modal.webp",
      "title": "A closer look at a vibration mode",
      "caption": "A frame from the modal-analysis animation at 9.0564 Hz, showing the calculated vibration-mode shape.",
      "width": 1132,
      "height": 460
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
  ]
};
