import React, { useState } from 'react';
import { Form, Row, Col, Button, Container, Toast, ToastContainer, FormLabel, FormControl } from 'react-bootstrap';
// import InterviewHome from './InterviewHome';

const ApplicantForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    date: '', // Date
    name: '', // PLEASE SELECT YOUR NAME
    email: '', // ENTER YOUR EMAIL ADDRESS
    firstName: '', // First Name
    lastName: '', // Last Name
    applicantsAge: '', // WHAT IS THE APPLICANT'S AGE
    applicantsGender: '', // APPLICANT'S GENDER
    emailOnFile: '', // PLEASE ENTER THE APPLICANT'S EMAIL ON FILE.
    applicantId: '', // APPLICANT ID
    applicantNoShow: '', // IS THE APPLICANT A NO SHOW
    rescheduleReq: '',
    country:'', // IS THE APPLICANT REQUESTING A RESCHEDULE?
    city: '', // PLEASE ENTER THE CITY
    InterviewedBefore: '', // HAS THE APPLICANT INTERVIEWED WITH US BEFORE?
    visaCategory: '', // WHAT VISA CATEGORY IS THE APPLICANT ON
    educationLevel: '', // CURRENT LEVEL OF COMPLETED EDUCATION
    majorIn: '', // WHAT DID THEY MAJOR IN
    currentlyStudying: '', // ARE YOU CURRENTLY STUDYING
    universityName: '', // ENTER THE NAME OF THE UNIVERSITY
    courseType: '', // COURSE TYPE
    semister: '', // PLEASE MENTION THE SEMESTER HE/SHE IS IN
    hadCar: '', // DOES THE APPLICANT HAVE A CAR?
    familyOperateTI: '', // DOES APPLICANT'S FRIENDS/FAMILY WORK/OPERATE IN THE TELECOMMUNICATION INDUSTRY? (OWN STORES)
    cellphoneCarrier: '', // WHAT CELLPHONE CARRIER DO THEY WORK FOR
    workedBefore: '', // HAS THE APPLICANT WORKED IN THE US BEFORE?
    currentlyEmployed: '', // IS THE APPLICANT CURRENTLY EMPLOYED
    currentCompany: '', // PLEASE MENTION THE COMPANY
    currentJobInTI: '', // IS THE CURRENT JOB IN TELECOMMUNICATION INDUSTRY?
    hoursOfDailyWork: '', // HOW MANY HOURS A WEEK DOES HE/SHE WORK
    dailyWage: '', // HOW MUCH DOES HE MAKE
    compensationType: '', // TYPE OF COMPENSATION?
    reasonToLeave: '', // WHY DOES HE WANT TO LEAVE?
    cellularExperiance: '', // DOES THE EMPLOYEE HAVE ANY CELLULAR EXPERIENCE
    nameTeleCompanyName: '', // PLEASE MENTION THE NAME WHERE HE WORKED IN TELECOMMUNICATION
    experianceOfTele: '', // HOW LONG DID HE/SHE WORK THERE?
    typeOfworkDoing: '', // WHAT IS THE KIND OF WORK HE IS DOING RIGHT NOW
    otherEmploymentExp: '', // MENTION ANY OTHER EMPLOYMENT EXPERIENCE SEPARATE BY EACH LINE.
    foreignWorkExp: '', // DOES THE EMPLOYEE HAVE FOREIGN WORK EXPERIENCE?
    // PLEASE MENTION THE FOREIGN EXPERIENCE (SEPARATE BY EACH LINE)
    mentionLineExp: '', // (This seems to be combined with mentionForeignExp or similar)
    apperence: '', // APPEARANCE & DEMEANOR
    personality: '', // PERSONALITY
    confidence: '', // CONFIDENCE
    communnicationSkills: '', // COMMUNICATION SKILLS
    pitch: '', // PITCH
    overcommingObjections: '', // OVERCOMING OBJECTIONS
    negotiations: '', // NEGOTIATION
    applicantStrength: '', // WHAT ARE THE STRENGTHS OF THE APPLICANT
    applicantsWeakness: '', // WHAT ARE THE WEAKNESSES OF THE APPLICANT
    comments: '', // ADDITIONAL NOTES & COMMENTS
    contractSign: '', // HOW LONG OF A CONTRACT CAN THE APPLICANT SIGN IF GIVEN JOB
    evaluation: '', // PLEASE WRITE A SUMMARY RECOMMENDATION/EVALUATION
    recomendhiring: '', // WOULD YOU RECOMMEND THE APPLICANT FOR HIRING?
    courseTypeSelection: '', // PLEASE SELECT THE COURSE TYPE
    interviweSheduler: '', // ROSHAN'S INTERVIEW RESCHEDULER
    hurrsCalender: '', // HURR'S CALENDAR
    sultansCalender: '', // SULTAN'S CALENDAR
    roshansCalender: '', // ROSHAN'S CALENDAR
    applicantsPhone: '', // APPLICANT'S PHONE #
    currentResidence: '', // WHERE IS THE CANDIDATE CURRENTLY RESIDING
    currentCity: '', // WHAT CITY IS HE IN?
    currentCountry: '', // PLEASE SELECT THE COUNTRY
    submissionId: '', // Submission ID
    status: '', // Status
});



const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: type === 'checkbox' ? checked : value
  }));
};
console.log(formData)
  

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission logic here

    // Show toast
    setShowToast(true);

    // Optionally, you can hide the toast after a certain duration
    setTimeout(() => {
      setShowToast(false);
      window.location.reload(); // Refresh the page
    }, 1800); // Adjust the timeout duration if needed
  };

  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Col lg={8}>
        <h1 className="m-4">Applicant Information Form</h1>
        <Form onSubmit={handleSubmit}>
          {/* Date */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6} className="text-start">
              1. Date
            </Form.Label>
            <Col sm={6}>
              <Form.Control
              type="date" 
               name="date"
                value={formData.date} 
                onChange={handleChange} />
            </Col>
          </Form.Group>

          {/* Name Selection */}
          <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={6} className="text-start">
          2. PLEASE SELECT YOUR NAME
        </Form.Label>
        <Col sm={6}>
          <Form.Control
            as="select"
            name="name"
            value={formData.name}
            onChange={handleChange}
          >
            <option value="Roshan">Roshan</option>
            <option value="Hurr">Hurr</option>
            <option value="Sultan">Sultan</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    3. ENTER YOUR EMAIL ADDRESS
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      type="email"
      name="email"
      value={formData.email}
      placeholder="Enter your email"
      onChange={handleChange}
    />
  </Col>
</Form.Group>

{/* First Name */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    6. First Name
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      type="text"
      name="firstName" // Add name attribute for the state
      value={formData.firstName} // Bind value to state
      placeholder="Enter first name"
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>


          {/* Last Name */}
          <Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    5. Last Name
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      type="text"
      name="lastName" // Add name attribute for the state
      value={formData.lastName} // Bind value to state
      placeholder="Enter last name"
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    6. WHAT IS THE APPLICANT'S AGE
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      type="number"
      name="applicantsAge" // Add name attribute for the state
      value={formData.applicantsAge} // Bind value to state
      placeholder="Enter age"
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    7. APPLICANT'S GENDER
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      as="select"
      name="applicantsGender" // Add name attribute for the state
      value={formData.applicantsGender} // Bind value to state
      onChange={handleChange} // Handle changes with a change handler
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </Form.Control>
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    6. PLEASE ENTER THE APPLICANT'S EMAIL ON FILE.
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      type="email"
      name="emailOnFile" // Add name attribute for the state
      value={formData.emailOnFile} // Bind value to state
      placeholder="Applicant's email" // Placeholder text
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    9. APPLICANT ID
  </Form.Label>
  <Col sm={6}>
    <Form.Control
      type="text"
      name="applicantId" // Add name attribute for the state
      value={formData.applicantId} // Bind value to state
      placeholder="Enter applicant ID" // Placeholder text
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    10. IS THE APPLICANT A NO SHOW
  </Form.Label>
  <Col sm={6}>
    <Form.Check
      type="checkbox"
      name="applicantNoShow" // Add name attribute for the state
      checked={formData.applicantNoShow} // Bind checked state to formData
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    11. IS THE APPLICANT REQUESTING A RESCHEDULE?
  </Form.Label>
  <Col sm={6}>
    <Form.Check
      type="checkbox"
      name="rescheduleReq" // Add name attribute for the state
      checked={formData.rescheduleReq} // Bind checked state to formData
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    12. Please Select Your Country
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="select"
      name="country" // Add name attribute for the state
      value={formData.country} // Bind selected value to formData
      onChange={handleChange} // Handle changes with a change handler
    >
      <option value="">Select Country</option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
      <option value="UK">UK</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>


         {/* City */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    13. PLEASE ENTER THE CITY
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      name="city" // Add name attribute
      placeholder="Enter city" 
      value={formData.city} // Bind value to formData
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>

{/* Previous Interview */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    14. HAS THE APPLICANT INTERVIEWED WITH US BEFORE?
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="checkbox" 
      name="InterviewedBefore" // Add name attribute
      checked={formData.InterviewedBefore} // Bind checked attribute to formData
      label="" 
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>


        {/* Visa Category */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    15. WHAT VISA CATEGORY IS THE APPLICANT ON
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="select" 
      name="visaCategory" // Add name attribute
      value={formData.visaCategory} // Bind value attribute to formData
      onChange={handleChange} // Handle changes with a change handler
    >
      <option>Visa Category 1</option>
      <option>Visa Category 2</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>


       {/* Education Level */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    16. CURRENT LEVEL OF COMPLETED EDUCATION
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="select" 
      name="educationLevel" // Add name attribute
      value={formData.educationLevel} // Bind value attribute to formData
      onChange={handleChange} // Handle changes with a change handler
    >
      <option>High School</option>
      <option>Associate's Degree</option>
      <option>Bachelor's Degree</option>
      <option>Master's Degree</option>
      <option>PhD</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>

{/* Major */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    17. WHAT DID THEY MAJOR IN
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      name="majorIn" // Add name attribute
      value={formData.majorIn} // Bind value attribute to formData
      placeholder="Enter major" 
      onChange={handleChange} // Handle changes with a change handler
    />
  </Col>
</Form.Group>

{/* Currently Studying */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    18. ARE YOU CURRENTLY STUDYING
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="radio" 
      label="Yes" 
      name="currentlyStudying" 
      value="Yes"
      checked={formData.currentlyStudying === 'Yes'} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="radio" 
      label="No" 
      name="currentlyStudying" 
      value="No"
      checked={formData.currentlyStudying === 'No'} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


        {/* University Name */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    19. ENTER THE NAME OF THE UNIVERSITY
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      name="universityName" 
      placeholder="Enter university name" 
      value={formData.universityName} 
      onChange={handleChange}
    />
  </Col>
</Form.Group>


         {/* Course Type */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    20. COURSE TYPE
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="select" 
      name="courseType" 
      value={formData.courseType} 
      onChange={handleChange}
    >
      <option>Online</option>
      <option>In-Person</option>
      <option>Hybrid</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>
{/* Semester */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    21. PLEASE MENTION THE SEMESTER HE/SHE IS IN
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      name="semister" 
      placeholder="Enter semester" 
      value={formData.semister} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Has Car */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    22. DOES THE APPLICANT HAVE A CAR?
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="radio" 
      id="hasCarYes" 
      name="hadCar" 
      label="Yes" 
      value="Yes" 
      checked={formData.hadCar === 'Yes'} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="radio" 
      id="hasCarNo" 
      name="hadCar" 
      label="No" 
      value="No" 
      checked={formData.hadCar === 'No'} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Friends/Family in Telecom */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    23. DOES APPLICANT'S FRIENDS/FAMILY WORK/OPERATE IN THE TELECOMMUNICATION INDUSTRY? (OWN STORES)
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="radio" 
      id="friendsFamilyYes" 
      name="familyOperateTI" 
      label="Yes" 
      value="Yes" 
      checked={formData.familyOperateTI === 'Yes'} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="radio" 
      id="friendsFamilyNo" 
      name="familyOperateTI" 
      label="No" 
      value="No" 
      checked={formData.familyOperateTI === 'No'} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Cellphone Carrier */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    24. WHAT CELLPHONE CARRIER DO THEY WORK FOR
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      name="cellphoneCarrier" 
      placeholder="Enter cellphone carrier" 
      value={formData.cellphoneCarrier || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Worked in US */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    25. HAS THE APPLICANT WORKED IN THE US BEFORE?
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="checkbox" 
      name="workedBefore" 
      label="Yes" 
      checked={formData.workedBefore === true} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="checkbox" 
      name="workedBefore" 
      label="No" 
      checked={formData.workedBefore === false} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Current Employment */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    26. IS THE APPLICANT CURRENTLY EMPLOYED
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="checkbox" 
      name="currentlyEmployed" 
      value="Yes" 
      label="Yes" 
      checked={formData.currentlyEmployed === true} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="checkbox" 
      name="currentlyEmployed" 
      value="No" 
      label="No" 
      checked={formData.currentlyEmployed === false} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Company Name */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    27. PLEASE MENTION THE COMPANY
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      name="currentCompany" 
      placeholder="Enter company name" 
      value={formData.currentCompany || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


        {/* Job in Telecom */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    28. IS THE CURRENT JOB IN TELECOMMUNICATION INDUSTRY?
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="checkbox" 
      label="Yes" 
      name="currentJobInTI" 
      checked={formData.currentJobInTI === true} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="checkbox" 
      label="No" 
      name="currentJobInTI" 
      checked={formData.currentJobInTI=== false} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

          {/* Hours Worked */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    29. HOW MANY HOURS A WEEK DOES HE/SHE WORK
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="number" 
      placeholder="Enter hours per week" 
      name="hoursOfDailyWork" 
      value={formData.hoursOfDailyWork || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

{/* Salary */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    30. HOW MUCH DOES HE MAKE
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      placeholder="Enter salary" 
      name="dailyWage" 
      value={formData.dailyWage || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Type of Compensation */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    31. TYPE OF COMPENSATION?
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="select" 
      name="compensationType" 
      onChange={handleChange}
      value={formData.compensationType || ''}
    >
      <option value="">Select an option</option>
      <option value="Salary">Salary</option>
      <option value="Hourly">Hourly</option>
      <option value="Commission">Commission</option>
      <option value="Other">Other</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>


       {/* Reason for Leaving */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    32. WHY DOES HE WANT TO LEAVE?
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter reason" 
      name="reasonToLeave" 
      value={formData.reasonToLeave || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    34. DOES THE EMPLOYEE HAVE ANY CELLULAR EXPERIENCE
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="radio" 
      label="Yes" 
      name="cellularExperiance" 
      value="YES"
      checked={formData.cellularExperiance === 'YES'} 
      onChange={handleChange} 
    />
    <Form.Check 
      type="radio" 
      label="No" 
      name="cellularExperiance" 
      value="NO"
      checked={formData.cellularExperiance === 'NO'} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>



          {/* Previous Telecom Work */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    35. PLEASE MENTION THE NAME WHERE HE WORKED IN TELECOMMUNICATION
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      placeholder="Enter company name" 
      name="nameTeleCompanyName" 
      value={formData.nameTeleCompanyName || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Duration of Telecom Work */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    36. HOW LONG DID HE/SHE WORK THERE?
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      placeholder="Enter duration" 
      name="experianceOfTele" 
      value={formData.experianceOfTele || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

         {/* Current Work */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    37. WHAT IS THE KIND OF WORK HE IS DOING RIGHT NOW
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      placeholder="Enter current work" 
      name="typeOfworkDoing" 
      value={formData.typeOfworkDoing || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


        {/* Other Employment Experience */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    38. MENTION ANY OTHER EMPLOYMENT EXPERIENCE SEPARATE BY EACH LINE.
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={5} 
      placeholder="Enter other employment experience" 
      name="otherEmploymentExp" 
      value={formData.otherEmploymentExp || ''} 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Foreign Work Experience */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    39. DOES THE EMPLOYEE HAVE FOREIGN WORK EXPERIENCE?
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="checkbox" 
      label="Yes" 
      name="foreignWorkExp" 
      value={formData.foreignWorkExp==='YES'}
      onChange={handleChange} 
    />
    <Form.Check 
      type="checkbox" 
      label="No" 
      name="foreignWorkExperience" 
      value={formData.foreignWorkExp==='NO'}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

{/* Foreign Experience Details */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    40. PLEASE MENTION THE FOREIGN EXPERIENCE (SEPARATE BY EACH LINE)
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={5} 
      placeholder="Enter foreign work experience" 
      name="mentionLineExp" 
      value={formData.mentionLineExp}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Appearance & Demeanor */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    41. APPEARANCE & DEMEANOR
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="apperence" 
      value={formData.apperence}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


        {/* Personality */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    42. PERSONALITY
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="personality" 
      value={formData.personality}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Confidence */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    43. CONFIDENCE
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="confidence" 
      value={formData.confidence}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


        {/* Communication Skills */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    44. COMMUNICATION SKILLS
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="communnicationSkills" 
      value={formData.communnicationSkills}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Pitch */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    45. PITCH
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="pitch" 
      value={formData.pitch}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Overcoming Objections */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    46. OVERCOMING OBJECTIONS
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="overcommingObjections" 
       value={formData.overcommingObjections}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


          {/* Negotiation */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    47. NEGOTIATION
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter comments" 
      name="negotiations" 
      value={formData.negotiations}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

{/* Strengths */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    48. WHAT ARE THE STRENGTHS OF THE APPLICANT
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter strengths" 
      name="applicantStrength" 
      value={formData.applicantStrength}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

{/* Weaknesses */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    49. WHAT ARE THE WEAKNESSES OF THE APPLICANT
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={3} 
      placeholder="Enter weaknesses" 
      name="applicantsWeakness" 
      value={formData.applicantsWeakness}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Additional Notes */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    50. ADDITIONAL NOTES & COMMENTS
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={5} 
      placeholder="Enter additional notes" 
      name="comments" 
      value={formData.comments}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>

{/* Contract Duration */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    51. HOW LONG OF A CONTRACT CAN THE APPLICANT SIGN IF GIVEN JOB
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      type="text" 
      placeholder="Enter contract duration" 
      name="contractSign" 
      value={formData.contractSign}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Summary Recommendation */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    52. PLEASE WRITE A SUMMARY RECOMMENDATION/EVALUATION
  </Form.Label>
  <Col sm={6}>
    <Form.Control 
      as="textarea" 
      rows={5} 
      placeholder="Enter recommendation/evaluation" 
      name="evaluation" 
      value={formData.evaluation}
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


         {/* Recommend for Hiring */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    53. WOULD YOU RECOMMEND THE APPLICANT FOR HIRING?
  </Form.Label>
  <Col sm={6}>
    <Form.Check 
      type="radio" 
      label="Yes" 
      name="recomendhiring" 
      value={formData.recomendhiring
=='YES'      } 
      onChange={handleChange} 
    />
    <Form.Check 
      type="radio" 
      label="No" 
      name="recomendhiring" 
      value={formData.recomendhiring
        =='NO'      } 
      onChange={handleChange} 
    />
  </Col>
</Form.Group>


       {/* Course Type */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    54. PLEASE SELECT THE COURSE TYPE
  </Form.Label>
  <Col sm={6}>
    <Form.Control as="select" name="courseTypeSelection" value={formData.courseTypeSelection} onChange={handleChange}>
      <option value="">Select a course type</option>
      <option value="Online">Online</option>
      <option value="In-Person">In-Person</option>
      <option value="Hybrid">Hybrid</option>
      {/* Add more options as needed */}
    </Form.Control>
  </Col>
</Form.Group>


       {/* Rescheduler Calendar */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    55. ROSHAN'S INTERVIEW RESCHEDULER
  </Form.Label>
  <Col sm={6}>
    <Form.Control type="text" placeholder="Enter rescheduler" 
    name="interviweSheduler" value={formData.interviweSheduler}
     onChange={handleChange} />
  </Col>
</Form.Group>


         {/* Calendar */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    56. HURR'S CALENDAR
  </Form.Label>
  <Col sm={6}>
    <Form.Control type="text"
     placeholder="Enter calendar"
     name="hurrsCalender"
      value={formData.hurrsCalender} onChange={handleChange} />
  </Col>
</Form.Group>


       {/* Calendar */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    57. SULTAN'S CALENDAR
  </Form.Label>
  <Col sm={6}>
    <Form.Control type="text" placeholder="Enter calendar" 
    name="sultansCalender"
     value={formData.sultansCalender} onChange={handleChange} />
  </Col>
</Form.Group>


        {/* Calendar */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={6} className="text-start">
    58. ROSHAN'S CALENDAR
  </Form.Label>
  <Col sm={6}>
    <Form.Control type="text" placeholder="Enter calendar" 
    name="roshansCalender" value={formData.roshansCalender} onChange={handleChange} />
  </Col>
</Form.Group>


<Form.Group as={Row} className="mb-3">
      <Form.Label column sm={6} className="text-start">
        59. APPLICANT'S PHONE #
      </Form.Label>
      <Col sm={6}>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          name="applicantsPhone"
          value={formData.applicantsPhone}
          onChange={handleChange}
          // isInvalid={!/^\d{10}$/.test(formData.applicantsPhone)}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid 10-digit phone number.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={6} className="text-start">
        60. WHERE IS THE CANDIDATE CURRENTLY RESIDING
      </Form.Label>
      <Col sm={6}>
        <Form.Control
          type="text"
          placeholder="Enter residence"
          name="currentResidence"
          value={formData.currentResidence}
          onChange={handleChange}
          // isInvalid={!formData.residence}
        />
        <Form.Control.Feedback type="invalid">
          Please enter the candidate's current residence.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={6} className="text-start">
        61. WHAT CITY IS HE IN?
      </Form.Label>
      <Col sm={6}>
        <Form.Control
          type="text"
          placeholder="Enter city"
          name="currentCity"
          value={formData.currentCity}
          onChange={handleChange}
          isInvalid={!formData.currentCity}
        />
        <Form.Control.Feedback type="invalid">
          Please enter the city.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={6} className="text-start">
        62. PLEASE SELECT THE COUNTRY
      </Form.Label>
      <Col sm={6}>
        <Form.Control
          as="select"
          name="currentCountry"
          value={formData.currentCountry}
          onChange={handleChange}
          isInvalid={!formData.currentCountry}
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
          {/* Add more options as needed */}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Please select a country.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={6} className="text-start">
        63. Submission ID
      </Form.Label>
      <Col sm={6}>
        <Form.Control
          type="text"
          placeholder="Enter submission ID"
          name="submissionId"
          value={formData.submissionId}
          onChange={handleChange}
          isInvalid={!formData.submissionId}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid Submission ID.
        </Form.Control.Feedback>
      </Col>
    </Form.Group>


          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={6} className="text-start">
              64. Status
            </Form.Label>
            <Col sm={6} className="text-start">
              <Form.Check
                type="radio"
                label="No Show"
                name="status"
                value={formData.status==='No Show'}
                className="mb-2"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Rejected"
                name="status"
                value={formData.status==='rejected'}
              
                className="mb-2"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Moved Forward"
                name="status"
                value={formData.status==='movedForward'}
                className="mb-2"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Hold"
                name="status"
                value={formData.status==='hold'}

                className="mb-2"
                onChange={handleChange}
              />
            </Col>
          </Form.Group>




          {/* Submit Button */}
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 6, offset: 6 }}>
              <Button type="submit">Submit Details</Button>
            </Col>
          </Form.Group>
        </Form>
      </Col>

      {/* Toast Container */}
      <ToastContainer position="middle-center" className="p-3" style={{ height: '50vh' }}>
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          className="border border-success rounded"
        >
          <Toast.Body className="d-flex align-items-center text-success" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            <i className="fas fa-check-circle me-2" style={{ fontSize: '1.5rem' }}></i>
            Details submitted successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default ApplicantForm;
