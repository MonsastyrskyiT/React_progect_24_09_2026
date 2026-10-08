import { useState } from 'react';

interface Profile {
  name: string;
  specialty: string;
  isOnline: boolean;
}

const styles = {
  container: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap' as const,
    padding: 12,
    maxWidth: 560,
    margin: '0 auto',
    fontFamily: 'system-ui, sans-serif',
    background: '#075985',
    border: '2px solid #082f49',
    borderRadius: 8,
  },
  column: {
    flex: '1 1 220px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 10,
  },
  label: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 4,
    fontSize: 13,
    fontWeight: 600,
    color: '#f0f9ff',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 13,
    fontWeight: 600,
    color: '#f0f9ff',
    cursor: 'pointer',
  },
  input: {
    padding: '8px 10px',
    fontSize: 14,
    border: '1px solid #5eead4',
    borderRadius: 6,
    fontWeight: 400,
    accentColor: '#0f766e',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    background: '#f0fdfa',
    border: '1px solid #99f6e4',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(15, 118, 110, 0.10)',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: '#0f766e',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 700,
    flexShrink: 0,
  },
  name: {
    margin: 0,
    fontSize: 16,
    color: '#134e4a',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  specialty: {
    margin: '3px 0 0',
    fontSize: 13,
    color: '#0f766e',
  },
};

export default function ProfileEditor() {
  const [profile, setProfile] = useState<Profile>({
    name: "Ваше Ім'я",
    specialty: 'React Developer',
    isOnline: true,
  });


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, name: e.target.value });
  };

  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, specialty: e.target.value });
  };

  const handleOnlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, isOnline: e.target.checked });
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div style={styles.form}>
          <label style={styles.label}>
            Ім'я
            <input
              type="text"
              style={styles.input}
              value={profile.name}
              onChange={handleNameChange}
            />
          </label>

          <label style={styles.label}>
            Спеціальність
            <input
              type="text"
              style={styles.input}
              value={profile.specialty}
              onChange={handleSpecialtyChange}
            />
          </label>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={profile.isOnline}
              onChange={handleOnlineChange}
            />
            Онлайн
          </label>
        </div>
      </div>

      <div style={styles.column}>
        <div style={styles.card}>
          <div style={styles.avatar}>
            {profile.name.trim().charAt(0).toUpperCase() || '?'}
          </div>
          <div>
            <h3 style={styles.name}>
              {profile.name}
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: profile.isOnline ? '#0f766e' : '#64748b',
                }}
              >
                {profile.isOnline ? 'Онлайн' : 'Не онлайн'}
              </span>
            </h3>
            <p style={styles.specialty}>{profile.specialty}</p>
          </div>
        </div>
      </div>
    </div>
  );
}