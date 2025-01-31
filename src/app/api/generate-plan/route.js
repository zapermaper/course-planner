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

Please create a semester-by-semester course plan until graduation that:
1. Meets high school graduation requirements
2. Maximizes college credit opportunities through AP and Dual Credit courses
3. Aligns with the student's intended major
4. Considers the student's preferred course load
5. Includes summer courses only if allowed
6. Provides specific course names from the available options

Format the response as a JSON object with the following structure:
{
  "recommendations": {
    "yearX": {
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