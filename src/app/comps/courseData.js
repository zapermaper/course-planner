  // High School Credits Data 
  const hsSubjects = {English: [
    'English Language Arts', 'English 1', 'English 1 Advanced', 'English 1 Advanced - GT',
    'English 2', 'English 2 Advanced', 'English 2 Advanced - GT', 'English 3',
    'English 3 AP (AP Lang)', 'English 3 AP - GT', 'English 3 Dual Credit - Rhetoric',
    'English 4', 'English 4 AP (AP Lit)', 'GT English 4 - AP', 
    'GT Reading Writing Rhetoric OnRamps', 'Reading Writing Rhetoric and Reading Writing Rhetoric - OnRamps',
    'English 4 Dual Credit - Rhetoric', 'English 4 Dual Credit - World Literature', 
    'Creative/Imaginative Writing', 'Research and Technical Writing', 'Humanities', 
    'Independent Studies in English', 'Visual Media Analysis & Production', 'Literacy Essentials',
    'English Language Development & Acquisition (ELDA)', 'Academic Lit ESL I', 
    'Academic Lit ESL II', 'Academic Lit ESL III', 'Academic Literacy Lab 1', 
    'Academic Literacy Lab 2', 'Academic Literacy Lab 3', 'Language Science', 
    'Debate 1', 'Debate 2', 'Debate 3', 'Debate 4', 'Academic Decathlon 9', 
    'Academic Decathlon Honors', 'Journalism 1', 'Photojournalism', 
    'Adv. Journalism: Yearbook Production 1', 'Adv. Journalism: Yearbook Production 2',
    'Adv. Journalism: Yearbook Production 3', 'Adv. Journalism: Yearbook Production 4',
    'Adv. Journalism: Newspaper 1', 'Adv. Journalism: Newspaper 2', 
    'Adv. Journalism: Newspaper 3', 'Adv. Journalism: Newspaper 4', 'Broadcast Journalism'
  ],
  
  Math: [
    'Mathematics', 'Algebra 1', 'Algebra 1 - Advanced', 'Algebraic Reasoning', 'Geometry',
    'Geometry Advanced', 'Algebra 2', 'Algebra 2 Advanced', 'OnRamps College Algebra (Algebra 2)',
    'Precalculus', 'Precalculus - OnRamps', 'Precalculus - Dual Credit', 'Statistics', 
    'AP Statistics', 'OnRamps Statistics', 'Advanced Quantitative Reasoning - On-level and Dual Credit',
    'Calculus AB - AP', 'Calculus BC - AP', 'Calculus 3 - Dual Credit', 'Linear Algebra - Dual Credit',
    'Computer Science - AP', 'Engineering Mathematics', 'Accounting II', 'Financial Math', 
    'Manufacturing Engineering Tech II', 'Robotics II', 'Business Statistics Dual Credit',
    'Dual Credit Discrete Math'
  ],
  
  Science: [
    'Science', 'Biology', 'Biology - Advanced', 'GT Biology Advanced', 'Biology AP', 
    'OnRamps Biology', 'GT OnRamps Biology', 'GT Biology AP', 'Biology Dual Credit', 
    'Chemistry', 'Chemistry - Advanced', 'OnRamps Chemistry 1', 'GT OnRamps Chemistry', 
    'Chemistry - AP', 'Integrated Physics & Chemistry', 'GT OnRamps Chemistry 2', 
    'OnRamps Chemistry 2', 'Physics', 'Physics 1 Mechanics-OnRamps', 
    'Physics 2 Electricity and Magnetism - OnRamps', 'GT Physics 1 Mechanics - OnRamps',
    'GT Physics 2 Electricity and Magnetism - OnRamps', 'GT Physics C: Mechanics-AP-fall',
    'GT Physics C: Electricity & Magnetism - AP - Spring', 'Physics I: Algebra-based - AP',
    'Physics II: Algebra-based - AP', 'GT Physics I: Algebra -based - AP',
    'Physics C: Mechanics - AP (fall)', 'Biotechnology 1', 'Biotechnology 2', 
    'Advanced Animal Science', 'Astronomy', 'Geoscience - OnRamps',
    'Engineering Design and Problem Solving', 'Principles of Engineering', 'Environmental Systems',
    'Environmental Science - AP', 'GT Environmental Science AP', 'Forensic Science', 'Food Science',
    'Medical Microbiology', 'Pathophysiology', 'Anatomy & Physiology - Honors', 
    'Dual Credit Earth Systems Science', 'Earth Systems Science'
  ],
  
  Social_Studies: [
    'Social Studies', 'World Geography', 'Human Geography - AP', 'Human Geography - AP GT',
    'World History', 'World History - AP', 'World History Studies - AP GT', 'U.S. History',
    'U.S. History - AP', 'U.S. History - AP GT', 'U.S. History - Dual Credit', 
    'U.S. History 1490-1865 and Since 1865 - OnRamps', 'U.S. History 1490-1865 and Since 1865 - OnRamps GT',
    'U.S. Government and Politics - AP', 'U.S. Government', 'U.S. Government - Dual Credit',
    'GT U.S. Government and Politics AP', 'Texas Government - Dual Credit', 'Economics',
    'Macroeconomics - AP', 'Economics - Dual Credit', 'GT Macroeconomics - AP', 
    'Principles of Microeconomics - Dual Credit', 'Personal Financial Literacy and Economics',
    'Economics - OnRamps', 'Economics -OnRamps GT', 'European History - AP', 'Psychology',
    'Psychology - Advanced', 'Psychology - Dual Credit', 'Psychology - AP', 'Sociology',
    'Special Topics in Social Studies: Street Law', 'Ethnic Studies: African American Studies',
    'Ethnic Studies: Mexican American Studies', 'Personal Financial Literacy'
  ],
  
  World_Languages: [
    'LOTE Level 1', 'LOTE Level 2 - Basic Communication', 'LOTE Level 2 - Advanced',
    'LOTE Level 3', 'LOTE Level 3 - Advanced', 'Spanish 2 for Spanish Speakers',
    'Spanish 3 for Spanish Speakers', 'Spanish for Spanish Speakers 4', 'Spanish Literature - AP',
    'Honors Language Enrichment', 'AP Japanese Language and Culture', 'Latin - AP', 
    'AP Language and Culture'
  ],
  
  Fine_Arts: [
    'Art 1', 'Art 1 - ADV', 'Art 1: Digital Art', 'Art 1: Digital Art ADV', 'Design 1', 
    'Art 1: Foundation Studio Art 2-D Design', 'Art 1: Foundation Studio Art 2-D Design - Advanced',
    'Art 1: Foundation Studio Art 3-D Design', 'Art 1: Foundation Studio Art 3-D Design Advanced',
    'Art II: Drawing', 'Art II: Drawing ADV', 'Art II: Painting', 'Art II: Painting - ADV',
    'Art II: Ceramics', 'Art II: Ceramics ADV', 'Art II: Sculpture', 'Art II: Sculpture ADV',
    'Printmaking Advanced', 'Art II: Digital Art & Media', 'Art II: Digital Art & Media ADV',
    'Art II: Photography and Digital Media', 'Art II: Photography and Digital Media ADV',
    'Art III: Photography and Digital Media', 'Art III: Photography and Digital Media ADV',
    'Art III: Digital Art and Media 2', 'Art III: Digital Art and Media 2 ADV', 'Design 2',
    'Art III: Studio Art 2D Drawing and Painting', 'Art III: Studio Art 3D Sculpture and Ceramics',
    'Art V: Studio Art (2D and 3D) 4', 'Art History - AP', 'AP 2-D Art and Design Portfolio',
    'AP Drawing Portfolio', 'AP 3-D Art and Design Portfolio', 'Art Appreciation - Dual Credit'
  ],
  Fine_Arts_Dance: [
    'Dance 1', 'Dance 2', 'Dance 3', 'Dance 4', 'Pre-Drill Team (Dance 1)', 
    'Drill Team Prep (Dance 1)', 'Drill Team (Dance)', 'Drill Team Officers', 
    'C&W Dance Team Prep (Dance 1)', 'C&W Team (Dance)', 'Folklorico', 
    'Dance Wellness 1 - 4', 'Color Guard/Dance'
  ],
  
  Fine_Arts_Music: [
    'Symphonic Band 5', 'Symphonic Band 4', 'Symphonic Band 4 - Honors', 
    'Symphonic Band 3', 'Symphonic Band 3 - Honors', 'Symphonic Band 2', 
    'Symphonic Band 2 - Honors', 'Symphonic Band 1', 'Symphonic Band 1 - Honors', 
    'Stage/Jazz Band', 'Color Guard/Dance', 'Mariachi', 'Concert Choir', 
    'Concert Choir - Honors', 'Treble Choir', 'Treble Choir - Honors', 
    'Tenor/Bass Choir', 'Tenor/Bass Choir - Honors', 'Junior Varsity Choir', 
    'Junior Varsity Choir - Honors', 'A Capella Choir', 'A Capella Choir - Honors', 
    'Vocal Ensemble', 'Music Theory - AP', 'Music Appreciation', 
    'Symphony Orchestra (Varsity)', 'Symphony Orchestra Honors (Varsity)', 
    'Philharmonic Orchestra (Non-Varsity)', 'Philharmonic Orchestra Honors (Non-Varsity)', 
    'Concert Orchestra', 'Concert Orchestra Honors', 'Intermediate Orchestra (Sub Non-Varsity A)', 
    'Intermediate Orchestra Honors (Sub Non-Varsity A)'
  ],
  
  Fine_Arts_Theatre: [
    'Theatre Arts 1', 'Theatre Arts 1 Advanced', 'Theatre and Media Communications 2', 
    'Theatre Arts 2', 'Theatre Arts 2 Advanced', 'Theatre Arts 3', 
    'Theatre Arts 3, Playwriting', 'Theatre Arts 4', 'Technical Theatre 1', 
    'Technical Theatre 2', 'Technical Theatre 2, Design for Theatre', 
    'Technical Theatre 2, Management', 'Technical Theatre 2, Stagecraft', 
    'Technical Theatre 2 - Costume Construction', 'Technical Theatre 3', 
    'Technical Theatre 3, Advanced Theatre Management', 'Technical Theatre 3, Advanced Stagecraft', 
    'Technical Theatre 3, Advanced Design for Theatre', 'Technical Theatre 4', 
    'Technical Theatre 4, Advanced Theatre Management', 'Technical Theatre 4, Advanced Stagecraft', 
    'Technical Theatre 4, Advanced Design for Theatre', 'Theatre Production 1', 
    'Theatre Production 2', 'Theatre Production 3', 'Theatre Production 4', 'Stage Directing'
  ],
  
  Physical_Education: [
    'Health Education 1', 'PE', 'Lifetime Fitness and Wellness Dual Credit', 
    'Lifetime Recreation and Outdoor Pursuits', 'Dance/Aerobic Activities', 
    'Personal Development/Aerobic Activities', 'Lifetime Activities', 
    'Partners Training Program', 'Athletics/Football 9-11', 'Athletics/Football 12', 
    'Athletics/Basketball - Boys', 'Athletics/Basketball - Girls', 'Athletics/Golf', 
    'Athletics/Tennis', 'Athletics/Volleyball', 'Athletics/Soccer - Boys', 
    'Athletics/Soccer - Girls', 'Athletics/Wrestling', 'Athletics/Swimming', 
    'Athletics/Track - Boys (spring)', 'Athletics/Track - Girls (spring)', 
    'Athletics/Baseball - Boys', 'Athletics/Softball - Girls', 
    'Athletics/Cross Country - Boys (fall)', 'Athletics/Cross Country - Girls (fall)', 
    'Athletics Training', 'Off-Campus PE', 'Army JROTC 1', 'JV Cheerleader', 
    'Varsity Cheerleader', 'Marching Band', 'Color Guard/Dance', 'Drill Team', 
    'Country Western Dance Team (A&B)'
  ],
  
  Career_and_Technical_Education: [
    'Professional Internship Program (PIP)', 'Parenting Education for School Age Parents', 
    'Career Prep I/Extended', 'Career Prep II (Extended)'
  ],
  
  Other_Elective_Courses: [
    'OnRamps Arts and Entertainment Technology', 'AP Seminar - Capstone', 'AP Research - Capstone', 
    'University 9 & 10', 'Dual Credit Block', 'AVID', 'College and Career Readiness Prep', 
    'College Transition Dual Credit', 'College Prep Course - Mathematics', 
    'College Prep Course - English Language Arts', 'Advanced Study Skills', 
    'Leadership Training Program (Student Leadership)', 'Leadership Training Program 2 (Student Leadership)', 
    'Leadership Training Program - Grade 12 (Student Leadership)', 'Peacekeepers 1 (Peer Mediation)', 
    'Peacekeepers 2 (Peer Mediation)', 'PALS 1 (Peer Helping)', 'PALS 2 (Peer Helping)', 
    'Supportive Peer Relationships I', 'Supportive Peer Relationships II', 'Army Junior ROTC'
  ],
  
  Special_Education_Courses: [
    'Recreation and Leisure', 'General Employability Skills - ALT', 
    'Fundamentals of Reading 1', 'Fundamentals of Reading 2', 'Fundamentals of Reading 3', 
    'Student to Industry Connections - ALT', 'Making Connections I-IV - ALT'
  ]
  
  };
  
  // AP Courses Data
  const apCourses = [
    { id: 'calc_ab', name: 'AP Calculus AB' },
    { id: 'calc_bc', name: 'AP Calculus BC' },
    { id: 'bio', name: 'AP Biology' },
    { id: 'chem', name: 'AP Chemistry' },
    { id: 'physics_1', name: 'AP Physics 1' },
    { id: 'physics_2', name: 'AP Physics 2' },
    { id: 'physics_c_mech', name: 'AP Physics C: Mechanics' },
    { id: 'physics_c_em', name: 'AP Physics C: Electricity & Magnetism' },
    { id: 'eng_lang', name: 'AP English Language' },
    { id: 'eng_lit', name: 'AP English Literature' },
    { id: 'env_sci', name: 'AP Environmental Science' },
    { id: 'stat', name: 'AP Statistics' },
    { id: 'macro', name: 'AP Macroeconomics' },
    { id: 'microecon', name: 'AP Microeconomics' },
    { id: 'world_hist', name: 'AP World History' },
    { id: 'euro_hist', name: 'AP European History' },
    { id: 'human_geo', name: 'AP Human Geography' },
    { id: 'us_hist', name: 'AP U.S. History' },
    { id: 'us_gov', name: 'AP U.S. Government & Politics' },
    { id: 'psych', name: 'AP Psychology' },
    { id: 'art_hist', name: 'AP Art History' },
    { id: 'art_2d', name: 'AP 2-D Art and Design Portfolio' },
    { id: 'art_3d', name: 'AP 3-D Art and Design Portfolio' },
    { id: 'art_drawing', name: 'AP Drawing Portfolio' },
    { id: 'comp_sci_a', name: 'AP Computer Science A' },
    { id: 'comp_sci_p', name: 'AP Computer Science Principles' },
    { id: 'span_lang', name: 'AP Spanish Language & Culture' },
    { id: 'span_lit', name: 'AP Spanish Literature' },
    { id: 'french', name: 'AP French Language and Culture' },
    { id: 'japanese', name: 'AP Japanese Language & Culture' },
    { id: 'latin', name: 'AP Latin' },
    { id: 'music_theory', name: 'AP Music Theory' },
    { id: 'seminar', name: 'AP Seminar - Capstone' },
    { id: 'research', name: 'AP Research - Capstone' }
  ];
  
  // Dual Credit Courses Data
  const dualCreditCourses = [
    { id: 'eng_rhetoric_dc', name: 'English 3 Dual Credit - Rhetoric' },
    { id: 'eng4_rhetoric_dc', name: 'English 4 Dual Credit - Rhetoric' },
    { id: 'eng4_world_lit_dc', name: 'English 4 Dual Credit - World Literature' },
    { id: 'adv_quant_reason_dc', name: 'Advanced Quantitative Reasoning - Dual Credit' },
    { id: 'precalc_dc', name: 'Precalculus - Dual Credit' },
    { id: 'calc3_dc', name: 'Calculus 3 - Dual Credit' },
    { id: 'linear_algebra_dc', name: 'Linear Algebra - Dual Credit' },
    { id: 'discrete_math_dc', name: 'Discrete Mathematics - Dual Credit' },
    { id: 'business_stats_dc', name: 'Business Statistics - Dual Credit' },
    { id: 'bio_dc', name: 'Biology - Dual Credit' },
    { id: 'earth_sci_dc', name: 'Earth Systems Science - Dual Credit' },
    { id: 'us_hist_dc', name: 'U.S. History - Dual Credit' },
    { id: 'gov_dc', name: 'U.S. Government - Dual Credit' },
    { id: 'texas_gov_dc', name: 'Texas Government - Dual Credit' },
    { id: 'econ_dc', name: 'Economics - Dual Credit' },
    { id: 'macro_dc', name: 'Macroeconomics - Dual Credit' },
    { id: 'microecon_dc', name: 'Principles of Microeconomics - Dual Credit' },
    { id: 'psych_dc', name: 'Psychology - Dual Credit' },
    { id: 'child_dev_dc', name: 'Child Development - Dual Credit' },
    { id: 'health_sci_dc', name: 'Health Science Theory - Dual Credit' },
    { id: 'practicum_health_dc', name: 'Practicum in Health Science - Dual Credit' },
    { id: 'education_training_dc', name: 'Principles of Education & Training - Dual Credit' },
    { id: 'instructional_practices_dc', name: 'Instructional Practices - Dual Credit' },
  
    // OnRamps
    { id: 'rhetoric_onramps', name: 'OnRamps Reading/Writing Rhetoric' },
    { id: 'bio_onramps', name: 'OnRamps Biology' },
    { id: 'bio_gt_onramps', name: 'GT OnRamps Biology' },
    { id: 'chem_onramps', name: 'OnRamps Chemistry' },
    { id: 'chem_gt_onramps', name: 'GT OnRamps Chemistry' },
    { id: 'phys_mech_onramps', name: 'OnRamps Physics: Mechanics/Heat/Sound' },
    { id: 'phys_mech_gt_onramps', name: 'GT OnRamps Physics: Mechanics/Heat/Sound' },
    { id: 'phys_em_onramps', name: 'OnRamps Physics: Electricity & Magnetism' },
    { id: 'phys_em_gt_onramps', name: 'GT OnRamps Physics: Electricity & Magnetism' },
    { id: 'geo_sci_onramps', name: 'OnRamps Geoscience' },
    { id: 'precalc_onramps', name: 'OnRamps Precalculus' },
    { id: 'college_algebra_onramps', name: 'OnRamps College Algebra' },
    { id: 'stats_onramps', name: 'OnRamps Statistics' },
    { id: 'us_hist_onramps', name: 'OnRamps U.S. History' },
    { id: 'us_hist_gt_onramps', name: 'GT OnRamps U.S. History' },
    { id: 'econ_onramps', name: 'OnRamps Economics' },
    { id: 'econ_gt_onramps', name: 'GT OnRamps Economics' }
  ];

  export { hsSubjects, apCourses, dualCreditCourses };
