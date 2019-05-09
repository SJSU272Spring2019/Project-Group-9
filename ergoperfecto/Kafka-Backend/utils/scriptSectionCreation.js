let data = [
  {
    "section":"Hand",
    "questions" : [
      {"q": "Seat height adjusted so feet are flat on floor or footrest with knees bent at right angles and thighs horizontal to floor?"},
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"},
      {"q": "There is about 2-4 finger widths between front edge of the seat and back on the knees?"},
      {"q": "Seat is tilted so that hips and tops of thighs are at right angles or slightly greater"},
      {"q" : "Armrests are out of the way while typing but provide support when needed during other activities?"}
    ]
  },
  {
    "section":"Wrist",
    "questions" : [
      {"q": "Elbows are at 90 to 110 degrees and forearms and hands form straight lines to the keyboard?"},
      {"q": "Mouse is adjusted so it is close to and on the same level as the keyboard?"},
      {"q": "Distance allows user to relax shoulders with elbows hanging close to body?"},
      {"q": "Mouse is directly next to the keyboard and at the same height so arm is not outstretched while mousing?"},
      {"q": "Base of the hand rests on the mouse. Use larger mouse or mouse mate if necessary?"},
      {"q": "Mouse is configured to match individual needs (Tracking Speed, Scroll Speed, Etc.)?"},
      {"q": "Adjusted to allow neutral posture and minimal reaches and ease of use?"}
    ]
  },
  {
    "section":"Elbow",
    "questions" : [
      {"q": "Seat height adjusted so feet are flat on floor or footrest with knees bent at right angles and thighs horizontal to floor?"},
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"}
    ]
  },
  {
    "section":"Shoulder",
    "questions" : [
      {"q": "Seat height adjusted so feet are flat on floor or footrest with knees bent at right angles and thighs horizontal to floor?"},
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"}
    ]
  },
  {
    "section":"Neck",
    "questions" : [
      {"q": "Seat height adjusted so feet are flat on floor or footrest with knees bent at right angles and thighs horizontal to floor?"},
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"}
    ]
  },
  {
    "section":"Upper Back",
    "questions" : [
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"},
      {"q": "There is about 2-4 finger widths between front edge of the seat and back on the knees?"},
      {"q": "Seat is tilted so that hips and tops of thighs are at right angles or slightly greater"}
    ]
  },
  {
    "section":"Lower Back",
    "questions" : [
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"},
      {"q": "There is about 2-4 finger widths between front edge of the seat and back on the knees?"},
      {"q": "Seat is tilted so that hips and tops of thighs are at right angles or slightly greater"}
    ]
  },
  {
    "section":"Knee",
    "questions" : [
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"},
      {"q": "There is about 2-4 finger widths between front edge of the seat and back on the knees?"},
      {"q": "Seat is tilted so that hips and tops of thighs are at right angles or slightly greater"}
    ]
  },
  {
    "section":"Ankle",
    "questions" : [
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"},
      {"q": "There is about 2-4 finger widths between front edge of the seat and back on the knees?"},
      {"q": "Seat is tilted so that hips and tops of thighs are at right angles or slightly greater"}
    ]
  },
  {
    "section":"Foot",
    "questions" : [
      {"q": "Lumbar support of chair is at correct height to support the lumbar curve?"},
      {"q": "There is about 2-4 finger widths between front edge of the seat and back on the knees?"},
      {"q": "Seat is tilted so that hips and tops of thighs are at right angles or slightly greater"}
    ]
  }

]

let db_connection = require('../database'); 
const Section = require("../models/evaluationSectionSchema").section;
const SectionQuestions = require("../models/evaluationSectionSchema").sectionQuestions;

let createSections = async () => {
    for (let i=0;i<data.length;i++){
        let sectionObj = new Section({name:data[i].section})
        let questions = data[i].questions
        await questions.forEach( async element => {
            sectionObj.questions.push({title : element.q});
        });
        await sectionObj.save();
    }
    console.log("Done");
}

createSections();