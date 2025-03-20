"use client";
import React, { useState } from 'react';
import PlanResults from './planResults';
import { hsSubjects, apCourses, dualCreditCourses } from "./courseData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import schoolData from './schoolData';
import LoginScreen from "@/app/comps/LoginScreen";

//front end, gotta ad the extra cred section and summary page so i can update course ratings at a specific school
const CoursePlanner = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    grade: '',
    college: '',
    intendedMajor: '',
    RepromptInfo: '',
    extraInfo: '',
    collegePriority: false,
    allowSummerCourses: false,
    difficultyLevel: 5,
    hsCredits: {},
    apScores: [],
    dualCredits: []
  });
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  if (!user) {
    return <LoginScreen onLogin={setUser} />;
  }
// i was here
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleAddAPScore = () => {
    setFormData(prev => ({
      ...prev,
      apScores: [...prev.apScores, { course: '', score: '' }]
    }));
  };

  const handleAddDualCredit = () => {
    setFormData(prev => ({
      ...prev,
      dualCredits: [...prev.dualCredits, { course: '', grade: '', semester: '' }]
    }));
  };

  const handleRemoveAPScore = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      apScores: prev.apScores.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleRemoveDualCredit = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      dualCredits: prev.dualCredits.filter((_, index) => index !== indexToRemove)
    }));
  };

  const updateAPScore = (index, field, value) => {
    const newScores = [...formData.apScores];
    newScores[index] = { ...newScores[index], [field]: value };
    setFormData(prev => ({ ...prev, apScores: newScores }));
  };

  const updateDualCredit = (index, field, value) => {
    const newCredits = [...formData.dualCredits];
    newCredits[index] = { ...newCredits[index], [field]: value };
    setFormData(prev => ({ ...prev, dualCredits: newCredits }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-yellow-50 p-4">
      {showResults ? (
        <PlanResults 
          formData={formData}
          onBack={() => setShowResults(false)}
          hsSubjects={hsSubjects}
        />
      ) : (
        <div className="max-w-4xl mx-auto">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader className="bg-[#56357c] text-white rounded-t-lg">
              <CardTitle className="text-2xl">Richardson High School Course Planner</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="basic" className="space-y-6">
                <TabsList className="grid grid-cols-3 bg-purple-100">
                  <TabsTrigger value="basic" className="data-[state=active]:bg-[#56357c] data-[state=active]:text-white">
                    Basic Info
                  </TabsTrigger>
                  <TabsTrigger value="hs-credits" className="data-[state=active]:bg-[#56357c] data-[state=active]:text-white">
                    High School Credits
                  </TabsTrigger>
                  <TabsTrigger value="college-credits" className="data-[state=active]:bg-[#56357c] data-[state=active]:text-white">
                    College Credits
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-purple-900">Current Grade</label>
                      <select 
                        className="w-full p-2 border border-purple-300 rounded"
                        value={formData.grade}
                        onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      >
                        <option value="">Select Grade</option>
                        {['9th', '10th', '11th', '12th'].map(grade => (
                          <option key={grade} value={grade}>{grade}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-purple-900">Target College</label>
                      <select
                        className="w-full p-2 border border-purple-300 rounded"
                        value={formData.college}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            college: e.target.value,
                            intendedMajor: ''
                          });
                        }}
                      >
                        <option value="">Select College</option>
                        {Object.entries(schoolData).map(([key, school]) => (
                          <option key={key} value={key}>{school.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-purple-900">Intended Major</label>
                    <select
                      className="w-full p-2 border border-purple-300 rounded"
                      value={formData.intendedMajor}
                      onChange={(e) => setFormData({...formData, intendedMajor: e.target.value})}
                      disabled={!formData.college}
                    >
                      <option value="">Select Major</option>
                      {formData.college && schoolData[formData.college].majors.map(major => (
                        <option key={major.id} value={major.id}>{major.name}</option>
                      ))}
                    </select>
                  </div>

                  {formData.college && formData.intendedMajor && (
                    <div className="bg-purple-50 p-4 rounded-lg space-y-4">
                      <h3 className="text-lg font-medium text-purple-900">Credit Transfer Information</h3>
                      <div className="space-y-2">
                        {schoolData[formData.college].majors.find(m => m.id === formData.intendedMajor) && (
                          <>
                            <div className="flex space-x-4">
                              <a 
                                href={schoolData[formData.college].majors.find(m => m.id === formData.intendedMajor).apCreditLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 underline"
                              >
                                View AP Credit Transfer Guide
                              </a>
                              <a 
                                href={schoolData[formData.college].majors.find(m => m.id === formData.intendedMajor).dualCreditLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 underline"
                              >
                                View Dual Credit Transfer Guide
                              </a>
                            </div>
                            <div className="mt-2">
                              <a 
                                href={schoolData[formData.college].majors.find(m => m.id === formData.intendedMajor).requirementsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 underline"
                              >
                                View Degree Requirements
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
<div className="space-y-2">
  <label className="text-sm font-medium text-purple-900">Additional Information</label>
  <textarea
    className="w-full p-2 border border-purple-300 rounded min-h-[100px]"
    placeholder="Please share any additional information that might help (ex: career goals, special interests, schedule constraints)"
    value={formData.extraInfo}
    onChange={(e) => setFormData({...formData, extraInfo: e.target.value})}
  />
</div>
                  <div className="bg-purple-50 p-4 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={formData.collegePriority}
                          onCheckedChange={(checked) => setFormData({...formData, collegePriority: checked})}
                        />
                        <label className="text-sm font-medium text-purple-900">Prioritize College Credits</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={formData.allowSummerCourses}
                          onCheckedChange={(checked) => setFormData({...formData, allowSummerCourses: checked})}
                        />
                        <label className="text-sm font-medium text-purple-900">Allow Summer Courses</label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-purple-900">Course Load Preference</label>
                      <Slider
                        value={[formData.difficultyLevel]}
                        min={1}
                        max={10}
                        step={1}
                        onValueChange={(value) => setFormData({...formData, difficultyLevel: value[0]})}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-purple-600">
                        <span>Easier</span>
                        <span>Balanced</span>
                        <span>Challenging</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="hs-credits" className="space-y-6">
                  {Object.entries(hsSubjects).map(([category, subjects]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="text-lg font-medium text-purple-900 capitalize">{category.replace('_', ' ')}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {subjects.map(subject => (
                          <div key={subject} className="flex items-center space-x-2 bg-white p-2 rounded border border-purple-200">
                            <input
                              type="checkbox"
                              checked={formData.hsCredits[subject] || false}
                              onChange={(e) => setFormData(prev => ({
                                ...prev,
                                hsCredits: {
                                  ...prev.hsCredits,
                                  [subject]: e.target.checked
                                }
                              }))}
                              className="rounded border-purple-300 text-purple-600"
                            />
                            <label className="text-sm text-purple-900">{subject}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="college-credits" className="space-y-6">
                  <div className="bg-purple-50 p-4 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-purple-900">AP Exam Scores</h3>
                      <Button 
                        onClick={handleAddAPScore}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Add AP Score
                      </Button>
                    </div>
                    {formData.apScores.map((score, index) => (
                      <div key={index} className="flex gap-4">
                        <select
                          value={score.course}
                          onChange={(e) => updateAPScore(index, 'course', e.target.value)}
                          className="flex-1 p-2 border border-purple-300 rounded"
                        >
                          <option value="">Select AP Course</option>
                          {apCourses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                          ))}
                        </select>
                        <select
                          value={score.score}
                          onChange={(e) => updateAPScore(index, 'score', e.target.value)}
                          className="flex-1 p-2 border border-purple-300 rounded"
                        >
                          <option value="">Select Score</option>
                          {[1, 2, 3, 4, 5].map(score => (
                            <option key={score} value={score}>{score}</option>
                          ))}
                        </select>
                        <Button
                          onClick={() => handleRemoveAPScore(index)}
                          variant="ghost"
                          className="px-3 text-red-600 hover:text-red-800 hover:bg-red-100 font-bold"
                        >
                          ×
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-purple-900">Dual Credit Courses</h3>
                      <Button 
                        onClick={handleAddDualCredit}
                        className="bg-yellow-500 hover:bg-yellow-600 text-purple-900"
                      >
                        Add Dual Credit
                      </Button>
                    </div>
                    {formData.dualCredits.map((credit, index) => (
                      <div key={index} className="flex gap-4">
                        <select
                          value={credit.course}
                          onChange={(e) => updateDualCredit(index, 'course', e.target.value)}
                          className="flex-1 p-2 border border-purple-300 rounded"
                        >
                          <option value="">Select Course</option>
                          {dualCreditCourses.map(course => (
                            <option key={course.id} value={course.id}>{course.name}</option>
                          ))}
                        </select>
                        <select
  value={credit.grade}
  onChange={(e) => updateDualCredit(index, 'grade', e.target.value)}
  className="p-2 border border-purple-300 rounded w-24"
>
  <option value="">Grade</option>
  {['A', 'B', 'C', 'D', 'F'].map(grade => (
    <option key={grade} value={grade}>{grade}</option>
  ))}
</select>
<select
  value={credit.semester}
  onChange={(e) => updateDualCredit(index, 'semester', e.target.value)}
  className="p-2 border border-purple-300 rounded"
>
  <option value="">Semester</option>
  <option value="fall">Fall</option>
  <option value="spring">Spring</option>
  <option value="summer">Summer</option>
</select>
<Button
  onClick={() => handleRemoveDualCredit(index)}
  variant="ghost"
  className="px-3 text-red-600 hover:text-red-800 hover:bg-red-100 font-bold"
>
  ×
</Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <Button 
              onClick={(e) => handleSubmit(e)}
              className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-purple-900 font-semibold h-12 text-lg"
            >
              {loading ? 'Generating Your Personal Plan...' : 'Generate Course Plan'}
            </Button>

            {}
          </CardContent>
        </Card>
      </div>)}
    </div>
  );
};

export default CoursePlanner;