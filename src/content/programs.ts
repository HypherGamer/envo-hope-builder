import heroImg from "@/assets/hero-community.jpg";
import founderImg from "@/assets/about-founder.jpg";

export interface ProgramStat {
  value: string;
  label: string;
  asOf: string;
  dummy?: boolean;
}

export interface ProgramActivity {
  title: string;
  desc: string;
  dummy?: boolean;
}

export interface ProgramStep {
  step: number;
  title: string;
  desc: string;
  dummy?: boolean;
}

export interface ProgramUnitCost {
  amount: number;
  currency: string;
  gives: string;
  dummy?: boolean;
}

export interface ProgramStory {
  title: string;
  quote: string;
  author: string;
  location: string;
  outcome: string;
  dummy?: boolean;
}

export interface ProgramFaq {
  question: string;
  answer: string;
  dummy?: boolean;
}

export interface ProgramGalleryItem {
  src: string;
  alt: string;
  caption: string;
  dummy?: boolean;
}

export interface ProgramContent {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  heroImage: string;
  problem: string[];
  approach: ProgramStep[];
  whoWeServe: string;
  howToApply: string;
  stats: ProgramStat[];
  activities: ProgramActivity[];
  stories: ProgramStory[];
  unitCosts: ProgramUnitCost[];
  faqs: ProgramFaq[];
  gallery: ProgramGalleryItem[];
  relatedSlugs: string[];
  dummy?: boolean;
}

export const programsContent: ProgramContent[] = [
  {
    slug: "outreach",
    title: "Outreach Programs (dummy data)",
    tagline:
      "Meeting families directly in rural hamlets with essential relief supplies and community care.",
    summary:
      "Direct humanitarian visits into remote villages across Ebonyi State, providing shelf-stable foodstuffs, clean water supplies, hygiene kits, and emergency aid to isolated households.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Rural settlements in Ebonyi State, particularly in farming settlements around Ishielu and Ohaukwu, frequently experience seasonal food insecurity and limited access to consumer distribution networks during harvest gaps.",
      "Vulnerable elderly residents, widows, and households caring for orphaned children often lack the financial resilience or transportation means to travel into central market towns like Abakaliki for daily essentials.",
      "Without direct, community-level distribution initiatives, standard aid relief frequently stops at council headquarters, leaving deeper farming settlements entirely unreached.",
    ],
    approach: [
      {
        step: 1,
        title: "Community Needs Assessment",
        desc: "Our field coordinators meet with village heads, ward counselors, and women leaders to verify families facing acute shortages.",
        dummy: true,
      },
      {
        step: 2,
        title: "Locally Sourced Procurement",
        desc: "Relief supplies including rice, beans, garri, cooking oil, and household sanitation items are procured directly from Ebonyi farmers and local merchants.",
        dummy: true,
      },
      {
        step: 3,
        title: "Direct Door-to-Village Distribution",
        desc: "Volunteer distribution teams set up verified collection points at local village halls and conduct home drop-offs for frail or bedridden elders.",
        dummy: true,
      },
      {
        step: 4,
        title: "Post-Distribution Check-ins",
        desc: "Field volunteers return thirty days later to confirm well-being and identify individuals requiring health or educational referrals.",
        dummy: true,
      },
    ],
    whoWeServe:
      "Elderly residents living without family support, widowed heads of households, displaced agrarian families, and households caring for multiple dependent children across rural Ebonyi local government areas.",
    howToApply:
      "Village heads, faith leaders, and neighbors can submit community referral notices by calling +234 806 356 3604 or visiting our liaison desk at No. 1, Hilltop Rd, Abakaliki during weekday hours.",
    stats: [
      {
        value: "5,200",
        label: "Households Supported",
        asOf: "April 2026",
        dummy: true,
      },
      {
        value: "28",
        label: "Rural Villages Reached",
        asOf: "April 2026",
        dummy: true,
      },
      {
        value: "100%",
        label: "Direct Village Delivery",
        asOf: "April 2026",
        dummy: true,
      },
    ],
    activities: [
      {
        title: "Seasonal Household Food Rations",
        desc: "Distributing 25kg bundles of grains, tubers, fortified salt, and edible oils to vulnerable agrarian households during the pre-harvest stretch.",
        dummy: true,
      },
      {
        title: "Clean Water & Hygiene Supply Kits",
        desc: "Supplying water storage containers, chlorine treatment tablets, laundry soap, and sanitary materials to reduce waterborne illnesses.",
        dummy: true,
      },
      {
        title: "Emergency Response & Winter Clothing",
        desc: "Providing bedding, blankets, and footwear for families who experience localized storm or flood damage in agrarian settlements.",
        dummy: true,
      },
      {
        title: "Home Visits for Homebound Seniors",
        desc: "Deploying local community volunteers to visit isolated elders twice monthly to ensure nourishment and emotional connection.",
        dummy: true,
      },
    ],
    stories: [
      {
        title: "Relief for a Family of Six in Ishielu",
        quote:
          "When the heavy rains flooded our yam barn last season, we had no reserves left. The delivery of food supplies and blankets gave my grandchildren nourishment while we replanted our plots.",
        author: "Mama Ngozi",
        location: "Ezzangbo, Ishielu LGA",
        outcome: "Received monthly food staple packages and dry bedding for four months.",
        dummy: true,
      },
    ],
    unitCosts: [
      {
        amount: 15000,
        currency: "NGN",
        gives:
          "One comprehensive household hygiene and water-purification kit for a family of five.",
        dummy: true,
      },
      {
        amount: 35000,
        currency: "NGN",
        gives:
          "One month supply of grains, legumes, and cooking essentials for a vulnerable rural family.",
        dummy: true,
      },
      {
        amount: 90000,
        currency: "NGN",
        gives:
          "Emergency relief packages and replacement bedding for three households recovering from storm damage.",
        dummy: true,
      },
    ],
    faqs: [
      {
        question: "How do you select the villages and beneficiaries who receive aid?",
        answer:
          "We work closely with local traditional councils and community women leaders to conduct door-to-door vulnerability surveys. Priority is given to non-working seniors, single parents, and homes with severely malnourished infants.",
        dummy: true,
      },
      {
        question: "Are your relief packages bought locally or shipped from abroad?",
        answer:
          "Everything is purchased locally within Ebonyi State and neighboring southeastern agricultural hubs. This ensures foodstuffs match local dietary preferences while strengthening regional farming livelihoods.",
        dummy: true,
      },
      {
        question: "Can individuals volunteer for distribution weekends?",
        answer:
          "Yes. We welcome university students, community workers, and residents in Ebonyi State to sign up via our Get Involved page.",
        dummy: true,
      },
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Community members gathering during a field outreach distribution in rural Ebonyi",
        caption:
          "Field volunteers and community elders at an outreach distribution morning in rural Ebonyi.",
        dummy: true,
      },
      {
        src: founderImg,
        alt: "Program leaders and community organizers reviewing aid allocations",
        caption:
          "Foundation coordinators meeting with ward leaders to verify beneficiary registers.",
        dummy: true,
      },
    ],
    relatedSlugs: ["healthcare", "community", "education"],
  },
  {
    slug: "education",
    title: "Educational Support",
    tagline:
      "Covering school levies, essential learning materials, and mentorship to keep children enrolled.",
    summary:
      "A structured scholarship and educational retention program funding tuition levies, textbooks, notebooks, school bags, and teacher-guided study hours across Ebonyi public schools.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "In many rural communities across Ebonyi State, school fees, examination levies, and mandatory uniform purchases create financial hurdles that lead to high dropout rates among primary and junior secondary students.",
      "Children from subsistence farming households frequently miss critical terms during planting and harvest seasons, falling behind in foundational reading and numeracy.",
      "Public schools in peripheral districts often lack basic textbooks, leaving children to copy entire lessons by hand from chalkboards without supplementary reading resources.",
    ],
    approach: [
      {
        step: 1,
        title: "School & Ward Identification",
        desc: "Our education desk liaises with headteachers and parent-teacher associations across Ebonyi LGAs to identify students at risk of dropout.",
        dummy: true,
      },
      {
        step: 2,
        title: "Direct Tuition & Levy Settlement",
        desc: "Scholarship levies are remitted directly to the verified school bank accounts to guarantee enrollment throughout the full academic year.",
        dummy: true,
      },
      {
        step: 3,
        title: "Learning Kit Delivery",
        desc: "Each beneficiary receives an individualized academic kit with state-approved textbooks, notebooks, geometric sets, and sturdy shoes.",
        dummy: true,
      },
      {
        step: 4,
        title: "After-School Mentorship Circles",
        desc: "Local volunteer teachers host weekly reading and homework clubs at community centers to support continuous academic improvement.",
        dummy: true,
      },
    ],
    whoWeServe:
      "Primary and secondary pupils from low-income households, orphans, and young learners whose parents are unable to maintain termly levies across public institutions in Ebonyi State.",
    howToApply:
      "School principals, teachers, and guardians may download or submit a Student Support Nomination Form at our Abakaliki secretariat or submit details through our Get Involved portal.",
    stats: [
      {
        value: "640",
        label: "Pupils Kept in School",
        asOf: "January 2026",
        dummy: true,
      },
      {
        value: "18",
        label: "Partner Primary & Secondary Schools",
        asOf: "January 2026",
        dummy: true,
      },
      {
        value: "94%",
        label: "Classroom Retention Rate",
        asOf: "January 2026",
        dummy: true,
      },
    ],
    activities: [
      {
        title: "Tuition and Term Levy Sponsorship",
        desc: "Covering all statutory school fees, examination registrations (including WAEC and NECO for seniors), and school identification badges.",
        dummy: true,
      },
      {
        title: "Curriculum Textbooks and Exercise Packs",
        desc: "Providing textbooks in English, Mathematics, Basic Science, and Civic Studies directly to learners at the start of each academic year.",
        dummy: true,
      },
      {
        title: "School Uniforms and Shoes Provision",
        desc: "Commissioning local Ebonyi tailors and shoemakers to produce sturdy uniforms and footwear so every child attends classes with confidence.",
        dummy: true,
      },
      {
        title: "Weekend Reading and Homework Clubs",
        desc: "Organizing small-group remedial lessons in community libraries and town halls to help students master reading comprehension.",
        dummy: true,
      },
    ],
    stories: [
      {
        title: "From Risk of Dropout to Top of Class in Afikpo",
        quote:
          "My mother could not pay my junior secondary exam fees after my father passed away. Envo Peace covered my levies and bought my science books. Today I am preparing for my senior secondary entrance.",
        author: "Chidiebere (14 years old)",
        location: "Afikpo North LGA",
        outcome: "Enrolled continuously for three consecutive years with honors in mathematics.",
        dummy: true,
      },
    ],
    unitCosts: [
      {
        amount: 20000,
        currency: "NGN",
        gives:
          "Complete school starter pack including uniform, textbooks, notebook pack, and backpack for one term.",
        dummy: true,
      },
      {
        amount: 45000,
        currency: "NGN",
        gives:
          "Full year of tuition levies and stationery sponsorship for an elementary school pupil.",
        dummy: true,
      },
      {
        amount: 110000,
        currency: "NGN",
        gives:
          "Senior secondary examination registration fees (WAEC/NECO) and preparatory textbook kits for a final-year student.",
        dummy: true,
      },
    ],
    faqs: [
      {
        question: "Does the foundation pay money directly to parents?",
        answer:
          "No. All school levy disbursements are made directly to the registered bank accounts of the respective schools, accompanied by verifiable pupil registers.",
        dummy: true,
      },
      {
        question: "What criteria are used to determine which students receive scholarships?",
        answer:
          "Criteria include documented financial distress, orphan status, teacher recommendations regarding attendance, and verified residence in underserved communities.",
        dummy: true,
      },
      {
        question: "Can an individual sponsor a specific pupil through school?",
        answer:
          "Yes. Through our Get Involved page, donors can arrange direct school sponsorships and receive termly academic progress reports.",
        dummy: true,
      },
    ],
    gallery: [
      {
        src: heroImg,
        alt: "School pupils holding new textbooks and backpacks in Ebonyi",
        caption: "Students receiving core curriculum textbooks and exercise kits in Abakaliki.",
        dummy: true,
      },
      {
        src: founderImg,
        alt: "Community gathering celebrating academic scholarship awardees",
        caption:
          "Presentation of annual academic encouragement awards to pupils and their families.",
        dummy: true,
      },
    ],
    relatedSlugs: ["youth", "outreach", "community"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Assistance",
    tagline:
      "Delivering free medical consultations, essential treatments, and preventive screenings.",
    summary:
      "Mobile clinic missions connecting certified Nigerian doctors, nurses, and pharmacists to rural populations lacking nearby health centers, focusing on maternal health, malaria control, and hypertension management.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Many rural wards across Ebonyi State sit more than twenty kilometers from the nearest comprehensive primary healthcare center, making standard preventative visits inaccessible.",
      "Easily treatable conditions like malaria, childhood diarrheal diseases, and high blood pressure frequently advance into life-threatening complications due to delayed intervention and out-of-pocket drug costs.",
      "Expectant mothers in agrarian settlements frequently skip prenatal evaluations, contributing to preventable pregnancy complications.",
    ],
    approach: [
      {
        step: 1,
        title: "Medical Team Deployment",
        desc: "We mobilize volunteer medical officers, certified midwives, and licensed pharmacists equipped with diagnostic and pharmaceutical kits.",
        dummy: true,
      },
      {
        step: 2,
        title: "Comprehensive Health Triage",
        desc: "Every attendee undergoes vital signs screening, rapid malaria diagnostic testing, blood sugar checks, and clinical consultations.",
        dummy: true,
      },
      {
        step: 3,
        title: "Dispensing Prescribed Medications",
        desc: "A mobile pharmacy provides quality-tested anti-malarials, antibiotics, antihypertensive regimens, vitamins, and deworming treatments free of charge.",
        dummy: true,
      },
      {
        step: 4,
        title: "Hospital Referrals & Complex Care",
        desc: "Patients requiring surgical intervention or inpatient care are registered and transported to tertiary health facilities in Abakaliki.",
        dummy: true,
      },
    ],
    whoWeServe:
      "Rural agrarian workers, elderly citizens, pregnant mothers, nursing infants, and vulnerable families living far from public healthcare facilities across Ebonyi State.",
    howToApply:
      "Community leaders can request a mobile health outreach clinic for their village by contacting our health desk at hello@envopeace.org or +234 806 356 3604.",
    stats: [
      {
        value: "3,850",
        label: "Patients Treated Free",
        asOf: "May 2026",
        dummy: true,
      },
      {
        value: "12",
        label: "Mobile Clinic Missions",
        asOf: "May 2026",
        dummy: true,
      },
      {
        value: "1,200+",
        label: "Malaria Test Kits Administered",
        asOf: "May 2026",
        dummy: true,
      },
    ],
    activities: [
      {
        title: "Free Village Mobile Clinics",
        desc: "Conducting full-day clinical screenings and doctor consultations in village community halls and school grounds.",
        dummy: true,
      },
      {
        title: "Maternal and Prenatal Support Kits",
        desc: "Supplying pregnant women with clean delivery mama-kits, prenatal vitamins, iron supplements, and ultrasound clinic referrals.",
        dummy: true,
      },
      {
        title: "Childhood Deworming and Nutrition Screenings",
        desc: "Administering deworming tablets and micronutrient drops to primary-age children while checking for acute malnutrition markers.",
        dummy: true,
      },
      {
        title: "Chronic Illness Monitoring",
        desc: "Conducting regular blood pressure and blood glucose screenings for older residents, paired with 60-day maintenance medications.",
        dummy: true,
      },
    ],
    stories: [
      {
        title: "Early Intervention for Severe Hypertension in Onueke",
        quote:
          "I had severe headaches for three months and assumed it was fatigue from farm work. The doctors at the Envo Peace outreach discovered my blood pressure was dangerously elevated, provided free medication, and explained diet changes that saved my life.",
        author: "Elder Innocent",
        location: "Onueke, Ezza South LGA",
        outcome: "Enrolled in our monthly community blood-pressure check and maintenance program.",
        dummy: true,
      },
    ],
    unitCosts: [
      {
        amount: 12000,
        currency: "NGN",
        gives:
          "Malaria rapid diagnostic testing, complete artemisinin treatment course, and mosquito net for one household.",
        dummy: true,
      },
      {
        amount: 28000,
        currency: "NGN",
        gives:
          "Clean delivery mama-kit with prenatal vitamins, antiseptic cord care, and maternal health essentials.",
        dummy: true,
      },
      {
        amount: 75000,
        currency: "NGN",
        gives:
          "Three months of blood pressure and diabetes maintenance medications for five vulnerable elders.",
        dummy: true,
      },
    ],
    faqs: [
      {
        question: "Are your healthcare professionals fully licensed?",
        answer:
          "Yes. All doctors, nurses, laboratory scientists, and pharmacists participating in our outreach are fully registered with Nigerian professional regulatory bodies (MDCN, NMCN, PCN).",
        dummy: true,
      },
      {
        question: "What happens if a patient has an illness too severe for a mobile clinic?",
        answer:
          "We operate an emergency referral fund that assists patients with ambulance transportation and initial admission costs at the Alex Ekwueme Federal University Teaching Hospital in Abakaliki.",
        dummy: true,
      },
      {
        question: "Do patients pay any fee for registration or medication?",
        answer:
          "Never. All consultations, laboratory screenings, and dispensed medications are provided completely free of charge to beneficiaries.",
        dummy: true,
      },
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Volunteer doctors examining community members during a mobile medical outreach",
        caption: "Medical consultation desks arranged in a rural village square.",
        dummy: true,
      },
      {
        src: founderImg,
        alt: "Community health presentation explaining preventive hygiene practices",
        caption: "Health education session on clean drinking water and maternal hygiene.",
        dummy: true,
      },
    ],
    relatedSlugs: ["outreach", "community", "youth"],
  },
  {
    slug: "youth",
    title: "Youth Empowerment",
    tagline:
      "Equipping young men and women with certified vocational trades, technology skills, and startup grants.",
    summary:
      "Practical skills academies, leadership seminars, and seed financing programs built to transition unemployed and out-of-school youths in Ebonyi into independent business owners.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Youth unemployment and underemployment in Ebonyi State leave hundreds of secondary and tertiary graduates without viable income pathways, contributing to urban migration and economic vulnerability.",
      "Access to commercial bank loans or venture capital is virtually nonexistent for rural youths lacking collateral or credit histories.",
      "Young people with technical potential often lack structured apprenticeships in modern skills such as solar installation, computer hardware, fashion design, and commercial agro-processing.",
    ],
    approach: [
      {
        step: 1,
        title: "Aptitude and Interest Screening",
        desc: "We screen youth applicants across Ebonyi districts to match candidates with vocational training tracks matching market demands.",
        dummy: true,
      },
      {
        step: 2,
        title: "Intensive Hands-on Training",
        desc: "Selected candidates complete a four-month intensive curriculum taught by certified master craftsmen and professional instructors.",
        dummy: true,
      },
      {
        step: 3,
        title: "Business & Financial Literacy",
        desc: "All trainees learn bookkeeping, customer relations, basic digital marketing, and business planning before graduation.",
        dummy: true,
      },
      {
        step: 4,
        title: "Toolkits and Starter Grant Awards",
        desc: "Graduates receive professional toolsets (sewing machines, mechanic toolkits, or solar diagnostic tools) and supervised seed grants.",
        dummy: true,
      },
    ],
    whoWeServe:
      "Unemployed youth aged 18 to 32, young mothers seeking financial independence, and school leavers looking to build viable trade careers in Ebonyi State.",
    howToApply:
      "Cohorts open bi-annually in February and August. Application forms can be submitted online via our Get Involved page or picked up at our Abakaliki headquarters.",
    stats: [
      {
        value: "410",
        label: "Youths Graduated",
        asOf: "March 2026",
        dummy: true,
      },
      {
        value: "85",
        label: "Starter Grants Awarded",
        asOf: "March 2026",
        dummy: true,
      },
      {
        value: "82%",
        label: "Active Businesses at 12 Months",
        asOf: "March 2026",
        dummy: true,
      },
    ],
    activities: [
      {
        title: "Vocational Trades Apprenticeships",
        desc: "Four-month certified training courses in garment construction, modern electrical wiring, solar panel installation, and catering.",
        dummy: true,
      },
      {
        title: "Digital Literacy & ICT Fundamentals",
        desc: "Training young people in computer operations, office document productivity, basic graphic design, and online freelance work.",
        dummy: true,
      },
      {
        title: "Micro-Enterprise Starter Toolkits",
        desc: "Equipping every certified graduate with the physical machinery or toolset required to start serving paying customers immediately.",
        dummy: true,
      },
      {
        title: "Peer Mentorship and Cooperative Circles",
        desc: "Forming alumni cooperative groups where young artisans can pool resources, share workshops, and access collective bulk orders.",
        dummy: true,
      },
    ],
    stories: [
      {
        title: "Building a Fashion Atelier in Abakaliki",
        quote:
          "Before the Envo Peace program, I was struggling to find casual work. The four-month garment design training and the industrial sewing machine I received upon graduation allowed me to launch my own business. Now I employ two apprentices.",
        author: "Blessing",
        location: "Kpirikpiri, Abakaliki",
        outcome: "Runs an independent fashion design studio generating consistent monthly income.",
        dummy: true,
      },
    ],
    unitCosts: [
      {
        amount: 30000,
        currency: "NGN",
        gives:
          "Comprehensive trade apprentice training supplies and protective workshop gear for one trainee.",
        dummy: true,
      },
      {
        amount: 85000,
        currency: "NGN",
        gives:
          "Professional artisan starter toolkit (tailoring machine, electrical toolkit, or commercial baking set).",
        dummy: true,
      },
      {
        amount: 180000,
        currency: "NGN",
        gives:
          "Full four-month scholarship, toolkit package, and initial business registration grant for one young entrepreneur.",
        dummy: true,
      },
    ],
    faqs: [
      {
        question: "Is there any fee required to participate in the training cohort?",
        answer:
          "No. All training fees, workshop materials, and instruction are funded through foundation programs. Trainees are selected based on dedication and commitment.",
        dummy: true,
      },
      {
        question: "Where are the training academies conducted?",
        answer:
          "Vocational cohorts are hosted in partner workshops and training centers across Abakaliki urban, Afikpo, and Onueke.",
        dummy: true,
      },
      {
        question: "Do trainees keep the toolkits after the course?",
        answer:
          "Yes. Graduating trainees retain their toolkits permanently upon completing the program curriculum and presenting their business action plan.",
        dummy: true,
      },
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Young trainees participating in technical workshop training",
        caption: "Youth cohort practical session on technical equipment operation in Abakaliki.",
        dummy: true,
      },
      {
        src: founderImg,
        alt: "Graduation ceremony handing over startup toolkits to young artisans",
        caption: "Presentation of trade starter toolkits to graduating youth artisans.",
        dummy: true,
      },
    ],
    relatedSlugs: ["education", "community", "outreach"],
  },
  {
    slug: "community",
    title: "Community Development",
    tagline:
      "Constructing safe water infrastructure, facilitating peace pacts, and supporting grassroots leadership.",
    summary:
      "Grassroots civil development initiatives focusing on sustainable borehole water points, farmer-herder peace dialogues, and community-led dispute resolution across Ebonyi local councils.",
    heroImage: heroImg,
    dummy: true,
    problem: [
      "Access to clean, potable water remains a persistent challenge in rural Ebonyi communities, forcing children and women to trek multiple kilometers to contaminated streams.",
      "Localized boundary disputes and agricultural land pressures occasionally strain relations between neighboring villages, requiring neutral, credible facilitation to restore trust.",
      "Grassroots community initiatives frequently collapse after outside donors depart due to an absence of locally trained management committees.",
    ],
    approach: [
      {
        step: 1,
        title: "Community Dialogue and Consultation",
        desc: "Before any construction or mediation begins, we convene village elders, youth groups, and women associations to establish collective consensus.",
        dummy: true,
      },
      {
        step: 2,
        title: "Joint Planning and Co-Investment",
        desc: "Communities contribute local labor or site security, guaranteeing collective ownership from the very first day.",
        dummy: true,
      },
      {
        step: 3,
        title: "Infrastructure Execution & Peace Councils",
        desc: "We commission geophysically surveyed solar boreholes and facilitate formal inter-community reconciliation agreements.",
        dummy: true,
      },
      {
        step: 4,
        title: "Elected Caretaker Committee Training",
        desc: "Every installation is handed over to a trained five-person water and peace committee responsible for ongoing maintenance and dispute resolution.",
        dummy: true,
      },
    ],
    whoWeServe:
      "Rural agrarian settlements, border villages experiencing communal friction, and community associations seeking clean water and peaceful collaboration across Ebonyi State.",
    howToApply:
      "Community developmental unions and town councils can submit project proposals or mediation requests to our secretariat at No. 1, Hilltop Rd, Abakaliki.",
    stats: [
      {
        value: "14",
        label: "Clean Water Points Built or Restored",
        asOf: "February 2026",
        dummy: true,
      },
      {
        value: "9",
        label: "Community Peace Pacts Facilitated",
        asOf: "February 2026",
        dummy: true,
      },
      {
        value: "18,000+",
        label: "Residents with Safe Water Access",
        asOf: "February 2026",
        dummy: true,
      },
    ],
    activities: [
      {
        title: "Solar-Powered Water Boreholes",
        desc: "Drilling and installing high-yield solar-powered community water kiosks that deliver clean drinking water throughout the day.",
        dummy: true,
      },
      {
        title: "Inter-Community Peace Forums",
        desc: "Convening respected traditional rulers, youth leaders, and civil authorities for structured mediation on farmland borders and water rights.",
        dummy: true,
      },
      {
        title: "Water Management Committee Training",
        desc: "Training local artisans in pump mechanics, water testing, and routine maintenance to prevent facility downtime.",
        dummy: true,
      },
      {
        title: "Civic Town Halls on Peaceful Coexistence",
        desc: "Hosting educational town hall workshops addressing peaceful conflict resolution, civic responsibility, and youth leadership.",
        dummy: true,
      },
    ],
    stories: [
      {
        title: "Clean Water Restored in an Ishielu Farming Community",
        quote:
          "For years, our women and children had to walk two hours every dawn to fetch murky stream water. Since Envo Peace installed the solar water borehole in our village square, waterborne fever has dropped dramatically and our children arrive at school on time.",
        author: "Chief Ogbonna",
        location: "Ntezi, Ishielu LGA",
        outcome: "A solar borehole serving more than 1,400 village residents operates daily.",
        dummy: true,
      },
    ],
    unitCosts: [
      {
        amount: 40000,
        currency: "NGN",
        gives:
          "Water testing supplies, filtration cartridges, and maintenance servicing for a community water station.",
        dummy: true,
      },
      {
        amount: 95000,
        currency: "NGN",
        gives:
          "Logistical funding and facilitation materials for a bilateral inter-community peace and reconciliation forum.",
        dummy: true,
      },
      {
        amount: 250000,
        currency: "NGN",
        gives:
          "Complete overhaul and solar pump rehabilitation of a broken rural community borehole.",
        dummy: true,
      },
    ],
    faqs: [
      {
        question:
          "How do you ensure a water project does not fall into disrepair after installation?",
        answer:
          "Before drilling begins, the community establishes an elected five-member water management committee. We train them in minor mechanical servicing and establish a community spare-parts fund.",
        dummy: true,
      },
      {
        question: "What is your approach to inter-community disputes?",
        answer:
          "We act as neutral facilitators, bringing traditional custodians, youth leaders, and women groups into dialogue in safe, respectful settings to negotiate sustainable peace agreements.",
        dummy: true,
      },
      {
        question: "Can our town union invite Envo Peace to mediate a local dispute?",
        answer:
          "Yes. Town unions and traditional councils may contact our Abakaliki secretariat to request an exploratory peace assessment.",
        dummy: true,
      },
    ],
    gallery: [
      {
        src: heroImg,
        alt: "Community members celebrating clean water access at a new water point",
        caption:
          "Villagers testing clean drinking water from a newly restored borehole in Ishielu.",
        dummy: true,
      },
      {
        src: founderImg,
        alt: "Traditional leaders and foundation mediators meeting in a village square",
        caption: "Bilateral peace dialogue session facilitated between community representatives.",
        dummy: true,
      },
    ],
    relatedSlugs: ["outreach", "healthcare", "youth"],
  },
];

export function getProgramBySlug(slug: string): ProgramContent | undefined {
  return programsContent.find((p) => p.slug === slug);
}
