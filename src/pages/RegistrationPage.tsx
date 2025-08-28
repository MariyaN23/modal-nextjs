'use client';
import { CreateUserModal } from '@/features/registration';

const RegistrationPage = () => {
  return (
    <div className={'flex justify-center py-3'}>
      <CreateUserModal />
    </div>
  );
};

export default RegistrationPage;
