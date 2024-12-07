import React from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { loginSchema } from '../../lib/validation';

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = React.useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    };

    try {
      await loginSchema.parseAsync(data);
      // TODO: Implement actual login logic
      navigate('/home');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors as Partial<LoginFormData>);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <Button
        type="submit"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
};