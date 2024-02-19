import { v4 as uuid } from "uuid";

export const DashboardMenu = [
  // {
  // 	id: uuid(),
  // 	title: 'Authentication',
  // 	icon: 'lock',
  // 	children: [
  // 		{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
  // 		{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
  // 		{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}
  // 	]
  // },
  {
    id: uuid(),
    title: "Dashboard",
    icon: "home",
    link: "/",
  },
  {
    id: uuid(),
    title: "Academic",
    icon: "home",
    children: [
      {
        id: uuid(),
        link: "#",
        title: "Master",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Academic Data",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/bankdetails",
                name: "Bank Details",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/academicyear",
                name: "Academic Year",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/feecategory",
                name: "Fee Category",
              },
              // {
              //   id: uuid(),
              //   link: "/pages/academic/master/academicdata/studenttype",
              //   name: "Student Type",
              // },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/concession",
                name: "Concession",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/medium",
                name: "Medium",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/division",
                name: "Division",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/certificate",
                name: "Certificate",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/academicdata/occupation",
                name: "Occupation",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Common Master",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/castedetails",
                name: "Caste Details",
              },
              // { id: uuid(), link: '/pages/academic/master/commonmaster/castecategory', name: 'Caste Category' },
              // { id: uuid(), link: '/pages/academic/master/commonmaster/subcaste', name: 'Sub Caste' },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/title",
                name: "Title",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/gender",
                name: "Gender",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/religion",
                name: "Religion",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/maritalstatus",
                name: "Marital Status",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/handicap",
                name: "Handicap",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/bloodgroup",
                name: "Blood Group",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/universityandboard",
                name: "University And Board",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/nationality",
                name: "Nationality",
              },
              {
                id: uuid(),
                link: "/pages/academic/master/commonmaster/mothertongue",
                name: "Mother Tongue",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Pre Admission",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Course",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/year",
                name: "Year",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/semester",
                name: "Semester",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/degree",
                name: "Degree",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/faculty",
                name: "Faculty",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/feepattern",
                name: "Fee Pattern",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/coursepattern",
                name: "Course Pattern",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/cashbook",
                name: "Cashbook",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/feehead",
                name: "Fee Head",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/feeheadgrouping",
                name: "Fee Head Grouping",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/feeheadaccountmapping",
                name: "Fee Head Account Mapping",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/cashbookrights",
                name: "Cashbook Rights",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/copycashbookrights",
                name: "Copy Cashbook Rights",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/coursecertificate",
                name: "Course Certificate",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/usermapping",
                name: "User Mapping",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/course/prnnumberconfig",
                name: "PRN Number Config",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Fees",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/preadmission/fees/basiccourse",
                name: "Basic Course",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/fees/coursecreation",
                name: "Course Creation",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/fees/courseupdation",
                name: "Course Updation",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/fees/coursesection",
                name: "Course Section",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/fees/standardfee",
                name: "Standard Fee",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/fees/copystandardfee",
                name: "Copy Standard Fee",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Other Fees Definition",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/preadmission/otherfeesdefination/generalfine",
                name: "General Fine",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/otherfeesdefination/installmentfees",
                name: "Installment Fees",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/otherfeesdefination/studentwiseinstallmentfees",
                name: "Studentwise Installment Fees",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/otherfeesdefination/certificatefee",
                name: "Certificate Fee",
              },
              {
                id: uuid(),
                link: "/pages/academic/preadmission/otherfeesdefination/studentwiseinstallmentclear",
                name: "Studentwise Installment Clear",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Transaction",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Collect Fees",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/studentadmission",
                name: "Student Admission",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/feescollection",
                name: "Fees Collection",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/receiptreconcillation",
                name: "Receipt Reconcilliation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/outstandingfees",
                name: "Outstanding Fees",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/feesconcession",
                name: "Fees Concession",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/feesrefund",
                name: "Fees Refund",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/scholarshipentry",
                name: "Scholarship Entry",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/demandupdation",
                name: "Demand Updation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/bulkotherfeesdemand",
                name: "Bulk Other Fees Demand",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/bulkadmfeesdemandupdation",
                name: "Bulk Adm Fees Demand Updation",
              }, //Student Type
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/yearendregisteredstudentdemand",
                name: "Year End & Registered Stud Demand",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/collectfees/studentdirectadmissionye",
                name: "Student Direct Admission YE",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Other Fees",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/otherfees",
                name: "Other Fees",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/generalfinecollection",
                name: "General Fine Collection",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/otherfeesdemandupdation",
                name: "Other Fees Demand Updation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/studentotherdemandcancel",
                name: "Student Other Demand Cancel",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/otherfees/feeheadwisebulkotherdemandupdation",
                name: "FeeHead Wise Bulk Other Demand Updation",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Receipts",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/admissioncancellation",
                name: "Admission Cancellation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/cancelyearendstudent",
                name: "Cancel Year End Student",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/receiptcancellationandreprint",
                name: "Receipt Cancellation And Reprint",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/adminreceiptcancellationandreprint",
                name: "Admin Receipt Cancellation And Reprint",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/coursechange",
                name: "Course Change",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/feetypechange",
                name: "Fee Type Change",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/receipts/onlinepaymentrequery",
                name: "Online Payment Requery",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Data Entry",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/studentinformation",
                name: "Student Information",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/studentsubjectupdation",
                name: "Student Subject Updation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/rollnoupdation",
                name: "Roll No Updation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/bulkupdation",
                name: "Bulk Updation",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/selectedfieldreport",
                name: "Selected Field Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/outstandingfeesremainder",
                name: "Outstanding Fees Remiander",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/scholarshipdataentry",
                name: "Scholarship Data Entry",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/bulkemail",
                name: "Bulk Email",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/scholarshipdetailsentry",
                name: "Scholarship Details Entry",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/railwayconcessionapproval",
                name: "Railway Concession Approval",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/studentdocumentdetails",
                name: "Student Document Details",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/studentdocumentreceipt",
                name: "Student Document Receipt",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/prnallotment",
                name: "PRN Allotment",
              },
              {
                id: uuid(),
                link: "/pages/academic/transaction/dataentry/subjectgroupwisesection",
                name: "Subject Groupwise Section",
              },
              // { id: uuid(), link: '/pages/academic/transaction/dataentry/sectionallocation', name: 'Section Allocation(YE/PROADM)' },
              // { id: uuid(), link: '', name: 'Subject Groupwise Roll No' },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Fees Reports",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Fees Report",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/dcrreport",
                name: "DCR Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/demandreport",
                name: "Demand Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/studentledger",
                name: "Student Ledger",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/bankreport",
                name: "Bank Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/receiptcancellationreport",
                name: "Receipt Cancellation Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/userwisecollectionreport",
                name: "Userwise Collection Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/outstandingfeesreport",
                name: "Outstanding Fees Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/admissioncancellationreport",
                name: "Admission Cancellation Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/feesrefundreport",
                name: "Fees Refund Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/feeswriteoffreport",
                name: "Fees WriteOff Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/feesreceivablereport",
                name: "Fees Receivable Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/adjustmentreceiptreport",
                name: "Adjustment Receipt Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/outstandingsummaryreport",
                name: "Outstanding Summary Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/coursewisedcrreport",
                name: "Course Wise DCR Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/challanreconciliationreport",
                name: "Challan Reconciliation Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/coursewiseinstallmentoutstandingreport",
                name: "CourseWise Installment Outstanding Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/feesreconciliationreport",
                name: "Fees Reconciliation Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/duereport",
                name: "Due Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/feesreport/bulkreceiptreprint",
                name: "Bulk Receipt Reprint",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "Online Payment Report",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/feesreports/onlinepaymentreport/paymentgatewaytransactionsreport",
                name: "Payment Gateway Transactions Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/onlinepaymentreport/settlementdcrreport",
                name: "Settlement DCR Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/onlinepaymentreport/settlementdatewisedcr",
                name: "Settlement DateWise DCR",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/onlinepaymentreport/cashbookwisesettlementdcr",
                name: "CashbookWise Settlement DCR",
              },
              {
                id: uuid(),
                link: "/pages/academic/feesreports/onlinepaymentreport/settledunsettledreceipt",
                name: "Settled Unsettled Receipt",
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        link: "#",
        title: "Student Reports",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Admission",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/sytyapplicationreport",
                name: "SYTY Application Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/provisionaladmissionreport",
                name: "Provisional Admission Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentadmissionreport",
                name: "Student Admission Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/coursewisestrengthreport",
                name: "Coursewise Strength Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/admissionpositionreport",
                name: "Admission Position Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentdetailsexporttoexcel",
                name: "Student Details Export To Excel",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/courseandfeetypechangereport",
                name: "Course And Fee Type Change Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentattendancereport",
                name: "Student Attendance Report",
              },
              //extra//{ id: uuid(), link: '/pages/academic/studentreport/admission/coursewisestudentadmissionreport', name: 'Coursewise Student Admission Report' },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentrollnumberreport",
                name: "Student Roll Number Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/smssendreport",
                name: "SMS Send Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/lateraladmissionreport",
                name: "Lateral admission Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/photosignreport",
                name: "Photo Sign Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentapplycertificatereport",
                name: "Student Apply Certificate Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studentadmissioncancellationrequestreport",
                name: "Student Admission Cancellation Request Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/admission/studenteligibilityreport",
                name: "Student Eligibility Report",
              },
            ],
          },
          {
            id: uuid(),
            link: "#",
            title: "MIS",
            children: [
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/studentmis",
                name: "Student MIS",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/cashbookwisemisreport",
                name: "Cash BookWise MIS Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/studentmiscastewise",
                name: "Student MIS Caste Wise",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/subjectwisereport",
                name: "Subject Wise Report",
              },
              {
                id: uuid(),
                link: "/pages/academic/studentreport/MIS/subjectsectionwisemisreport",
                name: "Subject SectionWise MIS Report",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    link: "#",
    title: "NEP",
    icon: "home",
    children: [
      {
        id: uuid(),
        link: "#",
        title: "Master",
        children: [
          {
            id: uuid(),
            link: "#",
            title: "Masters",
            children: [
              {
                id: uuid(),
                link: "/pages/nep/master/masters/boardofstudy",
                name: "Board Of Study",
              },
              {
                id: uuid(),
                link: "/pages/nep/master/masters/subjectcategory",
                name: "Subject Category",
              },
              {
                id: uuid(),
                link: "/pages/nep/master/masters/discipline",
                name: "Discipline",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default DashboardMenu;
