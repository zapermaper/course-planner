import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { hsSubjects } from './courseData';

const PlanResults = ({ formData, onBack }) => {
  // Helper function to format category name
  const formatCategoryName = (category) => {
    return category.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    ).join(' ');
  };

  // Function to categorize and display high school credits
  const renderHighSchoolCredits = () => {
    if (!formData.hsCredits || Object.entries(formData.hsCredits).filter(([_, taken]) => taken).length === 0) {
      return <p className="text-gray-500 italic">No high school credits selected</p>;
    }

    const categorizedCredits = Object.entries(formData.hsCredits)
      .filter(([_, taken]) => taken)
      .reduce((acc, [course]) => {
        // Find which category the course belongs to
        let foundCategory = 'Other';
        for (const [category, courses] of Object.entries(hsSubjects)) {
          if (courses.includes(course)) {
            foundCategory = category;
            break;
          }
        }
        
        if (!acc[foundCategory]) {
          acc[foundCategory] = [];
        }
        acc[foundCategory].push(course);
        return acc;
      }, {});

    return Object.entries(categorizedCredits).map(([category, courses]) => (
      <div key={category} className="mb-4">
        <h4 className="font-medium text-purple-700 mb-2">{formatCategoryName(category)}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-purple-50 p-2 rounded">
              {course}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-yellow-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-800"
        >
          <ArrowLeft size={20} />
          <span>Back to Course Planner</span>
        </button>

        <Card>
          <CardHeader className="bg-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Your Course Plan Results</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-900">Basic Information</h3>
              <div className="grid grid-cols-2 gap-4 bg-purple-50 p-4 rounded-lg">
                <div>
                  <p className="text-sm text-purple-600">Current Grade</p>
                  <p className="font-medium">{formData.grade}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">Target College</p>
                  <p className="font-medium">{formData.college}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">Intended Major</p>
                  <p className="font-medium">{formData.intendedMajor}</p>
                </div>
                <div>
                  <p className="text-sm text-purple-600">Course Load Preference</p>
                  <p className="font-medium">{formData.difficultyLevel}/10</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${formData.collegePriority ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>Prioritize College Credits</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded ${formData.allowSummerCourses ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span>Allow Summer Courses</span>
                </div>
              </div>
            </div>

            {/* High School Credits Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-900">Completed High School Credits</h3>
              {renderHighSchoolCredits()}
            </div>

            {/* AP Scores Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-900">AP Exam Scores</h3>
              {formData.apScores && formData.apScores.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {formData.apScores.map((score, index) => (
                    <div key={index} className="bg-blue-50 p-3 rounded-lg">
                      <p className="font-medium">{score.course}</p>
                      <p className="text-sm text-blue-600">Score: {score.score}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No AP scores entered</p>
              )}
            </div>

            {/* Dual Credit Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-900">Dual Credit Courses</h3>
              {formData.dualCredits && formData.dualCredits.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {formData.dualCredits.map((credit, index) => (
                    <div key={index} className="bg-yellow-50 p-3 rounded-lg">
                      <p className="font-medium">{credit.course}</p>
                      <div className="flex space-x-4 text-sm text-yellow-800">
                        <p>Grade: {credit.grade}</p>
                        <p>Semester: {credit.semester}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No dual credit courses entered</p>
              )}
            </div>

            {/* AI Recommendation Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-900">AI Course Recommendations</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-500 italic">AI recommendations will appear here...</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlanResults;