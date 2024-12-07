import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { signupSchema } from '../../lib/validation';

type SignUpFormData = z.infer<typeof signupSchema>;

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<Partial<SignUpFormData>>({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      username: formData.get('username') as string,
      password: formData.get('password') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    };

    try {
      await signupSchema.parseAsync(data);
      // TODO: Implement actual signup logic
      navigate('/login');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors as Partial<SignUpFormData>);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        name="email"
        type="email"
        error={errors.email?.[0]}
        required
      />
      <Input
        label="Username"
        name="username"
        error={errors.username?.[0]}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        error={errors.password?.[0]}
        required
      />
      <Input
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        error={errors.confirmPassword?.[0]}
        required
      />
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Creating account...' : 'Sign Up'}
      </Button>
    </form>
  );
};