export const typeDefs = `
type User {
  id: String!
  email: String
  createdAt: DateTime!
  phoneNumber: Int!
  firstName: String!
  lastName: String!
  profileImageUrl: String
  coverImageUrl: String
  currentUserMode: String!
  hasSocialLinksSociallink: SocialLink @relationship(type: "HAS_SOCIAL_LINKS", direction: OUT)
  hasCollectionCollection: Collection @relationship(type: "HAS_COLLECTION", direction: OUT)
  hasCollectionDownload: Download @relationship(type: "HAS_COLLECTION", direction: OUT)
  collegeHasUser: College @relationship(type: "HAS_USER", direction: IN)
  facultiesHasUser: Faculties @relationship(type: "HAS_USER", direction: IN)
  reviewReviewedBy: Review @relationship(type: "REVIEWED_BY", direction: IN)
  studentHasUser: Student @relationship(type: "HAS_USER", direction: IN)
  employeeHasUser: Employee @relationship(type: "HAS_USER", direction: IN)
  adminHasUser: Admin @relationship(type: "HAS_USER", direction: IN)
  guestHasUser: Guest @relationship(type: "HAS_USER", direction: IN)
  chatSubscribedBy: Chat @relationship(type: "SUBSCRIBED_BY", direction: IN)
  recruiterHasUser: Recruiter @relationship(type: "HAS_USER", direction: IN)
}

type College {
  id: String!
  name: String!
  description: String!
  instituteOwnershipType: [InstituteOwnershipType]
  yearOfEstablishment: String
  rank: Int
  applicationLink: String
  applicationFees: Int
  type: String
  affiliation: String
  recognizedBy: String
  hasReviewsReview: Review @relationship(type: "HAS_REVIEWS", direction: OUT)
  hasCampusCampus: Campus @relationship(type: "HAS_CAMPUS", direction: OUT)
  hasFaqFaq: FAQ @relationship(type: "HAS_FAQ", direction: OUT)
  hasAwardsAwards: Awards @relationship(type: "HAS_AWARDS", direction: OUT)
  hasEventsEvent: Event @relationship(type: "HAS_EVENTS", direction: OUT)
  hasAdsAccountAdsaccount: AdsAccount @relationship(type: "HAS_ADS_ACCOUNT", direction: OUT, properties: "HasAdsAccount")
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  hasLeadsLeads: Leads @relationship(type: "HAS_LEADS", direction: OUT)
  hasRecruterRecruiter: Recruiter @relationship(type: "HAS_RECRUTER", direction: OUT)
  hasBlogsBlog: Blog @relationship(type: "HAS_BLOGS", direction: OUT)
  hasRatingRating: Rating @relationship(type: "HAS_RATING", direction: OUT)
  hasAccreditation: Accreditation @relationship(type: "HAS", direction: OUT)
}

enum InstituteOwnershipType  {
  PUBLIC
  PRIVATE
}

type Campus {
  id: String!
  coverImageUrl: String
  is_main: Boolean!
  imageUrls: [String]
  videosUrls: [String!]
  rating: Int
  areaInAcres: String
  collegeHasCampus: College @relationship(type: "HAS_CAMPUS", direction: IN)
  hasHostelsHostel: Hostel @relationship(type: "HAS_HOSTELS", direction: OUT)
  hasReviewsReview: Review @relationship(type: "HAS_REVIEWS", direction: OUT)
  hasFacultiesFaculties: Faculties @relationship(type: "HAS_FACULTIES", direction: OUT)
  hasAddress: Address @relationship(type: "HAS", direction: OUT)
  hasFacalitiesFacalities: Facalities @relationship(type: "HAS_FACALITIES", direction: OUT)
  hasDegreeDegree: Degree @relationship(type: "HAS_DEGREE", direction: OUT)
  hasAdmissionModeAdmissionmode: AdmissionMode @relationship(type: "HAS_ADMISSION_MODE", direction: OUT)
  collectionHasCampus: Collection @relationship(type: "HAS_CAMPUS", direction: IN)
  downloadHasCampus: Download @relationship(type: "HAS_CAMPUS", direction: IN)
}

type Faculties {
  id: String
  description: String!
  coverImageUrl: String
  profileImageUrl: String
  firstName: String!
  lastName: String!
  campusHasFaculties: Campus @relationship(type: "HAS_FACULTIES", direction: IN)
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
}

type AdmissionMode {
  name: String!
  id: String!
  campusHasAdmissionMode: Campus @relationship(type: "HAS_ADMISSION_MODE", direction: IN)
}

type Degree {
  id: String!
  name: String!
  brochure: [Brochure]
  campusHasDegree: Campus @relationship(type: "HAS_DEGREE", direction: IN)
  hasDegreeSpecializationsDegreespecialization: DegreeSpecialization @relationship(type: "HAS_DEGREE_SPECIALIZATIONS", direction: OUT)
}

type DegreeSpecialization {
  id: String!
  name: String!
  elegibilityCriteria: [ElegibilityCriteria]
  feeStructure: [FeeStructure]
  reviews: [Review]
  seats: Int
  duration: String!
  degreeHasDegreeSpecializations: Degree @relationship(type: "HAS_DEGREE_SPECIALIZATIONS", direction: IN)
  requiredElegibilityElegibilitycriteria: ElegibilityCriteria @relationship(type: "REQUIRED_ELEGIBILITY", direction: OUT)
  hasEnteranceExamExam: Exam @relationship(type: "HAS_ENTERANCE_EXAM", direction: OUT)
  hasFeeStructureFeestructure: FeeStructure @relationship(type: "HAS_FEE_STRUCTURE", direction: OUT)
  hasBrochureBrochure: Brochure @relationship(type: "HAS_BROCHURE", direction: OUT)
  feestructureHasDegreeSpecialization: FeeStructure @relationship(type: "HAS_DEGREE_SPECIALIZATION", direction: IN)
}

type Review {
  id: String!
  text: String
  user: User
  collegeHasReviews: College @relationship(type: "HAS_REVIEWS", direction: IN)
  campusHasReviews: Campus @relationship(type: "HAS_REVIEWS", direction: IN)
  reviewedByUser: User @relationship(type: "REVIEWED_BY", direction: OUT)
  hasRatingRating: Rating @relationship(type: "HAS_RATING", direction: OUT)
  hostelHas: Hostel @relationship(type: "HAS", direction: IN)
}

type ElegibilityCriteria {
  id: String!
  name: String!
  description: String!
  degreespecializationRequiredElegibility: DegreeSpecialization @relationship(type: "REQUIRED_ELEGIBILITY", direction: IN)
}

type Awards {
  id: String!
  name: String!
  description: String
  collegeHasAwards: College @relationship(type: "HAS_AWARDS", direction: IN)
}

type FAQ {
  id: String!
  question: String
  answer: String
  collegeHasFaq: College @relationship(type: "HAS_FAQ", direction: IN)
}

type Hostel {
  id: String!
  name: String
  campusHasHostels: Campus @relationship(type: "HAS_HOSTELS", direction: IN)
  hasReview: Review @relationship(type: "HAS", direction: OUT)
}

type Event {
  id: String!
  name: String!
  startAt: DateTime
  endAt: DateTime
  image: String
  description: String
  location: String
  collegeHasEvents: College @relationship(type: "HAS_EVENTS", direction: IN)
  collectionHasEvents: Collection @relationship(type: "HAS_EVENTS", direction: IN)
  downloadHasEvents: Download @relationship(type: "HAS_EVENTS", direction: IN)
}

type Address {
  state: State!
  zipcode: Int!
  lineFirst: String
  lineSecond: String
  campusHas: Campus @relationship(type: "HAS", direction: IN)
  hasStateState: State @relationship(type: "HAS_STATE", direction: OUT)
  hasCountryCountry: Country @relationship(type: "HAS_COUNTRY", direction: OUT)
  hasCity: City @relationship(type: "HAS", direction: OUT)
}

type Exam {
  id: String!
  name: String!
  applicationStart: DateTime
  result: DateTime
  status: String
  description: String
  process: String
  level: String
  mode: String
  examData: DateTime
  degreespecializationHasEnteranceExam: DegreeSpecialization @relationship(type: "HAS_ENTERANCE_EXAM", direction: IN)
}

type SocialLink {
  id: String!
  url: String!
  title: String!
  type: String
  userHasSocialLinks: User @relationship(type: "HAS_SOCIAL_LINKS", direction: IN)
}

type AdsAccount {
  id: String!
  isActive: Boolean
  ads_accout_id: String!
  collegeHasAdsAccount: College @relationship(type: "HAS_ADS_ACCOUNT", direction: IN, properties: "HasAdsAccount")
  hasCampaingsCampaigns: Campaigns @relationship(type: "HAS_CAMPAINGS", direction: OUT)
  hasAdsPromoPackagesAdspromopackage: AdsPromoPackage @relationship(type: "HAS_ADS_PROMO_PACKAGES", direction: OUT, properties: "HasAdsPromoPackages")
}

type Campaigns {
  id: String!
  type: String!
  name: String!
  adsaccountHasCampaings: AdsAccount @relationship(type: "HAS_CAMPAINGS", direction: IN)
  hasAdSetsAdsets: AdSets @relationship(type: "HAS_AD_SETS", direction: OUT, properties: "HasAdSets")
}

type AdSets {
  id: String!
  name: String!
  status: String
  timeRange: String
  campaignsHasAdSets: Campaigns @relationship(type: "HAS_AD_SETS", direction: IN, properties: "HasAdSets")
  hasAdsAds: Ads @relationship(type: "HAS_ADS", direction: OUT, properties: "HasAds")
}

type Ads {
  id: String
  type: String
  adsetsHasAds: AdSets @relationship(type: "HAS_ADS", direction: IN, properties: "HasAds")
  generatedLeads: Leads @relationship(type: "GENERATED", direction: OUT)
}

type AdsPromoPackage {
  name: String!
  id: String!
  adsaccountHasAdsPromoPackages: AdsAccount @relationship(type: "HAS_ADS_PROMO_PACKAGES", direction: IN, properties: "HasAdsPromoPackages")
}

type Student {
  id: String!
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  hasCourseCourse: Course @relationship(type: "HAS_Course", direction: OUT)
}

type Employee {
  id: String!
  type: String!
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  leadsAssignedTo: Leads @relationship(type: "ASSIGNED_TO", direction: IN)
}

type Admin {
  id: String!
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
  createdByCourse: Course @relationship(type: "CREATED_BY", direction: OUT)
}

type Guest {
  id: String!
  user: User!
  ip: Int
  deviceId: String
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
}

type Leads {
  id: String!
  createdAt: DateTime!
  calls: Calls
  tasks: Tasks
  chats: [Chat]
  employee: [Employee]
  collegeHasLeads: College @relationship(type: "HAS_LEADS", direction: IN)
  adsGenerated: Ads @relationship(type: "GENERATED", direction: IN)
  hasChatChat: Chat @relationship(type: "HAS_CHAT", direction: OUT)
  calledCalls: Calls @relationship(type: "CALLED", direction: OUT)
  hasTasksTasks: Tasks @relationship(type: "HAS_TASKS", direction: OUT)
  assignedToEmployee: Employee @relationship(type: "ASSIGNED_TO", direction: OUT)
}

type Chat {
  id: String!
  leadsHasChat: Leads @relationship(type: "HAS_CHAT", direction: IN)
  subscribedByUser: User @relationship(type: "SUBSCRIBED_BY", direction: OUT)
}

type Calls {
  id: String!
  phoneNumber: String!
  leadsCalled: Leads @relationship(type: "CALLED", direction: IN)
}

type Tasks {
  id: String!
  name: String!
  description: String!
  leadsHasTasks: Leads @relationship(type: "HAS_TASKS", direction: IN)
}

type Course {
  id: String!
  studentHasCourse: Student @relationship(type: "HAS_Course", direction: IN)
  adminCreatedBy: Admin @relationship(type: "CREATED_BY", direction: IN)
}

type Blog {
  id: String!
  content: String!
  coverImageUrl: String!
  tags: [Tags]
  createdBy: User
  title: String
  collegeHasBlogs: College @relationship(type: "HAS_BLOGS", direction: IN)
  hasTagTags: Tags @relationship(type: "HAS_TAG", direction: OUT)
  collectionHasBlogs: Collection @relationship(type: "HAS_BLOGS", direction: IN)
  downloadHasBlogs: Download @relationship(type: "HAS_BLOGS", direction: IN)
}

type Tags {
  id: String!
  name: String!
  blogHasTag: Blog @relationship(type: "HAS_TAG", direction: IN)
}

type Brochure {
  id: String!
  link: String!
  name: String!
  coverImageUrl: String
  degreespecializationHasBrochure: DegreeSpecialization @relationship(type: "HAS_BROCHURE", direction: IN)
}

type Recruiter {
  id: String!
  name: String
  image: String
  collegeHasRecruter: College @relationship(type: "HAS_RECRUTER", direction: IN)
  hasUserUser: User @relationship(type: "HAS_USER", direction: OUT)
}

type State {
  id: String!
  name: String!
  country: Country!
  addressHasState: Address @relationship(type: "HAS_STATE", direction: IN)
  hasCity: City @relationship(type: "HAS", direction: OUT)
  hasCountry: Country @relationship(type: "HAS", direction: OUT)
  countryHas: Country @relationship(type: "HAS", direction: IN)
  cityHas: City @relationship(type: "HAS", direction: IN)
}

type Country {
  id: String!
  name: String!
  code: String!
  addressHasCountry: Address @relationship(type: "HAS_COUNTRY", direction: IN)
  stateHas: State @relationship(type: "HAS", direction: IN)
  hasState: State @relationship(type: "HAS", direction: OUT)
}

type City {
  id: String!
  name: String!
  state: State!
  addressHas: Address @relationship(type: "HAS", direction: IN)
  stateHas: State @relationship(type: "HAS", direction: IN)
  hasState: State @relationship(type: "HAS", direction: OUT)
}

type Facalities {
  id: String
  description: String!
  coverImageUrl: String
  type: String!
  campusHasFacalities: Campus @relationship(type: "HAS_FACALITIES", direction: IN)
}

type FeeStructure {
  id: String!
  degreeSpecialization: [DegreeSpecialization]
  yearlyFeeBreakdown: [YearlyBreakup]
  semesterWiseFeeBreakdown: [SemesterBreakup]
  tags: [String]
  totalFee: Int
  currency: String
  degreespecializationHasFeeStructure: DegreeSpecialization @relationship(type: "HAS_FEE_STRUCTURE", direction: IN)
  hasYearlyBreakupYearlybreakup: YearlyBreakup @relationship(type: "HAS_YEARLY_BREAKUP", direction: OUT)
  hasSemesterwiseBreakupSemesterbreakup: SemesterBreakup @relationship(type: "HAS_SEMESTERWISE_BREAKUP", direction: OUT)
  hasDegreeSpecializationDegreespecialization: DegreeSpecialization @relationship(type: "HAS_DEGREE_SPECIALIZATION", direction: OUT)
}

type YearlyBreakup {
  id: String!
  feestructureHasYearlyBreakup: FeeStructure @relationship(type: "HAS_YEARLY_BREAKUP", direction: IN)
  hasFeeBreakdownFeebreakdown: FeeBreakdown @relationship(type: "HAS_FEE_BREAKDOWN", direction: OUT)
}

type FeeBreakdown {
  id: String!
  type: String!
  amount: String!
  currency: String
  yearlybreakupHasFeeBreakdown: YearlyBreakup @relationship(type: "HAS_FEE_BREAKDOWN", direction: IN)
  semesterbreakupHasFeeBreakdown: SemesterBreakup @relationship(type: "HAS_FEE_BREAKDOWN", direction: IN)
}

type SemesterBreakup {
  id: String!
  feestructureHasSemesterwiseBreakup: FeeStructure @relationship(type: "HAS_SEMESTERWISE_BREAKUP", direction: IN)
  hasFeeBreakdownFeebreakdown: FeeBreakdown @relationship(type: "HAS_FEE_BREAKDOWN", direction: OUT)
}

type Rating {
  id: String!
  review: String
  user: User
  collegeHasRating: College @relationship(type: "HAS_RATING", direction: IN)
  reviewHasRating: Review @relationship(type: "HAS_RATING", direction: IN)
}

type Collection {
  id: String!
  userHasCollection: User @relationship(type: "HAS_COLLECTION", direction: IN)
  hasCampusCampus: Campus @relationship(type: "HAS_CAMPUS", direction: OUT)
  hasBlogsBlog: Blog @relationship(type: "HAS_BLOGS", direction: OUT)
  hasEventsEvent: Event @relationship(type: "HAS_EVENTS", direction: OUT)
}

type Download {
  id: String!
  type: String
  info: String 
  userHasCollection: User @relationship(type: "HAS_COLLECTION", direction: IN)
  hasCampusCampus: Campus @relationship(type: "HAS_CAMPUS", direction: OUT)
  hasBlogsBlog: Blog @relationship(type: "HAS_BLOGS", direction: OUT)
  hasEventsEvent: Event @relationship(type: "HAS_EVENTS", direction: OUT)
}

type Accreditation {
  naac: String
  nba: Boolean
  collegeHas: College @relationship(type: "HAS", direction: IN)
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
