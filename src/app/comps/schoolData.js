// School-specific majors and credit transfer information
//pretty repetative, but it's just a bunch of data
//scraping through pyhon and html data actually kinda works, no idea what im saying but trust...
const schoolData = {
    general: {
      name: "General College Path",
      majors: [
        {
          id: "gen_cs",
          name: "Computer Science",
          apCreditLink: "https://collegetransfer.doc/general/ap/cs",
          dualCreditLink: "https://collegetransfer.doc/general/dualcredit/cs",
          requirementsLink: "https://collegetransfer.doc/general/requirements/cs"
        },
        {
          id: "gen_eng",
          name: "Engineering",
          apCreditLink: "https://collegetransfer.doc/general/ap/engineering",
          dualCreditLink: "https://collegetransfer.doc/general/dualcredit/engineering",
          requirementsLink: "https://collegetransfer.doc/general/requirements/engineering"
        },
        {
          id: "gen_bus",
          name: "Business",
          apCreditLink: "https://collegetransfer.doc/general/ap/business",
          dualCreditLink: "https://collegetransfer.doc/general/dualcredit/business",
          requirementsLink: "https://collegetransfer.doc/general/requirements/business"
        }
      ]
    },
    "utaustin": {
    "name": "University of Texas at Austin",
    "majors": [
      {
        "id": "ut_accounting_bba",
        "name": "Accounting (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/accounting/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_acting_bfa",
        "name": "Acting (BFA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-fine-arts/suggested-arrangement-of-courses-acting-bfa/"
      },
      {
        "id": "ut_advertising_bsadv",
        "name": "Advertising (BSAdv)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bs-advertising/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_aerospace_engineering_bsase",
        "name": "Aerospace Engineering (BSAsE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-aerospace-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_african_and_african_diaspora_studies_ba",
        "name": "African and African Diaspora Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/african-and-african-diaspora-studies/sugg-aads-ba/"
      },
      {
        "id": "ut_american_studies_ba",
        "name": "American Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/american-studies/sugg-amer-st-ba/"
      },
      {
        "id": "ut_anthropology_ba",
        "name": "Anthropology (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/anthropology/sugg-anthropology-ba/"
      },
      {
        "id": "ut_applied_movement_science_bskin&health",
        "name": "Applied Movement Science (BSKin&Health)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-kinesiology-and-health/applied-movement-science/suggested-applied-mvmt-sci-bskinhealth/"
      },
      {
        "id": "ut_architectural_engineering_bsarche",
        "name": "Architectural Engineering (BSArchE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-architectural-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_architectural_studies_bsas",
        "name": "Architectural Studies (BSAS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/architecture/degrees-and-programs/bs-architectural-studies/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_architecture/architectural_engineering_barch/bsarche",
        "name": "Architecture/Architectural Engineering (BArch/BSArchE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/architecture/degrees-and-programs/bachelor-of-architecture-bs-arch-engr-ddp/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_architecture_barch",
        "name": "Architecture (BArch)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/architecture/degrees-and-programs/bachelor-of-architecture/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_architecture/plan_ii_honors_barch/ba",
        "name": "Architecture/Plan II Honors (BArch/BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/architecture/degrees-and-programs/bachelor-of-architecture-ba-arch-plan-ii-ddp/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_art_education_bfa",
        "name": "Art Education (BFA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-fine-arts/sugg-art-ed-bfa/"
      },
      {
        "id": "ut_art_history_ba",
        "name": "Art History (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/ba-art/sugg-art-history-ba/"
      },
      {
        "id": "ut_arts_and_entertainment_technologies_bsaet",
        "name": "Arts and Entertainment Technologies (BSAET)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bs-arts-and-entertainment-technologies/sugg-aet-bsaet/"
      },
      {
        "id": "ut_asian_cultures_and_languages_ba",
        "name": "Asian Cultures and Languages (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/asian-cultures-and-languages/sugg-asian-cul-lang-ba/"
      },
      {
        "id": "ut_asian_studies_ba",
        "name": "Asian Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/asian-studies/sugg-asian-st-ba/"
      },
      {
        "id": "ut_astronomy_ba",
        "name": "Astronomy (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-arts-plan-i/astronomy/sugg-astronomy-ba/"
      },
      {
        "id": "ut_astronomy_bsa",
        "name": "Astronomy (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/astronomy/sugg-astronomy-bsa/"
      },
      {
        "id": "ut_astronomy_bsast",
        "name": "Astronomy (BSAst)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-astronomy/sugg-astronomy-bsast/"
      },
      {
        "id": "ut_athletic_training_bsathtrng",
        "name": "Athletic Training (BSAthTrng)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-athletic-training/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_behavioral_and_social_data_science_bsbsds",
        "name": "Behavioral and Social Data Science (BSBSDS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bs-behavioral-and-social-data-science/sugg-bsds-bsbsds/"
      },
      {
        "id": "ut_biochemistry_bsbioch",
        "name": "Biochemistry (BSBioch)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-biochemistry/sugg-biochem-bsbioch/"
      },
      {
        "id": "ut_biological_sciences_bsenvirsci",
        "name": "Biological Sciences (BSEnvirSci)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-environmental-science/sugg-bio-sci-bsenvirsci/"
      },
      {
        "id": "ut_biology_bsa",
        "name": "Biology (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/biology/sugg-bio-bsa/"
      },
      {
        "id": "ut_biology_bsbio",
        "name": "Biology (BSBio)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-biology/sugg-bio-bsbio/"
      },
      {
        "id": "ut_biomedical_engineering_bsbiomede",
        "name": "Biomedical Engineering (BSBiomedE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-biomedical-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_business_administration,_honors_track_bba",
        "name": "Business Administration, Honors track (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/business-honors-program/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_business_analytics_bba",
        "name": "Business Analytics (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/business-analytics/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_chemical_engineering_bsche",
        "name": "Chemical Engineering (BSChE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-chemical-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_chemistry_ba",
        "name": "Chemistry (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-arts-plan-i/chemistry/sugg-chemistry-ba/"
      },
      {
        "id": "ut_chemistry_bsa",
        "name": "Chemistry (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/chemistry/sugg-chem-bsa/"
      },
      {
        "id": "ut_chemistry_bsch",
        "name": "Chemistry (BSCh)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-chemistry/sugg-chem-bsch/"
      },
      {
        "id": "ut_civil_engineering_bsce",
        "name": "Civil Engineering (BSCE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-civil-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_classical_languages_ba",
        "name": "Classical Languages (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/classical-languages/sugg-class-lang-ba/"
      },
      {
        "id": "ut_classical_studies_ba",
        "name": "Classical Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/classical-studies/sugg-class-st-ba/"
      },
      {
        "id": "ut_climate_system_science_bsgs",
        "name": "Climate System Science (BSGS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/bs-geological-sciences/sugg-climate-sys-sci-bsgeosci/"
      },
      {
        "id": "ut_communication_and_leadership_bscomm&lead",
        "name": "Communication and Leadership (BSComm&Lead)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bs-communication-and-leadership/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_communication_studies_bscommstds",
        "name": "Communication Studies (BSCommStds)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bs-communication-studies/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_composition_bmusic",
        "name": "Composition (BMusic)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-music/sugg-composition-bmusic/"
      },
      {
        "id": "ut_computational_engineering_bscompe",
        "name": "Computational Engineering (BSCompE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-computational-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_computer_science_bsa",
        "name": "Computer Science (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/computer-science/sugg-comp-sci-bsa/"
      },
      {
        "id": "ut_computer_science_bscompsci",
        "name": "Computer Science (BSCompSci)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-computer-science/sugg-comp-sci-bscompsci/"
      },
      {
        "id": "ut_dance_bfa",
        "name": "Dance (BFA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-fine-arts/sugg-dance-bfa/"
      },
      {
        "id": "ut_design_ba",
        "name": "Design (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/ba-art/sugg-design-ba/"
      },
      {
        "id": "ut_design_bfa",
        "name": "Design (BFA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-fine-arts/sugg-design-bfa/"
      },
      {
        "id": "ut_economics_ba",
        "name": "Economics (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/economics/sugg-eco-ba/"
      },
      {
        "id": "ut_economics_bseco",
        "name": "Economics (BSECO)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bs-economics/sugg-eco-bseco/"
      },
      {
        "id": "ut_education_bsed",
        "name": "Education (BSEd)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-education/education/suggested-arrangement-of-courses-ed/"
      },
      {
        "id": "ut_electrical_and_computer_engineering_bsece",
        "name": "Electrical and Computer Engineering (BSECE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-electrical-engineering/suggested-arrangement-of-courses-electrical-engineering/"
      },
      {
        "id": "ut_english_ba",
        "name": "English (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/english/sugg-english-ba/"
      },
      {
        "id": "ut_environmental_engineering_bsenve",
        "name": "Environmental Engineering (BSEnvE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-environmental-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_ethnic_studies_ba",
        "name": "Ethnic Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/ethnic-studies/sugg-ethnic-st-ba/"
      },
      {
        "id": "ut_european_studies_ba",
        "name": "European Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/european-studies/sugg-euro-st-ba/"
      },
      {
        "id": "ut_exercise_science_bskin&health",
        "name": "Exercise Science (BSKin&Health)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-kinesiology-and-health/exercise-science/suggested-exercise-sci-bskinhealth/"
      },
      {
        "id": "ut_finance_bba",
        "name": "Finance (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/finance/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_french_studies_ba",
        "name": "French Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/french/sugg-french-st-ba/"
      },
      {
        "id": "ut_general_geology_bsgs",
        "name": "General Geology (BSGS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/bs-geological-sciences/sugg-gen-geo-bsgeosci/"
      },
      {
        "id": "ut_geographical_sciences_bsenvirsci",
        "name": "Geographical Sciences (BSEnvirSci)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bs-environmental-science/sugg-geog-sci-bsenvirsci/"
      },
      {
        "id": "ut_geography_ba",
        "name": "Geography (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/geography/sugg-geog-ba/"
      },
      {
        "id": "ut_geophysics_bsgs",
        "name": "Geophysics (BSGS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/bs-geological-sciences/sugg-geophysics-bsgeosci/"
      },
      {
        "id": "ut_geosciences_bags",
        "name": "Geosciences (BAGS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/ba-geological-sciences/sugg-geo-sci-bageosci/"
      },
      {
        "id": "ut_geosciences_bsenvirsci",
        "name": "Geosciences (BSEnvirSci)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/bs-environmental-science/sugg-geo-sci-bsenvirsci/"
      },
      {
        "id": "ut_geosciences_bsgs",
        "name": "Geosciences (BSGS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/bs-geological-sciences/sugg-geo-sci-bsgeosci/"
      },
      {
        "id": "ut_geosystems_engineering_bsge",
        "name": "Geosystems Engineering (BSGE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-geosystems-engineering/sugg-geosys-engr-bsge/"
      },
      {
        "id": "ut_german_ba",
        "name": "German (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/german/sugg-german-ba/"
      },
      {
        "id": "ut_government_ba",
        "name": "Government (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/government/sugg-govt-ba/"
      },
      {
        "id": "ut_health_and_society_ba",
        "name": "Health and Society (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/health-and-society/sugg-health-soc-ba/"
      },
      {
        "id": "ut_health_promotion_and_behavioral_science_bskin&health",
        "name": "Health Promotion and Behavioral Science (BSKin&Health)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-kinesiology-and-health/health-promotion-and-behavioral-science/suggested-health-promotion-behav-sci-bskinhealth/"
      },
      {
        "id": "ut_history_ba",
        "name": "History (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/history/sugg-history-ba/"
      },
      {
        "id": "ut_human_development_and_family_sciences_bsa",
        "name": "Human Development and Family Sciences (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/human-development-and-family-studies/sugg-hdfs-bsa/"
      },
      {
        "id": "ut_human_development_and_family_sciences_bshdfs",
        "name": "Human Development and Family Sciences (BSHDFS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-human-development-and-family-sciences/sugg-hdfs-bshdfs/"
      },
      {
        "id": "ut_human_dimensions_of_organizations_ba",
        "name": "Human Dimensions of Organizations (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/human-dimensions-of-organizations/sugg-hdo-ba/"
      },
      {
        "id": "ut_human_ecology_bsa",
        "name": "Human Ecology (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/human-ecology/sugg-human-eco-bsa/"
      },
      {
        "id": "ut_humanities_ba",
        "name": "Humanities (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/humanities/sugg-humanities-ba/"
      },
      {
        "id": "ut_hydrology_and_water_resources_bsgs",
        "name": "Hydrology and Water Resources (BSGS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/geosciences/degrees-and-programs/bs-geological-sciences/sugg-hydrogeology-bsgeosci/"
      },
      {
        "id": "ut_informatics_ba",
        "name": "Informatics (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/information/degrees-and-programs/bachelor-of-arts/sugg-informatics-ba/"
      },
      {
        "id": "ut_informatics_bsi",
        "name": "Informatics (BSI)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/information/degrees-and-programs/bachelor-of-science/sugg-informatics-bsi/"
      },
      {
        "id": "ut_interior_design_bsid",
        "name": "Interior Design (BSID)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/architecture/degrees-and-programs/bs-interior-design/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_international_business_bba",
        "name": "International Business (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/international-business/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_international_relations_and_global_studies_ba",
        "name": "International Relations and Global Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/international-relations-and-global-studies/sugg-irg-ba/"
      },
      {
        "id": "ut_italian_studies_ba",
        "name": "Italian Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/italian/sugg-italian-st-ba/"
      },
      {
        "id": "ut_jazz_bmusic",
        "name": "Jazz (BMusic)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-music/sugg-jazz-bmusic/"
      },
      {
        "id": "ut_jewish_studies_ba",
        "name": "Jewish Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/jewish-studies/sugg-jewish-st-ba/"
      },
      {
        "id": "ut_journalism_bj",
        "name": "Journalism (BJ)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bachelor-of-journalism/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_latin_american_studies_ba",
        "name": "Latin American Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/latin-american-studies/sugg-latin-amer-st-ba/"
      },
      {
        "id": "ut_linguistics_ba",
        "name": "Linguistics (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/linguistics/sugg-linguistics-ba/"
      },
      {
        "id": "ut_management_bba",
        "name": "Management (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/management/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_management_information_systems_bba",
        "name": "Management Information Systems (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/management-information-systems/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_marketing_bba",
        "name": "Marketing (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/marketing/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_mathematics_ba",
        "name": "Mathematics (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-arts-plan-i/mathematics/sugg-math-ba/"
      },
      {
        "id": "ut_mathematics_bsa",
        "name": "Mathematics (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/mathematics/sugg-math-bsa/"
      },
      {
        "id": "ut_mathematics_bsmath",
        "name": "Mathematics (BSMath)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-mathematics/sugg-math-bsmath/"
      },
      {
        "id": "ut_mechanical_engineering_bsme",
        "name": "Mechanical Engineering (BSME)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-mechanical-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_medical_laboratory_science_bsmedlabsci",
        "name": "Medical Laboratory Science (BSMedLabSci)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-medical-laboratory-science/sugg-med-lab-sci-bsmedlabsci/"
      },
      {
        "id": "ut_mexican_american_and_latina/o_studies_ba",
        "name": "Mexican American and Latina/o Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/mexican-american-studies/sugg-mals-ba/"
      },
      {
        "id": "ut_middle_eastern_studies_ba",
        "name": "Middle Eastern Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/middle-eastern-studies/sugg-mes-ba/"
      },
      {
        "id": "ut_music_bamusic",
        "name": "Music (BAMusic)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/ba-music/sugg-music-bamusic/"
      },
      {
        "id": "ut_music_performance_bmusic",
        "name": "Music Performance (BMusic)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-music/sugg-music-performance-bmusic/"
      },
      {
        "id": "ut_music_studies_bmusic",
        "name": "Music Studies (BMusic)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-music/sugg-music-studies-bmusic/"
      },
      {
        "id": "ut_neuroscience_bsa",
        "name": "Neuroscience (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/neuroscience/sugg-neurosci-bsa/"
      },
      {
        "id": "ut_neuroscience_bsneurosci",
        "name": "Neuroscience (BSNeurosci)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-neuroscience/sugg-neurosci-bsneurosci/"
      },
      {
        "id": "ut_nursing_bsn",
        "name": "Nursing (BSN)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/nursing/degrees-and-programs/bs-nursing/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_nutrition_bsa",
        "name": "Nutrition (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/nutrition/sugg-nutrition-bsa/"
      },
      {
        "id": "ut_nutrition_bsntr",
        "name": "Nutrition (BSNtr)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-nutrition/sugg-nutrition-bsntr/"
      },
      {
        "id": "ut_petroleum_engineering_bspe",
        "name": "Petroleum Engineering (BSPE)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-petroleum-engineering/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_philosophy_ba",
        "name": "Philosophy (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/philosophy/sugg-philosophy-ba/"
      },
      {
        "id": "ut_physical_culture_and_sports_studies_bskin&health",
        "name": "Physical Culture and Sports Studies (BSKin&Health)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-kinesiology-and-health/physical-culture-and-sports/suggested-physical-culture-sports-bskinhealth/"
      },
      {
        "id": "ut_physics_ba",
        "name": "Physics (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-arts-plan-i/physics/sugg-physics-ba/"
      },
      {
        "id": "ut_physics_bsa",
        "name": "Physics (BSA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bachelor-of-science-and-arts/physics/sugg-physics-bsa/"
      },
      {
        "id": "ut_physics_bsphy",
        "name": "Physics (BSPhy)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-physics/sugg-physics-bsphy/"
      },
      {
        "id": "ut_plan_ii_honors_program_ba",
        "name": "Plan II Honors Program (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-ii/sugg-planii-ba/"
      },
      {
        "id": "ut_psychology_ba",
        "name": "Psychology (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/psychology/sugg-psychology-ba/"
      },
      {
        "id": "ut_psychology_bspsy",
        "name": "Psychology (BSPsy)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bs-psychology/sugg-psy-bspsy/"
      },
      {
        "id": "ut_public_affairs_bapubaff",
        "name": "Public Affairs (BAPubAff)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/public-affairs/degrees-and-programs/ba-public-affairs/public-affairs/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_public_health_bspublichealth",
        "name": "Public Health (BSPublichealth)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-public-health/sugg-pub-hlth-bspublichealth/"
      },
      {
        "id": "ut_public_relations_bspr",
        "name": "Public Relations (BSPR)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bs-public-relations/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_race,_indigeneity,_and_migration_ba",
        "name": "Race, Indigeneity, and Migration (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/race-indigeneity-and-migration/sugg-rim-ba/"
      },
      {
        "id": "ut_radio_television_film_bsrtf",
        "name": "Radio-Television-Film (BSRTF)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bs-radio-television-film/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_religious_studies_ba",
        "name": "Religious Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/religious-studies/sugg-relig-st-ba/"
      },
      {
        "id": "ut_rhetoric_and_writing_ba",
        "name": "Rhetoric and Writing (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/rhetoric-and-writing/sugg-rhetoric-writing-ba/"
      },
      {
        "id": "ut_russian,_east_european,_and_eurasian_studies_ba",
        "name": "Russian, East European, and Eurasian Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/russian-east-european-and-eurasian-studies/sugg-russ-eeuro-st-ba/"
      },
      {
        "id": "ut_social_work_bsw",
        "name": "Social Work (BSW)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/social-work/degrees-and-programs/bachelor-of-social-work/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_sociology_ba",
        "name": "Sociology (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/sociology/sugg-sociology-ba/"
      },
      {
        "id": "ut_spanish_ba",
        "name": "Spanish (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/spanish/sugg-spanish-ba/"
      },
      {
        "id": "ut_speech,_language,_and_hearing_sciences_bsslh",
        "name": "Speech, Language, and Hearing Sciences (BSSLH)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/communication/degrees-and-programs/bs-speech-language-and-hearing-sciences/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_sport_management_bskin&health",
        "name": "Sport Management (BSKin&Health)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-kinesiology-and-health/sport-management/suggested-sport-mgmt-bskinhealth/"
      },
      {
        "id": "ut_statistics_and_data_science_bssds",
        "name": "Statistics and Data Science (BSSDS)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-statistics-and-data-sciences/sugg-stat-data-sci-bssds/"
      },
      {
        "id": "ut_studio_art_ba",
        "name": "Studio Art (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/ba-art/sugg-studio-art-ba/"
      },
      {
        "id": "ut_studio_art_bfa",
        "name": "Studio Art (BFA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-fine-arts/sugg-studio-art-bfa/"
      },
      {
        "id": "ut_supply_chain_management_bba",
        "name": "Supply Chain Management (BBA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/business/degrees-and-programs/bachelor-of-business-administration/supply-chain-management/suggested-arrangement-of-courses/"
      },
      {
        "id": "ut_sustainability_studies_ba",
        "name": "Sustainability Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/sustainability-studies/sugg-sustain-st-ba/"
      },
      {
        "id": "ut_textiles_and_apparel_bsta",
        "name": "Textiles and Apparel (BSTA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/natural-sciences/degrees-and-programs/bs-textiles-and-apparel/sugg-txa-bsta/"
      },
      {
        "id": "ut_theatre_and_dance_batd",
        "name": "Theatre and Dance (BATD)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/ba-theatre-and-dance/sugg-theatre-dance-batd/"
      },
      {
        "id": "ut_theatre_education_bfa",
        "name": "Theatre Education (BFA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/fine-arts/degrees-and-programs/bachelor-of-fine-arts/sugg-theatre-ed-bfa/"
      },
      {
        "id": "ut_urban_studies_ba",
        "name": "Urban Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/urban-studies/sugg-urban-st-ba/"
      },
      {
        "id": "ut_women's_and_gender_studies_ba",
        "name": "Women's and Gender Studies (BA)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/liberal-arts/degrees-and-programs/bachelor-of-arts-plan-i/womens-and-gender-studies/sugg-wgs-ba/"
      },
      {
        "id": "ut_youth_and_community_studies_bsed",
        "name": "Youth and Community Studies (BSEd)",
        "apCreditLink": "https://testingservices.utexas.edu/search-undergraduate-exams",
        "dualCreditLink": "https://docs.google.com/document/d/1SJ-x-oLw0IauR9Mm60ZF6fWtFaduqPIvJ72q88V11jE/edit?usp=sharing",
        "requirementsLink": "https://catalog.utexas.edu/undergraduate/education/degrees-and-programs/bs-education/youth-and-community-studies/suggested-arrangement-of-courses-ycs/"
      }
    ]
  },
    tamu: {
      name: "Texas A&M University",
      majors: [
        {
          id: "tamu_cs",
          name: "Computer Science",
          apCreditLink: "https://testing.tamu.edu/credits#Course-Equivalency",
          dualCreditLink: "https://admissions.tamu.edu/dual-credit/engineering/cs",
          requirementsLink: "https://catalog.tamu.edu/undergraduate/engineering/computer-science/"
        },
        {
          id: "tamu_mech_eng",
          name: "Mechanical Engineering",
          apCreditLink: "https://testing.tamu.edu/credits#Course-Equivalency",
          dualCreditLink: "https://admissions.tamu.edu/dual-credit/engineering/mechanical",
          requirementsLink: "https://catalog.tamu.edu/undergraduate/engineering/mechanical/"
        },
        {
          id: "tamu_bus",
          name: "Business Administration",
          apCreditLink: "https://testing.tamu.edu/credits#Course-Equivalency",
          dualCreditLink: "https://admissions.tamu.edu/dual-credit/business",
          requirementsLink: "https://catalog.tamu.edu/undergraduate/business/"
        }
      ]
    },
    "utdallas": {
      "name": "University of Texas at Dallas",
      "majors": [
        {
          "id": "utd_bachelor_of_arts_in_history",
          "name": "Bachelor of Arts in History",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ah/historical-studies"
        },
        {
          "id": "utd_bachelor_of_arts_in_latin_american_studies",
          "name": "Bachelor of Arts in Latin American Studies",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ah/latin-american-studies"
        },
        {
          "id": "utd_bachelor_of_arts_in_literature",
          "name": "Bachelor of Arts in Literature",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ah/literature"
        },
        {
          "id": "utd_bachelor_of_arts_in_philosophy",
          "name": "Bachelor of Arts in Philosophy",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ah/philosophy"
        },
        {
          "id": "utd_bachelor_of_arts_in_visual_and_performing_arts",
          "name": "Bachelor of Arts in Visual and Performing Arts",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ah/visual-and-performing-arts-interdisciplinary-arts"
        },
        {
          "id": "utd_bachelor_of_arts_in_arts,_technology,_and_emerging_communication",
          "name": "Bachelor of Arts in Arts, Technology, and Emerging Communication",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/atec/arts-and-technology"
        },
        {
          "id": "utd_bachelor_of_science_in_child_learning_and_development",
          "name": "Bachelor of Science in Child Learning and Development",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/bbs/child-learning-and-development"
        },
        {
          "id": "utd_bachelor_of_science_in_cognitive_science",
          "name": "Bachelor of Science in Cognitive Science",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/bbs/cognitive-science"
        },
        {
          "id": "utd_bachelor_of_science_in_neuroscience",
          "name": "Bachelor of Science in Neuroscience",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/bbs/neuroscience"
        },
        {
          "id": "utd_bachelor_of_science_in_psychology",
          "name": "Bachelor of Science in Psychology",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/bbs/psychology"
        },
        {
          "id": "utd_bachelor_of_science_in_speech,_language,_and_hearing_sciences",
          "name": "Bachelor of Science in Speech, Language, and Hearing Sciences",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/bbs/speech-language-and-hearing-sciences"
        },
        {
          "id": "utd_bachelor_of_arts_in_criminology",
          "name": "Bachelor of Arts in Criminology",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/criminology"
        },
        {
          "id": "utd_bachelor_of_arts_in_economics",
          "name": "Bachelor of Arts in Economics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/economics"
        },
        {
          "id": "utd_bachelor_of_arts_in_international_political_economy",
          "name": "Bachelor of Arts in International Political Economy",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/international-political-economy"
        },
        {
          "id": "utd_bachelor_of_arts_in_political_science",
          "name": "Bachelor of Arts in Political Science",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/political-science"
        },
        {
          "id": "utd_bachelor_of_arts_in_sociology",
          "name": "Bachelor of Arts in Sociology",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/sociology"
        },
        {
          "id": "utd_bachelor_of_arts_in_criminology_and_biology_double_major",
          "name": "Bachelor of Arts in Criminology and Biology (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/criminology-biology"
        },
        {
          "id": "utd_bachelor_of_science_in_economics",
          "name": "Bachelor of Science in Economics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/economics"
        },
        {
          "id": "utd_bachelor_of_science_in_geospatial_information_sciences",
          "name": "Bachelor of Science in Geospatial Information Sciences",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/geospatial-information-science"
        },
        {
          "id": "utd_bachelor_of_science_in_international_political_economy",
          "name": "Bachelor of Science in International Political Economy",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/international-political-economy"
        },
        {
          "id": "utd_bachelor_of_science_in_public_affairs",
          "name": "Bachelor of Science in Public Affairs",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/public-affairs"
        },
        {
          "id": "utd_bachelor_of_science_in_public_policy",
          "name": "Bachelor of Science in Public Policy",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/public-policy"
        },
        {
          "id": "utd_bachelor_of_science_in_economics_and_finance_double_major",
          "name": "Bachelor of Science in Economics and Finance (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/economics-finance"
        },
        {
          "id": "utd_bachelor_of_science_in_international_political_economy_and_global_business_double_major",
          "name": "Bachelor of Science in International Political Economy and Global Business (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/epps/international-political-economy-global-business"
        },
        {
          "id": "utd_bachelor_of_science_in_biomedical_engineering",
          "name": "Bachelor of Science in Biomedical Engineering",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/biomedical-engineering"
        },
        {
          "id": "utd_bachelor_of_science_in_computer_engineering",
          "name": "Bachelor of Science in Computer Engineering",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/computer-engineering"
        },
        {
          "id": "utd_bachelor_of_science_in_computer_science",
          "name": "Bachelor of Science in Computer Science",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/computer-science"
        },
        {
          "id": "utd_bachelor_of_science_in_data_science_Engineering_&_Computer Science",
          "name": "Bachelor of Science in Data Science",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/data-science"
        },
        {
          "id": "utd_bachelor_of_science_in_electrical_engineering",
          "name": "Bachelor of Science in Electrical Engineering",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/electrical-engineering"
        },
        {
          "id": "utd_bachelor_of_science_in_mechanical_engineering",
          "name": "Bachelor of Science in Mechanical Engineering",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/mechanical-engineering"
        },
        {
          "id": "utd_bachelor_of_science_in_software_engineering",
          "name": "Bachelor of Science in Software Engineering",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/ecs/software-engineering"
        },
        {
          "id": "utd_bachelor_of_arts_in_american_studies",
          "name": "Bachelor of Arts in American Studies",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/is/american-studies"
        },
        {
          "id": "utd_bachelor_of_arts_in_education",
          "name": "Bachelor of Arts in Education",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/is/education"
        },
        {
          "id": "utd_bachelor_of_arts_in_interdisciplinary_studies",
          "name": "Bachelor of Arts in Interdisciplinary Studies",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/is/interdisciplinary-studiesa"
        },
        {
          "id": "utd_bachelor_of_science_in_healthcare_studies",
          "name": "Bachelor of Science in Healthcare Studies",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/is/healthcare"
        },
        {
          "id": "utd_bachelor_of_science_in_education",
          "name": "Bachelor of Science in Education",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/is/education"
        },
        {
          "id": "utd_bachelor_of_science_in_interdisciplinary_studies",
          "name": "Bachelor of Science in Interdisciplinary Studies",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/is/interdisciplinary-studies"
        },
        {
          "id": "utd_bachelor_of_science_in_accounting",
          "name": "Bachelor of Science in Accounting",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/accounting"
        },
        {
          "id": "utd_bachelor_of_science_in_business_administration",
          "name": "Bachelor of Science in Business Administration",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/business-administration"
        },
        {
          "id": "utd_bachelor_of_science_in_business_analytics",
          "name": "Bachelor of Science in Business Analytics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/business-analytics"
        },
        {
          "id": "utd_bachelor_of_science_in_finance",
          "name": "Bachelor of Science in Finance",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/finance"
        },
        {
          "id": "utd_bachelor_of_science_in_global_business",
          "name": "Bachelor of Science in Global Business",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/global-business"
        },
        {
          "id": "utd_bachelor_of_science_in_healthcare_management",
          "name": "Bachelor of Science in Healthcare Management",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/healthcare-management"
        },
        {
          "id": "utd_bachelor_of_science_in_human_resource_management",
          "name": "Bachelor of Science in Human Resource Management",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022-undergraduate/programs/jsom/human-resource-management"
        },
        {
          "id": "utd_bachelor_of_science_in_information_technology_and_systems",
          "name": "Bachelor of Science in Information Technology and Systems",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/information-technology-systems"
        },
        {
          "id": "utd_bachelor_of_science_in_marketing",
          "name": "Bachelor of Science in Marketing",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/marketing"
        },
        {
          "id": "utd_bachelor_of_science_in_supply_chain_management",
          "name": "Bachelor of Science in Supply Chain Management",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/supply-chain-management"
        },
        {
          "id": "utd_bachelor_of_science_in_finance_and_economics_double_major",
          "name": "Bachelor of Science in Finance and Economics (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/finance-economics"
        },
        {
          "id": "utd_bachelor_of_science_in_global_business_and_human_resource_management_double_major",
          "name": "Bachelor of Science in Global Business and Human Resource Management (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/global-business-human-resource-management"
        },
        {
          "id": "utd_bachelor_of_science_in_global_business_and_international_political_economy_double_major",
          "name": "Bachelor of Science in Global Business and International Political Economy (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/global-business-international-political-economy"
        },
        {
          "id": "utd_bachelor_of_science_in_global_business_and_marketing_double_major",
          "name": "Bachelor of Science in Global Business and Marketing (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/global-business-marketing"
        },
        {
          "id": "utd_bachelor_of_science_in_global_business_and_supply_chain_management_double_major",
          "name": "Bachelor of Science in Global Business and Supply Chain Management (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/global-business-supply-chain-management"
        },
        {
          "id": "utd_bachelor_of_science_in_healthcare_management_and_biology_double_major",
          "name": "Bachelor of Science in Healthcare Management and Biology (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/healthcare-management-biology"
        },
        {
          "id": "utd_bachelor_of_science_in_healthcare_management_and_molecular_biology_double_major",
          "name": "Bachelor of Science in Healthcare Management and Molecular Biology (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/jsom/healthcare-management-molecular-biology"
        },
        {
          "id": "utd_bachelor_of_arts_in_biology",
          "name": "Bachelor of Arts in Biology",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/biology"
        },
        {
          "id": "utd_bachelor_of_science_in_biology",
          "name": "Bachelor of Science in Biology",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/biology"
        },
        {
          "id": "utd_bachelor_of_science_in_molecular_biology",
          "name": "Bachelor of Science in Molecular Biology",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/molecular-biology"
        },
        {
          "id": "utd_bachelor_of_science_in_biology_and_healthcare_management_double_major",
          "name": "Bachelor of Science in Biology and Healthcare Management (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/biology-healthcare-management"
        },
        {
          "id": "utd_bachelor_of_science_in_molecular_biology_and_healthcare_management_double_major",
          "name": "Bachelor of Science in Molecular Biology and Healthcare Management (Double Major)",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/molecular-biology-healthcare-management"
        },
        {
          "id": "utd_bachelor_of_science_in_biochemistry",
          "name": "Bachelor of Science in Biochemistry",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/biochemistry"
        },
        {
          "id": "utd_bachelor_of_arts_in_chemistry",
          "name": "Bachelor of Arts in Chemistry",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/chemistry"
        },
        {
          "id": "utd_bachelor_of_science_in_chemistry",
          "name": "Bachelor of Science in Chemistry",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/chemistry"
        },
        {
          "id": "utd_bachelor_of_science_in_geosciences",
          "name": "Bachelor of Science in Geosciences",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/geosciences"
        },
        {
          "id": "utd_bachelor_of_arts_in_mathematics",
          "name": "Bachelor of Arts in Mathematics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/mathematics"
        },
        {
          "id": "utd_bachelor_of_science_in_mathematics",
          "name": "Bachelor of Science in Mathematics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/mathematics"
        },
        {
          "id": "utd_bachelor_of_science_in_actuarial_science",
          "name": "Bachelor of Science in Actuarial Science",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/actuarial-science"
        },
        {
          "id": "utd_bachelor_of_science_in_data_science_Natural_Sciences&Mathematics",
          "name": "Bachelor of Science in Data Science",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/data-science"
        },
        {
          "id": "utd_bachelor_of_arts_in_physics",
          "name": "Bachelor of Arts in Physics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/physics"
        },
        {
          "id": "utd_bachelor_of_science_in_physics",
          "name": "Bachelor of Science in Physics",
          "apCreditLink": "https://transfercredit.utdallas.edu/search-by-test/ap-credit/",
          "dualCreditLink": "https://docs.google.com/document/d/1a5WircFivehLSjDqbE38IPFeLU6UdeStrjlfN7tmXGs/edit?tab=t.0",
          "requirementsLink": "https://catalog.utdallas.edu/2022/undergraduate/programs/nsm/physics"
        }
      ]
    }
  }
  
  export default schoolData;