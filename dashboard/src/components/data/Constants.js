const PROFILE = {
	NAME: 'fullName',
	EMAIL: 'email',
	UNIVERSITY: 'institution',
	ADDRESS: 'location',
	CONTACT: 'contact',
	PREFERRED_LOCATIONS: 'locations',
	SKILLS: 'skills',
	EXPERIENCE_LEVEL: 'job_levels',
	COMPANY_NAME: 'companyName'
	// JOB_MODE: "modes",
};

const COUNTRIES = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cabo Verde',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombia',
	'Comoros',
	'Congo-Brazzaville',
	'Costa Rica',
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Congo-Kinshasa',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Timor-Leste',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Eswatini',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Holy See',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Ivory Coast',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'North Korea',
	'North Macedonia',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Palestine',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Korea',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Timor-Leste',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States of America',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe'
];

const skills = [
	'Accounting',
	'Adobe Creative Suite',
	'Agile Methodology',
	'Analytical Thinking',
	'Android Development',
	'AngularJS',
	'Animation',
	'Artificial Intelligence',
	'Assertiveness',
	'AutoCAD',
	'Backend Development',
	'Baking',
	'Behavioral Psychology',
	'Big Data Analytics',
	'Biochemistry',
	'Blogging',
	'Budgeting',
	'Business Development',
	'C',
	'C#',
	'C++',
	'Cake Decorating',
	'Chemistry',
	'Child Care',
	'Civil Engineering',
	'Client Relationship Management',
	'Cloud Computing',
	'Coaching',
	'Communication',
	'Community Outreach',
	'CompTIA',
	'Conflict Resolution',
	'Content Management Systems (CMS)',
	'Copywriting',
	'Creative Writing',
	'Critical Thinking',
	'Customer Service',
	'Cybersecurity',
	'Data Analysis',
	'Data Science',
	'Database Management',
	'Decision Making',
	'Digital Marketing',
	'Dispute Resolution',
	'Django',
	'Docker',
	'Economics',
	'Editing',
	'Educational Technology',
	'Electrical Engineering',
	'Email Marketing',
	'Emotional Intelligence',
	'Employee Training',
	'Event Planning',
	'Financial Analysis',
	'Frontend Development',
	'Game Development',
	'Generosity',
	'Genetics',
	'Geographic Information System (GIS)',
	'Graphic Design',
	'HTML',
	'Human Resources',
	'Influencer Marketing',
	'Information Architecture',
	'Interior Design',
	'International Relations',
	'Inventory Management',
	'iOS Development',
	'Java',
	'JavaScript',
	'Job Interviewing',
	'Kotlin',
	'Leadership',
	'Learning Strategies',
	'Legal Research',
	'Linguistics',
	'Linux',
	'Machine Learning',
	'Marketing',
	'Mathematics',
	'Mechanical Engineering',
	'Meditation',
	'Microsoft Office Suite',
	'Mobile App Development',
	'Motivational Speaking',
	'Negotiation',
	'Network Administration',
	'Neuroscience',
	'Node.js',
	'Nonprofit Management',
	'Numerical Analysis',
	'Nutrition',
	'Objective-C',
	'Organizational Skills',
	'Outreach Programs',
	'Painting',
	'Pascal',
	'Patient Care',
	'Persuasion',
	'Philosophy',
	'Photography',
	'PHP',
	'Physics',
	'Podcasting',
	'Political Science',
	'Problem Solving',
	'Product Management',
	'Project Management',
	'Public Relations',
	'Python',
	'Quality Assurance',
	'React',
	'Recruiting',
	'Research',
	'Risk Management',
	'Ruby',
	'Sales',
	'Sculpting',
	'Search Engine Optimization (SEO)',
	'Social Media Marketing',
	'Software Development',
	'Spanish',
	'SQL',
	'Statistics',
	'Strategic Planning',
	'Supply Chain Management',
	'Swift',
	'Systems Analysis',
	'Teaching',
	'Teamwork',
	'Technical Writing',
	'Time Management',
	'UI/UX Design',
	'Unity',
	'Video Editing',
	'Volunteering',
	'Web Development',
	'Windows Administration',
	'WordPress',
	'Writing',
	'Xamarin',
	'XML',
	'Yoga Instruction',
	'Youth Mentoring',
	'Zookeeping'
];

const EXPERIENCE_LEVEL = [
	'Entry-Level',
	'Junior',
	'Associate',
	'Mid-Level',
	'Senior',
	'Lead',
	'Manager',
	'Director',
	'Vice President (VP)',
	'Executive'
];

const JOB_MODES = [
	'Full-Time',
	'Part-Time',
	'Contract',
	'Temporary',
	'Freelance',
	'Remote',
	'Internship',
	'Volunteer',
	'Consultant',
	'Seasonal'
];

function toDropdownOptionsList(list) {
	let sortedList = [...list];
	sortedList.sort();
	return sortedList.map((i) => ({ label: i, value: i }));
}

export const CONSTANTS = {
	COUNTRIES: toDropdownOptionsList(COUNTRIES),
	SKILLS: toDropdownOptionsList(skills),
	EXPERIENCE_LEVEL: toDropdownOptionsList(EXPERIENCE_LEVEL),
	JOB_MODES: toDropdownOptionsList(JOB_MODES),
	PROFILE
};
