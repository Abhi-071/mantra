import React, { useState } from 'react';

// Define the InputProps interface with correct typing for 'as' and 'onChange'
interface InputProps {
  label: string;
  name: string;
  rows?: number;
  placeholder: string;
  as: 'input' | 'textarea'; 
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Changed to accept both input and textarea
}

const Input: React.FC<InputProps> = ({ label, name, as, rows, placeholder, type, value, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-lg font-semibold text-gray-800">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          name={name}
          rows={rows}
          className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type || 'text'}
          name={name}
          className="mt-2 p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export const SettingsPage: React.FC = () => {
  const [personalData, setPersonalData] = useState({
    username: '',
    bio: '',
    profilePicture: null as File | null,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Handle changes for both input and textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };

  const handlePasswordDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPersonalData({ ...personalData, profilePicture: file });
    }
  };

  const handlePasswordSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New password and confirmation password do not match.');
    } else {
      console.log('Password changed:', passwordData);
    }
  };

  const handleProfileSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Profile updated:', personalData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-xl bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Settings</h2>

        {/* Profile Settings Form */}
        <form onSubmit={handleProfileSubmit}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Update Profile</h3>
          <Input
            label="Username"
            name="username"
            as="input"
            placeholder="Enter your new username"
            value={personalData.username}
            onChange={handleInputChange}
          />
          <Input
            label="Bio"
            name="bio"
            as="textarea"
            rows={4}
            placeholder="Write a short bio"
            value={personalData.bio}
            onChange={handleInputChange}
          />
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-800">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            />
            {personalData.profilePicture && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(personalData.profilePicture)}
                  alt="Profile Preview"
                  className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
                />
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Save Profile Changes
            </button>
          </div>
        </form>

        {/* Password Change Form */}
        <form onSubmit={handlePasswordSubmit} className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h3>
          <Input
            label="Current Password"
            name="currentPassword"
            as="input"
            type="password"
            placeholder="Enter your current password"
            value={passwordData.currentPassword}
            onChange={handlePasswordDataChange}
          />
          <Input
            label="New Password"
            name="newPassword"
            as="input"
            type="password"
            placeholder="Enter your new password"
            value={passwordData.newPassword}
            onChange={handlePasswordDataChange}
          />
          <Input
            label="Confirm New Password"
            name="confirmPassword"
            as="input"
            type="password"
            placeholder="Confirm your new password"
            value={passwordData.confirmPassword}
            onChange={handlePasswordDataChange}
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Save Password Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
