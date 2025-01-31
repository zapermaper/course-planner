import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    const prompt = `As an academic advisor, create a detailed course plan based on the following student information:
    
Current Status:
- Grade: ${body.studentInfo.currentGrade}
- Target College: ${body.collegeInfo.collegeName}
- Intended Major: ${body.collegeInfo.majorName}
- Course Load Preference: ${body.studentInfo.preferences.difficultyLevel}/10
- Prioritize College Credits: ${body.studentInfo.preferences.collegePriority}
- Allow Summer Courses: ${body.studentInfo.preferences.allowSummerCourses}

Already Completed:
${JSON.stringify(body.completedCourses, null, 2)}

AP Scores:
${JSON.stringify(body.apScores, null, 2)}

Dual Credits:
${JSON.stringify(body.dualCredits, null, 2)}

Please create a detailed semester-by-semester high school course plan that follows these requirements:

CREDIT STRUCTURE:
- 1 high school credit = 2 semesters
- 0.5 credit = 1 semester
- Maximum 8 classes per semester (4 credits total per semester)
- Each semester must be fully scheduled (8 classes)

COURSE LEVEL SELECTION:
- Difficulty rating below 5/10: Regular/on-level classes only
- Difficulty rating 5-7/10: Mix of regular and advanced classes
- Difficulty rating 8+/10: All AP/Dual Credit/OnRamps when available
- For STEM majors: Pair Advanced Geometry with Advanced/OnRamps Algebra 2 in same year

SOCIAL STUDIES SEQUENCE:
- Year 1: AP Human Geography
- Year 2: AP World History
- Year 3: College-level US History (AP/Dual Credit/OnRamps)
- Year 4: College-level Government and Economics (AP/Dual Credit/OnRamps)
- If summer courses allowed: Some social studies courses may be completed during summer sessions

MATHEMATICS PROGRESSION:
- Prerequisites: Geometry (Advanced/Regular) AND Algebra 2 (Regular/Advanced/OnRamps) required for Pre-Calculus
- Pre-Calculus options: Regular, AP, OnRamps, or Dual Credit
- For difficulty 7+/10: Include AP Calculus BC before AP Calculus AB
- Linear Algebra and Discrete Math require AP Calculus BC as prerequisite

MAJOR-SPECIFIC CONSIDERATIONS:
- Prioritize college credit-bearing English 4 after English 3 if college credits are important
- For STEM majors:
  * Computer Science focus: Prioritize Discrete Math and Linear Algebra
  * Engineering focus (including CS): Include Calculus 3
  * Accelerate math sequence to enable advanced courses

PLAN MUST:
1. Meet all graduation requirements
2. Maximize college credit opportunities through AP/Dual Credit where appropriate
3. Align with intended college major
4. Account for student's preferred course load
5. Include summer courses only if permitted
6. List specific available course names
Format the response as a JSON object with the following structure:
{
  "recommendations": {
    "Year X": {
      "fall": [{"course": "Course Name", "type": "Regular/AP/Dual Credit", "credits": "3", "notes": "Optional explanation"}],
      "spring": [...],
      "summer": [...]
    }
  },
  "summary": {
    "totalCredits": "X",
    "graduationStatus": "On track/Warning message",
    "recommendedPrep": "Additional recommendations"
  }
}`;

    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "You are an expert academic advisor with deep knowledge of high school graduation requirements and college admissions." 
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
      model: "gpt-4-turbo-preview",
      response_format: { type: "json_object" },
      temperature: 0.7,
    });

    const planResponse = JSON.parse(completion.choices[0].message.content);
    return NextResponse.json(planResponse);

  } catch (error) {
    console.error('Error generating course plan:', error);
    return NextResponse.json(
      { error: 'Failed to generate course plan' },
      { status: 500 }
    );
  }
}   