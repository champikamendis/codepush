import Navigator from './navigation';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from './shared/localization/i18n.ts';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store.ts';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <Navigator />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
