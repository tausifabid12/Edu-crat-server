export  const typeDefs = `
enum  AccountTypeEnum{
  ADMIN
  EMPLOYEE
  COLLEGE
  UNIVERSITY
  STUDENT
  GUEST
}

enum InstituteTypeEnum {
  PUBLIC
  PRIVATE
  DEEMED
  OTHER
}

enum AdmissionModeEnum {
  ONLINE
  OFFLINE
  BOTH
}

enum  LeadTypeEnum {
  CALL
  EMAIL
  CHAT
}

enum SocialLinkTypeEnum {
  FACEBOOK
  LINKEDIN
  TWITTER
}


 enum QuotaEnum {
  AI
  STATE
  BOTH
 }


enum GenderEnum {
MALE
FEMALE
OTHER

}
enum SeatTypeEnum {
  AI
  STATE
  BOTH
}


enum AdsTypeEnum {
  IMAGE
  VIDEO
  AUDIO
  SLIDER
  LISTING
}

enum ExamTypeEnum{
  ENTRANCE
  DIRECT
  JEE
  NEET
  CAT
  GMAT
  GRE
  GATE
  IELTS
  TOEFL
}


type User {
  id: String! @unique
  email: String
  createdAt: DateTime!
  phoneNumber: String
  firstName: String!
  lastName: String!
  guest: Boolean
  accountType: AccountTypeEnum
  bio: String
  gender: String
  dateOfBirth: DateTime
  hasEmployeeaccount: EmployeeAccount @relationship(type: "HAS", direction: OUT)
  hasManyAdminaccount: [AdminAccount!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasSociallink: SocialLink @relationship(type: "HAS", direction: OUT)
  hasManyUniversityaccount: [UniversityAccount!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyCollegeaccount: [CollegeAccount!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyStudentaccount: [StudentAccount!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type EmployeeAccount {
  id: String! @unique
  userHas: User @relationship(type: "HAS", direction: IN)
}

type AdminAccount! {
  id: String! @unique
  userHasMany: [User]! @relationship(type: "HAS_MANY", direction: IN)
}

type CollegeAccount {
  id: String! @unique
  hasCollege: College @relationship(type: "HAS", direction: OUT)
  hasAdsservice: [AdsService!]! @relationship(type: "HAS", direction: OUT)
}

type UniversityAccount {
  id: String! @unique
  name: String! @unique
  universityType: String
  website: String
  establishmentYear: Int
  slug: String
  management: String
  universityId: String
  hasCollege: College @relationship(type: "HAS", direction: OUT)
  hasLocation: Location @relationship(type: "HAS", direction: OUT)
  hasMetadata: Metadata @relationship(type: "HAS", direction: OUT)
  hasRanking: Ranking @relationship(type: "HAS", direction: OUT)
  hasManyProgram: [Program!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type StudentAccount {
  id: String! @unique
  enrolledCertificationcourse: [CertificationCourse!]! @relationship(type: "ENROLLED", direction: OUT)
}

type SocialLink {
  id: String! @unique
  type: SocialLinkTypeEnum
  profileUrl: String
  show: Boolean
  userHas: User @relationship(type: "HAS", direction: IN)
}

type College {
  id: String! @unique
  collegeId: String @unique
  universityId: String
  name: String!
  description: String
  affiliation: String
  ugcApprovalStatus: Boolean
  ugcRecognitionNumber: String
  website: String
  establishmentYear: Int
  accreditation: String
  notableAlumni: [String!]
  ugcGuidelinesCompliance: Boolean
  ugcInspections: [String!]
  images: [String!]
  additionalNotes: String
  admissionModes: [AdmissionModeEnum!]
  instituteType: InstituteTypeEnum
  broucherDownloadLink: String
  collegeType: String
  management: String
  specializedIn: String
  isForeign: Boolean
  applicationUrl: String
  financialAidUrl: String
  coverImageUrl: String
  logoUrl: String
  slug: String
  hasLocation: Location @relationship(type: "HAS", direction: OUT)
  hasRanking: Ranking @relationship(type: "HAS", direction: OUT)
  hasCampus: Campus @relationship(type: "HAS", direction: OUT)
  hasManyReview: [Review!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyAward: [Award!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyEvent: [Event!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyFaq: [Faq!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasAdmissionmode: AdmissionMode @relationship(type: "HAS", direction: OUT)
  hasAdmissioncriteria: AdmissionCriteria @relationship(type: "HAS", direction: OUT)
  hasManyAlmunai: [Almunai!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyCertificationcourse: [CertificationCourse!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasPlacementhistory: PlacementHistory @relationship(type: "HAS", direction: OUT)
  hasManyCollegelevelscholarship: [CollegeLevelScholarship!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasDirectcourse: [DirectCourse!]! @relationship(type: "HAS", direction: OUT)
  hasManyFacility: [Facility!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyRecruiter: [Recruiter!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyProgram: [Program!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasMetadata: Metadata @relationship(type: "HAS", direction: OUT)
}

type Location {
  id: String! @unique
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type NirfRanking {
  id: String! @unique
  overallRank: Int
  universityRank: Int
  collegeRank: Int
  researchInstitutionRank: Int
  engneeringRank: Int
  managementRank: Int
  pharmacyRank: Int
  medicalRank: Int
  dentalRank: Int
  lawRank: Int
  architectureAndPlaningRank: Int
  agricultureAndAlliedRank: Int
  innovationRank: Int
  rankingHas: Ranking @relationship(type: "HAS", direction: IN)
}

type QsWorldRanking {
  id: String! @unique
  rankingHas: Ranking @relationship(type: "HAS", direction: IN)
}

type TimesHigherEducationWorldRanking {
  id: String! @unique
  rankingHas: Ranking @relationship(type: "HAS", direction: IN)
}

type OutlookIcareIndiaRanking {
  id: String! @unique
  rankingHas: Ranking @relationship(type: "HAS", direction: IN)
}

type Ranking {
  id: String! @unique
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type Ranking {
  id: String! @unique
  hasNirfranking: NirfRanking @relationship(type: "HAS", direction: OUT)
  hasQsworldranking: QsWorldRanking @relationship(type: "HAS", direction: OUT)
  hasTimeshighereducationworldranking: TimesHigherEducationWorldRanking @relationship(type: "HAS", direction: OUT)
  hasOutlookicareindiaranking: OutlookIcareIndiaRanking @relationship(type: "HAS", direction: OUT)
  hasNbaranking: NbaRanking @relationship(type: "HAS", direction: OUT)
}

type NbaRanking {
  id: String! @unique
  rankingHas: Ranking @relationship(type: "HAS", direction: IN)
}

type Campus {
  id: String! @unique
  name: String!
  facilities: [String!]
  website: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
  hasLocation: Location @relationship(type: "HAS", direction: OUT)
  hasContactinformation: ContactInformation @relationship(type: "HAS", direction: OUT)
  hasManyFaculties: [Faculties!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyReview: [Review!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasManyHostel: [Hostel!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type Location {
  id: String! @unique
  city: String
  state: String
  pinCode: String
  addreseLine1: String
  addressLine2: String
  landmark: String
  campusHas: Campus @relationship(type: "HAS", direction: IN)
}

type ContactInformation {
  id: String! @unique
  phone: String
  email: String
  address: String
}

type ContactInformation {
  id: String! @unique
  campusHas: Campus @relationship(type: "HAS", direction: IN)
}

type Review {
  id: String! @unique
  hasUser: User @relationship(type: "HAS", direction: OUT)
}

type Review! {
  id: String! @unique
  title: String!
  content: String
  rating: Float!
  createdAt: DateTime!
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type Faculties! {
  id: String! @unique
  firstName: String!
  lastName: String!
  experianceInYears: Int
  campusHasMany: [Campus]! @relationship(type: "HAS_MANY", direction: IN)
}

type Award {
  id: String! @unique
}

type Award! {
  id: String! @unique
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type Program {
  id: String! @unique
  programName: String
  degreeType: String
  durationYears: Int!
  hasCourse: Course @relationship(type: "HAS", direction: OUT)
  hasProgramfees: ProgramFees  @relationship(type: "HAS", direction: OUT)
  hasManyExam: [Exam!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasElegibilitycriteria: ElegibilityCriteria @relationship(type: "HAS", direction: OUT)
  hasManyProgramlevelscholarship: [ProgramLevelScholarship!]! @relationship(type: "HAS_MANY", direction: OUT)
  hasFieldofstady: FieldofStady @relationship(type: "HAS", direction: OUT)
  hasManyJosamap: [JosaMap!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type Course {
  id: String! @unique
  courseCode: String
  courseName: String
  description: String
  credits: Int
  syllabus: [String!]
  programHas: Program @relationship(type: "HAS", direction: IN)
  prerequisitesManyCourse: [Course!]! @relationship(type: "PREREQUISITES_MANY", direction: OUT)
}

type Course! {
  id: String! @unique
  description: String
  name: String!
  coursePrerequisitesMany: [Course]! @relationship(type: "PREREQUISITES_MANY", direction: IN)
}

type ProgramFees  {
  id: String! @unique
  tutionFeeInr: String
  programHas: Program @relationship(type: "HAS", direction: IN)
  additionalFee: Fee @relationship(type: "ADDITIONAL", direction: OUT)
}

type Fee {
  id: String! @unique
  name: String
  amountInr: String
  description: String
  isOnetime: Boolean
  programfeesAdditional: ProgramFees  @relationship(type: "ADDITIONAL", direction: IN)
}

type AdsService! {
  id: String! @unique
  collegeaccountHas: [CollegeAccount]! @relationship(type: "HAS", direction: IN)
}

type AdsService {
  id: String! @unique
  active: Boolean
  hasCampaigns: Campaigns @relationship(type: "HAS", direction: OUT)
}

type Campaigns {
  id: String! @unique
  type: String!
  adsserviceHas: AdsService @relationship(type: "HAS", direction: IN)
  hasAdsets: AdSets @relationship(type: "HAS", direction: OUT)
}

type AdSets {
  id: String! @unique
  name: String!
  campaignsHas: Campaigns @relationship(type: "HAS", direction: IN)
  hasAds: Ads @relationship(type: "HAS", direction: OUT)
}

type Ads {
  imageUrl: String
  videoUrl: String
  type: AdsTypeEnum
  startDate: DateTime
  endDate: DateTime
  budget: Int
  program: String
  id: String! @unique
  adsetsHas: AdSets @relationship(type: "HAS", direction: IN)
  hasAdstat: AdStat @relationship(type: "HAS", direction: OUT)
}

type Event! {
  id: String! @unique
  name: String
  imageUrl: String
  category: String
  detailPageContent: String
  createdAt: DateTime
  startDate: DateTime
  endDate: DateTime
  registrationUrl: String
  price: Int
  Location: String
  slug: String
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type Faq {
  id: String! @unique
}

type Faq! {
  id: String! @unique
  answer: String!
  question: String!
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type Degree {
  id: String! @unique
  name: String!
  type: String!
}

type City! {
  id: String! @unique
  name: String! @unique
  country: String
  zip: String
  imageUrl: String
  stateHasMany: [State]! @relationship(type: "HAS_MANY", direction: IN)
}

type Country {
  id: String! @unique
  name: String!
  continent: String
  imageUrl: String
  hasManyState: [State!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type State! {
  id: String! @unique
  name: String! @unique
  imageUrl: String
  countryHasMany: [Country]! @relationship(type: "HAS_MANY", direction: IN)
}

type Exam! {
  id: String! @unique
  name: String!
  description: String
  date: DateTime
  type: ExamTypeEnum
  programHasMany: [Program]! @relationship(type: "HAS_MANY", direction: IN)
}

type ElegibilityCriteria {
  id: String! @unique
  programHas: Program @relationship(type: "HAS", direction: IN)
}

type College {
  id: String! @unique
  universityaccountHas: UniversityAccount @relationship(type: "HAS", direction: IN)
}

type College {
  id: String! @unique
  collegeaccountHas: CollegeAccount @relationship(type: "HAS", direction: IN)
}

type Review! {
  id: String! @unique
  campusHasMany: [Campus]! @relationship(type: "HAS_MANY", direction: IN)
}

type Hostel! {
  id: String! @unique
  campusHasMany: [Campus]! @relationship(type: "HAS_MANY", direction: IN)
}

type AdmissionMode {
  id: String! @unique
  name: String!
  description: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type Hostel {
  id: String! @unique
  hasLocation: Location @relationship(type: "HAS", direction: OUT)
  hasManyReview: [Review!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type Location {
  id: String! @unique
  hostelHas: Hostel @relationship(type: "HAS", direction: IN)
}

type Review! {
  id: String! @unique
  hostelHasMany: [Hostel]! @relationship(type: "HAS_MANY", direction: IN)
}

type Lead {
  id: String! @unique
  type: LeadTypeEnum!
  email: String
  phone: String
  message: String
  resolved: Boolean
  status: String
  hasManyTask: [Task!]! @relationship(type: "HAS_MANY", direction: OUT)
  assignedToEmployeeaccount: EmployeeAccount @relationship(type: "ASSIGNED_TO", direction: OUT)
  channelChat: Chat @relationship(type: "CHANNEL", direction: OUT)
  hasLeadmetadata: LeadMetadata @relationship(type: "HAS", direction: OUT)
}

type Task! {
  id: String! @unique
  completed: Boolean!
  leadHasMany: [Lead]! @relationship(type: "HAS_MANY", direction: IN)
}

type EmployeeAccount {
  id: String! @unique
  leadAssignedTo: Lead @relationship(type: "ASSIGNED_TO", direction: IN)
}

type Chat {
  id: String! @unique
  leadChannel: Lead @relationship(type: "CHANNEL", direction: IN)
}

type Chat {
  id: String! @unique
  hasManyMessage: [Message!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type Message! {
  id: String! @unique
  fromUserEmail: String
  toUserEmail: String
  timestamp: DateTime!
  textContent: String
  images: [String!]
  fileUrls: [String!]
  seen: Boolean
  seenTimestamp: DateTime
  chatHasMany: [Chat]! @relationship(type: "HAS_MANY", direction: IN)
}

type CertificationCourse! {
  id: String! @unique
  name: String!
  studentaccountEnrolled: [StudentAccount]! @relationship(type: "ENROLLED", direction: IN)
}

type AdmissionCriteria {
  id: String! @unique
  name: String!
  description: String
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type Author {
  id: String! @unique
  name: String!
  email: String @unique
  bio: String
  hasPost: [Post!]! @relationship(type: "HAS", direction: OUT)
}

type Post {
  id: String! @unique
  title: String!
  slug: String!
  htmlContent: String
  publishedAt: DateTime!
  updatedAt: DateTime
  hasCategory: Category  @relationship(type: "HAS", direction: OUT)
  hasComment: [Comment!]! @relationship(type: "HAS", direction: OUT)
  authorUser: User @relationship(type: "AUTHOR", direction: OUT)
}

type Category  {
  id: String! @unique
  name: String!
  description: String
  postHas: Post @relationship(type: "HAS", direction: IN)
}

type Comment! {
  id: String! @unique
  text: String
  postedAt: DateTime!
  postHas: [Post]! @relationship(type: "HAS", direction: IN)
}

type User {
  id: String! @unique
  text: String
  postedAt: DateTime!
  postAuthor: Post @relationship(type: "AUTHOR", direction: IN)
}

type Almunai! {
  id: String! @unique
  firstName: String!
  lastName: String!
  session: String
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type CertificationCourse! {
  id: String! @unique
  name: String!
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type Review {
  id: String! @unique
}

type User {
  id: String! @unique
  reviewHas: Review @relationship(type: "HAS", direction: IN)
}

type Facility {
  id: String! @unique
  name: String!
  imageUrl: String
}

type PlacementHistory {
  id: String! @unique
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type CollegeLevelScholarship! {
  id: String! @unique
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type DirectCourse! {
  id: String! @unique
  collegeHas: [College]! @relationship(type: "HAS", direction: IN)
}

type ProgramLevelScholarship! {
  id: String! @unique
  programHasMany: [Program]! @relationship(type: "HAS_MANY", direction: IN)
}

type Recruiter {
  id: String! @unique
  name: String!
  description: String
  email: String @unique
  phoneNumber: String
  website: String
  hasPlacementhistory: PlacementHistory @relationship(type: "HAS", direction: OUT)
}

type PlacementHistory {
  id: String! @unique
  recruiterHas: Recruiter @relationship(type: "HAS", direction: IN)
  hasPackagerange: PackageRange @relationship(type: "HAS", direction: OUT)
}

type Facility! {
  id: String! @unique
  name: String!
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type PackageRange {
  id: String! @unique
  minPackage: Int
  maxPackage: Int
  placementhistoryHas: PlacementHistory @relationship(type: "HAS", direction: IN)
}

type Recruiter! {
  id: String! @unique
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type ProgramMetaData {
  id: String! @unique
  hasPostgrad: PostGrad @relationship(type: "has", direction: OUT)
  hasUndergrad: UnderGrad @relationship(type: "has", direction: OUT)
  hasStudentstrength: StudentStrength @relationship(type: "HAS", direction: OUT)
  metadataHas: Metadata @relationship(type: "HAS", direction: IN)
}

type PostGrad {
  id: String! @unique
  threeYearProgram: Boolean
  twoYearProgram: Boolean
  fourYearProgram: Boolean
  session: String
  firstYearStudentsIntake : Int
  studentsPlaced: Int
  medianSalaryPlaced: Int
  fiveYearProgram: Boolean
  twoYearProgramStudentCount: Int
  threeYearProgramStudentCount: Int
  FourYearProgramStudentCount: Int
  fiveYearProgramStudentCount: Int
  programmetadataHas: ProgramMetaData @relationship(type: "has", direction: IN)
}

type UnderGrad {
  id: String! @unique
  threeYearProgram: Boolean
  twoYearProgram: Boolean
  fourYearProgram: Boolean
  session: String
  studentsPlaced: Int
  medianSalaryPlaced: Int
  fiveYearProgram: Boolean
  FourYearProgramStudentCount: Int
  threeYearProgramStudentCount: Int
  fiveYearProgramStudentCount: Int
  twoYearProgramStudentCount: Int
  programmetadataHas: ProgramMetaData @relationship(type: "has", direction: IN)
}

type StudentStrength {
  id: String! @unique
  male: Int
  female: Int
  total: Int
  wihtInState: Int
  outSideState: Int
  outsideCountry: Int
  echonomicallyBackward: Int
  sociallyChallenge: Int
  totalStudents: Int
  totalSelectedHeigherStudies: Int
  totalStudentWithFullFreeTutionFee: Int
  programmetadataHas: ProgramMetaData @relationship(type: "HAS", direction: IN)
}

type ExtrametaData {
  id: String! @unique
  capitalAssetsExpenditureAmount: String
  laboratoriesEquipmentExpenditureAmount: String
  libraryExpenditureAmount: String
  financialYear: String
  facultyCount: String
  metadataHas: Metadata @relationship(type: "HAS", direction: IN)
}

type FieldofStady {
  id: String! @unique
  name: String!
}

type FieldofStady {
  id: String! @unique
  name: String!
  programHas: Program @relationship(type: "HAS", direction: IN)
}

type Post! {
  id: String! @unique
  authorHas: [Author]! @relationship(type: "HAS", direction: IN)
}

type Location {
  id: String! @unique
  pinCode: String
  addreseLine1: String
  addressLine2: String
  landmark: String
  latiture: String
  longitude: String
  hasState: State @relationship(type: "HAS", direction: OUT)
  hasCity: City @relationship(type: "HAS", direction: OUT)
  hasCountry: Country @relationship(type: "HAS", direction: OUT)
}

type State {
  id: String! @unique
  locationHas: Location @relationship(type: "HAS", direction: IN)
}

type City {
  id: String! @unique
  locationHas: Location @relationship(type: "HAS", direction: IN)
}

type Country {
  id: String! @unique
  locationHas: Location @relationship(type: "HAS", direction: IN)
}

type Program! {
  id: String! @unique
  collegeHasMany: [College]! @relationship(type: "HAS_MANY", direction: IN)
}

type UniversityAccount! {
  id: String! @unique
  userHasMany: [User]! @relationship(type: "HAS_MANY", direction: IN)
}

type CollegeAccount! {
  id: String! @unique
  userHasMany: [User]! @relationship(type: "HAS_MANY", direction: IN)
}

type JosaMap! {
  round: Int
  opningRank: Int
  closingRank: Int
  gender: GenderEnum
  seatType: SeatTypeEnum
  quta: String
  session: String
  programHasMany: [Program]! @relationship(type: "HAS_MANY", direction: IN)
}

type Metadata {
  id: String! @unique
  collegeHas: College @relationship(type: "HAS", direction: IN)
}

type Metadata {
  id: String! @unique
  hasProgrammetadata: ProgramMetaData @relationship(type: "HAS", direction: OUT)
  hasExtrametadata: ExtrametaData @relationship(type: "HAS", direction: OUT)
}

type LeadMetadata {
  id: String! @unique
  keywords: [String!]
  tags: [String!]
  notifierLabel: String
  leadHas: Lead @relationship(type: "HAS", direction: IN)
}

type AdStat {
  id: String! @unique
  viewCount: Int
  clickCount: Int
  playCount: Int
  adsHas: Ads @relationship(type: "HAS", direction: IN)
}

type StudentAccount! {
  id: String! @unique
  userHasMany: [User]! @relationship(type: "HAS_MANY", direction: IN)
}

type State {
  id: String! @unique
  hasManyCity: [City!]! @relationship(type: "HAS_MANY", direction: OUT)
}

type Location {
  id: String! @unique
  universityaccountHas: UniversityAccount @relationship(type: "HAS", direction: IN)
}

type Metadata {
  id: String! @unique
  universityaccountHas: UniversityAccount @relationship(type: "HAS", direction: IN)
}

type Ranking {
  id: String! @unique
  universityaccountHas: UniversityAccount @relationship(type: "HAS", direction: IN)
}

type Program! {
  id: String! @unique
  universityaccountHasMany: [UniversityAccount]! @relationship(type: "HAS_MANY", direction: IN)
}
`