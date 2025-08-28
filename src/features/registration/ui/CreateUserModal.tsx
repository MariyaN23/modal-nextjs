import { ModalWindow } from '@/shared/components/ModalWindow';
import { RegistrationForm } from '@/features/registration';

export const CreateUserModal = () => {
  return (
    <ModalWindow
      buttonName={'Registration'}
      title={'Registration form'}
      body={<RegistrationForm />}
    />
  );
};
