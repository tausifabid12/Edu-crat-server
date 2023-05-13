export const typeDefs = `
type User {
  id: String!
  email: String
  createdAt: DateTime
  phoneNumber: Int
  firstName: String
  lastName: String
  profileImageUrl: String
  coverImageUrl: String
  currentUserMode: String
  bio: String
  hasSociallink: SocialLink @relationship(type: "HAS", direction: OUT)
  hasCollection: Collection @relationship(type: "HAS", direction: OUT)
  hasDownload: Download @relationship(type: "HAS", direction: OUT)
  collegeHas: College @relationship(type: "HAS", direction: IN)
  facultiesHas: Faculties @relationship(type: "HAS", direction: IN)
  reviewReviewedBy: Review @relationship(type: "REVIEWED_BY", direction: IN)
  studentHas: Student @relationship(type: "HAS", direction: IN)
  employeeHas: Employee @relationship(type: "HAS", direction: IN)
  adminHas: Admin @relationship(type: "HAS", direction: IN)
  guestHas: Guest @relationship(type: "HAS", direction: IN)
  chatSubscribedBy: Chat @relationship(type: "SUBSCRIBED_BY", direction: IN)
  recruiterHas: Recruiter @relationship(type: "HAS", direction: IN)
}

type College {
  id: String!
  name: String!
  description: String!
  instituteOwnershipType: InstituteOwnershipType
  yearOfEstablishment: String
  rank: Int
  applicationLink: String
  applicationFees: Int
  type: String
  affiliation: String
  CollegeLogo:String
  recognizedBy: String
  hasReview: Review @relationship(type: "HAS", direction: OUT)
  hasCampus: Campus @relationship(type: "HAS", direction: OUT)
  hasFaq: FAQ @relationship(type: "HAS", direction: OUT)
  hasAwards: Awards @relationship(type: "HAS", direction: OUT)
  hasEvent: Event @relationship(type: "HAS", direction: OUT)
  hasAdsaccount: AdsAccount @relationship(type: "HAS", direction: OUT, properties: "Has2")
  hasUser: User @relationship(type: "HAS", direction: OUT)
  hasLeads: Leads @relationship(type: "HAS", direction: OUT)
  hasRecruiter: Recruiter @relationship(type: "HAS", direction: OUT)
  hasBlog: Blog @relationship(type: "HAS", direction: OUT)
  hasRating: Rating @relationship(type: "HAS", direction: OUT)
  hasAccreditation: Accreditation @relationship(type: "HAS", direction: OUT)
}



enum InstituteOwnershipType{
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
  name: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
  hasHostel: Hostel @relationship(type: "HAS", direction: OUT)
  hasReview: Review @relationship(type: "HAS", direction: OUT)
  hasFaculties: Faculties @relationship(type: "HAS", direction: OUT)
  hasAddress: Address @relationship(type: "HAS", direction: OUT)
  hasFacilities: Facilities @relationship(type: "HAS", direction: OUT)
  hasDegreeDegree: Degree @relationship(type: "HAS", direction: OUT)
  hasAdmissionmode: AdmissionMode @relationship(type: "HAS", direction: OUT)
  collectionHas: Collection @relationship(type: "HAS", direction: IN)
  downloadHas: Download @relationship(type: "HAS", direction: IN)
}

type Faculties {
  id: String
  description: String!
  coverImageUrl: String
  profileImageUrl: String
  firstName: String!
  lastName: String!
  campusHas: Campus @relationship(type: "HAS", direction: IN)
  hasUser: User @relationship(type: "HAS", direction: OUT)
}

type AdmissionMode {
  name: String!
  id: String!
  campusHas: Campus @relationship(type: "HAS", direction: IN)
}

type Degree {
  id: String!
  name: String!
  brochure: String
  description: String
  campusHasDegree: Campus @relationship(type: "HAS", direction: IN)
  hasDegreespecialization: DegreeSpecialization @relationship(type: "HAS", direction: OUT)
}

type DegreeSpecialization {
  id: String!
  name: String!
  elegibilityCriteria: [ElegibilityCriteria]
  feeStructure: [FeeStructure]
  reviews: [Review]
  seats: Int
  duration: String!
  degreeHas: Degree @relationship(type: "HAS", direction: IN)
  requiredElegibilitycriteria: ElegibilityCriteria @relationship(type: "REQUIRED", direction: OUT)
  hasExam: Exam @relationship(type: "HAS", direction: OUT)
  hasFeestructure: FeeStructure @relationship(type: "HAS", direction: OUT)
  hasBrochure: Brochure @relationship(type: "HAS", direction: OUT)
  feestructureHas: FeeStructure @relationship(type: "HAS", direction: IN)
}

type Review {
  id: String!
  text: String
  user: User
  collegeHas: College @relationship(type: "HAS", direction: IN)
  campusHas: Campus @relationship(type: "HAS", direction: IN)
  reviewedByUser: User @relationship(type: "REVIEWED_BY", direction: OUT)
  hasRating: Rating @relationship(type: "HAS", direction: OUT)
  hostelHas: Hostel @relationship(type: "HAS", direction: IN)
}

type ElegibilityCriteria {
  id: String!
  name: String!
  description: String!
  degreespecializationRequired: DegreeSpecialization @relationship(type: "REQUIRED", direction: IN)
}

type Awards {
  id: String!
  name: String!
  description: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type FAQ {
  id: String!
  question: String
  answer: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type Hostel {
  id: String!
  name: String
  campusHas: Campus @relationship(type: "HAS", direction: IN)
  hasReview: Review @relationship(type: "HAS", direction: OUT)
}

type Event {
  id: String!
  name: String!
  price: Int
  startAt: DateTime
  endAt: DateTime
  image: String
  description: String
  location: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
  collectionHas: Collection @relationship(type: "HAS", direction: IN)
  downloadHas: Download @relationship(type: "HAS", direction: IN)
}

type Address {
  state: State!
  zipcode: Int!
  lineFirst: String
  lineSecond: String
  campusHas: Campus @relationship(type: "HAS", direction: IN)
  hasState: State @relationship(type: "HAS", direction: OUT)
  hasCountry: Country @relationship(type: "HAS", direction: OUT)
  hasCity: City @relationship(type: "HAS", direction: OUT)
}

type Exam {
  id: String!
  name: String!
  image: String
  status: String
  description: String
  process: String
  level: String
  mode: String
  degreespecializationHas: DegreeSpecialization @relationship(type: "HAS", direction: IN)
}

type SocialLink {
  id: String!
  url: String!
  title: String!
  type: String
  userHas: User @relationship(type: "HAS", direction: IN)
}

type AdsAccount {
  id: String!
  isActive: Boolean
  adsSccoutId: String!
  collegeHas: College @relationship(type: "HAS", direction: IN, properties: "Has2")
  hasCampaigns: Campaigns @relationship(type: "HAS", direction: OUT)
  hasAdsPromoPackagesAdspromopackage: AdsPromoPackage @relationship(type: "HAS", direction: OUT, properties: "HasAdsPromoPackages")
}

type Campaigns {
  id: String!
  type: String!
  name: String!
  adsaccountHas: AdsAccount @relationship(type: "HAS", direction: IN)
  hasAdsets: AdSets @relationship(type: "HAS", direction: OUT, properties: "Has")
}

type AdSets {
  id: String!
  name: String!
  status: String
  timeRange: [DateTime]
  campaignsHas: Campaigns @relationship(type: "HAS", direction: IN, properties: "Has")
  hasAds: Ads @relationship(type: "HAS", direction: OUT, properties: "Has1")
}

type Ads {
  id: String
  type: String
  adsetsHas: AdSets @relationship(type: "HAS", direction: IN, properties: "Has1")
  generatedLeads: Leads @relationship(type: "GENERATED", direction: OUT)
}

type AdsPromoPackage {
  name: String!
  id: String!
  adsaccountHasAdsPromoPackages: AdsAccount @relationship(type: "HAS", direction: IN, properties: "HasAdsPromoPackages")
}

type Student {
  id: String!
  school: String
  stream: String
  hasUser: User @relationship(type: "HAS", direction: OUT)
  hasCourse: Course @relationship(type: "HAS", direction: OUT)
}

type Employee {
  id: String!
  type: String!
  hasUser: User @relationship(type: "HAS", direction: OUT)
  leadsAssignedTo: Leads @relationship(type: "ASSIGNED_TO", direction: IN)
}

type Admin {
  id: String!
  hasUser: User @relationship(type: "HAS", direction: OUT)
  createdByCourse: Course @relationship(type: "CREATED_BY", direction: OUT)
}

type Guest {
  id: String!
  user: User!
  ip: Int
  deviceId: String
  hasUser: User @relationship(type: "HAS", direction: OUT)
}

type Leads {
  id: String!
  createdAt: DateTime!
  calls: Calls
  tasks: Tasks
  chats: [Chat]
  employee: [Employee]
  collegeHas: College @relationship(type: "HAS", direction: IN)
  adsGenerated: Ads @relationship(type: "GENERATED", direction: IN)
  hasChat: Chat @relationship(type: "HAS", direction: OUT)
  calledCalls: Calls @relationship(type: "CALLED", direction: OUT)
  hasTasks: Tasks @relationship(type: "HAS", direction: OUT)
  assignedToEmployee: Employee @relationship(type: "ASSIGNED_TO", direction: OUT)
}

type Chat {
  id: String!
  leadsHas: Leads @relationship(type: "HAS", direction: IN)
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
  leadsHas: Leads @relationship(type: "HAS", direction: IN)
}

type Course {
  id: String!
  studentHas: Student @relationship(type: "HAS", direction: IN)
  adminCreatedBy: Admin @relationship(type: "CREATED_BY", direction: IN)
}

type Blog {
  id: String!
  content: String!
  coverImageUrl: String!
  tags: [Tags]
  createdBy: User
  title: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
  hasTags: Tags @relationship(type: "HAS", direction: OUT)
  collectionHas: Collection @relationship(type: "HAS", direction: IN)
  downloadHas: Download @relationship(type: "HAS", direction: IN)
}

type Tags {
  id: String!
  name: String!
  blogHas: Blog @relationship(type: "HAS", direction: IN)
}

type Brochure {
  id: String!
  link: String!
  name: String!
  coverImageUrl: String
  degreespecializationHas: DegreeSpecialization @relationship(type: "HAS", direction: IN)
}

type Recruiter {
  id: String!
  name: String
  image: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
  hasUser: User @relationship(type: "HAS", direction: OUT)
}

type State {
  id: String!
  name: String!
  country: Country!
  addressHas: Address @relationship(type: "HAS", direction: IN)
  hasCity: City @relationship(type: "HAS", direction: OUT)
  hasCountry: Country @relationship(type: "HAS", direction: OUT)
  countryHas: Country @relationship(type: "HAS", direction: IN)
  cityHas: City @relationship(type: "HAS", direction: IN)
}

type Country {
  id: String!
  name: String!
  code: String!
  addressHas: Address @relationship(type: "HAS", direction: IN)
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

type Facilities {
  id: String
  description: String!
  coverImageUrl: String
  type: String!
  status:Boolean
  campusHas: Campus @relationship(type: "HAS", direction: IN)
}

type FeeStructure {
  id: String!
  degreeSpecialization: [DegreeSpecialization]
  yearlyFeeBreakdown: [FeeBreakdown]
  semesterWiseFeeBreakdown: [SemesterBreakup]
  tags: [String]
  totalFee: Int
  currency: String
  degreespecializationHas: DegreeSpecialization @relationship(type: "HAS", direction: IN)
  hasYearlyBreakupYearlybreakup: YearlyBreakup @relationship(type: "HAS", direction: OUT)
  hasSemesterwiseBreakupSemesterbreakup: SemesterBreakup @relationship(type: "HAS", direction: OUT)
  hasDegreespecialization: DegreeSpecialization @relationship(type: "HAS", direction: OUT)
}

type YearlyBreakup {
  id: String!
  feestructureHasYearlyBreakup: FeeStructure @relationship(type: "HAS", direction: IN)
  hasFeeBreakdownFeebreakdown: FeeBreakdown @relationship(type: "HAS", direction: OUT)
}

type FeeBreakdown {
  id: String!
  type: String!
  amount: String!
  currency: String
  yearlybreakupHasFeeBreakdown: YearlyBreakup @relationship(type: "HAS", direction: IN)
  semesterbreakupHasFeeBreakdown: SemesterBreakup @relationship(type: "HAS", direction: IN)
}

type SemesterBreakup {
  id: String!
  feestructureHasSemesterwiseBreakup: FeeStructure @relationship(type: "HAS", direction: IN)
  hasFeeBreakdownFeebreakdown: FeeBreakdown @relationship(type: "HAS", direction: OUT)
}

type Rating {
  id: String!
  review: String
  user: User
  collegeHas: College @relationship(type: "HAS", direction: IN)
  reviewHas: Review @relationship(type: "HAS", direction: IN)
}

type Collection {
  id: String!
  userHas: User @relationship(type: "HAS", direction: IN)
  hasCampus: Campus @relationship(type: "HAS", direction: OUT)
  hasBlog: Blog @relationship(type: "HAS", direction: OUT)
  hasEvent: Event @relationship(type: "HAS", direction: OUT)
}

type Download {
  id: String!
  type: String
  info: String
  userHas: User @relationship(type: "HAS", direction: IN)
  hasCampus: Campus @relationship(type: "HAS", direction: OUT)
  hasBlog: Blog @relationship(type: "HAS", direction: OUT)
  hasEvent: Event @relationship(type: "HAS", direction: OUT)
}

type Accreditation {
  naac: String
  nba: Boolean
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

interface Has {
  id: String!
  createdAt: DateTime!
}

interface Has1 {
  id: String
}

interface Has2 {
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
