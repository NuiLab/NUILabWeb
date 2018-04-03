import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

    // {
    //     "bosses": [
    //       {
    //         "name": "Francisco R. Ortega, Ph. D.",
    //         "job": "Visiting Assistant Professor & Director of OpenHID Lab",
    //         "img": "/assets/employees/francisco-ortega.jpg",
    //         "website": {
    //           "name": "",
    //           "url": ""
    //         },
    //         "description": "Dr. Francisco R. Ortega (fortega@cs.fiu.edu), Visiting Assistant Professor, received his Ph.D. in Computer Science from Florida International University (FIU) in 2014, co-advised by Dr. Naphtali Rishe and Dr. Armando Barreto. He received outstanding graduate student 2014 from Computer Science. His dissertation was one of five nominated for best dissertation award for the college of engineering. Dr. Ortega received his bachelor’s degree in Computer Science, cum laude, in December 2008 from FIU and a master’s degree in Computer Science from FIU in December 2009. Dr. Ortega has over 17 years of experience in software development and systems integration. His area of expertise are in 3D User Interfaces, Input Interfaces, Human-Computer Interaction, 3D navigation, input modeling, multi-threaded programming for 3D User Interfaces, and framework development, among others. Dr. Ortega has 22 publications, with many of them as first author. He is the also the first author of the book Interaction Design for 3D User Interfaces to be published by CRC Press/Taylor and Francis Group in January, 2016.",
    //         "resume": "http://openhid.com/fortega"
    //       },
    //       {
    //         "name": "Naphtali Rishe, Ph.D.",
    //         "job": "Professor & Director of HPDRC",
    //         "img": "/assets/employees/naphtali-rishe.jpg",
    //         "website": {
    //           "name": "hpdrc.fiu.edu/director",
    //           "url": "http://hpdrc.fiu.edu/director/"
    //         },
    //         "description": "Dr. Naphtali Rishe (ndr@acm.org), The inaugural Outstanding University Professor and Eminent Chair Professor of Computer Science, is the author of three books, editor of five books, inventor of five U.S. patents, author of 300 papers in journals and proceedings, awardee of $55 million in research grants by government and industry, including NASA, NSF, IBM, DoI, USGS, and architect of major industrial software projects. He is Director of the NSF Center for Research Excellence in Science and Technology at FIU [http://crest.fiu.edu] and of the NSF International FIU-FAU-Dubna Industry-University Cooperative Research Center for Advanced Knowledge Enablement [http://cake.fiu.edu]. Dr. Rishe is the inaugural FIU Outstanding University Professor. Rishe's TerraFly project has been extensively covered by worldwide press, including the New York Times, USA Today, NPR, Science and Nature journals, and FOX TV News.",
    //         "resume": ""
    //       }
    //     ],
    //     "assistants": [
    //       {
    //         "name": "Jules Calella",
    //         "email": "jcale004@fiu.edu",
    //         "job": "Graduate Hardware Research Assistant",
    //         "img": "/assets/employees/jules-calella.jpg",
    //         "description": "Jules Calella is an graduate research assistant. He has a primary interest is in electronics, with a focus in communications and digital electronics."
    //       },
    //       {
    //         "name": "Katherine Tarre",
    //         "email": "ktarr007@fiu.edu",
    //         "job": "Statistician at Assurant",
    //         "img": "/assets/employees/katherine-tarre.jpg",
    //         "description": "Katherine Tarre is an undergraduate research assistant majoring in Statistics and International Relations. Her work is primarily focused on experimental design and statistical analysis using various computer software. In her free time she enjoys reading and problem solving."
    //       },
    //       {
    //         "name": "Lukas Borges",
    //         "email": "lborg019@fiu.edu",
    //         "job": "Undergraduate Research Assistant",
    //         "website": {
    //           "name": "Lukezin.me",
    //           "url": "http://lukezin.me/"
    //         },
    //         "img": "/assets/employees/lukas-borges.jpg",
    //         "description": "Lukas is an undergraduate focused on Augmented Reality and Game Development in Unity."
    //       },
    //       {
    //         "name": "Seidan Jamides",
    //         "email": "sjami006@fiu.edu",
    //         "job": "Undergraduate Gestures Research Assistant",
    //         "img": "/assets/employees/seidan-jamides.jpg",
    //         "description": "Seidan Jamides is an undergraduate research assistant majoring Computer Science. He is currently performing research in gesture elicitation."
    //       }
    //     ],
    //     "collaborators": [
    //       {
    //         "name": "Armando Barreto, Ph.D.",
    //         "website": {
    //           "name": "dsplab.eng.fiu.edu",
    //           "url": "http://dsplab.eng.fiu.edu/dsp/dr_barreto.html"
    //         },
    //         "description": "The lead director of the Digital Signal Processing (DSP) Laboratory at Florida International University. Established in August 1994, the DSP Laboratory has the two-fold purpose of developing research work in various areas of DSP, while providing our graduate and undergraduate students with an opportunity to experience DSP research and learn the specific skills sought by industrial employers in this field."
    //       },
    //       {
    //         "name": "Malek Adjouadi, Ph.D.",
    //         "website": {
    //           "name": "cate.fiu.edu",
    //           "url": "http://www.cate.fiu.edu/"
    //         },
    //         "description": "Professor and Director of the Center for Advanced Technology and Education in the FIU College of Engineering & Computing."
    //       },
    //       {
    //         "name": "Wei Zeng, Ph.D.",
    //         "website": {
    //           "name": "users.cis.fiu.edu/~wzeng",
    //           "url": "http://users.cis.fiu.edu/~wzeng/"
    //         },
    //         "description": "Dr. Wei Zeng is an assistant professor of the School of Computing and Information Sciences at Florida International University. Dr. Zeng received her Ph.D. from Chinese Academy of Sciences in 2008 and had her postdoctoral training at Stony Brook University in 2010-2012."
    //       },
    //       {
    //         "name": "John Stuart",
    //         "website": {
    //           "name": "carta.fiu.edu",
    //           "url": "http://carta.fiu.edu/architecture/faculty/directory/john-stuart/"
    //         },
    //         "description": "John is a the dean of the Miami Beach Urban Studio registered architect and principal of John Stuart Architecture with research interests focused on architectural design, its contexts, and its impact. He is currently a 2007-08 New York Prize Fellow at the Van Alen Institute. During his residency at the institute he will develop “TimeZone,” a built project intended to empower communication between diverse people in public spaces in an effort to address global poverty and the “digital divide.”"
    //       }
    //     ],
    //     "volunteers": [
    //       {
    //         "name": "Mathew Kress",
    //         "email": "mkres000@fiu.edu",
    //         "job": "Graduate Volunteer",
    //         "img": "/assets/brand/openhid-logo.png",
    //         "description": "Mathew Kress is a graduate volunteer working on applications with the HTC Vive and Hololens."
    //       },
    //       {
    //         "name": "Cristina Villarroel",
    //         "email": "cvill141@fiu.edu",
    //         "job": "Undergraduate Volunteer",
    //         "img": "/assets/employees/cristina-villarroel.jpg",
    //         "description": "Cristina Villarroel is an undergraduate volunteer collaborating with OpenHID research."
    //       },
    //       {
    //         "name": "Pablo Mueller",
    //         "email": "pmuel001@fiu.edu",
    //         "job": "Undergraduate Volunteer",
    //         "img": "/assets/employees/pablo-mueller.jpg",
    //         "description": "Pablo Mueller is an undergraduate volunteer researching gesture recognition."
    //       }
    //     ],
    //     "formerWorkers": [
    //       {
    //         "name": "Alain Galvan",
    //         "job": "Engineer at Marmoset Toolbag",
    //         "email": "agalv023@fiu.edu",
    //         "website": {
    //           "name": "Alain.xyz",
    //           "url": "https://alain.xyz/"
    //         },
    //         "img": "/assets/employees/alain-galvan.jpg",
    //         "description": "Alain Galvan was a researcher focused on graphics programming, procedurally generated environments, and making tools for artists/musicians. He's been awarded in MLH Hackathons, Newgrounds, Codepen, among other venues. "
    //       },
    //       {
    //         "name": "Jason Lee Thomas",
    //         "email": "jasthoma@fiu.edu",
    //         "job": "Senior Engineer at Citrix",
    //         "img": "/assets/employees/jason-lee-thomas.jpg",
    //         "description": "Jason Lee Thomas was an undergraduate research assistant, who focused on low end C++ programming for the OpenHID Framework (TAMGeF)."
    //       },
    //       {
    //         "name": "Ruben Balcazar",
    //         "email": "rbalc001@fiu.edu",
    //         "job": "Engineer at Ultimate Software",
    //         "img": "/assets/employees/ruben-balcazar.jpg",
    //         "description": "Ruben Balcazar was a graduate research assistant for the OpenHID Lab. His contributions include Unity plugins for OpenHID compliant hardware."
    //       },
    //       {
    //         "name": "Jonathan Bernal",
    //         "email": "jbern102@fiu.edu",
    //         "job": "Former Undergraduate Gesture Research Assistant",
    //         "img": "/assets/employees/jonathan-bernal.jpg",
    //         "description": "Jonathan F. Bernal was an undergraduate research assistant, currently conducting research on Human-computer Multimodal Interaction and Augmented and Mixed Reality. Jonathan was also part of the ARCH program of the FIU Honors College. His major hobbies are biking and drawing."
    //       }
    //     ]
    //   }

}