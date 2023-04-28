export  const typeDefs = `#graphql

type User {
  id: String!
  email: String
  createdAt: DateTime!
  phoneNumber: Int!
  firstName: String!
  lastName: String!
  image: String
  lsocialAccounts: [SocialAccount]
  type: String!
  hasSocialAccountsSocialaccount: SocialAccount @relationship(type: "HAS_SOCIAL_ACCOUNTs", direction: OUT)
  collegeaccountControledBy: CollegeAccount @relationship(type: "CONTROLED_BY", direction: IN)
  studentaccountHasUser: StudentAccount @relationship(type: "HAS_USER", direction: IN)
  employeeaccountHasUser: EmployeeAccount @relationship(type: "HAS_USER", direction: IN)
  adminaccountHasUser: AdminAccount @relationship(type: "HAS_USER", direction: IN)
  guestaccountHasUser: GuestAccount @relationship(type: "HAS_USER", direction: IN)
}

type CollegeAccount {
  id: String!
  name: String!
  description: String!
  reviews: [Review]
  degree: [Degree]
  studyMode: String
  instituteType: [InstituteType]
  campus: [Campus]
  admissionMode: [AdmissionMode]
  awards: [Awards]
  campaigns: [Campaigns]
  applicationLink: String
  broucher: String
  estd: String
  ranking: Int
  ugcApproved: Boolean!
  user: User
  image: String
  endorsedBy: String
  hasReviewsReview: Review @relationship(type: "HAS_REVIEWS", direction: OUT)
  hasAdmissionModeAdmissionmode: AdmissionMode @relationship(type: "HAS_ADMISSION_MODE", direction: OUT)
  hasCampusCampus: Campus @relationship(type: "HAS_CAMPUS", direction: OUT)
  hasDegreeDegree: Degree @relationship(type: "HAS_DEGREE", direction: OUT)
  hasFaqFaq: FAQ @relationship(type: "HAS_FAQ", direction: OUT)
  hasAwardsAwards: Awards @relationship(type: "HAS_AWARDS", direction: OUT)
  hasEventsEvent: Event @relationship(type: "HAS_EVENTS", direction: OUT)
  hasAdsAccountAdsaccount: AdsAccount @relationship(type: "HAS_ADS_ACCOUNT", direction: OUT, properties: "HasAdsAccount")
  hasSocialAccountsSocialaccount: SocialAccount @relationship(type: "HAS_SOCIAL_ACCOUNTS", direction: OUT)
  controledByUser: User @relationship(type: "CONTROLED_BY", direction: OUT)
  hasLeadsLeads: Leads @relationship(type: "HAS_LEADS", direction: OUT)
  businessAddressAddress: Address @relationship(type: "BUSINESS_ADDRESS", direction: OUT)
}


enum InstituteType {
PRIVATE
PUBLIC

}

type Campus {
  id: String!
  location: [Address]
  faculties: [Faculties]
  reviews: [Review]
  hostel: [Hostel]
  collegeaccountHasCampus: CollegeAccount @relationship(type: "HAS_CAMPUS", direction: IN)
  hasHostelsHostel: Hostel @relationship(type: "HAS_HOSTELS", direction: OUT)
  hasReviewsReview: Review @relationship(type: "HAS_REVIEWS", direction: OUT)
  hasFacultiesFaculties: Faculties @relationship(type: "HAS_FACULTIES", direction: OUT)
  hasAddressAddress: Address @relationship(type: "HAS_ADDRESS", direction: OUT)
}

type Faculties {
  id: String
  user: [User]
  phoneNumber: Int!
  firstName: String!
  lastName: String!
  position: String
  speciality: String
  campusHasFaculties: Campus @relationship(type: "HAS_FACULTIES", direction: IN)
}

type AdmissionMode {
  name: String!
  id: String!
  collegeaccountHasAdmissionMode: CollegeAccount @relationship(type: "HAS_ADMISSION_MODE", direction: IN)
}

type Degree {
  id: String!
  name: String!
  specialization: [DegreeSpecialization]
  collegeaccountHasDegree: CollegeAccount @relationship(type: "HAS_DEGREE", direction: IN)
  hasDegreeSpecializationsDegreespecialization: DegreeSpecialization @relationship(type: "HAS_DEGREE_SPECIALIZATIONS", direction: OUT)
}

type DegreeSpecialization {
  id: String!
  name: String!
  elegibilityCriteria: [ElegibilityCriteria]
  feeStructure: [FeeStructure]
  reviews: [Review]
  degreeHasDegreeSpecializations: Degree @relationship(type: "HAS_DEGREE_SPECIALIZATIONS", direction: IN)
  requiredElegibilityElegibilitycriteria: ElegibilityCriteria @relationship(type: "REQUIRED_ELEGIBILITY", direction: OUT)
  hasEnteranceExamExam: Exam @relationship(type: "HAS_ENTERANCE_EXAM", direction: OUT)
  hasFeeStructureFeestructure: FeeStructure @relationship(type: "HAS_FEE_STRUCTURE", direction: OUT)
}

type Review {
  id: String!
  review: String
  collegeaccountHasReviews: CollegeAccount @relationship(type: "HAS_REVIEWS", direction: IN)
  campusHasReviews: Campus @relationship(type: "HAS_REVIEWS", direction: IN)
  reviewedByStudentaccount: StudentAccount @relationship(type: "REVIEWED_BY", direction: OUT)
  hostelHasReview: Hostel @relationship(type: "HAS_REVIEW", direction: IN)
  studentaccountHasReviewed: StudentAccount @relationship(type: "HAS_REVIEWED", direction: IN)
}

type ElegibilityCriteria {
  id: String!
  name: String!
  degreespecializationRequiredElegibility: DegreeSpecialization @relationship(type: "REQUIRED_ELEGIBILITY", direction: IN)
}

type Awards {
  id: String!
  name: String!
  collegeaccountHasAwards: CollegeAccount @relationship(type: "HAS_AWARDS", direction: IN)
}

type FAQ {
  id: String!
  qus: String
  ans: String
  collegeaccountHasFaq: CollegeAccount @relationship(type: "HAS_FAQ", direction: IN)
}

type Hostel {
  id: String!
  name: String
  campusHasHostels: Campus @relationship(type: "HAS_HOSTELS", direction: IN)
  hasReviewReview: Review @relationship(type: "HAS_REVIEW", direction: OUT)
}

type Event {
  id: String!
  name: String
  startAt: DateTime
  endAt: DateTime
  image: String
  description: String
  price: Int!
  city: String
  collegeaccountHasEvents: CollegeAccount @relationship(type: "HAS_EVENTS", direction: IN)
}

type Address {
  city: String!
  state: String!
  country: String!
  zipcode: Int!
  collegeaccountBusinessAddress: CollegeAccount @relationship(type: "BUSINESS_ADDRESS", direction: IN)
  campusHasAddress: Campus @relationship(type: "HAS_ADDRESS", direction: IN)
}

type Exam {
  id: String!
  name: String!
  applicationStart: DateTime
  applicationEnd: DateTime
  examDate: DateTime
  image:String
  result: DateTime
  status: String
  description: String
  process: String
  level: String
  mode: String
  degreespecializationHasEnteranceExam: DegreeSpecialization @relationship(type: "HAS_ENTERANCE_EXAM", direction: IN)
  adminaccountControledBy: AdminAccount @relationship(type: "CONTROLED_BY", direction: IN)
}

type SocialAccount {
  id: String!
  url: String!
  title: String!
  type: String
  userHasSocialAccounts: User @relationship(type: "HAS_SOCIAL_ACCOUNTs", direction: IN)
  collegeaccountHasSocialAccounts: CollegeAccount @relationship(type: "HAS_SOCIAL_ACCOUNTS", direction: IN)
}

type AdsAccount {
  collegeName: String!
  yourName: String
  businessEmail: String!
  collegeaccountHasAdsAccount: CollegeAccount @relationship(type: "HAS_ADS_ACCOUNT", direction: IN, properties: "HasAdsAccount")
  hasCampaingsCampaigns: Campaigns @relationship(type: "HAS_CAMPAINGS", direction: OUT)
  hasAdsPromoPackagesAdspromopackage: AdsPromoPackage @relationship(type: "HAS_ADS_PROMO_PACKAGES", direction: OUT, properties: "HasAdsPromoPackages")
}

type Campaigns {
  id: String!
  type: String!
  adsaccountHasCampaings: AdsAccount @relationship(type: "HAS_CAMPAINGS", direction: IN)
  hasAdSetsAdsets: AdSets @relationship(type: "HAS_AD_SETS", direction: OUT, properties: "HasAdSets")
}

type AdSets {
  id: String!
  name: String!
  campaignsHasAdSets: Campaigns @relationship(type: "HAS_AD_SETS", direction: IN, properties: "HasAdSets")
  hasAdsAds: Ads @relationship(type: "HAS_ADS", direction: OUT, properties: "HasAds")
}

type Ads {
  image: String
  collegeName: String
  url: String
  adsetsHasAds: AdSets @relationship(type: "HAS_ADS", direction: IN, properties: "HasAds")
}

type AdsPromoPackage {
  name: String!
  adsaccountHasAdsPromoPackages: AdsAccount @relationship(type: "HAS_ADS_PROMO_PACKAGES", direction: IN, properties: "HasAdsPromoPackages")
}

type StudentAccount {
  id: String!
  user: User!
  reviewReviewedBy: Review @relationship(type: "REVIEWED_BY", direction: IN)
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  subscribedToCourses: Courses @relationship(type: "SUBSCRIBED_TO", direction: OUT)
  subscribedChatChannelChat: Chat @relationship(type: "SUBSCRIBED_CHAT_CHANNEL", direction: OUT)
  hasReviewedReview: Review @relationship(type: "HAS_REVIEWED", direction: OUT)
}

type EmployeeAccount {
  id: String!
  user: User!
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  subscribedChatChannelChat: Chat @relationship(type: "SUBSCRIBED_CHAT_CHANNEL", direction: OUT)
  leadsAssistedBy: Leads @relationship(type: "ASSISTED_BY", direction: IN)
}

type AdminAccount {
  id: String!
  user: User!
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  createdByCourses: Courses @relationship(type: "CREATED_BY", direction: OUT)
  controledByExam: Exam @relationship(type: "CONTROLED_BY", direction: OUT)
}

type GuestAccount {
  id: String!
  user: User!
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
}

type Leads {
  id: String!
  createdAt: DateTime!
  phoneNumber: String
  email: String
  degree: [Degree]
  collegeaccountHasLeads: CollegeAccount @relationship(type: "HAS_LEADS", direction: IN)
  leadChatChannelChat: Chat @relationship(type: "LEAD_CHAT_CHANNEL", direction: OUT)
  calledCalls: Calls @relationship(type: "CALLED", direction: OUT)
  hasTasksTasks: Tasks @relationship(type: "HAS_TASKS", direction: OUT)
  assistedByEmployeeaccount: EmployeeAccount @relationship(type: "ASSISTED_BY", direction: OUT)
}

type Chat {
  id: String!
  studentaccountSubscribedChatChannel: StudentAccount @relationship(type: "SUBSCRIBED_CHAT_CHANNEL", direction: IN)
  employeeaccountSubscribedChatChannel: EmployeeAccount @relationship(type: "SUBSCRIBED_CHAT_CHANNEL", direction: IN)
  leadsLeadChatChannel: Leads @relationship(type: "LEAD_CHAT_CHANNEL", direction: IN)
}

type Calls {
  id: String!
  leadsCalled: Leads @relationship(type: "CALLED", direction: IN)
}

type Tasks {
  id: String!
  leadsHasTasks: Leads @relationship(type: "HAS_TASKS", direction: IN)
}

type Courses {
  id: String!
  studentaccountSubscribedTo: StudentAccount @relationship(type: "SUBSCRIBED_TO", direction: IN)
  adminaccountCreatedBy: AdminAccount @relationship(type: "CREATED_BY", direction: IN)
}

type FeeStructure {
  id: String!
  description: String!
  degreespecializationHasFeeStructure: DegreeSpecialization @relationship(type: "HAS_FEE_STRUCTURE", direction: IN)
}

interface HasAdSets {
  id: String!
  createdAt: DateTime!
}

interface HasAds {
  id: String
}

interface HasAdsAccount {
  id: String!
  createdAt: DateTime!
}

interface HasAdsPromoPackages {
  id: String!
  isActive: Boolean!
  costPrice: String!
  appliedCouponCode: String!
  discountedPrice: String!
}



`;


