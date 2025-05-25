import React from 'react';

const Settings = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <section>
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <p>Profile settings will be here.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Preferences</h2>
        <p>Preferences settings will be here.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Notifications</h2>
        <p>Notification toggle will be here.</p>
      </section>
    </div>
  );
};

export default Settings;
