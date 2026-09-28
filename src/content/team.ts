import founderPhoto from "@/assets/about-founder.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  initials: string;
  photo?: string;
  isFounder?: boolean;
  dummy?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "founder",
    name: "Alh Nasir Ernest Nwagwu Nwaze (PhD)",
    role: "Founder & Chairman of the Board",
    department: "Executive Leadership",
    bio: "A scholar and civic development advocate dedicated to grassroots transformation across Southeastern Nigeria. He established Envo Peace to bring practical relief, peacebuilding, and economic pathways to rural communities.",
    initials: "NN",
    photo: founderPhoto,
    isFounder: true,
  },
  {
    id: "director-ops",
    name: "Chiamaka Eze",
    role: "Director of Programs & Operations",
    department: "Program Management",
    bio: "An experienced community development practitioner with over a decade of fieldwork in rural humanitarian logistics. She oversees community outreach scheduling, field safety, and inter-agency coordination across all five program pillars.",
    initials: "CE",
    dummy: true,
  },
  {
    id: "head-education",
    name: "Emeka Okoro",
    role: "Head of Educational Initiatives",
    department: "Education & Youth",
    bio: "A veteran educator and former secondary school administrator passionate about literacy access in farming settlements. He leads school partnerships, scholarship disbursements, and after-school reading programs throughout Ebonyi State.",
    initials: "EO",
    dummy: true,
  },
  {
    id: "health-coordinator",
    name: "Dr. Nkemdilim Chukwu",
    role: "Medical Outreach Coordinator",
    department: "Healthcare Services",
    bio: "A public health physician focused on primary healthcare access in hard-to-reach rural communities. She coordinates volunteer clinical officers, pharmaceutical distribution, and maternal health education missions.",
    initials: "NC",
    dummy: true,
  },
  {
    id: "community-liaison",
    name: "Ifeanyi Nweke",
    role: "Community Liaison & Peace Officer",
    department: "Peace & Governance",
    bio: "A grassroots mediator skilled in traditional dispute resolution and communal consensus building. He works directly with council elders, youth associations, and agrarian unions to foster lasting local reconciliation.",
    initials: "IN",
    dummy: true,
  },
  {
    id: "finance-officer",
    name: "Grace Ogbonna",
    role: "Finance & Compliance Officer",
    department: "Finance & Administration",
    bio: "A certified accountant managing project disbursements, supplier verifications, and financial transparency reporting. She ensures rigorous accountability across all donor contributions and vendor agreements.",
    initials: "GO",
    dummy: true,
  },
];
