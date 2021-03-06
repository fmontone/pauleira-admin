import React from 'react';
import PropTypes from 'prop-types';

import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { GalleriesAdmProvider } from './GalleriesAdmContext';
import { UsersAdmProvider } from './UsersAdmContext';
import { ConfirmProvider } from './ConfirmContext';

function AppProvider({ children }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <ConfirmProvider>
          <GalleriesAdmProvider>
            <UsersAdmProvider>{children}</UsersAdmProvider>
          </GalleriesAdmProvider>
        </ConfirmProvider>
      </ToastProvider>
    </AuthProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;
