import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface User {
  email: string;
}

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification code');
      }

      setCodeSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: verificationCode })
      });

      const data = await response.json();
      
      if (!response.ok) {
          throw new Error(data.error || 'Invalid verification code');
      }

      onLogin(data.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-yellow-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-purple-200 shadow-lg">
        <CardHeader className="bg-[#56357c] text-white rounded-t-lg">
          <CardTitle className="text-2xl text-center">Richardson High School</CardTitle>
          <p className="text-center text-purple-200">Course Planner Login</p>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={codeSent ? handleVerify : handleSendCode} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="bg-red-50 text-red-600 border-red-200">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-purple-900">RISD Email</label>
                <Input
                  type="email"
                  placeholder="student@g.risd.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={codeSent}
                  required
                />
              </div>

              {codeSent && (
                <div>
                  <label className="text-sm font-medium text-purple-900">Verification Code</label>
                  <Input
                    type="text"
                    placeholder="Enter 6-digit code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            <Button 
              type="submit"
              className="w-full bg-[#56357c] hover:bg-purple-800 text-white font-semibold h-11"
              disabled={loading}
            >
              {loading 
                ? 'Please wait...' 
                : codeSent 
                  ? 'Verify Code' 
                  : 'Send Verification Code'}
            </Button>

            {codeSent && (
              <button
                type="button"
                onClick={() => {
                  setCodeSent(false);
                  setVerificationCode('');
                  setError('');
                }}
                className="w-full text-purple-600 hover:text-purple-800 text-sm"
              >
                Use different email
              </button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;