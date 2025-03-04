import OpenAI from 'openai'
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
  try {
    const body = await request.json();
    
    const prompt = `As an expert high school academic advisor, create a detailed course plan based on the following student information:
    
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

Please create a detailed semester-by-semester high school course plan following these STRICT requirements:

CORE PRINCIPLES:
1. ALWAYS recommend the most advanced version of a course available based on the student's difficulty preference
2. For difficulty 8+/10: ALL courses should be advanced level (Pre-AP/AP/IB/Dual Credit) when available
3. For difficulty 5-7/10: Mix advanced and regular courses based on student strengths
4. For difficulty <5/10: Regular courses with optional advanced courses in areas of strength

MATHEMATICS ACCELERATION RULES:
1. If student has completed Algebra 1:
   - 9th: Advanced Geometry AND Advanced Algebra 2 (concurrent)
   - 10th: Pre-Calculus (or summer between 9th-10th if allowed)
   - 11th: AP Calculus BC
   - 12th: Choose from: Calculus 3, Linear Algebra, Discrete Math (all require Calc BC)
2. If no Algebra 1:
   - Follow standard progression with maximum acceleration based on performance

SOCIAL STUDIES SEQUENCE (for difficulty 6+/10):
1. Standard Advanced Path:
   - 9th: AP Human Geography
   - 10th: AP World History
   - 11th: AP US History
   - 12th: AP Government (semester) + AP Economics (semester)
2. Summer options if allowed:
   - Government/Economics can be taken summer before senior year
   - World History or US History may be available in summer

FRESHMAN YEAR RECOMMENDATIONS:
- AP Biology is available and recommended for difficulty 7+/10
- AP Computer Science Principles is available and recommended for difficulty 7+/10
- Pre-AP/Advanced versions of core classes are available and should be taken for difficulty 6+/10

COMPUTER SCIENCE PROGRESSION (if available):
1. Recommended sequence for difficulty 7+/10:
   - Year 1: AP CS Principles
   - Year 2: AP CS A
   - Year 3: Advanced CS 3/Data Structures
   - Year 4: Independent Study/Advanced CS 4

PREREQUISITES:
1. Math (STRICT):
   - Calculus BC requires Pre-Calculus
   - Linear Algebra requires Calculus BC completion
   - Discrete Math requires Calculus BC completion
   - Calculus 3 requires Calculus BC completion
2. Science:
   - Chemistry recommended before AP Biology
   - Physics 1(ap/onramps) recommended before AP Physics
   - AP Computer Science A recommended after AP CS Principles

GRADUATION RULES:
- 1 credit = 2 semesters
- 0.5 credit = 1 semester
- Maximum 8 classes per semester
- Each semester needs 8 classes
- Summer courses only if explicitly allowed

Format the response as a JSON object with the following structure:
{
  "recommendations": {
    "Year X": {
      "fall": [{"course": "Course Name", "type": "Regular/Pre-AP/AP/Dual Credit", "credits": "0.5", "notes": "Required prerequisite/Recommended for major/etc"}],
      "spring": [...],
      "summer": [...]
    }
  },
  "summary": {
    "totalCredits": "X",
    "graduationStatus": "On track/Warning message",
    "recommendedPrep": "Additional recommendations(not extra cirriculars)",
    "recommendedExtracurriculars": "List of recommended activities that can help with major/career goals(seperated by commas)"
  }
}`;

    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: `You are an expert high school academic advisor. You MUST:
1. ALWAYS recommend AP/Advanced courses for students with difficulty preference 7+/10
2. NEVER recommend regular courses when advanced versions are available for high difficulty students
3. Check if student has completed Algebra 1 and accelerate math accordingly
4. Follow the standard AP social studies sequence for advanced students
5. Include computer science sequence when available
6. Follow ALL prerequisites exactly as specified
7. Prioritize accelerated math sequences for STEM majors` 
        },
        { 
          role: "user", 
          content: prompt 
        }
      ],
      model: "gpt-4-turbo-preview",
      response_format: { type: "json_object" },
      temperature: 0.5,
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